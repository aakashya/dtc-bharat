import { useEffect, useState } from 'react';
import {
    Activity,
    ArrowRight,
    BarChart3,
    Box,
    Car,
    ChevronRight,
    Cpu,
    Globe,
    Layers,
    Mail,
    MapPin,
    Menu,
    Navigation,
    Phone,
    ShieldCheck,
    Star,
    Users,
    Workflow,
    X,
    Zap,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'services', label: 'Services' },
    { id: 'team', label: 'Management' },
    { id: 'tours', label: 'Tours' },
    { id: 'contact', label: 'Contact' },
];

function Navbar({ currentPage, isMenuOpen, scrolled, setCurrentPage, setIsMenuOpen }) {
    return (
        <nav
            className={`fixed z-50 w-full transition-all duration-500 ${
                scrolled ? 'py-3' : 'py-5'
            }`}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-w2-brand px-6 py-3 shadow-2xl shadow-w2-brand/20">
                    <button
                        type="button"
                        className="group flex items-center"
                        onClick={() => setCurrentPage('home')}
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition-transform duration-500 group-hover:rotate-12">
                            <Car className="h-6 w-6 text-w2-brand" />
                        </div>
                        <div className="ml-4">
                            <span className="block font-display text-xl font-bold leading-none tracking-tight text-white">
                                ROYAL
                            </span>
                            <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-white/70">
                                CorpTravel
                            </span>
                        </div>
                    </button>

                    <div className="hidden items-center space-x-1 md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => setCurrentPage(link.id)}
                                className={`rounded-xl px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 ${
                                    currentPage === link.id
                                        ? 'bg-white text-w2-brand'
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <button
                            type="button"
                            onClick={() => setCurrentPage('contact')}
                            className="rounded-xl border border-white/10 bg-w2-ink px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:scale-105"
                        >
                            Connect
                        </button>
                    </div>

                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-white"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-6 right-6 top-full mt-4 overflow-hidden rounded-3xl border border-w2-ink/5 bg-white p-4 shadow-2xl md:hidden"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => setCurrentPage(link.id)}
                                className={`mb-1 block w-full rounded-2xl px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest transition-colors ${
                                    currentPage === link.id
                                        ? 'bg-w2-brand/10 text-w2-brand'
                                        : 'text-w2-ink/60 hover:bg-w2-surface'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-w2-ink/5 bg-white px-6 pb-20 pt-32">
            <div className="absolute right-0 top-0 -z-10 h-full w-1/2 translate-x-1/4 -skew-x-12 bg-w2-surface/50" />
            <div className="mx-auto max-w-7xl">
                <div className="mb-32 grid gap-16 md:grid-cols-4">
                    <div className="col-span-2">
                        <div className="mb-10 flex items-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-w2-brand shadow-lg shadow-w2-brand/20">
                                <Car className="h-6 w-6 text-white" />
                            </div>
                            <div className="ml-4">
                                <span className="block font-display text-2xl font-bold tracking-tight">
                                    ROYAL
                                </span>
                                <span className="block font-mono text-[10px] uppercase tracking-[0.5em] text-w2-brand">
                                    CorpTravel
                                </span>
                            </div>
                        </div>
                        <p className="mb-10 max-w-sm text-lg font-medium leading-relaxed text-w2-ink/60">
                            Engineering the future of corporate mobility through neural logistics
                            and precision engineering.
                        </p>
                        <div className="flex space-x-4">
                            {[Globe, Cpu, Zap].map((Icon, index) => (
                                <div
                                    key={index}
                                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-w2-ink/5 bg-w2-surface text-w2-ink/40 transition-all hover:border-w2-brand hover:text-w2-brand"
                                >
                                    <Icon size={18} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-10 text-[11px] font-bold uppercase tracking-[0.3em] text-w2-ink">
                            Capabilities
                        </h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest text-w2-ink/40">
                            {[
                                'Employee Sync',
                                'Shuttle Nodes',
                                'Instant Deployment',
                                'Deep Outstation',
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="group flex cursor-pointer items-center transition-colors hover:text-w2-brand"
                                >
                                    <ChevronRight
                                        size={14}
                                        className="-translate-x-2 mr-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-10 text-[11px] font-bold uppercase tracking-[0.3em] text-w2-ink">
                            Nexus
                        </h4>
                        <div className="space-y-6 text-sm font-medium text-w2-ink/60">
                            <div className="flex items-start">
                                <MapPin
                                    size={18}
                                    className="mr-4 mt-1 flex-shrink-0 text-w2-brand"
                                />
                                <span>
                                    Sector 34, Gurugram,
                                    <br />
                                    Haryana, India
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Phone
                                    size={18}
                                    className="mr-4 flex-shrink-0 text-w2-brand"
                                />
                                <span>+91 124 444 4444</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={18} className="mr-4 flex-shrink-0 text-w2-brand" />
                                <span>ops@royalcorp.io</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between border-t border-w2-ink/5 pt-12 md:flex-row">
                    <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.5em] text-w2-ink/30 md:mb-0">
                        // STATUS: OPERATIONAL // 2026 ROYAL CORPTRAVEL
                    </p>
                    <div className="flex items-center space-x-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-w2-ink/20">
                            Privacy Protocol
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-w2-ink/20">
                            Terms of Service
                        </span>
                        <div className="flex space-x-2">
                            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-w2-brand" />
                            <div className="h-1.5 w-1.5 rounded-full bg-w2-ink/10" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function HomePage({ setCurrentPage }) {
    return (
        <div className="relative">
            <section className="flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-20 pt-32">
                <div className="w2-grid-pattern absolute left-0 top-0 -z-10 h-full w-full opacity-40" />
                <div className="absolute -right-20 top-1/4 -z-10 h-96 w-96 rounded-full bg-w2-brand/5 blur-3xl" />

                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid items-center gap-20 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-10 inline-flex items-center space-x-3 rounded-full border border-w2-brand/20 bg-w2-brand/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-w2-brand">
                                <Activity size={12} />
                                <span>Neural Logistics v4.0 Active</span>
                            </div>
                            <h1 className="mb-10 font-display text-7xl font-bold leading-[0.9] tracking-tighter lg:text-9xl">
                                Pioneering
                                <br />
                                <span className="text-w2-brand">Mobility.</span>
                            </h1>
                            <p className="mb-12 max-w-xl text-xl font-medium leading-relaxed text-w2-ink/50 lg:text-2xl">
                                We engineer high-precision corporate transportation systems
                                designed for the next generation of global enterprises.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage('contact')}
                                    className="group flex items-center rounded-2xl bg-w2-brand px-10 py-5 text-[12px] font-bold uppercase tracking-widest text-white transition-all duration-500 hover:shadow-2xl hover:shadow-w2-brand/40"
                                >
                                    Initiate Sync
                                    <ArrowRight
                                        size={18}
                                        className="ml-3 transition-transform group-hover:translate-x-1"
                                    />
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setCurrentPage('services')}
                                    className="rounded-2xl border border-w2-ink/5 bg-w2-surface px-10 py-5 text-[12px] font-bold uppercase tracking-widest text-w2-ink transition-all duration-500 hover:bg-w2-ink hover:text-white"
                                >
                                    Explore Matrix
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="relative"
                        >
                            <div className="w2-perspective-1000 relative aspect-square">
                                <div className="absolute inset-0 -z-10 rotate-6 rounded-[60px] border border-w2-brand/10 bg-w2-brand/5" />
                                <div className="absolute inset-0 overflow-hidden rounded-[60px] border border-w2-ink/5 bg-white shadow-2xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
                                        className="h-full w-full object-cover grayscale transition-all duration-1000 hover:grayscale-0"
                                        alt="Modern Transport"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-w2-ink/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <div className="mb-2 text-[10px] font-bold uppercase tracking-widest text-white/60">
                                                    Active Fleet
                                                </div>
                                                <div className="font-display text-4xl font-bold tracking-tighter text-white">
                                                    1,240+ Units
                                                </div>
                                            </div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-w2-brand text-white shadow-lg">
                                                <Navigation size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-10 -top-10 hidden rounded-3xl border border-w2-ink/5 bg-white p-6 shadow-2xl xl:block">
                                <div className="mb-4 flex items-center space-x-4">
                                    <div className="h-3 w-3 animate-pulse rounded-full bg-w2-brand" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">
                                        Live Status
                                    </span>
                                </div>
                                <div className="font-display text-2xl font-bold tracking-tighter">
                                    99.9% Uptime
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="bg-w2-surface px-6 py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-12 md:grid-cols-3">
                        {[
                            {
                                icon: ShieldCheck,
                                title: 'Safety Protocol',
                                desc: 'Advanced driver vetting and biometric verification systems.',
                            },
                            {
                                icon: Workflow,
                                title: 'Neural Routing',
                                desc: 'AI-driven logistics ensuring zero-delay commute cycles.',
                            },
                            {
                                icon: BarChart3,
                                title: 'Data Analytics',
                                desc: 'Real-time reporting and cost optimization dashboards.',
                            },
                        ].map((stat) => (
                            <div key={stat.title} className="group">
                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-w2-ink/5 bg-white text-w2-brand shadow-sm transition-all duration-500 group-hover:bg-w2-brand group-hover:text-white group-hover:shadow-xl">
                                    <stat.icon size={32} />
                                </div>
                                <h3 className="mb-4 font-display text-2xl font-bold tracking-tight">
                                    {stat.title}
                                </h3>
                                <p className="font-medium leading-relaxed text-w2-ink/40">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-32">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
                        <div>
                            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.4em] text-w2-brand">
                                Hardware Matrix
                            </span>
                            <h2 className="font-display text-5xl font-bold leading-none tracking-tighter lg:text-7xl">
                                The Fleet.
                            </h2>
                        </div>
                        <p className="max-w-md text-xl font-medium text-w2-ink/40">
                            A diverse range of units engineered for every corporate mobility
                            scenario.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                type: 'Hatchback',
                                models: 'Wagon-R, Ritz, Liva',
                                icon: Box,
                                color: 'bg-blue-500',
                            },
                            {
                                type: 'Sedan',
                                models: 'Dzire, Xcent, Etios',
                                icon: Layers,
                                color: 'bg-purple-500',
                            },
                            {
                                type: 'SUV/MUV',
                                models: 'Ertiga, Innova, Xylo',
                                icon: Cpu,
                                color: 'bg-emerald-500',
                            },
                            {
                                type: 'Bus',
                                models: 'Traveller, Mini Bus, Coach',
                                icon: Globe,
                                color: 'bg-orange-500',
                            },
                        ].map((item) => (
                            <div
                                key={item.type}
                                className="group rounded-[40px] border border-w2-ink/5 bg-w2-surface p-10 transition-all duration-500 hover:bg-white hover:shadow-2xl"
                            >
                                <div
                                    className={`mb-10 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg ${item.color}`}
                                >
                                    <item.icon size={28} />
                                </div>
                                <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-w2-ink/30">
                                    {item.type}
                                </h3>
                                <p className="mb-8 font-display text-xl font-bold">
                                    {item.models}
                                </p>
                                <div className="flex cursor-pointer items-center text-[10px] font-bold uppercase tracking-widest text-w2-brand transition-transform group-hover:translate-x-2">
                                    View Specs <ChevronRight size={14} className="ml-1" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProfilePage() {
    return (
        <div className="px-6 pb-32 pt-48">
            <div className="mx-auto max-w-7xl">
                <div className="mb-40 grid items-center gap-24 lg:grid-cols-2">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                        <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.4em] text-w2-brand">
                            Legacy & Vision
                        </span>
                        <h1 className="mb-12 font-display text-6xl font-bold leading-[0.9] tracking-tighter lg:text-8xl">
                            Royal
                            <br />
                            CorpTravel.
                        </h1>
                        <p className="mb-12 text-2xl font-medium leading-tight text-w2-ink/60">
                            Incorporated in 2011, evolving from a visionary startup in 2006. We
                            are the architects of modern corporate transit.
                        </p>
                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { val: '20+', label: 'Years Exp' },
                                { val: '1.2k', label: 'Fleet Size' },
                                { val: '50+', label: 'Clients' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="mb-1 font-display text-4xl font-bold tracking-tighter">
                                        {stat.val}
                                    </div>
                                    <div className="text-[9px] font-bold uppercase tracking-widest text-w2-ink/30">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <div className="relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-[60px] border border-w2-ink/5 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                                className="h-full w-full object-cover"
                                alt="Office"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 max-w-xs rounded-[40px] bg-w2-brand p-10 text-white shadow-2xl">
                            <Star className="mb-6" size={32} />
                            <p className="text-lg font-medium italic leading-relaxed">
                                "To ensure an environment that our Clients, Cab Users and Staff are
                                proud to be a part of."
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-[60px] border border-w2-ink/5 bg-w2-surface p-16 lg:p-24">
                    <div className="max-w-3xl">
                        <h2 className="mb-10 font-display text-4xl font-bold tracking-tight">
                            Operational Philosophy
                        </h2>
                        <p className="mb-12 text-xl font-medium leading-relaxed text-w2-ink/60">
                            RCPL professionally manages Corporate Travel with a mission to provide
                            long-term quality transportation solutions. Our philosophy is built on
                            safety, punctuality, and deep technological integration.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            {['Safety First', 'Punctuality', 'Scalability', 'Innovation'].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-w2-ink/5 bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest shadow-sm"
                                    >
                                        {tag}
                                    </span>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServicesPage() {
    return (
        <div className="px-6 pb-32 pt-48">
            <div className="mx-auto max-w-7xl">
                <div className="mb-32 text-center">
                    <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.4em] text-w2-brand">
                        Capabilities
                    </span>
                    <h1 className="font-display text-6xl font-bold leading-none tracking-tighter lg:text-9xl">
                        Service Matrix.
                    </h1>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {[
                        {
                            title: 'Employee Sync',
                            desc: 'Dedicated routing systems for large-scale workforce mobility.',
                            icon: Users,
                        },
                        {
                            title: 'Shuttle Nodes',
                            desc: 'Fixed-route logistics with guaranteed uptime and precision timing.',
                            icon: MapPin,
                        },
                        {
                            title: 'Instant Deployment',
                            desc: 'On-demand vehicle allocation for unscheduled requirements.',
                            icon: Zap,
                        },
                        {
                            title: 'Deep Outstation',
                            desc: 'Extended range operations with expert long-distance drivers.',
                            icon: Globe,
                        },
                    ].map((service) => (
                        <motion.div
                            key={service.title}
                            whileHover={{ y: -10 }}
                            className="group rounded-[60px] border border-w2-ink/5 bg-w2-surface p-16 transition-all duration-500 hover:bg-white hover:shadow-2xl"
                        >
                            <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-w2-brand shadow-sm transition-all duration-500 group-hover:bg-w2-brand group-hover:text-white">
                                <service.icon size={40} />
                            </div>
                            <h3 className="mb-6 font-display text-4xl font-bold tracking-tight">
                                {service.title}
                            </h3>
                            <p className="mb-10 text-xl font-medium leading-relaxed text-w2-ink/40">
                                {service.desc}
                            </p>
                            <button
                                type="button"
                                className="flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-w2-brand transition-transform group-hover:translate-x-2"
                            >
                                Configure Module <ChevronRight size={16} className="ml-2" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function TeamPage() {
    const team = [
        {
            name: 'Sushil Yadav',
            role: 'Director - Business Development',
            quals: ['BCA', 'LL.B', 'MBA', 'MCSE', 'OCP'],
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
        },
        {
            name: 'Dr. Sudesh Yadav',
            role: 'Director - HR & Maintenance',
            quals: ['PhD', 'LL.B'],
            img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
        },
        {
            name: 'Mahesh Kumar Yadav',
            role: 'Director - Operations',
            quals: ['MPM', '21+ Yrs Exp'],
            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
        },
        {
            name: 'Amit Yadav',
            role: 'Head - Finance & BD',
            quals: ['MBA', '20+ Yrs Exp'],
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
        },
    ];

    return (
        <div className="px-6 pb-32 pt-48">
            <div className="mx-auto max-w-7xl">
                <div className="mb-32">
                    <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.4em] text-w2-brand">
                        Leadership
                    </span>
                    <h1 className="font-display text-6xl font-bold leading-none tracking-tighter lg:text-8xl">
                        Management Nexus.
                    </h1>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <div key={member.name} className="group">
                            <div className="mb-8 aspect-[3/4] overflow-hidden rounded-[40px] border border-w2-ink/5 grayscale transition-all duration-700 group-hover:grayscale-0">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <h3 className="mb-2 font-display text-2xl font-bold tracking-tight">
                                {member.name}
                            </h3>
                            <p className="mb-6 text-[10px] font-bold uppercase tracking-widest text-w2-brand">
                                {member.role}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {member.quals.map((qualification) => (
                                    <span
                                        key={qualification}
                                        className="rounded-full border border-w2-ink/5 bg-w2-surface px-3 py-1 text-[8px] font-bold uppercase tracking-widest text-w2-ink/40"
                                    >
                                        {qualification}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ToursPage() {
    return (
        <div className="px-6 pb-32 pt-48">
            <div className="mx-auto max-w-7xl">
                <div className="mb-32">
                    <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.4em] text-w2-brand">
                        Exploration
                    </span>
                    <h1 className="font-display text-6xl font-bold leading-none tracking-tighter lg:text-8xl">
                        Tour Modules.
                    </h1>
                </div>

                <div className="grid gap-12 lg:grid-cols-3">
                    {[
                        {
                            title: 'Agra Fort Nexus',
                            loc: 'Agra, UP',
                            img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80',
                        },
                        {
                            title: 'Taj Mahal Module',
                            loc: 'Agra, UP',
                            img: 'https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?auto=format&fit=crop&q=80',
                        },
                        {
                            title: 'Vrindavan Sync',
                            loc: 'Mathura, UP',
                            img: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc2001?auto=format&fit=crop&q=80',
                        },
                    ].map((tour) => (
                        <div key={tour.title} className="group">
                            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-[40px] border border-w2-ink/5">
                                <img
                                    src={tour.img}
                                    alt={tour.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute right-6 top-6 flex items-center rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-widest backdrop-blur-md">
                                    <MapPin size={12} className="mr-2 text-w2-brand" />
                                    {tour.loc}
                                </div>
                            </div>
                            <h3 className="mb-4 font-display text-3xl font-bold tracking-tight">
                                {tour.title}
                            </h3>
                            <p className="mb-8 font-medium text-w2-ink/40">
                                High-precision guided tour module with dedicated transit and
                                expert curation.
                            </p>
                            <button
                                type="button"
                                className="w-full rounded-2xl bg-w2-surface py-5 text-[11px] font-bold uppercase tracking-widest transition-all duration-500 hover:bg-w2-brand hover:text-white"
                            >
                                Book Module
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ContactPage() {
    return (
        <div className="px-6 pb-32 pt-48">
            <div className="mx-auto max-w-7xl">
                <div className="mb-32">
                    <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.4em] text-w2-brand">
                        Communication
                    </span>
                    <h1 className="font-display text-6xl font-bold leading-none tracking-tighter lg:text-8xl">
                        Nexus Contact.
                    </h1>
                </div>

                <div className="grid gap-24 lg:grid-cols-2">
                    <div className="space-y-12">
                        {[
                            {
                                label: 'Physical Node',
                                val: 'Sector 34, Gurugram, HR',
                                icon: MapPin,
                            },
                            { label: 'Voice Link', val: '+91 124 444 4444', icon: Phone },
                            { label: 'Data Stream', val: 'ops@royalcorp.io', icon: Mail },
                        ].map((item) => (
                            <div key={item.label} className="group flex items-start">
                                <div className="mr-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-w2-ink/5 bg-w2-surface text-w2-brand transition-all duration-500 group-hover:bg-w2-brand group-hover:text-white">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-[10px] font-bold uppercase tracking-widest text-w2-ink/20">
                                        {item.label}
                                    </h4>
                                    <p className="font-display text-3xl font-bold tracking-tighter">
                                        {item.val}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative overflow-hidden rounded-[60px] border border-w2-ink/5 bg-white p-12 shadow-2xl lg:p-16">
                        <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-w2-brand/5 blur-2xl" />
                        <h2 className="mb-12 font-display text-2xl font-bold tracking-tight">
                            Inquiry Protocol
                        </h2>
                        <form className="space-y-8" onSubmit={(event) => event.preventDefault()}>
                            <div className="space-y-2">
                                <label className="ml-4 text-[9px] font-bold uppercase tracking-widest text-w2-ink/30">
                                    Identity
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full rounded-2xl border border-w2-ink/5 bg-w2-surface p-6 font-medium outline-none transition-all focus:border-w2-brand"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="ml-4 text-[9px] font-bold uppercase tracking-widest text-w2-ink/30">
                                    Comms Link
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="w-full rounded-2xl border border-w2-ink/5 bg-w2-surface p-6 font-medium outline-none transition-all focus:border-w2-brand"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-2xl bg-w2-brand py-6 text-[12px] font-bold uppercase tracking-widest text-white shadow-xl shadow-w2-brand/20 transition-all duration-500 hover:shadow-w2-brand/40"
                            >
                                Transmit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatusTicker() {
    return (
        <div className="fixed bottom-0 left-0 z-40 w-full overflow-hidden border-t border-white/5 bg-w2-ink py-2">
            <div className="w2-animate-marquee flex whitespace-nowrap">
                {[...Array(10)].map((_, index) => (
                    <span
                        key={index}
                        className="px-12 font-mono text-[9px] uppercase tracking-[0.4em] text-white/40"
                    >
                        // SYSTEM: <span className="text-w2-brand">OPTIMAL</span> // FLEET:
                        SYNCED // NODES: 12/12 // LOGISTICS: ACTIVE //
                    </span>
                ))}
            </div>
        </div>
    );
}

export default function Website2App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [currentPage]);

    return (
        <div className="w2-root min-h-screen">
            <Navbar
                currentPage={currentPage}
                isMenuOpen={isMenuOpen}
                scrolled={scrolled}
                setCurrentPage={setCurrentPage}
                setIsMenuOpen={setIsMenuOpen}
            />
            <StatusTicker />
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
                        {currentPage === 'profile' && <ProfilePage />}
                        {currentPage === 'services' && <ServicesPage />}
                        {currentPage === 'team' && <TeamPage />}
                        {currentPage === 'tours' && <ToursPage />}
                        {currentPage === 'contact' && <ContactPage />}
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
}
