import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
    Award,
    ArrowRight,
    Calendar,
    Car,
    CheckCircle2,
    Clock,
    Facebook,
    Globe,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    MessageSquare,
    Phone,
    Shield,
    Smartphone,
    Star,
    Twitter,
    Users,
    X,
    Zap,
} from 'lucide-react';

function Navbar({ activePage, setActivePage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/20"
                    />
                    <div>
                        <h1 className="font-display text-xl font-bold leading-none text-w5-corporate-blue">
                            Delphinium <span className="text-w5-brand">Travelcorp</span>
                        </h1>
                        <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">
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
                            className={`text-sm font-semibold transition-colors hover:text-w5-brand ${
                                activePage === item.value
                                    ? 'text-w5-brand'
                                    : 'text-w5-corporate-blue/70'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        type="button"
                        onClick={() => setActivePage('contact')}
                        className="flex items-center gap-2 rounded-full bg-w5-brand px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-w5-brand-dark w5-electric-glow"
                    >
                        Book a Cab Now
                    </button>
                </div>

                <button
                    type="button"
                    className="text-w5-corporate-blue md:hidden"
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
                                        ? 'text-w5-brand'
                                        : 'text-w5-corporate-blue'
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
                            className="mt-4 rounded-2xl bg-w5-brand py-4 font-bold text-white"
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
        <footer className="bg-w5-corporate-blue pb-10 pt-20 text-white">
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
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-w5-brand">
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
                            className="cursor-pointer text-slate-400 transition-colors hover:text-w5-brand"
                        />
                        <Twitter
                            size={20}
                            className="cursor-pointer text-slate-400 transition-colors hover:text-w5-brand"
                        />
                        <Linkedin
                            size={20}
                            className="cursor-pointer text-slate-400 transition-colors hover:text-w5-brand"
                        />
                        <Instagram
                            size={20}
                            className="cursor-pointer text-slate-400 transition-colors hover:text-w5-brand"
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
                                className="transition-colors hover:text-w5-brand"
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('profile')}
                                className="transition-colors hover:text-w5-brand"
                            >
                                Our Profile
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('services')}
                                className="transition-colors hover:text-w5-brand"
                            >
                                Services
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('team')}
                                className="transition-colors hover:text-w5-brand"
                            >
                                Our Team
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={() => setActivePage('tours')}
                                className="transition-colors hover:text-w5-brand"
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
                            <MapPin size={18} className="shrink-0 text-w5-brand" />
                            <span>Sector 34, Gurugram, Haryana, India</span>
                        </li>
                        <li className="flex gap-3">
                            <Phone size={18} className="shrink-0 text-w5-brand" />
                            <span>+91 124 444 4444</span>
                        </li>
                        <li className="flex gap-3">
                            <Mail size={18} className="shrink-0 text-w5-brand" />
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
            <div className="w5-futuristic-gradient pointer-events-none absolute inset-0 z-0" />
            <div className="pointer-events-none absolute -right-20 top-1/4 z-0 h-96 w-96 rounded-full bg-w5-brand/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 bottom-1/4 z-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-w5-brand backdrop-blur-md">
                        <Zap size={14} /> Established 2006
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-white md:text-7xl">
                        On Time. <br />
                        <span className="text-w5-brand">Round the Clock.</span>
                    </h1>
                    <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                        Precision-driven corporate mobility solutions built on safety,
                        performance, and enterprise-grade reliability.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={() => setActivePage('contact')}
                            className="group flex items-center gap-2 rounded-2xl bg-w5-brand px-8 py-4 font-bold text-white transition-all hover:bg-w5-brand-dark w5-electric-glow"
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
                            className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                        >
                            Explore Services
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[
                            { label: 'Availability', value: '24/7' },
                            { label: 'Operations', value: 'PAN India' },
                            { label: 'Clients', value: '100+' },
                            { label: 'Vehicles', value: '500+' },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                            >
                                <div className="font-display text-2xl font-bold text-w5-brand">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
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
                            src="https://picsum.photos/seed/corporate-car/800/600"
                            alt="Premium Fleet"
                            className="h-auto w-full"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-w5-corporate-blue/80 to-transparent" />
                        <div className="w5-glass-card absolute bottom-6 left-6 right-6 rounded-2xl p-6">
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-w5-brand text-white">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-w5-corporate-blue">
                                        Safety First Protocol
                                    </h4>
                                    <p className="text-xs text-slate-500">
                                        Real-time GPS & Panic Alert Systems
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute -right-10 -top-10 h-40 w-40 animate-pulse rounded-full border border-w5-brand/30" />
                    <div className="absolute -bottom-10 -left-10 h-60 w-60 rounded-full border border-white/10" />
                </motion.div>
            </div>
        </section>
    );
}

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
                        <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-8 border-white bg-w5-brand text-white shadow-2xl">
                            <div className="text-center">
                                <div className="text-2xl font-bold">18+</div>
                                <div className="text-[10px] font-bold uppercase">Years</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                            Our Legacy
                        </div>
                        <h2 className="mb-8 font-display text-4xl font-bold leading-tight text-w5-corporate-blue md:text-5xl">
                            A Structured Partner in{' '}
                            <span className="text-w5-brand">Corporate Mobility</span>
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
                                    <CheckCircle2 className="text-w5-brand" size={20} />
                                    <span className="font-semibold text-w5-corporate-blue">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={() => setActivePage('profile')}
                            className="group flex items-center gap-2 font-bold text-w5-corporate-blue transition-colors hover:text-w5-brand"
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
        {
            category: 'Bus',
            models: 'Traveller, Mini Bus, Luxury Bus',
            icon: <Users size={32} />,
        },
    ];

    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                        Our Fleet
                    </div>
                    <h2 className="mb-6 font-display text-4xl font-bold text-w5-corporate-blue md:text-5xl">
                        Diverse Fleet for Every Need
                    </h2>
                    <p className="text-lg text-slate-500">
                        From executive sedans to luxury buses, we maintain a high-quality
                        fleet equipped with modern safety and comfort features.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {fleet.map((item) => (
                        <motion.div
                            key={item.category}
                            whileHover={{ y: -10 }}
                            className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:border-w5-brand/20"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-w5-brand transition-colors group-hover:bg-w5-brand group-hover:text-white">
                                {item.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-w5-corporate-blue">
                                {item.category}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                {item.models}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="w5-glass-card mt-20 rounded-3xl p-10 md:p-16">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-6 font-display text-3xl font-bold text-w5-corporate-blue">
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
                                        <div className="text-w5-brand">{amenity.icon}</div>
                                        <span className="font-medium">{amenity.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-2xl bg-w5-corporate-blue p-8 text-white">
                            <h4 className="mb-6 flex items-center gap-2 text-xl font-bold">
                                <Shield className="text-w5-brand" /> Safety Compliance
                            </h4>
                            <ul className="space-y-4 text-sm text-slate-300">
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w5-brand" />
                                    <span>Real-time GPS tracking for all vehicles</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w5-brand" />
                                    <span>
                                        Panic alert buttons integrated with central control
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w5-brand" />
                                    <span>
                                        Strict female safety protocols for night drops
                                    </span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-w5-brand" />
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
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                            Our Services
                        </div>
                        <h2 className="font-display text-4xl font-bold text-w5-corporate-blue md:text-5xl">
                            Comprehensive{' '}
                            <span className="text-w5-brand">Mobility Solutions</span>
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
                            className="group relative overflow-hidden rounded-3xl border border-slate-100 p-10 transition-all hover:border-w5-brand/20"
                        >
                            <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-bl-full bg-slate-50 transition-colors group-hover:bg-w5-brand/5" />
                            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-w5-brand/10 text-w5-brand transition-all group-hover:bg-w5-brand group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-w5-corporate-blue">
                                {service.title}
                            </h3>
                            <p className="mb-8 leading-relaxed text-slate-500">
                                {service.desc}
                            </p>
                            <button
                                type="button"
                                className="flex items-center gap-2 text-sm font-bold text-w5-brand transition-all group-hover:gap-4"
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
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                        Company Profile
                    </div>
                    <h1 className="mb-8 font-display text-5xl font-bold text-w5-corporate-blue md:text-7xl">
                        Our Journey & <span className="text-w5-brand">Vision</span>
                    </h1>
                    <div className="w5-glass-card mx-auto max-w-4xl rounded-3xl border-l-8 border-l-w5-brand p-10">
                        <p className="font-display text-2xl italic leading-relaxed text-w5-corporate-blue md:text-3xl">
                            &quot;Ensure an environment that clients, cab users, and staff
                            are proud to be part of.&quot;
                        </p>
                        <div className="mt-6 font-bold uppercase tracking-widest text-w5-brand">
                            Our Mission
                        </div>
                    </div>
                </div>

                <div className="mb-32 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
                    <div>
                        <h2 className="mb-6 font-display text-3xl font-bold text-w5-corporate-blue">
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
                                    <h4 className="mb-2 font-bold text-w5-corporate-blue">
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
                        <div className="absolute -bottom-10 -right-10 flex h-48 w-48 rotate-3 items-center justify-center rounded-3xl bg-w5-brand p-8 text-white shadow-2xl">
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
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                        Our Leadership
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold text-w5-corporate-blue">
                        The Minds Behind <span className="text-w5-brand">DTC Bharat</span>
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
                                <h3 className="mb-1 text-xl font-bold text-w5-corporate-blue">
                                    {leader.name}
                                </h3>
                                <div className="mb-4 text-xs font-bold uppercase tracking-wider text-w5-brand">
                                    {leader.role}
                                </div>
                                <p className="text-sm leading-relaxed text-slate-500">
                                    {leader.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="rounded-3xl bg-w5-corporate-blue p-12 text-center text-white">
                    <h3 className="mb-4 text-2xl font-bold">Our Support Backbone</h3>
                    <p className="mx-auto mb-8 max-w-2xl text-slate-400">
                        Beyond our leadership, we are powered by a dedicated 24/7
                        operations desk, fleet supervisors, and certified professional
                        drivers who ensure every journey is safe and on time.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <Users className="text-w5-brand" />
                            <span className="font-semibold">200+ Professional Drivers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="text-w5-brand" />
                            <span className="font-semibold">50+ Operations Staff</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-w5-brand" />
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
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                        Tour Packages
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold text-w5-corporate-blue">
                        Explore with <span className="text-w5-brand">Comfort</span>
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
                                        <Car size={16} className="text-w5-brand" /> Sedan:{' '}
                                        <span className="font-bold text-white">{tour.price}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} className="text-w5-brand" /> Innova:{' '}
                                        <span className="font-bold text-white">
                                            {tour.priceInnova}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="rounded-full bg-w5-brand px-6 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-w5-brand-dark"
                                >
                                    Book This Tour
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">
                    <h3 className="mb-6 text-xl font-bold text-w5-corporate-blue">
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
                                <CheckCircle2 className="text-w5-brand" size={18} />
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
                        <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                            Contact Us
                        </div>
                        <h1 className="mb-8 font-display text-5xl font-bold text-w5-corporate-blue">
                            Get in <span className="text-w5-brand">Touch</span>
                        </h1>
                        <p className="mb-12 text-lg text-slate-500">
                            Have a question or need to book a fleet? Our team is available
                            24/7 to assist you with your mobility needs.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-w5-brand/10 text-w5-brand">
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-lg font-bold text-w5-corporate-blue">
                                        Our Location
                                    </h4>
                                    <p className="text-slate-500">
                                        Sector 34, Gurugram, Haryana, India
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-w5-brand/10 text-w5-brand">
                                    <Phone size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-lg font-bold text-w5-corporate-blue">
                                        Hotline
                                    </h4>
                                    <p className="text-slate-500">+91 124 444 4444</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-w5-brand/10 text-w5-brand">
                                    <Mail size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-1 text-lg font-bold text-w5-corporate-blue">
                                        Email Address
                                    </h4>
                                    <p className="text-slate-500">info@royalcorptravel.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center justify-between rounded-3xl bg-w5-corporate-blue p-8 text-white">
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

                    <div className="w5-glass-card rounded-3xl p-10">
                        <h3 className="mb-8 text-2xl font-bold text-w5-corporate-blue">
                            Booking Inquiry
                        </h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus:border-w5-brand focus:outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus:border-w5-brand focus:outline-none"
                                        placeholder="+91 00000 00000"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus:border-w5-brand focus:outline-none"
                                        placeholder="Enterprise Inc."
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Service Type
                                    </label>
                                    <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus:border-w5-brand focus:outline-none">
                                        <option>Employee Transportation</option>
                                        <option>Shuttle Service</option>
                                        <option>Spot Rental</option>
                                        <option>Outstation Travel</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Message / Requirements
                                </label>
                                <textarea
                                    rows={4}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors focus:border-w5-brand focus:outline-none"
                                    placeholder="Tell us about your requirements..."
                                />
                            </div>
                            <button
                                type="button"
                                className="w5-electric-glow w-full rounded-2xl bg-w5-brand py-4 font-bold text-white transition-all hover:bg-w5-brand-dark"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Website5App() {
    const [activePage, setActivePage] = useState('home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [activePage]);

    return (
        <div className="w5-root flex min-h-screen flex-col selection:bg-w5-brand selection:text-white">
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
                                <AboutSection setActivePage={setActivePage} />
                                <ServicesSection />
                                <FleetSection />

                                <section className="overflow-hidden bg-w5-corporate-blue py-24 text-white">
                                    <div className="mx-auto max-w-7xl px-6">
                                        <div className="mb-16 text-center">
                                            <div className="mb-4 text-sm font-bold uppercase tracking-widest text-w5-brand">
                                                Testimonials
                                            </div>
                                            <h2 className="font-display text-4xl font-bold">
                                                Trusted by Industry Leaders
                                            </h2>
                                        </div>
                                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                                            {[1, 2, 3].map((item) => (
                                                <div
                                                    key={item}
                                                    className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
                                                >
                                                    <div className="mb-6 flex gap-1 text-w5-brand">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star
                                                                key={star}
                                                                size={16}
                                                                fill="currentColor"
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="mb-8 italic text-slate-300">
                                                        &quot;DTC Bharat has been our
                                                        mobility partner for over 5 years.
                                                        Their commitment to safety and
                                                        timeliness is unmatched in the
                                                        industry.&quot;
                                                    </p>
                                                    <div className="flex items-center gap-4">
                                                        <div className="h-12 w-12 rounded-full bg-slate-700" />
                                                        <div>
                                                            <div className="font-bold">
                                                                HR Director
                                                            </div>
                                                            <div className="text-xs text-slate-500">
                                                                Fortune 500 Tech Firm
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-white py-24">
                                    <div className="mx-auto max-w-3xl px-6">
                                        <h2 className="mb-16 text-center font-display text-4xl font-bold text-w5-corporate-blue">
                                            Frequently Asked Questions
                                        </h2>
                                        <div className="space-y-6">
                                            {[
                                                {
                                                    q: 'What safety measures do you have for female employees?',
                                                    a: 'We have strict female safety protocols including mandatory GPS tracking, panic buttons, and verified driver backgrounds for all night drops.',
                                                },
                                                {
                                                    q: 'Do you provide real-time MIS reports?',
                                                    a: 'Yes, our technology platform provides comprehensive real-time MIS reporting for billing, route optimization, and attendance.',
                                                },
                                                {
                                                    q: 'What is your fleet availability?',
                                                    a: 'We operate 24/7 with a dedicated control room to manage round-the-clock shift requirements.',
                                                },
                                            ].map((faq) => (
                                                <div
                                                    key={faq.q}
                                                    className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
                                                >
                                                    <h4 className="mb-2 font-bold text-w5-corporate-blue">
                                                        {faq.q}
                                                    </h4>
                                                    <p className="text-sm text-slate-500">
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
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
                className="w5-electric-glow group fixed bottom-8 right-8 z-40 flex items-center gap-3 rounded-2xl bg-w5-brand px-6 py-4 font-bold text-white shadow-2xl"
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
