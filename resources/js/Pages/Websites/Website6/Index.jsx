import { Head } from '@inertiajs/react';
import Website6App from './Website6App';
import './website6.css';

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

    return (
        <>
            <Head title={fullTitle}>
                <meta name="description" content={resolvedMeta.description} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={resolvedMeta.description} />
                <meta property="og:url" content={resolvedMeta.path} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={fullTitle} />
                <meta name="twitter:description" content={resolvedMeta.description} />
                <link rel="canonical" href={resolvedMeta.path} />
            </Head>
            <Website6App activePage={activePage} />
        </>
    );
}

