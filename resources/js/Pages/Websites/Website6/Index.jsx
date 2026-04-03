import { Head } from '@inertiajs/react';
import Website6App from './Website6App';
import './website6.css';

const PAGE_META = {
    home: {
        title: 'Home',
        description:
            'DTC Bharat provides reliable corporate mobility solutions, including employee transportation, shuttle services, spot rental, and outstation travel with a strong focus on safety, punctuality, and professional service standards.',
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
    blogs: {
        title: 'Blogs',
        description:
            'Read mobility insights from DTC Bharat on corporate travel, fleet operations, safety standards, and transport technology.',
        path: '/blogs',
    },
    contact: {
        title: 'Contact',
        description:
            'Get in touch with DTC Bharat for customer bookings and corporate transport inquiries across Gurugram and beyond.',
        path: '/contact',
    },
};

export default function Website6Index({ activePage = 'home', pageTitle = null, blogSlug = null, blogMeta = null }) {
    const siteUrl = 'https://dtcbharat.com';
    const resolvedMeta = blogMeta ?? PAGE_META[activePage] ?? PAGE_META.home;
    const resolvedTitle = pageTitle ?? resolvedMeta.title;
    const fullTitle = activePage === 'home'
        ? 'DTC Bharat - A unit of Delphinium Travelcorp PVT. LTD.'
        : `DTC Bharat | ${resolvedTitle}`;
    const canonicalUrl = `${siteUrl}${resolvedMeta.path === '/' ? '' : resolvedMeta.path}`;
    const imageUrl = resolvedMeta.image?.startsWith('http')
        ? resolvedMeta.image
        : `${siteUrl}${resolvedMeta.image ?? '/images/logo/full-logo-no-bg.png'}`;
    const ogType = resolvedMeta.type ?? 'website';

    return (
        <>
            <Head title={fullTitle}>
                <meta name="description" content={resolvedMeta.description} />
                <meta name="robots" content="index, follow, max-image-preview:large" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:type" content={ogType} />
                <meta property="og:site_name" content="DTC Bharat" />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={resolvedMeta.description} />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:alt" content={resolvedTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={resolvedMeta.description} />
                <meta name="twitter:image" content={imageUrl} />
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <Website6App activePage={activePage} blogSlug={blogSlug} />
        </>
    );
}

