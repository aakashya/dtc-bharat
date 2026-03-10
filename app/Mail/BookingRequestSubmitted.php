<?php

namespace App\Mail;

use App\Models\BookingRequest;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BookingRequestSubmitted extends Mailable
{
    use Queueable;
    use SerializesModels;

    public function __construct(public BookingRequest $bookingRequest)
    {
    }

    public function envelope(): Envelope
    {
        $subjectType = $this->bookingRequest->form_type === 'client'
            ? 'Client'
            : 'Customer';

        $replyTo = [];
        if (filled($this->bookingRequest->booked_by_email)) {
            $replyTo[] = new Address(
                $this->bookingRequest->booked_by_email,
                $this->bookingRequest->booked_by_name ?: null
            );
        }

        return new Envelope(
            subject: "{$subjectType} Booking Request - {$this->bookingRequest->booked_by_name}",
            replyTo: $replyTo,
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.booking-request-submitted',
        );
    }
}
