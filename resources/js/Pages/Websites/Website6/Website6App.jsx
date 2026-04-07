import { Link, router, useForm } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense, useEffect, useState } from 'react';
import {
    Award,
    ArrowRight,
    Briefcase,
    Calendar,
    Car,
    CheckCircle2,
    Clock,
    Facebook,
    Globe,
    Heart,
    Info,
    Instagram,
    Linkedin,
    Lock,
    Mail,
    Map,
    MapPin,
    Menu,
    MessageSquare,
    Navigation,
    Phone,
    RefreshCcw,
    Settings,
    Shield,
    ShieldCheck,
    Smartphone,
    Star,
    TrendingDown,
    Twitter,
    Users,
    X,
    Zap,
} from 'lucide-react';

const PAGE_URLS = {
    home: '/',
    profile: '/profile',
    services: '/services',
    team: '/team',
    tours: '/tours',
    blogs: '/blogs',
    contact: '/contact',
};

const CUSTOMER_BOOKING_DEFAULTS = {
    form_type: 'customer',
    source_page: 'home',
    booked_by_name: '',
    booked_by_phone: '',
    booked_by_email: '',
    reporting_date: '',
    reporting_place: '',
    reporting_time: '',
    cab_type: '',
    special_instructions: '',
};

const CLIENT_BOOKING_DEFAULTS = {
    form_type: 'client',
    source_page: 'home',
    booked_by_name: '',
    booked_by_phone: '',
    booked_by_email: '',
    client_name: '',
    client_phone: '',
    client_email: '',
    reporting_date: '',
    reporting_place: '',
    reporting_time: '',
    cab_type: '',
    special_instructions: '',
};

