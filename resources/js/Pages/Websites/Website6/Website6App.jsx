import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
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

function Navbar({ activePage, setActivePage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isHomePage = activePage === 'home';

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/80 py-3 shadow-md backdrop-blur-lg'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                <div
                    className="flex cursor-pointer items-center gap-3"
                    onClick={() => setActivePage('home')}
                >
                    <img
                        src="/images/logo/dtc-logo.JPG"
                        alt="Delphinium Travelcorp"
                        className="h-12 w-auto rounded-xl object-cover ring-1 ring-white/20"
                    />
                    <div>
                        <h1
                            className={`font-display text-xl font-bold leading-none ${
                                isHomePage && !isScrolled ? 'text-white' : 'text-w6-corporate-blue'
                            }`}
                        >
                            Delphinium <span className="text-w6-brand">Travelcorp</span>
                        </h1>
                        <p
                            className={`text-[10px] font-semibold uppercase tracking-widest ${
                                isHomePage && !isScrolled ? 'text-white/70' : 'opacity-70'
                            }`}
                        >
                            DTC Bharat
                        </p>
                    </div>
                </div>

                <div className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => setActivePage(item.value)}
                            className={`text-sm font-semibold transition-colors hover:text-w6-brand ${
                                activePage === item.value
                                    ? 'text-w6-brand'
                                    : isHomePage && !isScrolled
                                        ? 'text-white/80 hover:text-white'
                                        : 'text-w6-corporate-blue/70'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={() => setActivePage('contact')}
                        className="flex items-center gap-2 rounded-full bg-w6-brand px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-w6-brand-dark w6-electric-glow"
                    >
                        Book a Cab Now
                    </button>
                </div>

                <button
                    type="button"
                    className={`${isHomePage && !isScrolled ? 'text-white' : 'text-w6-corporate-blue'} md:hidden`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 right-0 top-full flex flex-col gap-4 bg-white p-6 shadow-2xl md:hidden"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.value}
                                type="button"
                                onClick={() => {
                                    setActivePage(item.value);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`text-left text-lg font-semibold ${
                                    activePage === item.value
                                        ? 'text-w6-brand'
                                        : 'text-w6-corporate-blue'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                setActivePage('contact');
                                setIsMobileMenuOpen(false);
                            }}
                            className="mt-4 rounded-2xl bg-w6-brand py-4 font-bold text-white"
                        >
                            Book a Cab Now
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function Footer({ setActivePage }) {
    return (
        <footer className="bg-w6-corporate-blue pb-10 pt-20 text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-4">
                <div className="col-span-1 md:col-span-1">
                    <div className="mb-6 flex items-center gap-3">
                        <img
                            src="/images/logo/dtc-logo.JPG"
                            alt="Delphinium Travelcorp"
                            className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/20"
                        />
                        <div>
                            <h2 className="font-display text-lg font-bold leading-none">
                                Delphinium Travelcorp
                            </h2>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-w6-brand">
                                DTC Bharat
                            </p>
                        </div>
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-slate-400">
                        Corporate travel managed with safety and excellence since 2006.
                        Precision-driven mobility solutions for the modern enterprise.
                    </p>
                    <div className="flex gap-4">
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

                <div>
                    <h3 className="mb-6 text-lg font-bold">Quick Links</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('home')}
                                className="transition-colors hover:text-w6-brand"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('profile')}
                                className="transition-colors hover:text-w6-brand"
                            >
                                Our Profile
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('services')}
                                className="transition-colors hover:text-w6-brand"
                            >
                                Services
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('team')}
                                className="transition-colors hover:text-w6-brand"
                            >
                                Our Team
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('tours')}
                                className="transition-colors hover:text-w6-brand"
                            >
                                Tour Packages
                            </button>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-6 text-lg font-bold">Our Services</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li>Employee Transportation</li>
                        <li>Shuttle Services</li>
                        <li>Spot Rental</li>
                        <li>Outstation Travel</li>
                        <li>VIP Airport Transfers</li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-6 text-lg font-bold">Contact Us</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex gap-3">
                            <MapPin size={18} className="shrink-0 text-w6-brand" />
                            <span>Unit 705, Business Zone, TOWER-C, Nirvana Country, Sector 50, Gurugram, Haryana 122018</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone size={18} className="shrink-0 text-w6-brand" />
                            <span>+91 9899925362</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={18} className="shrink-0 text-w6-brand" />
                            <span>info@royalcorptravel.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mx-auto mt-20 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 md:flex-row">
                <p className="text-xs text-slate-500">
                    (c) 2017-2024 Delphinium Travelcorp. All Rights Reserved.
                </p>
                <p className="text-sm italic text-slate-400">
                    &quot;Safe & Joyful Journey in Excellent Timings.&quot;
                </p>
            </div>
        </footer>
    );
}

