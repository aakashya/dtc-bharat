import { Head } from '@inertiajs/react';
import Website6App from './Website6App';
import './website6.css';

const FALLBACK_SITE_URL = 'https://dtcbharat.com';

const PAGE_META = {
    home: {
        title: 'Home',
        description:
            'DTC Bharat provides reliable corporate mobility solutions including employee transport, shuttle services, and outstation travel.',
        path: '/',
    },
    profile: {
        title: 'Profile',
        description:
            'Learn about DTC Bharat, our mission, fleet strength, and commitment to safe, timely, and professional transport services.',
        path: '/profile',
    },
    services: {
        title: 'Services',
        description:
            'Explore corporate transport services from DTC Bharat including employee transportation, shuttle operations, and spot rentals.',
        path: '/services',
    },
    team: {
        title: 'Team',
        description:
            'Meet the leadership team behind DTC Bharat and the professionals driving operational excellence in corporate mobility.',
        path: '/team',
    },
    tours: {
        title: 'Tours',
        description:
            'Discover curated tour packages by DTC Bharat with transparent pricing, planned itineraries, and comfortable travel options.',
        path: '/tours',
    },
    contact: {
        title: 'Contact',
        description:
            'Get in touch with DTC Bharat for customer bookings and corporate transport inquiries across Gurugram and beyond.',
        path: '/contact',
    },
};

export default function Website6Index({ activePage = 'home', pageTitle = null }) {
    const resolvedMeta = PAGE_META[activePage] ?? PAGE_META.home;
    const resolvedTitle = pageTitle ?? resolvedMeta.title;
    const fullTitle = `DTC Bharat | ${resolvedTitle}`;
    const siteUrl = (
        (typeof window !== 'undefined' && window.location?.origin) ||
        import.meta.env.VITE_APP_URL ||
        FALLBACK_SITE_URL
    ).replace(/\/+$/, '');
    const canonicalUrl = `${siteUrl}${resolvedMeta.path === '/' ? '' : resolvedMeta.path}`;
    const socialImageUrl = `${siteUrl}/images/logo/full-logo-no-bg.png`;
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'DTC Bharat',
        url: siteUrl,
        logo: socialImageUrl,
        email: 'info@dtcbharat.com',
        telephone: '+91-9899925362',
    };

    return (
        <>
            <Head title={fullTitle}>
                <meta name="description" content={resolvedMeta.description} head-key="description" />
                <meta name="robots" content="index, follow, max-image-preview:large" head-key="robots" />
                <meta property="og:type" content="website" head-key="og:type" />
                <meta property="og:site_name" content="DTC Bharat" head-key="og:site_name" />
                <meta property="og:title" content={fullTitle} head-key="og:title" />
                <meta property="og:description" content={resolvedMeta.description} head-key="og:description" />
                <meta property="og:url" content={canonicalUrl} head-key="og:url" />
                <meta property="og:image" content={socialImageUrl} head-key="og:image" />
                <meta property="og:image:alt" content="DTC Bharat logo" head-key="og:image:alt" />
                <meta name="twitter:card" content="summary_large_image" head-key="twitter:card" />
                <meta name="twitter:title" content={fullTitle} head-key="twitter:title" />
                <meta name="twitter:description" content={resolvedMeta.description} head-key="twitter:description" />
                <meta name="twitter:image" content={socialImageUrl} head-key="twitter:image" />
                <link rel="canonical" href={canonicalUrl} head-key="canonical" />
                <script type="application/ld+json" head-key="organization-schema">
                    {JSON.stringify(organizationSchema)}
                </script>
            </Head>
            <Website6App activePage={activePage} />
        </>
    );
}