function Navbar({ activePage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isHomePage = activePage === 'home';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => document.body.classList.remove('overflow-hidden');
    }, [isMobileMenuOpen]);

    const navItems = [
        { label: 'Home', value: 'home' },
        { label: 'Profile', value: 'profile' },
        { label: 'Services', value: 'services' },
        { label: 'Team', value: 'team' },
        { label: 'Tours', value: 'tours' },
        { label: 'Contact', value: 'contact' },
    ];

    return (
        <nav
            className={`fixed left-0 right-0 top-0 ${isMobileMenuOpen ? 'z-[120]' : 'z-50'} transition-all duration-300 ${
                isMobileMenuOpen
                    ? 'bg-transparent py-3 !transition-none'
                    : isScrolled
                    ? 'bg-white/80 py-3 shadow-md backdrop-blur-lg'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                <Link
                    href={PAGE_URLS.home}
                    prefetch
                    className="flex cursor-pointer items-center gap-3"
                >
                    <img
                        src="/images/logo/full-logo-no-bg-icon.PNG"
                        alt="Delphinium Travelcorp"
                        className="h-14 w-auto rounded-xl object-cover md:h-16"
                        loading="eager"
                    />
                    <div>
                        <h1
                            className={`font-display text-3xl font-bold leading-none md:text-4xl ${
                                isHomePage && !isScrolled ? 'text-white' : 'text-w6-corporate-blue'
                            }`}
                        >
                            DTC <span className="text-w6-brand">BHARAT</span>
                        </h1>
                    </div>
                </Link>

                <div className="hidden items-center gap-8 min-[1001px]:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.value}
                            href={PAGE_URLS[item.value]}
                            prefetch
                            className={`text-sm font-semibold transition-colors hover:text-w6-brand ${
                                activePage === item.value
                                    ? 'text-w6-brand'
                                    : isHomePage && !isScrolled
                                        ? 'text-white/80 hover:text-white'
                                        : 'text-w6-corporate-blue/70'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href={PAGE_URLS.contact}
                        prefetch
                        className="flex items-center gap-2 rounded-full bg-w6-brand px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-w6-brand-dark w6-electric-glow"
                    >
                        Book a Cab Now
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    className={`${isHomePage && !isScrolled ? 'text-white' : 'text-w6-corporate-blue'} min-[1001px]:hidden rounded-xl border border-white/20 bg-white/10 p-2 backdrop-blur-md`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={false}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12 }}
                        className="fixed inset-0 z-[80] min-[1001px]:hidden"
                    >
                        <motion.div
                            initial={false}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.12 }}
                            className="absolute inset-0 bg-slate-950/65 backdrop-blur-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={false}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 24, opacity: 0.9 }}
                            transition={{ duration: 0.25 }}
                            className="w6-hero-gradient absolute inset-0 flex flex-col"
                        >
                            <div className="flex items-center justify-between px-6 pb-4 pt-6">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/images/logo/full-logo-no-bg-icon.PNG"
                                        alt="Delphinium Travelcorp"
                                        className="h-12 w-auto rounded-lg object-cover"
                                        loading="eager"
                                    />
                                    <div className="font-display text-2xl font-bold text-white">
                                        DTC <span className="text-w6-brand">BHARAT</span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="rounded-xl border border-white/25 bg-white/10 p-2 text-white backdrop-blur-md"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-1 flex-col justify-center px-6">
                                <div className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.value}
                                            initial={{ opacity: 0, x: 12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.05 * index }}
                                        >
                                            <Link
                                                href={PAGE_URLS[item.value]}
                                                prefetch
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block rounded-2xl px-4 py-3 text-3xl font-bold transition-all ${
                                                    activePage === item.value
                                                        ? 'bg-white/15 text-w6-brand'
                                                        : 'text-white hover:bg-white/10'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 border-t border-white/15 px-6 pb-8 pt-6">
                                <div className="text-xs uppercase tracking-widest text-white/70">
                                    Need assistance now?
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/85">
                                    <Phone size={15} className="text-w6-brand" />
                                    +91 9899925362
                                </div>
                                <Link
                                    href={PAGE_URLS.contact}
                                    prefetch
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w6-electric-glow flex w-full items-center justify-center gap-2 rounded-2xl bg-w6-brand py-4 text-base font-bold text-white"
                                >
                                    Book a Cab Now <ArrowRight size={18} />
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="relative isolate overflow-hidden pb-4 pt-20 text-white">
            <div className="w6-hero-gradient pointer-events-none absolute inset-0 z-0" />
            <div className="pointer-events-none absolute -right-20 top-10 z-0 h-80 w-80 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-8 z-0 h-80 w-80 rounded-full bg-rose-300/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.14),transparent_55%)]" />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-12">
                <div className="col-span-1 text-center md:col-span-4 md:text-left">
                    <div className="mb-6 flex flex-col items-center gap-3 md:items-start">
                        <img
                            src="/images/logo/full-logo-no-bg-icon.PNG"
                            alt="Delphinium Travelcorp"
                            className="h-32 w-auto rounded-xl object-cover"
                            loading="eager"
                        />
                        <div>
                            <h2 className="font-display text-4xl font-bold leading-none">
                                DTC <span className="text-w6-brand">BHARAT</span>
                            </h2>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">
                                A unit of Delphinium Travelcorp PVT. LTD.
                            </p>
                        </div>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400">
                        Corporate travel managed with safety and excellence since 2006.
                        Precision-driven mobility solutions for the modern enterprise.
                    </p>
                </div>

                <div className="text-center md:col-span-2 md:text-left">
                    <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li>
                            <Link href={PAGE_URLS.home} prefetch className="transition-colors hover:text-w6-brand">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={PAGE_URLS.profile} prefetch className="transition-colors hover:text-w6-brand">
                                Our Profile
                            </Link>
                        </li>
                        <li>
                            <Link href={PAGE_URLS.services} prefetch className="transition-colors hover:text-w6-brand">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href={PAGE_URLS.team} prefetch className="transition-colors hover:text-w6-brand">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link href={PAGE_URLS.tours} prefetch className="transition-colors hover:text-w6-brand">
                                Tour Packages
                            </Link>
                        </li>
                        <li>
                            <Link href={PAGE_URLS.blogs} prefetch className="transition-colors hover:text-w6-brand">
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden text-center md:col-span-3 md:block md:text-left">
                    <h3 className="mb-6 text-lg font-bold">
                        <Link href={PAGE_URLS.services} prefetch className="transition-colors hover:text-w6-brand">
                            Our Services
                        </Link>
                    </h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li>
                            <a href={`${PAGE_URLS.services}#employee-transportation`} className="transition-colors hover:text-w6-brand">
                                Employee Transportation
                            </a>
                        </li>
                        <li>
                            <a href={`${PAGE_URLS.services}#shuttle-services`} className="transition-colors hover:text-w6-brand">
                                Shuttle Services
                            </a>
                        </li>
                        <li>
                            <a href={`${PAGE_URLS.services}#spot-rental`} className="transition-colors hover:text-w6-brand">
                                Spot Rental
                            </a>
                        </li>
                        <li>
                            <a href={`${PAGE_URLS.services}#outstation-trip-packages`} className="transition-colors hover:text-w6-brand">
                                Outstation Travel
                            </a>
                        </li>
                        <li>
                            <a href={`${PAGE_URLS.services}#vip-airport-transfers`} className="transition-colors hover:text-w6-brand">
                                Airport Transfers
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center md:col-span-3 md:text-left">
                    <h3 className="mb-6 text-lg font-bold">Contact Us</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="mx-auto flex max-w-sm items-start justify-center gap-3 text-left md:mx-0 md:max-w-none md:justify-start">
                            <MapPin size={18} className="shrink-0 text-w6-brand" />
                            <span>
                                Unit 705, Tower-C
                                <br />
                                Business Zone, Sector 50
                                <br />
                                Gurugram, Haryana 122018
                            </span>
                        </li>
                        <li className="flex items-center justify-center gap-3 md:justify-start">
                            <Phone size={18} className="shrink-0 text-w6-brand" />
                            <span>+91 9899925362</span>
                        </li>
                        <li className="flex items-center justify-center gap-3 md:justify-start">
                            <Mail size={18} className="shrink-0 text-w6-brand" />
                            <span>info@dtcbharat.com</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <h4 className="mb-4 text-sm font-semibold text-slate-300">
                            Follow Us Online
                        </h4>
                        <div className="flex justify-center gap-4 md:justify-start">
                            <Facebook
                                size={20}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand"
                            />
                            <Twitter
                                size={20}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand"
                            />
                            <Linkedin
                                size={20}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand"
                            />
                            <Instagram
                                size={20}
                                className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-2 max-w-7xl border-t border-white/10 px-6 pt-5 text-center">
                <p className="text-xs text-slate-400">
                    (c) 2026 Delphinium Travelcorp. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

function Hero({ setActivePage }) {
    return (
        <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-24 md:pt-28">
            <div className="w6-hero-gradient pointer-events-none absolute inset-0 z-0" />
            <div className="pointer-events-none absolute -right-20 top-24 z-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-16 z-0 h-[26rem] w-[26rem] rounded-full bg-rose-300/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.18),transparent_55%)]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-4 md:gap-12 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md md:mb-6 md:px-4 md:py-2 md:text-xs md:tracking-widest">
                        <Zap size={14} /> Fleet Command Since 2006
                    </div>
                    <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:mb-6 md:text-6xl xl:text-7xl">
                        <span className="whitespace-nowrap">Driving Excellence.</span>
                        <br />
                        <span className="whitespace-nowrap text-orange-200">Delivering Trust.</span>
                    </h1>
                    <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-orange-50/90 md:mb-10 md:text-xl lg:mx-0">
                        On Time Round the Clock. Corporate cabs at their best.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <button
                            type="button"
                            onClick={() => setActivePage('contact')}
                            className="group flex items-center gap-2 rounded-2xl bg-w6-brand px-8 py-4 font-bold text-white transition-all hover:bg-w6-brand-dark w6-electric-glow"
                        >
                            Book a Cab Now{' '}
                            <ArrowRight
                                size={20}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                        <button
                            type="button"
                            onClick={() => setActivePage('services')}
                            className="rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                        >
                            Explore Services
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <div className="relative z-10 mx-auto w-full max-w-[640px] overflow-hidden rounded-3xl bg-transparent">
                        <img
                            src="/images/hero/innova-crysta-hero.webp"
                            alt="Toyota Innova Crysta"
                            className="mx-auto h-auto w-full object-contain [filter:drop-shadow(0_20px_35px_rgba(0,0,0,0.45))]"
                            loading="eager"
                            decoding="async"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute -right-10 -top-10 hidden h-40 w-40 animate-pulse rounded-full border border-w6-brand/30 lg:block" />
                    <div className="absolute -bottom-10 -left-10 hidden h-60 w-60 rounded-full border border-white/10 lg:block" />
                </motion.div>
                </div>

                <div className="mt-10 mb-5 w-full rounded-3xl border border-white/20 bg-white/10 px-6 py-8 backdrop-blur-md md:mb-0">
                    <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                        {[
                            { label: 'Availability', value: '24/7' },
                            { label: 'Coverage', value: 'Delhi NCR' },
                            { label: 'Daily Users', value: '600+' },
                            { label: 'Fleet Units', value: '300+' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-display text-2xl font-bold text-white md:text-5xl">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-orange-100/80 md:text-sm">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const WhyPreferUs = () => {
    const points = [
        {
            title: 'Statutory Compliance',
            icon: <ShieldCheck size={32} />,
            desc: 'We ensure 100% legal compliance relevant to our business, including compliances related to our company, fleet vehicles, fleet drivers, and employees. This gives us and our customers “freedom to operate” from governmental, social, and other liabilities.',
        },
        {
            title: 'Satisfied Clients',
            icon: <Heart size={32} />,
            desc: 'In our journey of 20 years we have created a long list of satisfied customers & end users who are our ambassadors and they speak about our services. All our clients have been associated with us for a commendable period which speaks of our ability, stability & capability.',
        },
        {
            title: 'Round the Clock Service',
            icon: <Clock size={32} />,
            desc: "Even in the age of e-travel one cannot deny the importance of human touch. We fully understand and comply with customer's anticipation of a prompt response.",
        },
        {
            title: 'Proactive Management',
            icon: <Settings size={32} />,
            desc: 'We understand the importance of time and comfort of our customers, hence we proactively do physical inspections of our vehicles on regular basis & check the fitness, cleanliness & hygiene of the vehicles. We also check and ensure that the vehicle is serviced timely to avoid unexpected breakdown of vehicles.',
        },
        {
            title: 'Matching service with savings',
            icon: <TrendingDown size={32} />,
            desc: 'We deliver results in the form of measurable service and savings benefits for our customers, ensuring the highest standards at the best price. We guarantee a combination of innovative and established techniques to deliver satisfaction for corporate booker and traveler alike. Its clear that people are choosing DTC Bharat based on our proven competence.',
        },
        {
            title: 'Safe & Secure',
            icon: <Lock size={32} />,
            desc: 'We always keep our client`s safety & security at top priority, we carry out a detailed background check of all the Drivers/staff members of DTC Bharat by Bio-metric based Aadhar & Police verification. It is further enhanced by using chain system of employee hiring and arming all our cabs with GPS based tracking device and speed governor.',
        },
        {
            title: 'Customized Trips',
            icon: <Map size={32} />,
            desc: 'We allow complete customization of our existing tour packages. You can also send us your detailed plan for a vacation we can make all the arrangements right from the start to the end. Alternately, simply tell us your idea of a vacation and we will design your trips and itineraries as per your requirement.',
        },
        {
            title: 'Backup Management',
            icon: <RefreshCcw size={32} />,
            desc: 'Backup Management is the activity of providing cab in case of breakdown or other catastrophe with regular cab. Backup is usually provided within the shortest possible time to ensure no disruption in travel.',
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Why to prefer us
                    </div>
                    <h2 className="font-display text-3xl font-bold text-corporate-blue md:text-5xl">
                        <span className="block">Why people choose</span>
                        <span className="mt-2 block text-brand">Delphinium Travelcorp</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {points.map((point, i) => (
                        <div
                            key={`${point.title}-${i}`}
                            className="group rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-brand/20"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-sm transition-all group-hover:bg-brand group-hover:text-white">
                                {point.icon}
                            </div>
                            <h3 className="mb-4 text-lg font-bold text-corporate-blue transition-colors group-hover:text-brand md:text-xl">
                                {point.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-600">{point.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative mt-24 flex h-[400px] items-center justify-center overflow-hidden">
                <img
                    src="/images/crowd.jpg"
                    alt="Happy Travelers"
                    className="absolute inset-0 h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-corporate-blue/80 backdrop-blur-sm" />
                <div className="relative z-10 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-4 inline-block rounded-[3rem] border border-white/20 bg-white/10 p-8 text-white backdrop-blur-xl md:mx-0 md:p-12"
                    >
                        <div className="font-display mb-3 text-4xl font-bold text-brand sm:text-5xl md:mb-4 md:text-8xl">
                            1,80,000+
                        </div>
                        <div className="text-base font-semibold uppercase tracking-[0.2em] sm:text-lg md:text-2xl md:tracking-[0.3em]">
                            Users who love us
                        </div>
                        <p className="mx-auto mt-3 max-w-lg text-sm text-slate-300 md:mt-4 md:text-base">
                            Delivering excellence across every mile, ensuring every journey is as safe as it is joyful.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TrainingSection = () => {
    const trainingImages = [
        '/images/training/IMG_8316.jpg',
        '/images/training/training.webp',
        '/images/training/IMG_8317.jpg',
    ];
    const [activeTrainingSlide, setActiveTrainingSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTrainingSlide((prev) => (prev + 1) % trainingImages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [trainingImages.length]);

    useEffect(() => {
        trainingImages.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Training session
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold text-corporate-blue md:text-4xl">
                            Training of Staff
                        </h2>
                        <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
                            We do in-house training programs for our drivers and staff to help them understand requirements of driving and customer service. We recognize the value of motivation and continuous improvement.
                        </p>
                        <div className="space-y-4">
                            {[
                                'Customer Service Excellence',
                                'Defensive Driving Skills',
                                'Emergency Response Training',
                                'Safety Protocols & Compliance',
                            ].map((item, i) => (
                                <div key={`${item}-${i}`} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-brand" size={20} />
                                    <span className="font-semibold text-corporate-blue">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="relative h-[340px] overflow-hidden rounded-3xl bg-slate-900 shadow-2xl md:h-[420px]">
                            {trainingImages.map((src, i) => (
                                <img
                                    key={`training-image-${i}`}
                                    src={src}
                                    alt={`Training Session ${i + 1}`}
                                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                                        activeTrainingSlide === i ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            ))}

                            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/25 px-3 py-2 backdrop-blur-sm">
                                {trainingImages.map((_, i) => (
                                    <button
                                        key={`training-dot-${i}`}
                                        onClick={() => setActiveTrainingSlide(i)}
                                        className={`h-2.5 rounded-full transition-all ${
                                            activeTrainingSlide === i ? 'w-7 bg-white' : 'w-2.5 bg-white/60'
                                        }`}
                                        aria-label={`Go to training image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DetailedFleetInfo = () => {
    const fleetData = [
        {
            category: 'Hatchback',
            models: ['Suzuki Wagon-R', 'Suzuki Ritz', 'Hyundai Santro'],
            img: '/images/fleet/new-wagonR.jpg',
        },
        {
            category: 'Sedan',
            models: ['Hyundai Aura', 'Suzuki Swift Dzire', 'Tata Tigor EV'],
            img: '/images/fleet/tigor-ev.avif',
        },
        {
            category: 'SUV/MUV (CUV)',
            models: ['Suzuki Ertiga', 'MG Windsor EV', 'Toyota Innova Crysta', 'Toyota Innova Hycross'],
            img: '/images/fleet/innova.webp',
        },
        {
            category: 'Bus',
            models: ['Force Traveller', 'Force Urbania'],
            img: '/images/fleet/force-bus.jpg',
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Fleet Information
                    </div>
                    <h2 className="font-display text-3xl font-bold text-corporate-blue md:text-4xl">
                        Our Extensive Fleet
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {fleetData.map((fleet, i) => (
                        <div
                            key={`${fleet.category}-${i}`}
                            className="group overflow-hidden rounded-3xl border border-slate-100 bg-slate-50"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={fleet.img}
                                    alt={fleet.category}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="mb-6 border-b border-brand/20 pb-4 text-lg font-bold text-brand md:text-xl">
                                    {fleet.category}
                                </h3>
                                <ul className="space-y-3">
                                    {fleet.models.map((model, j) => (
                                        <li
                                            key={`${model}-${j}`}
                                            className="flex items-center gap-2 font-medium text-corporate-blue"
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                                            {model}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AccessoriesSection = () => {
    const accessories = [
        { name: 'Newspaper', image: '/images/accessories/newspaper3.webp' },
        { name: 'Road Maps', image: '/images/accessories/map.avif' },
        { name: 'First Aid Kits', image: '/images/accessories/firstaid-kit.webp' },
        { name: 'Wet Wipes', image: '/images/accessories/wet-wipes.webp' },
        { name: 'Umbrellas', image: '/images/accessories/umbrella.avif' },
        { name: 'Flashlight', image: '/images/accessories/flashlight.png' },
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Accessories
                    </div>
                    <h2 className="font-display text-3xl font-bold text-corporate-blue md:text-4xl">
                        Accessories provided in our vehicles
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                    {accessories.map((item, i) => (
                        <div
                            key={`${item.name}-${i}`}
                            className="group flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-brand/20"
                        >
                            <div
                                className={`mb-4 flex items-center justify-center rounded-2xl transition-all ${
                                    item.image
                                        ? 'h-24 w-full bg-transparent md:h-48 md:w-48'
                                        : 'h-12 w-12 bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white'
                                }`}
                            >
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-contain"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    item.icon
                                )}
                            </div>
                            <span className="font-bold text-corporate-blue">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const BusinessProfileSection = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div className="rounded-[3rem] border border-slate-200 bg-slate-100 p-12 text-corporate-blue">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Business Profile
                        </div>
                        <h2 className="font-display mb-6 text-2xl font-bold md:text-3xl">Our Commitment</h2>
                        <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
                            The mission of Delphinium Travelcorp is to provide customers with long-term quality transportation solutions, which are cost-effective with the objective to be recognized as a preferred business partner with a high standard of safety and service.
                        </p>
                        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                            We assure our esteemed customers better transport solutions in a professional way. Our services include corporate cabs, taxi service, inbound & outbound tours, pilgrimage & historical tours, etc.
                        </p>
                    </div>
                    <div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-12">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Future Plans
                        </div>
                        <h2 className="font-display mb-6 text-2xl font-bold text-corporate-blue md:text-3xl">
                            Expanding Horizons
                        </h2>
                        <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
                            Through robust business management, we plan to establish more offices in India catering to client needs. Apart from NCR, we have grown to a fleet of over 250 cars to date and formed a wide network of vendors to increase capacity at short notice.
                        </p>
                        <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                            This has been possible due to the goodwill created by the quality of our services and the vision of our core team.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const HappyClientsSection = () => {
    const clients = [
        { name: 'DB Schenker', logoSrc: '/images/client-logos/new/DB_Schenker.png' },
        { name: 'DLF', logoSrc: '/images/client-logos/new/DLF_logo.svg' },
        { name: 'Hines', logoSrc: '/images/client-logos/new/Hines.png' },
        { name: 'Jaquar', logoSrc: '/images/client-logos/new/Jaquar_logo.svg.png' },
        { name: 'Kinapse', logoSrc: '/images/client-logos/new/kinapse.PNG' },
        { name: 'CGN', logoSrc: '/images/client-logos/new/cng.png' },
        { name: 'NuvoEx', logoSrc: '/images/client-logos/new/nuvoex.png' },
        { name: 'PepperTap', logoSrc: '/images/client-logos/new/peppertap.webp' },
        { name: 'The Retirement Plan Company', logoSrc: '/images/client-logos/new/TRPC-Logo-rgb.png' },
        { name: 'USG', logoSrc: '/images/client-logos/new/ugs.png' },
        { name: 'Wunderman', logoSrc: '/images/client-logos/new/Wunderman_Logo_2015.png' },
        { name: 'ZS Associates', logoSrc: '/images/client-logos/new/ZS_Associates.svg' },
    ];
    const rowOne = clients.filter((_, i) => i % 2 === 0);
    const rowTwo = clients.filter((_, i) => i % 2 === 1);

    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
                <div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-corporate-blue/10 blur-3xl" />
            </div>

            <div className="mx-auto mb-16 max-w-7xl px-6">
                <div className="text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Trusted by Global Brands
                    </div>
                    <h2 className="font-display text-3xl font-bold text-corporate-blue md:text-4xl">
                        Clients We Have Served
                    </h2>
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="rounded-[2.5rem] border border-slate-200/70 bg-white/85 p-6 shadow-xl backdrop-blur-sm md:p-10">
                    <div className="space-y-5">
                        <div className="relative flex overflow-x-hidden">
                            <div className="animate-marquee flex items-center gap-5 whitespace-nowrap py-1">
                                {[...rowOne, ...rowOne].map((client, i) => (
                                    <div
                                        key={`r1-${client.name}-${i}`}
                                        className="group inline-flex h-28 w-[220px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                                    >
                                        <img
                                            src={client.logoSrc}
                                            alt={`${client.name} logo`}
                                            className="h-12 w-auto max-w-[170px] object-contain transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative flex overflow-x-hidden">
                            <div className="animate-marquee flex items-center gap-5 whitespace-nowrap py-1 [animation-direction:reverse]">
                                {[...rowTwo, ...rowTwo].map((client, i) => (
                                    <div
                                        key={`r2-${client.name}-${i}`}
                                        className="group inline-flex h-28 w-[220px] items-center justify-center rounded-2xl border border-slate-100 bg-white px-8 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                                    >
                                        <img
                                            src={client.logoSrc}
                                            alt={`${client.name} logo`}
                                            className="h-12 w-auto max-w-[170px] object-contain transition-all duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-sm font-medium text-slate-500">
                        Long-term partnerships built on punctuality, safety, and enterprise-grade service standards.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
                {[
                    { label: 'Customer Satisfaction', value: '100%' },
                    { label: 'Serving Since', value: '2006' },
                    { label: 'Yearly Trips', value: '40,000+' },
                ].map((stat, i) => (
                    <div
                        key={`${stat.label}-${i}`}
                        className="flex items-center gap-6 rounded-[2rem] border border-slate-100 bg-white p-8"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                            <Award size={32} />
                        </div>
                        <div>
                            <div className="font-display text-2xl font-bold text-corporate-blue md:text-3xl">
                                {stat.value}
                            </div>
                            <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                                {stat.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

const BookingFormSection = () => {
    const [formType, setFormType] = useState('customer');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const customerForm = useForm({ ...CUSTOMER_BOOKING_DEFAULTS, source_page: 'home' });
    const clientForm = useForm({ ...CLIENT_BOOKING_DEFAULTS, source_page: 'home' });

    const submitCustomerForm = (e) => {
        e.preventDefault();
        customerForm.post('/booking-requests', {
            preserveScroll: true,
            onSuccess: () => {
                customerForm.reset();
                setSuccessMessage('Booking request submitted successfully.');
                setErrorMessage('');
            },
            onError: (errors) => {
                setSuccessMessage('');
                setErrorMessage(
                    Object.values(errors || {})[0] || 'Failed to submit booking request. Please check your details.'
                );
            },
        });
    };

    const submitClientForm = (e) => {
        e.preventDefault();
        clientForm.post('/booking-requests', {
            preserveScroll: true,
            onSuccess: () => {
                clientForm.reset();
                setSuccessMessage('Booking request submitted successfully.');
                setErrorMessage('');
            },
            onError: (errors) => {
                setSuccessMessage('');
                setErrorMessage(
                    Object.values(errors || {})[0] || 'Failed to submit booking request. Please check your details.'
                );
            },
        });
    };

    const renderCustomerForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-xl font-bold text-corporate-blue md:text-2xl">
                Booking Form for Customers
            </h3>
            {successMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-emerald-600">
                    {successMessage}
                </p>
            )}
            {errorMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-rose-600">
                    {errorMessage}
                </p>
            )}
            <form className="space-y-6" onSubmit={submitCustomerForm}>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Users size={18} /> Customer Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            value={customerForm.data.booked_by_name}
                            onChange={(e) => customerForm.setData('booked_by_name', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Full Name"
                        />
                        <input
                            type="tel"
                            value={customerForm.data.booked_by_phone}
                            onChange={(e) => customerForm.setData('booked_by_phone', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Contact No."
                        />
                        <input
                            type="email"
                            value={customerForm.data.booked_by_email}
                            onChange={(e) => customerForm.setData('booked_by_email', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Clock size={18} /> Scheduling
                    </h4>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="date"
                            value={customerForm.data.reporting_date}
                            onChange={(e) => customerForm.setData('reporting_date', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <input
                            type="text"
                            value={customerForm.data.reporting_place}
                            onChange={(e) => customerForm.setData('reporting_place', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Reporting Place"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="time"
                            value={customerForm.data.reporting_time}
                            onChange={(e) => customerForm.setData('reporting_time', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <select
                            value={customerForm.data.cab_type}
                            onChange={(e) => customerForm.setData('cab_type', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        >
                            <option value="">Select Cab Type</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV/MUV">SUV/MUV (CUV)</option>
                            <option value="Bus">Bus</option>
                        </select>
                    </div>
                </div>
                <textarea
                    rows={4}
                    value={customerForm.data.special_instructions}
                    onChange={(e) => customerForm.setData('special_instructions', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                    placeholder="Special Instructions (if any)"
                />
                <button
                    type="submit"
                    disabled={customerForm.processing}
                    className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {customerForm.processing ? 'Submitting...' : 'Book Now'}
                </button>
            </form>
        </>
    );

    const renderClientForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-xl font-bold text-corporate-blue md:text-2xl">
                Booking Form for Clients
            </h3>
            {successMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-emerald-600">
                    {successMessage}
                </p>
            )}
            {errorMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-rose-600">
                    {errorMessage}
                </p>
            )}
            <form className="space-y-8" onSubmit={submitClientForm}>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Users size={18} /> Booked By
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            value={clientForm.data.booked_by_name}
                            onChange={(e) => clientForm.setData('booked_by_name', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Your Name"
                        />
                        <input
                            type="tel"
                            value={clientForm.data.booked_by_phone}
                            onChange={(e) => clientForm.setData('booked_by_phone', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Contact No."
                        />
                        <input
                            type="email"
                            value={clientForm.data.booked_by_email}
                            onChange={(e) => clientForm.setData('booked_by_email', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Your Email"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Briefcase size={18} /> Booked For
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            value={clientForm.data.client_name}
                            onChange={(e) => clientForm.setData('client_name', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Client Name"
                        />
                        <input
                            type="tel"
                            value={clientForm.data.client_phone}
                            onChange={(e) => clientForm.setData('client_phone', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Client Contact No."
                        />
                        <input
                            type="email"
                            value={clientForm.data.client_email}
                            onChange={(e) => clientForm.setData('client_email', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Client Email"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Clock size={18} /> Scheduling
                    </h4>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="date"
                            value={clientForm.data.reporting_date}
                            onChange={(e) => clientForm.setData('reporting_date', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <input
                            type="text"
                            value={clientForm.data.reporting_place}
                            onChange={(e) => clientForm.setData('reporting_place', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Reporting Place"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="time"
                            value={clientForm.data.reporting_time}
                            onChange={(e) => clientForm.setData('reporting_time', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <select
                            value={clientForm.data.cab_type}
                            onChange={(e) => clientForm.setData('cab_type', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        >
                            <option value="">Select</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV/MUV">SUV/MUV (CUV)</option>
                            <option value="Bus">Bus</option>
                        </select>
                    </div>
                </div>
                <textarea
                    rows={3}
                    value={clientForm.data.special_instructions}
                    onChange={(e) => clientForm.setData('special_instructions', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                    placeholder="Special Instructions (if any)"
                />
                <button
                    type="submit"
                    disabled={clientForm.processing}
                    className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {clientForm.processing ? 'Submitting...' : 'Submit Booking'}
                </button>
            </form>
        </>
    );

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-center font-display text-3xl font-bold text-corporate-blue md:text-4xl">
                    Book Your Cab
                </h2>
                <div className="relative mx-auto max-w-4xl">
                    <div className="relative z-30 mx-auto mb-12 flex w-fit justify-center rounded-2xl bg-slate-200 p-1">
                        <button
                            type="button"
                            onClick={() => setFormType('customer')}
                            className={`relative z-10 rounded-xl px-8 py-3 text-sm font-bold transition-all ${
                                formType === 'customer'
                                    ? 'text-brand'
                                    : 'text-slate-500 hover:text-corporate-blue'
                            }`}
                        >
                            {formType === 'customer' && (
                                <motion.div
                                    layoutId="homeActiveTab"
                                    className="absolute inset-0 -z-10 rounded-xl bg-white shadow-sm"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            For Customers
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormType('client')}
                            className={`relative z-10 rounded-xl px-8 py-3 text-sm font-bold transition-all ${
                                formType === 'client'
                                    ? 'text-brand'
                                    : 'text-slate-500 hover:text-corporate-blue'
                            }`}
                        >
                            {formType === 'client' && (
                                <motion.div
                                    layoutId="homeActiveTab"
                                    className="absolute inset-0 -z-10 rounded-xl bg-white shadow-sm"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            For Clients
                        </button>
                    </div>

                    <div className="relative h-[1160px] md:h-[820px]">
                        <motion.div
                            initial={false}
                            animate={{
                                x: formType === 'customer' ? 24 : 0,
                                y: formType === 'customer' ? 24 : 0,
                                rotate: 0,
                                zIndex: formType === 'customer' ? 10 : 20,
                                opacity: formType === 'customer' ? 0.4 : 1,
                                scale: 1,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="absolute inset-0 cursor-pointer overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-10 shadow-2xl md:cursor-default md:p-12"
                            onClick={() => formType === 'customer' && setFormType('client')}
                            whileHover={formType === 'customer' ? { x: 12, y: 12, opacity: 0.6 } : {}}
                        >
                            <div className="absolute -mr-32 -mt-32 h-64 w-64 rounded-full bg-corporate-blue/5 blur-3xl" />
                            <div className="relative z-10">
                                {renderClientForm()}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={false}
                            animate={{
                                x: formType === 'client' ? 24 : 0,
                                y: formType === 'client' ? 24 : 0,
                                rotate: 0,
                                zIndex: formType === 'client' ? 10 : 20,
                                opacity: formType === 'client' ? 0.4 : 1,
                                scale: 1,
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="absolute inset-0 cursor-pointer overflow-hidden rounded-[3rem] border border-slate-100 bg-white p-10 shadow-2xl md:cursor-default md:p-12"
                            onClick={() => formType === 'client' && setFormType('customer')}
                            whileHover={formType === 'client' ? { x: 12, y: 12, opacity: 0.6 } : {}}
                        >
                            <div className="absolute -mr-32 -mt-32 h-64 w-64 rounded-full bg-brand/5 blur-3xl" />
                            <div className="relative z-10">
                                {renderCustomerForm()}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

function AboutSection({ setActivePage }) {
    return (
        <section className="relative overflow-hidden bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src="https://picsum.photos/seed/fleet1/400/500"
                                className="mt-12 rounded-3xl shadow-lg"
                                alt="Fleet"
                                referrerPolicy="no-referrer"
                            />
                            <img
                                src="https://picsum.photos/seed/fleet2/400/500"
                                className="rounded-3xl shadow-lg"
                                alt="Fleet"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                        <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white bg-w6-brand text-white shadow-2xl">
                            <div className="text-center">
                                <div className="text-2xl font-bold">18+</div>
                                <div className="text-[10px] font-bold uppercase">Years</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                            Our Legacy
                        </div>
                        <h2 className="mb-8 font-display text-3xl font-bold leading-tight text-w6-corporate-blue md:text-5xl">
                            A Structured Partner in{' '}
                            <span className="text-w6-brand">Corporate Mobility</span>
                        </h2>
                        <p className="mb-6 text-base leading-relaxed text-slate-600 md:text-lg">
                            Founded in 2006 and incorporated in 2011, DTC Bharat is a
                            structured, technology-enabled corporate transportation partner
                            delivering disciplined fleet management, real-time monitoring,
                            and enterprise reporting.
                        </p>
                        <p className="mb-10 text-base leading-relaxed text-slate-600 md:text-lg">
                            We ensure an environment that clients, cab users, and staff are
                            proud to be part of, focusing on safety, timeliness, and
                            professionalism.
                        </p>

                        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {[
                                'GPS Tracking & Monitoring',
                                'Female Safety Protocols',
                                'AI Route Optimization',
                                '24/7 Control Room',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-w6-brand" size={20} />
                                    <span className="font-semibold text-w6-corporate-blue">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setActivePage('profile')}
                            className="group flex items-center gap-2 font-bold text-w6-corporate-blue transition-colors hover:text-w6-brand"
                        >
                            Learn More About Our Profile{' '}
                            <ArrowRight
                                size={20}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FleetSection() {
    const fleet = [
        {
            category: 'Hatchback',
            models: 'Wagon-R, Ritz, Santro',
            icon: <Car size={32} />,
        },
        {
            category: 'Sedan',
            models: 'Aura, Swift Dzire, Tata Tigor EV',
            icon: <Car size={32} />,
        },
        {
            category: 'SUV/MUV (CUV)',
            models: 'Ertiga, MG Windsor EV, Innova Crysta, Innova Hycross',
            icon: <Car size={32} />,
        },
        {
            category: 'Bus',
            models: 'Force Traveller, Force Urbania',
            icon: <Users size={32} />,
        },
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                        Our Fleet
                    </div>
                    <h2 className="mb-6 font-display text-3xl font-bold text-w6-corporate-blue md:text-5xl">
                        Diverse Fleet for Every Need
                    </h2>
                    <p className="text-base text-slate-500 md:text-lg">
                        From hatchbacks and executive SUVs to staff buses, we maintain a high-quality fleet
                        equipped with modern safety and comfort features.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {fleet.map((item) => (
                        <motion.div
                            key={item.category}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-w6-brand/20"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-w6-brand transition-colors group-hover:bg-w6-brand group-hover:text-white">
                                {item.icon}
                            </div>
                            <h3 className="mb-3 text-lg font-bold text-w6-corporate-blue md:text-xl">
                                {item.category}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                {item.models}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="w6-glass-card mt-20 rounded-3xl p-10 md:p-16">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-6 font-display text-2xl font-bold text-w6-corporate-blue md:text-3xl">
                                Premium Amenities
                            </h3>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Smartphone size={18} />,
                                        label: 'Charging Ports',
                                    },
                                    {
                                        icon: <Globe size={18} />,
                                        label: 'Executive Wi-Fi',
                                    },
                                    {
                                        icon: <Shield size={18} />,
                                        label: 'First Aid Kit',
                                    },
                                    {
                                        icon: <Zap size={18} />,
                                        label: 'AC Climate Control',
                                    },
                                    {
                                        icon: <CheckCircle2 size={18} />,
                                        label: 'Sanitizers',
                                    },
                                    {
                                        icon: <Calendar size={18} />,
                                        label: 'Newspapers',
                                    },
                                ].map((amenity) => (
                                    <div
                                        key={amenity.label}
                                        className="flex items-center gap-3 text-slate-600"
                                    >
                                        <div className="text-w6-brand">{amenity.icon}</div>
                                        <span className="font-medium">{amenity.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl bg-w6-corporate-blue p-8 text-white">
                            <h4 className="mb-6 flex items-center gap-2 text-lg font-bold md:text-xl">
                                <Shield className="text-w6-brand" /> Safety Compliance
                            </h4>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w6-brand" />
                                    <span>Real-time GPS tracking for all vehicles</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w6-brand" />
                                    <span>
                                        Panic alert buttons integrated with central control
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w6-brand" />
                                    <span>
                                        Strict female safety protocols for night drops
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w6-brand" />
                                    <span>
                                        Regular preventive maintenance & health checks
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


const loadProfilePage = () => import('./pages/ProfilePage');
const loadServicesPage = () => import('./pages/ServicesPage');
const loadTeamPage = () => import('./pages/TeamPage');
const loadToursPage = () => import('./pages/ToursPage');
const loadBlogsPage = () => import('./pages/BlogsPage');
const loadContactPage = () => import('./pages/ContactPage');

const LazyProfilePage = lazy(loadProfilePage);
const LazyServicesPage = lazy(loadServicesPage);
const LazyTeamPage = lazy(loadTeamPage);
const LazyToursPage = lazy(loadToursPage);
const LazyBlogsPage = lazy(loadBlogsPage);
const LazyContactPage = lazy(loadContactPage);

const LAZY_PAGE_LOADERS = {
    profile: loadProfilePage,
    services: loadServicesPage,
    team: loadTeamPage,
    tours: loadToursPage,
    blogs: loadBlogsPage,
    contact: loadContactPage,
};

export default function Website6App({ activePage = 'home', blogSlug = null }) {
    const setActivePage = (nextPage) => {
        const nextUrl = PAGE_URLS[nextPage];

        if (!nextUrl) {
            return;
        }

        if (nextPage === activePage) {
            window.scrollTo(0, 0);
            return;
        }

        router.visit(nextUrl, {
            preserveScroll: false,
            preserveState: false,
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    useEffect(() => {
        Object.entries(LAZY_PAGE_LOADERS).forEach(([page, loadPage]) => {
            if (page !== activePage) {
                loadPage();
            }
        });
    }, [activePage]);

    const lazyPageFallback = <div className="min-h-[40vh]" />;

    return (
        <div className="w6-root flex min-h-screen flex-col selection:bg-w6-brand selection:text-white">
            <Navbar activePage={activePage} />

            <main className="flex-grow">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activePage === 'home' && (
                            <>
                                <Hero setActivePage={setActivePage} />
                                <WhyPreferUs />
                                <TrainingSection />
                                <DetailedFleetInfo />
                                <AccessoriesSection />
                                <BusinessProfileSection />
                                <HappyClientsSection />
                                <BookingFormSection />
                            </>
                        )}
                        {activePage === 'profile' && (
                            <Suspense fallback={lazyPageFallback}>
                                <LazyProfilePage />
                            </Suspense>
                        )}
                        {activePage === 'services' && (
                            <Suspense fallback={lazyPageFallback}>
                                <LazyServicesPage />
                            </Suspense>
                        )}
                        {activePage === 'team' && (
                            <Suspense fallback={lazyPageFallback}>
                                <LazyTeamPage />
                            </Suspense>
                        )}
                        {activePage === 'tours' && (
                            <Suspense fallback={lazyPageFallback}>
                                <LazyToursPage setActivePage={setActivePage} />
                            </Suspense>
                        )}
                        {activePage === 'blogs' && (
                            <Suspense fallback={lazyPageFallback}>
                                <LazyBlogsPage blogSlug={blogSlug} />
                            </Suspense>
                        )}
                        {activePage === 'contact' && (
                            <Suspense fallback={lazyPageFallback}>
                                <LazyContactPage />
                            </Suspense>
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />

            <AnimatePresence>
                {activePage === 'contact' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="w6-electric-glow fixed bottom-28 right-8 z-50 min-w-[240px] rounded-3xl border border-slate-100 bg-white p-5 text-corporate-blue shadow-2xl"
                    >
                        <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-brand">
                            Need Instant Support?
                        </div>
                        <div className="text-sm font-bold leading-tight text-corporate-blue">
                            Chat with us on WhatsApp
                        </div>
                        <div className="absolute -bottom-2 right-10 h-4 w-4 rotate-45 border-b border-r border-slate-100 bg-white" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                key={activePage === 'contact' ? 'whatsapp' : 'book'}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                type="button"
                onClick={() => {
                    if (activePage === 'contact') {
                        window.open('https://wa.me/919899925362', '_blank', 'noopener,noreferrer');
                    } else {
                        setActivePage('contact');
                    }
                }}
                className={`group fixed bottom-8 right-8 z-40 flex items-center gap-3 rounded-2xl px-6 py-4 font-bold text-white shadow-2xl transition-colors duration-300 ${
                    activePage === 'contact' ? 'bg-emerald-500' : 'bg-w6-brand'
                }`}
            >
                {activePage === 'contact' ? <MessageSquare size={24} /> : <Car size={24} />}
                <span className="hidden md:inline">
                    {activePage === 'contact' ? 'WhatsApp Support' : 'Book Now'}
                </span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all group-hover:bg-white/30">
                    <ArrowRight size={16} />
                </div>
            </motion.button>
        </div>
    );
}