function Hero({ setActivePage }) {
    return (
        <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-20">
            <div className="w6-hero-gradient pointer-events-none absolute inset-0 z-0" />
            <div className="pointer-events-none absolute -right-20 top-24 z-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-16 z-0 h-[26rem] w-[26rem] rounded-full bg-rose-300/20 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.18),transparent_55%)]" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        <Zap size={14} /> Fleet Command Since 2006
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
                        On Time <br />
                        <span className="text-orange-200">Round the Clock</span>
                    </h1>
                    <p className="mb-10 max-w-xl text-lg leading-relaxed text-orange-50/90 md:text-xl">
                        On Time Round the Clock. Corporate cabs at their best.
                    </p>
                    <div className="flex flex-wrap gap-4">
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
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                        <img
                            src="/images/innova-crysta-9-240.jpg"
                            alt="Toyota Innova SUV"
                            className="h-auto w-full"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        <div className="w6-glass-card absolute bottom-6 left-6 right-6 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-w6-brand text-white">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-w6-corporate-blue">
                                        Innova Executive Module
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        GPS Tracking, Speed Governor, Panic Alert Integrated
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-10 -top-10 h-40 w-40 animate-pulse rounded-full border border-w6-brand/30" />
                    <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full border border-white/10" />
                </motion.div>
                </div>

                <div className="mt-10 w-full rounded-3xl border border-white/20 bg-white/10 px-6 py-8 backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                        {[
                            { label: 'Availability', value: '24/7' },
                            { label: 'Coverage', value: 'Delhi NCR' },
                            { label: 'Corporate Clients', value: '100+' },
                            { label: 'Fleet Units', value: '300+' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-display text-3xl font-bold text-white md:text-5xl">
                                    {stat.value}
                                </div>
                                <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-orange-100/80 md:text-sm">
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
            desc: 'We ensure 100% Legal compliance relevant to our business which includes compliances related to Our Company, Fleet vehicles, fleet drivers and Employees. This gives us and our Customers “Freedom to Operate” from governmental, Social & other liabilities.',
        },
        {
            title: 'Satisfied Clients',
            icon: <Heart size={32} />,
            desc: 'In our journey of 11 years we have created a long list of satisfied Customers & end users who are our Ambassadors and they speak about our services. All our clients have been associated with us for a commendable period which speaks of our ability, stability & capability.',
        },
        {
            title: 'Round the Clock Service',
            icon: <Clock size={32} />,
            desc: "Even in the age of e-travel one cannot deny the importance of human touch. We fully understand and comply with customer's anticipation of a prompt response.",
        },
        {
            title: 'Proactive Management',
            icon: <Settings size={32} />,
            desc: 'We understand the importance of time and comfort of our customers, hence we proactively do physical inspections of our vehicles on regular basis & check the Fitness, Cleanliness & Hygiene of the vehicles. We also check and ensure that the vehicle is serviced timely to avoid unexpected breakdown of vehicles.',
        },
        {
            title: 'Matching service with savings',
            icon: <TrendingDown size={32} />,
            desc: 'We deliver results in the form of measurable service and savings benefits for our customers, ensuring the highest standards at the best price. We guarantee a combination of innovative and established techniques to deliver satisfaction for corporate booker and traveler alike. Its clear people are choosing RCPL based on our proven competence.',
        },
        {
            title: 'Safe & Secure',
            icon: <Lock size={32} />,
            desc: 'We always keep our client`s safety & security at top priority, we carry out a detailed background check of all the Drivers/staff members of RCPL by Bio-metric based Aadhar & Police verification. It is further enhanced by using chain system of employee hiring and arming all our cabs with GPS based Tracking device and Speed Governor.',
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
                    <h2 className="font-display text-4xl font-bold text-corporate-blue md:text-5xl">
                        Why people choose <span className="text-brand">Royal CorpTravel</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {points.map((point, i) => (
                        <div
                            key={`${point.title}-${i}`}
                            className="group rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:border-brand/20"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand shadow-sm transition-all group-hover:bg-brand group-hover:text-white">
                                {point.icon}
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-corporate-blue transition-colors group-hover:text-brand">
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
                        className="inline-block rounded-[3rem] border border-white/20 bg-white/10 p-12 text-white backdrop-blur-xl"
                    >
                        <div className="font-display mb-4 text-6xl font-bold text-brand md:text-8xl">
                            +180,000
                        </div>
                        <div className="text-xl font-semibold uppercase tracking-[0.3em] md:text-2xl">
                            Users who love us
                        </div>
                        <p className="mx-auto mt-4 max-w-lg text-slate-300">
                            Delivering excellence across every mile, ensuring every journey is as safe as it is joyful.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TrainingSection = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Training session
                        </div>
                        <h2 className="font-display mb-6 text-4xl font-bold text-corporate-blue">
                            Training of Staff
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-slate-600">
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
                        <img
                            src="/images/training.jpg"
                            className="rounded-3xl shadow-2xl"
                            alt="Training Session"
                        />
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
            models: ['Suzuki Wagon-R', 'Suzuki Ritz', 'Hyundai Santro', 'Toyota Liva'],
            img: '/images/new-wagonR.jpg',
        },
        {
            category: 'Sedan',
            models: ['Hyundai Xcent', 'Suzuki Swift Dzire', 'Toyota Liva', 'Toyota Etios'],
            img: '/images/desire-taxi.avif',
        },
        {
            category: 'SUV/MUV',
            models: ['Suzuki Ertiga', 'Chevrolet Enjoy', 'Mahindra Xylo', 'Toyota Innova'],
            img: '/images/innova.webp',
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Fleet Information
                    </div>
                    <h2 className="font-display text-4xl font-bold text-corporate-blue">
                        Our Extensive Fleet
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                                <h3 className="mb-6 border-b border-brand/20 pb-4 text-xl font-bold text-brand">
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
        { name: 'Newspaper', icon: <Calendar size={20} /> },
        { name: 'Road Maps', icon: <MapPin size={20} /> },
        { name: 'First Aid Kits', icon: <Shield size={20} /> },
        { name: 'Wet Wipes', icon: <Zap size={20} /> },
        { name: 'Umbrellas', icon: <Globe size={20} /> },
        { name: 'Flashlight', icon: <Zap size={20} /> },
        { name: 'Reading lights', icon: <Zap size={20} /> },
        { name: 'Phone', icon: <Smartphone size={20} /> },
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Accessories
                    </div>
                    <h2 className="font-display text-4xl font-bold text-corporate-blue">
                        Accessories provided in our vehicles
                    </h2>
                </div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {accessories.map((item, i) => (
                        <div
                            key={`${item.name}-${i}`}
                            className="group flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-brand/20"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-all group-hover:bg-brand group-hover:text-white">
                                {item.icon}
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
                    <div className="rounded-[3rem] bg-corporate-blue p-12 text-white">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Business Profile
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold">Our Commitment</h2>
                        <p className="mb-8 text-lg leading-relaxed text-slate-300">
                            The mission of Royal CorpTravel is to provide customers with long-term quality transportation solutions, which are cost-effective with the objective to be recognized as a preferred business partner with a high standard of safety and service.
                        </p>
                        <p className="text-lg leading-relaxed text-slate-300">
                            We assure our esteemed customers better transport solutions in a professional way. Our services include corporate cabs, taxi service, inbound & outbound tours, pilgrimage & historical tours, etc.
                        </p>
                    </div>
                    <div className="rounded-[3rem] border border-slate-100 bg-slate-50 p-12">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Future Plans
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold text-corporate-blue">
                            Expanding Horizons
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-slate-600">
                            Through robust business management, we plan to establish more offices in India catering to client needs. Apart from NCR, we have grown to a fleet of over 250 cars to date and formed a wide network of vendors to increase capacity at short notice.
                        </p>
                        <p className="text-lg leading-relaxed text-slate-600">
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
        { name: 'CGN', logoSrc: '/images/client-logos/cgn.jpg' },
        { name: 'DB Schenker', logoSrc: '/images/client-logos/db_schemker.webp' },
        { name: 'DLF', logoSrc: '/images/client-logos/dlf2.png' },
        { name: 'DRG', logoSrc: '/images/client-logos/drg.webp' },
        { name: 'Hines', logoSrc: '/images/client-logos/hines.webp' },
        { name: 'Jaquar', logoSrc: '/images/client-logos/jaguar.png' },
        { name: 'Kinapse', logoSrc: '/images/client-logos/kinapse.avif' },
        { name: 'NuvoEx', logoSrc: '/images/client-logos/nuvoex.png' },
        { name: 'PepperTap', logoSrc: '/images/client-logos/peppertap.webp' },
        { name: 'The Retirement Plan Company, LLC', logoSrc: '/images/client-logos/retirement.webp' },
        { name: 'USG Boral', logoSrc: '/images/client-logos/usgboral.webp' },
        { name: 'Wunderman', logoSrc: '/images/client-logos/wunderman.webp' },
        { name: 'ZS', logoSrc: '/images/client-logos/zs.webp' },
    ];

    return (
        <section className="overflow-hidden bg-slate-50 py-24">
            <div className="mx-auto mb-16 max-w-7xl px-6">
                <div className="text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Our Happy Clients
                    </div>
                    <h2 className="font-display text-4xl font-bold text-corporate-blue">
                        Trusted by Global Brands
                    </h2>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee flex items-center gap-12 whitespace-nowrap py-10">
                    {[...clients, ...clients].map((client, i) => (
                        <div
                            key={`${client.name}-${i}`}
                            className="group inline-flex cursor-default items-center justify-center rounded-3xl border border-slate-100 bg-white px-10 py-6 shadow-sm transition-all hover:border-brand/30"
                        >
                            <img
                                src={client.logoSrc}
                                alt={`${client.name} logo`}
                                className="w-auto max-w-none object-contain"
                                style={{ height: '36px' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
                {[
                    { label: 'Client Retention', value: '98%' },
                    { label: 'Average Partnership', value: '7+ Years' },
                    { label: 'Monthly Trips', value: '36,000+' },
                ].map((stat, i) => (
                    <div
                        key={`${stat.label}-${i}`}
                        className="flex items-center gap-6 rounded-[2rem] border border-slate-100 bg-white p-8"
                    >
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                            <Award size={32} />
                        </div>
                        <div>
                            <div className="font-display text-3xl font-bold text-corporate-blue">
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
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-4xl px-6">
                <div className="glass-card relative overflow-hidden rounded-[3rem] p-12">
                    <div className="absolute right-0 top-0 p-8 text-6xl opacity-10">🚕</div>
                    <h2 className="font-display mb-12 text-center text-4xl font-bold text-corporate-blue">
                        Book Your Cab
                    </h2>
                    <form className="space-y-12">
                        <div>
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-brand">
                                <Users size={20} /> Booked By
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Your Name" />
                                <input type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Contact No." />
                                <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Your Email" />
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-brand">
                                <Briefcase size={20} /> Booked For
                            </h3>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                                <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Name" />
                                <input type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Contact No." />
                                <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Email" />
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-brand">
                                <Clock size={20} /> Scheduling
                            </h3>
                            <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                                <input type="text" placeholder="DD-MM-YY" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                                <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Reporting Place" />
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <input type="text" placeholder="HH:MM AM/PM" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                                    <option>Select</option>
                                    <option>Hatchback</option>
                                    <option>Sedan</option>
                                    <option>SUV/MUV</option>
                                    <option>Bus</option>
                                </select>
                            </div>
                        </div>
                        <textarea rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Special Instructions (if any)" />
                        <button type="button" className="electric-glow w-full rounded-2xl bg-brand py-5 text-lg font-bold text-white transition-all hover:bg-brand-dark">
                            Submit Booking
                        </button>
                    </form>
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
                        <h2 className="mb-8 font-display text-4xl font-bold leading-tight text-w6-corporate-blue md:text-5xl">
                            A Structured Partner in{' '}
                            <span className="text-w6-brand">Corporate Mobility</span>
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed text-slate-600">
                            Founded in 2006 and incorporated in 2011, DTC Bharat is a
                            structured, technology-enabled corporate transportation partner
                            delivering disciplined fleet management, real-time monitoring,
                            and enterprise reporting.
                        </p>
                        <p className="mb-10 text-lg leading-relaxed text-slate-600">
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
            models: 'Wagon-R, Ritz, Santro, Liva',
            icon: <Car size={32} />,
        },
        {
            category: 'Sedan',
            models: 'Xcent, Swift Dzire, Etios',
            icon: <Car size={32} />,
        },
        {
            category: 'SUV/MUV',
            models: 'Ertiga, Enjoy, Xylo, Innova',
            icon: <Car size={32} />,
        },
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                        Our Fleet
                    </div>
                    <h2 className="mb-6 font-display text-4xl font-bold text-w6-corporate-blue md:text-5xl">
                        Diverse Fleet for Every Need
                    </h2>
                    <p className="text-lg text-slate-500">
                        From hatchbacks to executive SUVs, we maintain a high-quality fleet
                        equipped with modern safety and comfort features.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {fleet.map((item) => (
                        <motion.div
                            key={item.category}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-w6-brand/20"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-w6-brand transition-colors group-hover:bg-w6-brand group-hover:text-white">
                                {item.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-w6-corporate-blue">
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
                            <h3 className="mb-6 font-display text-3xl font-bold text-w6-corporate-blue">
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
                            <h4 className="mb-6 flex items-center gap-2 text-xl font-bold">
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

function ServicesSection() {
    const services = [
        {
            title: 'Employee Transportation',
            desc: 'End-to-end mobility with route optimization, shift scheduling, and real-time monitoring.',
            icon: <Users size={24} />,
        },
        {
            title: 'Shuttle Services',
            desc: 'Dedicated fleet for fixed routes and regular corporate shuttle requirements.',
            icon: <Car size={24} />,
        },
        {
            title: 'Spot Rental',
            desc: 'On-demand premium vehicles for airport transfers, VIP pickups, and events.',
            icon: <Calendar size={24} />,
        },
        {
            title: 'Outstation Travel',
            desc: 'Customized plans for corporate retreats, industrial visits, and long-distance travel.',
            icon: <MapPin size={24} />,
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
                    <div className="max-w-2xl">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                            Our Services
                        </div>
                        <h2 className="font-display text-4xl font-bold text-w6-corporate-blue md:text-5xl">
                            Comprehensive{' '}
                            <span className="text-w6-brand">Mobility Solutions</span>
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm text-slate-500">
                        Tailored transportation services designed to meet the dynamic needs
                        of modern enterprises.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative overflow-hidden rounded-3xl border border-slate-100 p-10 transition-all hover:border-w6-brand/20"
                        >
                            <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-slate-50 transition-colors group-hover:bg-w6-brand/5" />
                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-w6-brand/10 text-w6-brand transition-all group-hover:bg-w6-brand group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-w6-corporate-blue">
                                {service.title}
                            </h3>
                            <p className="mb-8 leading-relaxed text-slate-500">
                                {service.desc}
                            </p>
                            <button
                                type="button"
                                className="flex items-center gap-2 text-sm font-bold text-w6-brand transition-all group-hover:gap-4"
                            >
                                View Details <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProfilePage() {
    return (
        <div className="pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                        Company Profile
                    </div>
                    <h1 className="mb-8 font-display text-5xl font-bold text-w6-corporate-blue md:text-7xl">
                        Our Journey & <span className="text-w6-brand">Vision</span>
                    </h1>
                    <div className="w6-glass-card mx-auto max-w-4xl rounded-3xl border-l-8 border-l-w6-brand p-10">
                        <p className="font-display text-2xl italic leading-relaxed text-w6-corporate-blue md:text-3xl">
                            &quot;Ensure an environment that clients, cab users, and staff
                            are proud to be part of.&quot;
                        </p>
                        <div className="mt-6 font-bold uppercase tracking-widest text-w6-brand">
                            Our Mission
                        </div>
                    </div>
                </div>

                <div className="mb-32 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-6 font-display text-3xl font-bold text-w6-corporate-blue">
                            From Startup to Structured Leader
                        </h2>
                        <p className="mb-6 text-lg leading-relaxed text-slate-600">
                            DTC Bharat began its journey in 2006 as a focused transportation
                            startup. Recognizing the need for professional, disciplined
                            mobility in the corporate sector, we incorporated in 2011 to
                            build a more structured organization.
                        </p>
                        <p className="mb-8 text-lg leading-relaxed text-slate-600">
                            Today, we stand as a technology-enabled partner for over 100
                            corporate clients, managing a fleet of 500+ vehicles with
                            precision and care.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    title: 'Vision',
                                    desc: "Become India's most trusted corporate transport partner through innovation and excellence.",
                                },
                                {
                                    title: 'Strengths',
                                    desc: 'Experienced leadership, disciplined maintenance, and seamless technology integration.',
                                },
                                {
                                    title: 'Future',
                                    desc: 'Expanding our footprint into all major metro cities across India.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                                >
                                    <h4 className="mb-2 font-bold text-w6-corporate-blue">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://picsum.photos/seed/office/800/1000"
                            className="rounded-3xl shadow-2xl"
                            alt="Office"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute -bottom-10 -right-10 flex h-48 w-48 rotate-3 items-center justify-center rounded-3xl bg-w6-brand p-8 text-white shadow-2xl">
                            <div className="text-center">
                                <Award size={40} className="mx-auto mb-2" />
                                <div className="text-sm font-bold uppercase tracking-tighter">
                                    Certified Excellence
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamPage() {
    const leaders = [
        {
            name: 'Sushil Yadav',
            role: 'Director Business Development',
            desc: 'Technology-driven founder with a vision for digital mobility.',
            img: 'https://i.pravatar.cc/300?u=sushil',
        },
        {
            name: 'Dr. Sudesh Yadav',
            role: 'Director HR & Maintenance',
            desc: 'Expert in preventive maintenance systems and human capital.',
            img: 'https://i.pravatar.cc/300?u=sudesh',
        },
        {
            name: 'Mahesh Kumar Yadav',
            role: 'Director Operations',
            desc: 'Specialist in structured deployment and fleet logistics.',
            img: 'https://i.pravatar.cc/300?u=mahesh',
        },
        {
            name: 'Amit Yadav',
            role: 'Head Finance & BD',
            desc: 'Strategist focusing on financial growth and business expansion.',
            img: 'https://i.pravatar.cc/300?u=amit',
        },
    ];

    return (
        <div className="bg-slate-50 pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                        Our Leadership
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold text-w6-corporate-blue">
                        The Minds Behind <span className="text-w6-brand">DTC Bharat</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-slate-500">
                        Our leadership team brings decades of combined experience in
                        transportation, technology, and corporate management.
                    </p>
                </div>

                <div className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {leaders.map((leader) => (
                        <motion.div
                            key={leader.name}
                            whileHover={{ y: -10 }}
                            className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="mb-1 text-xl font-bold text-w6-corporate-blue">
                                    {leader.name}
                                </h3>
                                <div className="mb-4 text-xs font-bold uppercase tracking-wider text-w6-brand">
                                    {leader.role}
                                </div>
                                <p className="text-sm leading-relaxed text-slate-500">
                                    {leader.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="rounded-3xl bg-w6-corporate-blue p-12 text-center text-white">
                    <h3 className="mb-4 text-2xl font-bold">Our Support Backbone</h3>
                    <p className="mx-auto mb-8 max-w-2xl text-slate-400">
                        Beyond our leadership, we are powered by a dedicated 24/7
                        operations desk, fleet supervisors, and certified professional
                        drivers who ensure every journey is safe and on time.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <Users className="text-w6-brand" />
                            <span className="font-semibold">200+ Professional Drivers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="text-w6-brand" />
                            <span className="font-semibold">50+ Operations Staff</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-w6-brand" />
                            <span className="font-semibold">24/7 Support Desk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ToursPage() {
    const tours = [
        {
            title: 'Agra-Mathura-Vrindavan',
            price: 'Rs 7,000',
            priceInnova: 'Rs 8,500',
            img: 'https://picsum.photos/seed/agra/600/400',
        },
        {
            title: 'Jaipur Pink City Tour',
            price: 'Rs 8,500',
            priceInnova: 'Rs 10,500',
            img: 'https://picsum.photos/seed/jaipur/600/400',
        },
        {
            title: 'Rishikesh & Haridwar',
            price: 'Rs 9,000',
            priceInnova: 'Rs 11,000',
            img: 'https://picsum.photos/seed/rishikesh/600/400',
        },
        {
            title: 'Corporate Offsites',
            price: 'Custom',
            priceInnova: 'Custom',
            img: 'https://picsum.photos/seed/offsite/600/400',
        },
    ];

    return (
        <div className="pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                        Tour Packages
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold text-w6-corporate-blue">
                        Explore with <span className="text-w6-brand">Comfort</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-slate-500">
                        Premium outstation travel solutions for corporate retreats, family
                        pilgrimages, and weekend getaways.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {tours.map((tour) => (
                        <div
                            key={tour.title}
                            className="group relative overflow-hidden rounded-3xl shadow-lg"
                        >
                            <img
                                src={tour.img}
                                alt={tour.title}
                                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <h3 className="mb-4 text-2xl font-bold text-white">
                                    {tour.title}
                                </h3>
                                <div className="mb-6 flex gap-6 text-sm text-white/80">
                                    <div className="flex items-center gap-2">
                                        <Car size={16} className="text-w6-brand" /> Sedan:{' '}
                                        <span className="font-bold text-white">{tour.price}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} className="text-w6-brand" /> Innova:{' '}
                                        <span className="font-bold text-white">
                                            {tour.priceInnova}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="rounded-full bg-w6-brand px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-w6-brand-dark"
                                >
                                    Book This Tour
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">
                    <h3 className="mb-6 text-xl font-bold text-w6-corporate-blue">
                        Package Inclusions:
                    </h3>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                        {[
                            'AC Luxury Vehicles',
                            'Professional Drivers',
                            'Toll & Taxes Included',
                            '24/7 Roadside Assist',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="text-w6-brand" size={18} />
                                <span className="font-medium text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactPage() {
    return (
        <div className="pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
                    <div>
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w6-brand">
                            Contact Us
                        </div>
                        <h1 className="mb-8 font-display text-5xl font-bold text-w6-corporate-blue">
                            Get in <span className="text-w6-brand">Touch</span>
                        </h1>
                        <p className="mb-12 text-lg text-slate-500">
                            Have a question or need to book a fleet? Our team is available
                            24/7 to assist you with your mobility needs.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-w6-brand/10 text-w6-brand">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-lg font-bold text-w6-corporate-blue">
                                        Our Location
                                    </h4>
                                    <p className="text-slate-500">
                                        Unit 705, Business Zone, TOWER-C, Nirvana Country, Sector 50, Gurugram, Haryana 122018
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-w6-brand/10 text-w6-brand">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-lg font-bold text-w6-corporate-blue">
                                        Hotline
                                    </h4>
                                    <p className="text-slate-500">+91 9899925362</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-w6-brand/10 text-w6-brand">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-lg font-bold text-w6-corporate-blue">
                                        Email Address
                                    </h4>
                                    <p className="text-slate-500">info@royalcorptravel.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center justify-between rounded-3xl bg-w6-corporate-blue p-8 text-white">
                            <div>
                                <h4 className="mb-1 font-bold">Need Instant Support?</h4>
                                <p className="text-sm text-slate-400">
                                    Chat with us on WhatsApp
                                </p>
                            </div>
                            <button
                                type="button"
                                className="flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white transition-all hover:bg-emerald-600"
                            >
                                <MessageSquare size={20} /> WhatsApp
                            </button>
                        </div>
                    </div>

                    <div className="w6-glass-card relative overflow-hidden rounded-[3rem] p-10">
                        <div className="absolute right-0 top-0 p-6 text-5xl opacity-10">🚕</div>
                        <h3 className="font-display mb-8 text-center text-3xl font-bold text-corporate-blue">
                            Book Your Cab
                        </h3>
                        <form className="space-y-10">
                            <div>
                                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                                    <Users size={18} /> Booked By
                                </h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Your Name" />
                                    <input type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Contact No." />
                                    <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Your Email" />
                                </div>
                            </div>
                            <div>
                                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                                    <Briefcase size={18} /> Booked For
                                </h4>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Name" />
                                    <input type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Contact No." />
                                    <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Email" />
                                </div>
                            </div>
                            <div>
                                <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                                    <Clock size={18} /> Scheduling
                                </h4>
                                <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <input type="text" placeholder="DD-MM-YY" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                                    <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Reporting Place" />
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <input type="text" placeholder="HH:MM AM/PM" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                                        <option>Select</option>
                                        <option>Hatchback</option>
                                        <option>Sedan</option>
                                        <option>SUV/MUV</option>
                                        <option>Bus</option>
                                    </select>
                                </div>
                            </div>
                            <textarea rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Special Instructions (if any)" />
                            <button type="button" className="electric-glow w-full rounded-2xl bg-brand py-5 text-lg font-bold text-white transition-all hover:bg-brand-dark">
                                Submit Booking
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Website6App() {
    const [activePage, setActivePage] = useState('home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    return (
        <div className="w6-root flex min-h-screen flex-col selection:bg-w6-brand selection:text-white">
            <Navbar activePage={activePage} setActivePage={setActivePage} />

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
                        {activePage === 'profile' && <ProfilePage />}
                        {activePage === 'services' && <ServicesSection />}
                        {activePage === 'team' && <TeamPage />}
                        {activePage === 'tours' && <ToursPage />}
                        {activePage === 'contact' && <ContactPage />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer setActivePage={setActivePage} />

            <motion.button
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                type="button"
                onClick={() => setActivePage('contact')}
                className="w6-electric-glow group fixed bottom-8 right-8 z-40 flex items-center gap-3 rounded-2xl bg-w6-brand px-6 py-4 font-bold text-white shadow-2xl"
            >
                <Car size={24} />
                <span className="hidden md:inline">Book Now</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-all group-hover:bg-white/30">
                    <ArrowRight size={16} />
                </div>
            </motion.button>
        </div>
    );
}


