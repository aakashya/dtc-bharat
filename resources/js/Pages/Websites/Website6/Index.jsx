import { Head } from '@inertiajs/react';
import Website6App from './Website6App';
import './website6.css';

const PAGE_TITLES = {
    home: 'Home',
    profile: 'Profile',
    services: 'Services',
    team: 'Team',
    tours: 'Tours',
    contact: 'Contact',
};

export default function Website6Index({ activePage = 'home', pageTitle = null }) {
    const resolvedTitle = pageTitle ?? PAGE_TITLES[activePage] ?? 'Home';

    return (
        <>
            <Head title={`DTC Bharat | ${resolvedTitle}`} />
            <Website6App activePage={activePage} />
        </>
    );
}

