<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        @php
            $siteUrl = 'https://dtcbharat.com';
            $seoMap = [
                'home' => [
                    'title' => 'Home',
                    'description' => 'DTC Bharat provides reliable corporate mobility solutions including employee transport, shuttle services, and outstation travel.',
                    'path' => '/',
                ],
                'profile' => [
                    'title' => 'Profile',
                    'description' => 'Learn about DTC Bharat, our mission, fleet strength, and commitment to safe, timely, and professional transport services.',
                    'path' => '/profile',
                ],
                'services' => [
                    'title' => 'Services',
                    'description' => 'Explore corporate transport services from DTC Bharat including employee transportation, shuttle operations, and spot rentals.',
                    'path' => '/services',
                ],
                'team' => [
                    'title' => 'Team',
                    'description' => 'Meet the leadership team behind DTC Bharat and the professionals driving operational excellence in corporate mobility.',
                    'path' => '/team',
                ],
                'tours' => [
                    'title' => 'Tours',
                    'description' => 'Discover curated tour packages by DTC Bharat with transparent pricing, planned itineraries, and comfortable travel options.',
                    'path' => '/tours',
                ],
                'contact' => [
                    'title' => 'Contact',
                    'description' => 'Get in touch with DTC Bharat for customer bookings and corporate transport inquiries across Gurugram and beyond.',
                    'path' => '/contact',
                ],
            ];
            $component = data_get($page ?? [], 'component');
            $isNotFound = $component === 'Errors/NotFound';
            $activePage = data_get($page ?? [], 'props.activePage', 'home');
            $pageTitle = data_get($page ?? [], 'props.pageTitle');
            $resolvedSeo = $seoMap[$activePage] ?? $seoMap['home'];
            $resolvedTitle = $isNotFound ? '404 | Page Not Found' : ($pageTitle ?: $resolvedSeo['title']);
            $fullTitle = $isNotFound ? $resolvedTitle : "DTC Bharat | {$resolvedTitle}";
            $currentPath = request()->getPathInfo();
            $canonicalPath = $isNotFound ? $currentPath : $resolvedSeo['path'];
            $canonicalUrl = $siteUrl.($canonicalPath === '/' ? '' : $canonicalPath);
            $description = $isNotFound
                ? 'The page you requested could not be found.'
                : $resolvedSeo['description'];
            $robots = $isNotFound
                ? 'noindex, nofollow'
                : 'index, follow, max-image-preview:large';
            $defaultImage = asset('images/logo/full-logo-no-bg.png');
            $organizationSchema = json_encode([
                '@context' => 'https://schema.org',
                '@type' => 'Organization',
                'name' => 'DTC Bharat',
                'url' => $siteUrl,
                'logo' => "{$siteUrl}/images/logo/full-logo-no-bg.png",
                'email' => 'info@dtcbharat.com',
                'telephone' => '+91-9899925362',
            ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        @endphp

        <meta name="theme-color" content="#0A192F">
        <meta name="description" content="{{ $description }}">
        <meta name="robots" content="{{ $robots }}">
        <meta property="og:locale" content="en_IN">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="DTC Bharat">
        <meta property="og:title" content="{{ $fullTitle }}">
        <meta property="og:description" content="{{ $description }}">
        <meta property="og:url" content="{{ $canonicalUrl }}">
        <meta property="og:image" content="{{ $defaultImage }}">
        <meta property="og:image:alt" content="DTC Bharat logo">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ $fullTitle }}">
        <meta name="twitter:description" content="{{ $description }}">
        <meta name="twitter:image" content="{{ $defaultImage }}">
        <link rel="canonical" href="{{ $canonicalUrl }}">
        <script type="application/ld+json">
            {!! $organizationSchema !!}
        </script>

        <title inertia>{{ $fullTitle }}</title>

        <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
        <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('images/logo/favicon/android-chrome-192x192.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/logo/favicon/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/logo/favicon/favicon-16x16.png') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/logo/favicon/apple-touch-icon.png') }}">
        <link rel="manifest" href="{{ asset('images/logo/favicon/site.webmanifest') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
