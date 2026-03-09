@php
    $booking = $bookingRequest;
    $logoUrl = rtrim((string) config('app.url'), '/') . '/images/logo/full-logo-no-bg-icon.PNG';
    $logoPath = public_path('images/logo/full-logo-no-bg-icon.PNG');
    $logoSrc = $logoUrl;

    if (isset($message) && is_object($message) && method_exists($message, 'embed') && is_file($logoPath)) {
        $logoSrc = $message->embed($logoPath);
    }
    $reportingTimeFormatted = 'N/A';

    if (filled($booking->reporting_time)) {
        try {
            // Handles both HH:MM and HH:MM:SS safely.
            $reportingTimeFormatted = \Illuminate\Support\Carbon::parse((string) $booking->reporting_time)->format('h:i A');
        } catch (\Throwable $exception) {
            $reportingTimeFormatted = (string) $booking->reporting_time;
        }
    }

    $isClientForm = (string) $booking->form_type === 'client';
    $sourcePageText = ucfirst((string) ($booking->source_page ?? 'n/a'));
    $submittedAtText = $booking->created_at
        ? $booking->created_at->format('d M Y, h:i A')
        : now()->format('d M Y, h:i A');

    $sections = [
        [
            'title' => $isClientForm ? 'Booked By' : 'Customer Information',
            'rows' => [
                'Name' => $booking->booked_by_name ?: 'N/A',
                'Phone' => $booking->booked_by_phone ?: 'N/A',
                'Email' => $booking->booked_by_email ?: 'N/A',
            ],
        ],
    ];

    if ($isClientForm) {
        $sections[] = [
            'title' => 'Booked For',
            'rows' => [
                'Client Name' => $booking->client_name ?: 'N/A',
                'Client Phone' => $booking->client_phone ?: 'N/A',
                'Client Email' => $booking->client_email ?: 'N/A',
            ],
        ];
    }

    $sections[] = [
        'title' => 'Scheduling',
        'rows' => [
            'Reporting Date' => $booking->reporting_date ? \Illuminate\Support\Carbon::parse($booking->reporting_date)->format('d M Y') : 'N/A',
            'Reporting Time' => $reportingTimeFormatted,
            'Reporting Place' => $booking->reporting_place ?: 'N/A',
            'Cab Type' => $booking->cab_type ?: 'N/A',
        ],
    ];

    if (filled($booking->special_instructions)) {
        $sections[] = [
            'title' => 'Special Instructions',
            'rows' => [
                'Notes' => $booking->special_instructions,
            ],
        ];
    }

    $copyLines = [
        $isClientForm ? 'Booking Details for Client' : 'Booking Details for Customer',
        '',
    ];

    foreach ($sections as $section) {
        $copyLines[] = strtoupper((string) $section['title']);

        foreach ($section['rows'] as $label => $value) {
            $copyLines[] = $label . ': ' . trim(preg_replace('/\s+/', ' ', strip_tags((string) $value)));
        }

        $copyLines[] = '';
    }

    $copyText = implode("\n", $copyLines);
@endphp
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Request</title>
</head>
<body style="margin:0; padding:0; background:#ffffff; font-family:Arial, sans-serif; color:#0f172a;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#ffffff; padding:24px 0;">
    <tr>
        <td align="center">
            <table role="presentation" width="680" cellspacing="0" cellpadding="0" style="max-width:680px; width:100%; background:#ffffff; border:1px solid #dbe2ea; border-radius:14px; overflow:hidden;">
                <tr>
                    <td style="background:#241d1a; background-image:radial-gradient(circle at 50% 25%, rgba(255,255,255,0.18), rgba(255,255,255,0) 55%),linear-gradient(135deg,#241d1a 0%,#4b2f26 55%,#6e4030 100%); padding:20px 24px;">
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                                <td style="vertical-align:middle;">
                                    <table role="presentation" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td style="vertical-align:middle; padding-right:10px;">
                                                <img src="{{ $logoSrc }}" alt="DTC Bharat" style="height:56px; width:auto; display:block;">
                                            </td>
                                            <td style="vertical-align:middle;">
                                                <div style="font-size:24px; line-height:1; font-weight:700; color:#ffffff;">
                                                    DTC <span style="color:#ff5757;">BHARAT</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                                <td align="right" style="vertical-align:middle;">
                                    <div style="font-size:12px; color:#cbd5e1; text-transform:uppercase; letter-spacing:0.08em;">New Booking Request</div>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:24px;">
                        <h2 style="margin:0 0 16px; text-align:center; font-size:20px; line-height:1.3; color:#0f172a;">
                            {{ $isClientForm ? 'Booking Details for Client' : 'Booking Details for Customer' }}
                        </h2>
                        @foreach ($sections as $section)
                            <div style="margin-bottom:14px;">
                                <div style="margin:0 0 8px; font-size:13px; font-weight:700; color:#0f172a; text-transform:uppercase; letter-spacing:0.06em;">
                                    {{ $section['title'] }}
                                </div>
                                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate; border-spacing:0; border:1px solid #111827; background:#ffffff; border-radius:12px; padding:6px;">
                                    <tr>
                                        <td>
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; border:1px solid #111827; border-radius:10px; overflow:hidden; background:#ffffff;">
                                                @foreach ($section['rows'] as $label => $value)
                                                    <tr>
                                                        <td style="width:34%; padding:12px 14px; border-bottom:1px solid #e5e7eb; background:#eef4ff; font-size:12px; font-weight:700; color:#334155; text-transform:uppercase; letter-spacing:0.04em;">
                                                            {{ $label }}
                                                        </td>
                                                        <td style="padding:12px 14px; border-bottom:1px solid #e5e7eb; font-size:14px; color:#0f172a; line-height:1.4;">
                                                            {{ $value }}
                                                        </td>
                                                    </tr>
                                                @endforeach
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        @endforeach
                        <div style="margin:16px 0 0; border:1px solid #111827; border-radius:12px; background:#ffffff; padding:12px 14px;">
                            <div style="margin:0 0 8px; font-size:12px; font-weight:700; color:#0f172a; text-transform:uppercase; letter-spacing:0.05em;">
                                Copy-Friendly Text
                            </div>
                            <pre style="margin:0; white-space:pre-wrap; word-break:break-word; font-family:'Courier New',monospace; font-size:12px; line-height:1.5; color:#0f172a;">{{ $copyText }}</pre>
                        </div>
                        <p style="margin:16px 0 0; font-size:12px; color:#64748b;">
                            This email was generated automatically from the DTC Bharat website booking form.
                        </p>
                        <p style="margin:6px 0 0; font-size:12px; color:#475569;">
                            Source Page: {{ $sourcePageText }} | Submitted At: {{ $submittedAtText }}
                        </p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>
</html>
