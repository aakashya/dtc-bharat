import { Link, router } from '@inertiajs/react';
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
    contact: '/contact',
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
                <Link
                    href={PAGE_URLS.home}
                    prefetch
                    className="flex cursor-pointer items-center gap-3"
                >
                    <img
                        src="/images/logo/full-logo-no-bg-icon.PNG"
                        alt="Delphinium Travelcorp"
                        className="h-16 w-auto rounded-xl object-cover"
                    />
                    <div>
                        <h1
                            className={`font-display text-4xl font-bold leading-none ${
                                isHomePage && !isScrolled ? 'text-white' : 'text-w6-corporate-blue'
                            }`}
                        >
                            DTC <span className="text-w6-brand">BHARAT</span>
                        </h1>
                    </div>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
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
                            <Link
                                key={item.value}
                                href={PAGE_URLS[item.value]}
                                prefetch
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-left text-lg font-semibold ${
                                    activePage === item.value
                                        ? 'text-w6-brand'
                                        : 'text-w6-corporate-blue'
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href={PAGE_URLS.contact}
                            prefetch
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 rounded-2xl bg-w6-brand py-4 font-bold text-white"
                        >
                            Book a Cab Now
                        </Link>
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
                <div className="col-span-1 md:col-span-4">
                    <div className="mb-6 flex flex-col items-start gap-3">
                        <img
                            src="/images/logo/full-logo-no-bg-icon.PNG"
                            alt="Delphinium Travelcorp"
                            className="h-32 w-auto rounded-xl object-cover"
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

                <div className="md:col-span-2">
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
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h3 className="mb-6 text-lg font-bold">Our Services</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li>Employee Transportation</li>
                        <li>Shuttle Services</li>
                        <li>Spot Rental</li>
                        <li>Outstation Travel</li>
                        <li>VIP Airport Transfers</li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h3 className="mb-6 text-lg font-bold">Contact Us</h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li className="flex gap-3">
                            <MapPin size={18} className="shrink-0 text-w6-brand" />
                            <span>Unit 705, Business Zone, Tower-C, Nirvana Country, Sector 50, Gurugram, Haryana 122018</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone size={18} className="shrink-0 text-w6-brand" />
                            <span>+91 9899925362</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={18} className="shrink-0 text-w6-brand" />
                            <span>info@dtcbharat.com</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <h4 className="mb-4 text-sm font-semibold text-slate-300">
                            Follow Us Online
                        </h4>
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
                    <div className="relative z-10 overflow-hidden rounded-3xl bg-transparent ">
                        <img
                            src="/images/innova-crystaaa.webp"
                            alt="Toyota Innova SUV"
                            className="h-[30rem] w-auto max-w-none object-contain xl:h-[26rem]"
                            referrerPolicy="no-referrer"
                        />
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
                            { label: 'Users EveryDay', value: '600+' },
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
            desc: 'We ensure 100% legal compliance relevant to our business, including compliances related to our company, fleet vehicles, fleet drivers, and employees. This gives us and our customers “freedom to operate” from governmental, social, and other liabilities.',
        },
        {
            title: 'Satisfied Clients',
            icon: <Heart size={32} />,
            desc: 'In our journey of 11 years we have created a long list of satisfied customers & end users who are our ambassadors and they speak about our services. All our clients have been associated with us for a commendable period which speaks of our ability, stability & capability.',
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
                    <h2 className="font-display text-4xl font-bold text-corporate-blue md:text-5xl">
                        <span className="block">Why people choose</span>
                        <span className="mt-2 block text-brand">Delphinium Travelcorp</span>
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
    const trainingImages = ['/images/training/IMG_8316.jpeg', '/images/training/IMG_8317.jpeg'];
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
                        <div className="relative h-[420px] overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
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
            models: ['Suzuki Wagon-R', 'Suzuki Ritz', 'Hyundai Santro', 'Toyota Liva'],
            img: '/images/mg-windsor.png',
        },
        {
            category: 'Sedan',
            models: ['Hyundai Xcent', 'Suzuki Swift Dzire', 'Toyota Liva', 'Toyota Etios'],
            img: '/images/tigor-ev.avif',
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
        { name: 'Newspaper', image: '/images/accessories/newspaper3.png' },
        { name: 'Road Maps', image: '/images/accessories/map.avif' },
        { name: 'First Aid Kits', image: '/images/accessories/firstaid-kit.jpg' },
        { name: 'Wet Wipes', image: '/images/accessories/wet-wipes.png' },
        { name: 'Umbrellas', image: '/images/accessories/umbrella.avif' },
        { name: 'Flashlight', image: '/images/accessories/flashlight.png' },
        { name: 'Reading lights', image: '/images/accessories/reading-light.png' },
        { name: 'Phone', image: '/images/accessories/phone.png' },
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
                            <div
                                className={`mb-4 flex items-center justify-center rounded-2xl transition-all ${
                                    item.image
                                        ? 'h-48 w-48 bg-transparent'
                                        : 'h-12 w-12 bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white'
                                }`}
                            >
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-full w-full object-contain"
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
                    <div className="rounded-[3rem] bg-corporate-blue p-12 text-white">
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                            Business Profile
                        </div>
                        <h2 className="font-display mb-6 text-3xl font-bold">Our Commitment</h2>
                        <p className="mb-8 text-lg leading-relaxed text-slate-300">
                            The mission of Delphinium Travelcorp is to provide customers with long-term quality transportation solutions, which are cost-effective with the objective to be recognized as a preferred business partner with a high standard of safety and service.
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
                    <h2 className="font-display text-4xl font-bold text-corporate-blue">
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
    const [formType, setFormType] = useState('customer');

    const CustomerForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-2xl font-bold text-corporate-blue">
                Booking Form for Customers
            </h3>
            <form className="space-y-6">
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                        <Users size={18} /> Customer Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Full Name" />
                        <input type="tel" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Contact No." />
                        <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Email" />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                        <Clock size={18} /> Scheduling
                    </h4>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Reporting Place" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input type="time" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                            <option>Select Cab Type</option>
                            <option>Hatchback</option>
                            <option>Sedan</option>
                            <option>SUV/MUV</option>
                        </select>
                    </div>
                </div>
                <textarea rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Special Instructions (if any)" />
                <button type="button" className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark">
                    Book Now
                </button>
            </form>
        </>
    );

    const ClientForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-2xl font-bold text-corporate-blue">
                Booking Form for Clients
            </h3>
            <form className="space-y-8">
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
                        <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Reporting Place" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input type="time" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                            <option>Select</option>
                            <option>Hatchback</option>
                            <option>Sedan</option>
                            <option>SUV/MUV</option>
                            <option>Bus</option>
                        </select>
                    </div>
                </div>
                <textarea rows={3} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Special Instructions (if any)" />
                <button type="button" className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark">
                    Submit Booking
                </button>
            </form>
        </>
    );

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-center font-display text-4xl font-bold text-corporate-blue">
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

                    <div className="relative h-[1040px] md:h-[820px]">
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
                                <ClientForm />
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
                                <CustomerForm />
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
    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="mx-auto max-w-5xl">
                        <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Our Services</div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-corporate-blue">
                            Comprehensive <span className="text-brand">Mobility Solutions</span>
                        </h2>
                        <p className="mt-4 text-slate-500 text-sm md:text-base">
                            Tailored transportation services designed to meet the dynamic needs of modern enterprises.
                        </p>
                    </div>
                </div>

                <div className="mb-20">
                    <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-2/3">
                                    <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                                        <Users size={32} />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-corporate-blue mb-6">Employee Transportation</h3>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        DTC Bharat is one of the pioneers in providing Employee Transportation Solutions, expanding our service network at a PAN India level. We provide these solutions to large corporates with zero capital investment by them, allowing them to focus on their core area of business, leaving the operational hassles to an experienced service provider like Delphinium Travelcorp (DTC Bharat).
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h4 className="font-bold text-corporate-blue mb-4 flex items-center gap-2">
                                                <Briefcase className="text-brand" size={20} /> Industries Catered To:
                                            </h4>
                                            <ul className="space-y-3">
                                                {['BPOs & KPOs', 'IT, ITES & Consulting Companies', 'Real Estate', 'Telecom Companies', 'Banking and Financial Services'].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-corporate-blue mb-4 flex items-center gap-2">
                                                <Award className="text-brand" size={20} /> DTC Bharat Advantage:
                                            </h4>
                                            <ul className="space-y-3">
                                                {[
                                                    'Complete solutions with Routing, Rostering & Optimization',
                                                    'Fleet of 300+ vehicles, 36,000+ trips monthly',
                                                    'Customized MIS & Billing systems',
                                                    'GPS & GPRS enabled Safety Tracking',
                                                    '24/7 Dedicated Operational Support',
                                                    'PAN India Service Capability',
                                                    'Support for Adhoc transport services'
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                                        <CheckCircle2 className="text-brand shrink-0" size={16} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3">
                                    <div className="h-full rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
                                            alt="Employee Transport"
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: 'Shuttle Services',
                            desc: 'A Fix cab used as per Company requirement. Ideal for fixed working hours with a minimum running guarantee.',
                            icon: <RefreshCcw size={24} />,
                            img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop'
                        },
                        {
                            title: 'Spot Rental',
                            desc: 'On-the-spot or unscheduled cab requests entertained with premium vehicles for VIPs and events.',
                            icon: <Car size={24} />,
                            img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop'
                        },
                        {
                            title: 'Outstation Trip Packages',
                            desc: 'Professional outstation trip packages beyond Delhi NCR, tailored for corporate and individual needs.',
                            icon: <MapPin size={24} />,
                            img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop'
                        }
                    ].map((service, i) => (
                        <div key={i} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-corporate-blue mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                                <button type="button" className="flex items-center gap-2 text-brand font-bold text-xs group-hover:gap-4 transition-all">
                                    Learn More <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProfilePage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Company Profile</div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-corporate-blue mb-8">
                        Our Journey & <span className="text-brand">Vision</span>
                    </h1>
                    <div className="max-w-4xl mx-auto p-10 glass-card rounded-3xl border-l-8 border-l-brand">
                        <p className="text-2xl md:text-3xl font-display italic text-corporate-blue leading-relaxed">
                            “To ensure an environment that our Clients, Cab Users and Staff are proud to be a part of”
                        </p>
                        <div className="mt-6 font-bold text-brand uppercase tracking-widest">- Our Philosophy</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display font-bold text-corporate-blue mb-6">Profile Summary</h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            Founded in 2006 as Royal Travels, the organisation began with a clear vision to deliver dependable, disciplined, and professional transportation solutions to the evolving corporate sector. Under the dynamic leadership and foresight of its founder, <span className="font-bold text-corporate-blue">Dr. Sushil Ranvir Singh</span>, the company established a strong foundation built on operational integrity, service reliability, and an unwavering commitment to client satisfaction. From its earliest days, the organisation distinguished itself through professionalism and a results-driven approach, fostering long-term relationships with its corporate partners.
                        </p>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            With steady growth and expanding corporate trust, the enterprise was formally incorporated in 2011 as Royal Corptravel Private Limited, marking a significant milestone in its journey. This transition strengthened its corporate framework, enabling the company to scale its operations, streamline service standards, and effectively cater to the growing and sophisticated mobility requirements of corporate clients.
                        </p>
                    </motion.div>
                    <div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl" alt="Corporate Office" referrerPolicy="no-referrer" />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand rounded-[2rem] flex items-center justify-center text-white p-8 shadow-2xl rotate-3">
                                <div className="text-center">
                                    <Clock size={40} className="mx-auto mb-2" />
                                    <div className="text-sm font-bold uppercase tracking-tighter">Established 2006</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Driven by innovation and a forward-looking outlook, the organisation entered a new era in 2024 with its transformation into DTC Bharat. This evolution represents not merely a change of identity, but a strategic advancement towards adopting modern technology, enhanced compliance systems, and elevated standards of operational excellence in the corporate transportation sector.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Today, DTC Bharat, under the visionary guidance of its founder <span className="font-bold text-corporate-blue">Dr. Sushil Ranvir Singh</span>, stands as a progressive and trusted name in corporate mobility. With nearly two decades of industry experience, the organisation continues to set higher benchmarks in delivering secure, efficient, and seamless transportation solutions, tailored to the dynamic and ever-evolving needs of corporate India.
                        </p>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="bg-corporate-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                        <div className="relative z-10">
                            <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Business Profile</div>
                            <h2 className="text-4xl font-display font-bold mb-8">Our Mission & Commitment</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    The mission of Delphinium Travelcorp is to provide customers with long-term quality transportation solutions, which are cost effective with the objective to be recognized as a preferred business partner with a high standard of safety of service. We assure our esteemed customers for best transport solution available in a professional way.
                                </p>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    DTC Bharat is committed to maintaining the highest standard of safety, security and environmental protection always. This is achieved by investing in the training and future of all our employees. We operate a diverse fleet of vehicles however, these have one thing in common, that is they all operate to the same high standard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                        <h3 className="text-2xl font-display font-bold text-corporate-blue mb-8 flex items-center gap-3">
                            <Navigation className="text-brand" /> Cab Running Models
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'Fix Route based Cab Running Model',
                                'Multiple Trip Based Cab running Model',
                                'Adhoc Pickup & Drop',
                                'Spot Rental',
                                'Outstation Trips Packages'
                            ].map((model, i) => (
                                <li key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className="font-semibold text-corporate-blue">{model}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-12 bg-white rounded-[3rem] border border-slate-200 shadow-sm">
                        <h3 className="text-2xl font-display font-bold text-corporate-blue mb-8 flex items-center gap-3">
                            <Car className="text-brand" /> Our Fleet Consists of
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                            {[
                                { cat: 'Hatchback', models: 'WagonR, Ritz, Indica, Liva, Figo' },
                                { cat: 'Sedan', models: 'Indigo, Dzire, Xcent, Etios' },
                                { cat: 'SUV/MUV', models: 'Ertiga, Enjoy, Xylo, Tavera, Innova' },
                                { cat: 'Traveller', models: 'Force Traveller' },
                                { cat: 'Luxury', models: 'Premium Executive Vehicles' },
                                { cat: 'Buses', models: 'Mini & Luxury Coach Buses' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="font-bold text-corporate-blue">{item.cat}</div>
                                    <div className="text-xs text-slate-500 italic">{item.models}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-display font-bold text-corporate-blue mb-6">Growth & Vision</h2>
                        <p className="text-slate-600 text-lg mb-12 leading-relaxed">
                            We have grown to a fleet of over <span className="text-brand font-bold">300+ cars</span> to date, and have formed a wide network of vendors to increase capacity at short notice. This has been possible due to the sheer goodwill created because of the <span className="font-bold">QUALITY</span> of our services and the <span className="font-bold">VISION</span> of our core team.
                        </p>

                        <div className="inline-block p-1 bg-brand rounded-full mb-8">
                            <div className="bg-white px-10 py-4 rounded-full">
                                <p className="text-xl md:text-2xl font-display font-bold text-corporate-blue italic">
                                    “Safe & Joyful journey in excellent timings”
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            This is a commitment from the highest level of our management and its implementation and effectiveness is checked regularly to verify compliance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamPage() {
    const leaders = [
        {
            name: "Dr. Sushil Ranvir Singh",
            role: "Founder & Director",
            credentials: ["Ph.D.", "MBA", "LL.B.", "LL.M.", "BCA", "APDSE (Hons.)", "MCSE", "OCP", "DSM"],
            desc: "A visionary leader and the founder of Delphinium Travelcorp, Dr. Sushil Ranvir Singh has nurtured the organization from its inception. With a multi-faceted academic background and deep expertise in technology integration, he has been the driving force behind the company's phenomenal growth. He is committed to positioning India as Asia's premier travel destination while transforming Delphinium Travelcorp into a global benchmark for service excellence.",
            img: "/images/team/sushil.jpeg"
        },
    ];
    const additionalTeam = [
        {
            name: "Mrs. Pratibha",
            role: "Head - HR",
            credentials: ["BA", "DCM"],
            desc: "A dynamic leader in human resource management, she heads the company's HR function with a strong focus on organisational growth, people development, and operational discipline. She plays a vital role in building a professional, motivated, and high-performing workforce while ensuring smooth coordination across teams. With a keen understanding of talent management, employee relations, and workplace culture, she contributes significantly to strengthening the company's internal framework and long-term vision.",
            img: "/images/team/bhuaji-n.JPG",
        },
        {
            name: "Mr. Vikas",
            role: "Director of Global Brand & Digital Strategy",
            credentials: ["B.Com", "MSc. Business Analytics & Decision Sciences"],
            desc: "A strategic leader in brand development and digital innovation, He leads the organisation’s brand positioning, digital presence, and reputation strategy as Director of Brand & Digital Strategy. With a background in Business Analytics and experience in scaling international ventures, he drives brand growth through data-driven marketing, digital engagement, and strategic storytelling, strengthening the organisation’s global visibility and long-term market impact.",
            img: "/images/team/vi.jpg",
        },
        {
            name: "Mr. Vishal",
            role: "Transport Lead",
            credentials: ["Fleet Operations", "Route Planning", "Site Management"],
            desc: "As Transport Lead, he manages daily employee transport operations by leading drivers, coordinators, and transport vendors to ensure smooth execution. He plans and optimizes pickup and drop routes, monitors fleet movement through GPS systems, and maintains strong standards for safety, compliance, and service quality. He also resolves transport issues and employee complaints promptly, while maintaining MIS reports and coordinating closely with HR and Admin teams. His core objective is to deliver safe, efficient, and consistently on-time employee transportation.",
            img: "/images/team/vishal.jpg",
        },
        {
            name: "Adv. Chirag",
            role: "Legal Advisor",
            credentials: ["BA.LLB. Hons. (Gold Medalist)"],
            desc: "She serves as the Legal Advisor to the company, bringing strong legal expertise and strategic insight to its operations. As the Founder of The LawXpert, she specialises in corporate advisory, dispute resolution, and regulatory compliance. Her guidance ensures the company’s operations remain legally sound, transparent, and aligned with industry standards. Known for her precision and solution-oriented approach, she plays a key role in safeguarding the organisation’s interests and strengthening its governance framework.",
            img: "/images/team/chirag-n.JPG",
        },
    ];
    const additionalTeamDisplayOrder = ["Mr. Vikas", "Adv. Chirag", "Mrs. Pratibha", "Mr. Vishal"];
    const orderedAdditionalTeam = [...additionalTeam].sort(
        (a, b) => additionalTeamDisplayOrder.indexOf(a.name) - additionalTeamDisplayOrder.indexOf(b.name)
    );

    return (
        <div className="pt-32 pb-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Our Leadership</div>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-corporate-blue mb-6">The Visionary Behind <span className="text-brand">DTC Bharat</span></h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Leading with academic excellence and a passion for technological innovation in the transportation industry.
                    </p>
                </div>

                <div className="flex justify-center mb-24">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group max-w-3xl w-full flex flex-col md:flex-row"
                        >
                            <div className="md:w-2/5 h-80 md:h-auto overflow-hidden">
                                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>
                            <div className="md:w-3/5 p-10 flex flex-col justify-center">
                                <div className="mb-6">
                                    <div className="mb-2 inline-block">
                                        <h3 className="text-3xl font-display font-bold text-corporate-blue">
                                            {leader.name}
                                        </h3>
                                        <div className="mt-1 text-left md:text-right text-brand text-sm font-bold uppercase tracking-widest">
                                            {leader.role}
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {leader.credentials.map((credential) => (
                                            <span
                                                key={credential}
                                                className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold text-corporate-blue"
                                            >
                                                {credential}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-600 text-base leading-relaxed italic">
                                    "{leader.desc}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-24 mx-0 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-28">
                    {orderedAdditionalTeam.map((member, i) => (
                        <motion.div
                            key={`${member.name}-${i}`}
                            whileHover={{ y: -8 }}
                            className="group overflow-hidden rounded-[2.25rem] border border-slate-100 bg-white shadow-xl"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    referrerPolicy="no-referrer"
                                />
                            </div> 
                            <div className="p-8">
                                <h3 className="mb-1 text-2xl font-display font-bold text-corporate-blue">
                                    {member.name}
                                </h3>
                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand">
                                    {member.role}
                                </p>
                                <div className="mb-4 mt-3 flex flex-wrap gap-2">
                                    {member.credentials.map((credential) => (
                                        <span
                                            key={`${member.name}-${credential}`}
                                            className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold text-corporate-blue"
                                        >
                                            {credential}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {member.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-corporate-blue rounded-3xl p-12 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Our Support Backbone</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Beyond our leadership, we are powered by a dedicated 24/7 operations desk, fleet supervisors, and certified professional drivers who ensure every journey is safe and on time.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <Users className="text-brand" />
                            <span className="font-semibold">200+ Professional Drivers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="text-brand" />
                            <span className="font-semibold">50+ Operations Staff</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-brand" />
                            <span className="font-semibold">24/7 Support Desk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ToursPage({ setActivePage }) {
    const pricing = [
        { type: "Hatchback", seater: "4 Seater Cab", price: "₹7,500", original: "₹9,000" },
        { type: "Sedan", seater: "4 Seater Cab", price: "₹10,000", original: "₹12,000" },
        { type: "Innova", seater: "6 Seater Cab", price: "₹12,500", original: "₹15,000" },
    ];

    const places = [
        {
            name: "Agra Fort",
            desc: "Agra Fort in Agra is a UNESCO World Heritage site was built by Mughal Empire Akbar. It is located nearly 2 km from Historic Taj Mahal. The fort built by splendid red stone so it is also known as Lal Qila. The fort contains many palaces built by both red and white marble. Some palaces were built with traditional Gujarati and Bengali designs is a major tourist destiny of India.",
            img: "/images/tours/agra-fort.jpg"
        },
        {
            name: "Taj Mahal",
            desc: "Taj Mahal is one of the Seven Wonders of the World built by Saha Jahan for his beloved wife Mamtaz Mahal. Taj displays its different moods throughout the day through its varied shades, pinkish in the morning, milky white in the evening, golden when the moon shines. The tomb represents the house of the queen paradise and it is based on the palace garden of the great nobles on the both sides of river Yamuna in Agra. The Taj made up with white marble is a great attraction of India and is considered as a symbol of love.",
            img: "/images/tours/taj-mahal.webp"
        },
        {
            name: "Sikandra",
            desc: "Sikandra the Mausoleum of Mughal Emperor Akbar, is located in the city of Agra. The Monument was started by the Emperor himself. A visit to Sikandra opens before the tourists a complete lifestyle and personality of Empire Akbar including the arts, literature, philosophy & science during his period. The Construction of the pyramidal tomb was completed by Akbar’s son Jahangir.",
            img: "/images/tours/sikandra-agra.jpg"
        },
        {
            name: "Mathura",
            desc: "Mathura or Brij- Bhoomi is popularly known as the birthplace of Lord Krishna. The place is known as a holy place by Hindus and is one of the most religious place of India. Mathura is situated in 145km from Delhi. The city is known for its many temples dedicated to Hindu God & Goddesses. Many religious places like Vrindavan, Govardhan, Kusum Sarovar, Barsana and Nandgaon are surrounded to the holy city Mathura. Dwarkadesh temple of Mathura with beautiful, ethereal pictures depicting the entire life of Krishna. Mathura is a must visit place for Hindu devotees.",
            img: "/images/tours/mathura.jpg"
        },
        {
            name: "Vrindavan",
            desc: "Vrindavan, just 15km from Mathura is a sacred place for Hindu Religion. Vrindavan is the place where Lord Krishna spent his childhood days. This notable place is famous for its lovable characteristics of Lord Krishna with his beloved Radha. Vrindavan attracts Hindu deities for its numerous temples like Guru Govinda temple, Madon Mohan Temple. Millions of devotees visit Vrindavan in a number of festivals relates to the life of Krishna On earth. The Vrindavan Ashram for the devotees is also a great attraction for the Hindu pilgrims.",
            img: "/images/tours/vrindavan.jpg"
        }
    ];

    const itinerary = [
        { time: "06:00 AM", location: "Delhi/Gurgaon", event: "Departure" },
        { time: "08:30 AM", location: "Yamuna Expressway", event: "Breakfast Break (Arr. 08.30 AM Dep. 9.00 AM)" },
        { time: "11:00 AM", location: "Agra Fort", event: "Arrival & Sightseeing (Dep. 12.30 PM)" },
        { time: "12:30 PM", location: "Agra", event: "Shopping (Dep. 01.30 PM)" },
        { time: "01:30 PM", location: "Agra", event: "Lunch Break (Dep. 02.30 PM)" },
        { time: "02:30 PM", location: "Taj Mahal", event: "Arrival & Sightseeing (Dep. 04.30 PM)" },
        { time: "06:00 PM", location: "Mathura (Lord Krishna Temple)", event: "Arrival & Visit (Dep. 07.00 PM)" },
        { time: "07:15 PM", location: "Vrindavan", event: "Arrival & Visit (Dep. 08.15 PM)" },
        { time: "09:00 PM", location: "Yamuna Expressway", event: "Dinner Break (Arr. 09.00 PM Dep. 10.00 PM)" },
        { time: "11:30 PM", location: "Delhi/Gurgaon", event: "Arrival & Drop-off" },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Special Tour Package</div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-corporate-blue mb-6">
                        Agra - <span className="text-brand">Mathura</span> - Vrindavan
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Daily 16 Hours Tour (Dep. from 6.00 AM) starting from Gurgaon
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                            <div className="bg-corporate-blue p-8 text-white">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <h3 className="text-2xl font-bold flex items-center gap-3">
                                        <Car className="text-brand" /> Fleet Pricing
                                    </h3>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-slate-100">
                                        <Clock size={14} className="text-brand" />
                                        16+ Hours | 06:00 AM - 11:30 PM
                                    </div>
                                </div>
                            </div>
                            <div className="p-0">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="px-8 py-4 font-bold text-corporate-blue">Cab Type</th>
                                            <th className="px-8 py-4 font-bold text-corporate-blue">Capacity</th>
                                            <th className="px-8 py-4 font-bold text-corporate-blue text-right">Special Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pricing.map((p, i) => (
                                            <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                                <td className="px-8 py-6 font-bold text-corporate-blue">{p.type}</td>
                                                <td className="px-8 py-6 text-slate-500">{p.seater}</td>
                                                <td className="px-8 py-6 text-right">
                                                    <span className="text-slate-400 line-through text-sm mr-2">{p.original}</span>
                                                    <span className="text-xl font-bold text-brand">{p.price}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-brand/5 rounded-[2rem] p-8 border border-brand/10">
                            <h3 className="text-xl font-bold text-corporate-blue mb-6 flex items-center gap-2">
                                <Info className="text-brand" /> Please Note
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Passenger Must Carry ID proof",
                                    "Package Includes Cabs & Guide Only",
                                    "GST will be extra as per actual",
                                    "Above mentioned schedule is for ideal traffic conditions",
                                    "Departure 6.00 Am Arrival. 11.30 Pm Saturday & Sunday"
                                ].map((note, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={16} />
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-grow bg-slate-200" />
                        <h2 className="text-3xl font-display font-bold text-corporate-blue px-4">Places Covered</h2>
                        <div className="h-px flex-grow bg-slate-200" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {places.map((place, i) => (
                            <div key={i} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={place.img}
                                        alt={place.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-corporate-blue mb-4">{place.name}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{place.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-corporate-blue mb-4">Tour Itinerary</h2>
                        <p className="text-slate-500">Detailed schedule for the Agra - Mathura - Vrindavan experience</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12">
                            {itinerary.map((item, i) => (
                                <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-brand rounded-full -translate-x-1/2 z-10 border-4 border-white shadow-sm hidden md:block" />

                                    <div className="md:w-1/2">
                                        <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <div className="text-brand font-bold text-sm mb-1">{item.time}</div>
                                            <div className="text-lg font-bold text-corporate-blue mb-1">{item.location}</div>
                                            <div className="text-slate-500 text-sm">{item.event}</div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <button
                        type="button"
                        onClick={() => setActivePage('contact')}
                        className="bg-brand text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-brand-dark transition-all electric-glow"
                    >
                        Book This Tour Package
                    </button>
                </div>
            </div>
        </div>
    );
}

function ContactPage() {
    const [formType, setFormType] = useState('customer');

    const CustomerForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-2xl font-bold text-corporate-blue">
                Booking Form for Customers
            </h3>
            <form className="space-y-6">
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                        <Users size={18} /> Customer Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Full Name"
                        />
                        <input
                            type="tel"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Contact No."
                        />
                        <input
                            type="email"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-brand">
                        <Clock size={18} /> Scheduling
                    </h4>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="date"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <input
                            type="text"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Reporting Place"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="time"
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                            <option>Select Cab Type</option>
                            <option>Hatchback</option>
                            <option>Sedan</option>
                            <option>SUV/MUV</option>
                        </select>
                    </div>
                </div>
                <textarea
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                    placeholder="Special Instructions (if any)"
                />
                <button
                    type="button"
                    className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark"
                >
                    Book Now
                </button>
            </form>
        </>
    );

    const ClientForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-2xl font-bold text-corporate-blue">
                Booking Form for Clients
            </h3>
            <form className="space-y-8">
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
                        <input type="date" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Reporting Place" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input type="time" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                            <option>Select</option>
                            <option>Hatchback</option>
                            <option>Sedan</option>
                            <option>SUV/MUV</option>
                            <option>Bus</option>
                        </select>
                    </div>
                </div>
                <textarea rows={3} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Special Instructions (if any)" />
                <button
                    type="button"
                    className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark"
                >
                    Submit Booking
                </button>
            </form>
        </>
    );

    return (
        <div className="relative min-h-screen bg-slate-50 pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-10 text-center">
                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
                        Contact Us
                    </div>
                    <h1 className="font-display text-4xl font-bold text-corporate-blue md:text-6xl">
                        Get in <span className="text-brand">Touch</span>
                    </h1>
                </div>

                <div className="mb-10 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg md:p-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-corporate-blue md:text-base">Location</h4>
                                <p className="text-xs text-slate-500 md:text-sm">
                                    Unit 705, Business Zone, Tower-C, Sector 50, Gurugram
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-corporate-blue md:text-base">Phone Number</h4>
                                <p className="text-xs text-slate-500 md:text-sm">+91 9899925362</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-corporate-blue md:text-base">Email</h4>
                                <p className="text-xs text-slate-500 md:text-sm">info@dtcbharat.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="flex justify-center mb-12 p-1 bg-slate-200 rounded-2xl w-fit mx-auto relative z-30">
                        <button
                            onClick={() => setFormType('customer')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all relative z-10 ${
                                formType === 'customer' ? 'text-brand' : 'text-slate-500 hover:text-corporate-blue'
                            }`}
                        >
                            {formType === 'customer' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            For Customers
                        </button>
                        <button
                            onClick={() => setFormType('client')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all relative z-10 ${
                                formType === 'client' ? 'text-brand' : 'text-slate-500 hover:text-corporate-blue'
                            }`}
                        >
                            {formType === 'client' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            For Clients
                        </button>
                    </div>

                    <div className="relative h-[1040px] md:h-[820px]">
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
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-10 md:p-12 overflow-hidden cursor-pointer md:cursor-default"
                            onClick={() => formType === 'customer' && setFormType('client')}
                            whileHover={formType === 'customer' ? { x: 12, y: 12, opacity: 0.6 } : {}}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-corporate-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <ClientForm />
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
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-10 md:p-12 overflow-hidden cursor-pointer md:cursor-default"
                            onClick={() => formType === 'client' && setFormType('customer')}
                            whileHover={formType === 'client' ? { x: 12, y: 12, opacity: 0.6 } : {}}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="relative z-10">
                                <CustomerForm />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Website6App({ activePage = 'home' }) {
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
                        {activePage === 'profile' && <ProfilePage />}
                        {activePage === 'services' && <ServicesSection />}
                        {activePage === 'team' && <TeamPage />}
                        {activePage === 'tours' && <ToursPage setActivePage={setActivePage} />}
                        {activePage === 'contact' && <ContactPage />}
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
