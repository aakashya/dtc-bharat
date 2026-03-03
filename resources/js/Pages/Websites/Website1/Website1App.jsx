import { useEffect, useState, cloneElement } from 'react';
import {
    Activity,
    ArrowRight,
    Box,
    Car,
    Coffee,
    Cpu,
    Globe,
    Layers,
    Mail,
    Map,
    MapPin,
    Menu,
    Phone,
    Shield,
    Users,
    Wind,
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

function Navbar({ currentPage, isMenuOpen, setCurrentPage, setIsMenuOpen }) {
    return (
        <nav className="fixed z-50 w-full px-4 py-6">
            <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 w1-glass">
                <button
                    type="button"
                    className="group flex cursor-pointer items-center"
                    onClick={() => setCurrentPage('home')}
                >
                    <div className="mr-3 rounded-lg bg-w1-brand p-2 shadow-[0_0_15px_rgba(255,87,87,0.5)] transition-transform group-hover:rotate-12">
                        <Car className="h-6 w-6 text-white" />
                    </div>
                    <div>
                        <span className="w1-neon-text text-2xl font-black tracking-tighter">
                            ROYAL
                        </span>
                        <div className="-mt-1 text-[10px] font-mono uppercase tracking-[0.4em] text-w1-brand opacity-80">
                            CorpTravel
                        </div>
                    </div>
                </button>

                <div className="hidden space-x-8 md:flex">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            type="button"
                            onClick={() => setCurrentPage(link.id)}
                            className={`relative text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:text-w1-brand ${
                                currentPage === link.id ? 'text-w1-brand' : 'text-white/60'
                            }`}
                        >
                            {link.label}
                            {currentPage === link.id && (
                                <motion.div
                                    layoutId="w1-nav-underline"
                                    className="absolute -bottom-2 left-0 h-0.5 w-full bg-w1-brand shadow-[0_0_10px_rgba(255,87,87,0.8)]"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 text-w1-brand"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-4 overflow-hidden rounded-2xl md:hidden w1-glass"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                type="button"
                                onClick={() => {
                                    setCurrentPage(link.id);
                                    setIsMenuOpen(false);
                                }}
                                className="block w-full border-b border-white/5 px-8 py-4 text-left text-xs font-mono uppercase tracking-widest text-white/80 transition-colors hover:bg-w1-brand/10 hover:text-w1-brand"
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

function Footer({ setCurrentPage }) {
    return (
        <footer className="border-t border-white/5 bg-w1-dark-bg pb-10 pt-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 grid gap-12 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <div className="mb-6 flex items-center">
                            <Car className="mr-2 h-6 w-6 text-w1-brand" />
                            <span className="text-xl font-black tracking-tighter">
                                ROYAL
                            </span>
                        </div>
                        <p className="text-sm font-light leading-relaxed text-white/40">
                            Established 2006. Pioneering futuristic corporate mobility with
                            safety, precision, and joy.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-6 text-xs font-mono uppercase tracking-widest text-w1-brand">
                            Navigation
                        </h4>
                        <ul className="space-y-3 text-sm font-light text-white/40">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        type="button"
                                        className="transition-colors hover:text-w1-brand"
                                        onClick={() => setCurrentPage(link.id)}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-xs font-mono uppercase tracking-widest text-w1-brand">
                            Services
                        </h4>
                        <ul className="space-y-3 text-sm font-light text-white/40">
                            <li>Neural Logistics</li>
                            <li>Employee Sync</li>
                            <li>Instant Deployment</li>
                            <li>Deep Outstation</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-6 text-xs font-mono uppercase tracking-widest text-w1-brand">
                            Nexus
                        </h4>
                        <div className="space-y-4 text-sm text-white/40">
                            <p className="flex items-center font-light">
                                <MapPin size={14} className="mr-3 text-w1-brand" /> Sector 34,
                                Gurugram, HR
                            </p>
                            <p className="flex items-center font-light">
                                <Phone size={14} className="mr-3 text-w1-brand" /> +91 124 444
                                4444
                            </p>
                            <p className="flex items-center font-light">
                                <Mail size={14} className="mr-3 text-w1-brand" /> ops@royalcorp.io
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
                    <p className="mb-4 text-[10px] font-mono uppercase tracking-widest text-white/20 md:mb-0">
                        // STATUS: OPERATIONAL // 2026 ROYAL CORPTRAVEL
                    </p>
                    <div className="flex space-x-6">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-w1-brand" />
                        <div className="h-2 w-2 rounded-full bg-w1-brand/40" />
                        <div className="h-2 w-2 rounded-full bg-w1-brand/20" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

function HomePage({ setCurrentPage }) {
    return (
        <div className="relative overflow-hidden w1-scanline">
            <section className="relative flex min-h-screen items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 z-10 bg-gradient-to-b from-w1-dark-bg via-transparent to-w1-dark-bg" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,87,87,0.05)_0%,transparent_70%)]" />
                    <img
                        src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80"
                        className="h-full w-full object-cover opacity-20 grayscale"
                        alt="Futuristic City"
                    />
                </div>

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="mb-6 flex items-center space-x-3">
                            <div className="h-[1px] w-12 bg-w1-brand" />
                            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-w1-brand">
                                Next-Gen Mobility
                            </span>
                        </div>
                        <h1 className="mb-8 text-6xl font-black leading-[0.9] tracking-tighter md:text-8xl">
                            PRECISION
                            <br />
                            <span className="bg-gradient-to-r from-w1-brand to-white/40 bg-clip-text text-transparent">
                                MOTION.
                            </span>
                        </h1>
                        <p className="mb-12 max-w-xl text-lg font-light leading-relaxed text-white/60 md:text-xl">
                            Redefining corporate logistics with real-time neural routing and a
                            fleet built for the future. On-time, every time, across the nexus.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <button
                                type="button"
                                onClick={() => setCurrentPage('contact')}
                                className="group flex items-center rounded-sm bg-w1-brand px-10 py-5 text-xs font-mono uppercase tracking-widest text-white transition-all hover:shadow-[0_0_30px_rgba(255,87,87,0.4)]"
                            >
                                Initiate Booking
                                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                type="button"
                                onClick={() => setCurrentPage('services')}
                                className="rounded-sm border border-white/20 px-10 py-5 text-xs font-mono uppercase tracking-widest text-white transition-all hover:bg-white/5"
                            >
                                System Overview
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-20 right-6 hidden xl:block">
                    <div className="min-w-[300px] space-y-8 rounded-2xl p-8 w1-glass">
                        {[
                            {
                                label: 'Uptime',
                                value: '99.98%',
                                icon: <Activity className="h-4 w-4 text-w1-brand" />,
                            },
                            {
                                label: 'Active Fleet',
                                value: '1,240+',
                                icon: <Cpu className="h-4 w-4 text-w1-brand" />,
                            },
                            {
                                label: 'Neural Nodes',
                                value: '12 Cities',
                                icon: <Layers className="h-4 w-4 text-w1-brand" />,
                            },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="flex items-center justify-between"
                            >
                                <div className="flex items-center">
                                    {stat.icon}
                                    <span className="ml-3 text-[10px] font-mono uppercase text-white/40">
                                        {stat.label}
                                    </span>
                                </div>
                                <span className="font-mono text-lg font-bold">{stat.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-w1-dark-bg py-32">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="mb-4 text-4xl font-black uppercase tracking-tighter">
                                Fleet Matrix
                            </h2>
                            <div className="h-1 w-12 bg-w1-brand" />
                        </div>
                        <p className="max-w-md text-sm font-light text-white/40">
                            Our hardware is meticulously maintained and upgraded to ensure maximum
                            performance and passenger safety across all sectors.
                        </p>
                    </div>

                    <div className="grid gap-px border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                type: 'Hatchback',
                                models: ['Wagon-R', 'Ritz', 'Liva'],
                                icon: <Box />,
                            },
                            {
                                type: 'Sedan',
                                models: ['Dzire', 'Xcent', 'Etios'],
                                icon: <Layers />,
                            },
                            {
                                type: 'SUV/MUV',
                                models: ['Ertiga', 'Innova', 'Xylo'],
                                icon: <Cpu />,
                            },
                            {
                                type: 'Bus',
                                models: ['Traveller', 'Mini Bus', 'Coach'],
                                icon: <Globe />,
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.type}
                                whileHover={{ backgroundColor: 'rgba(255,87,87,0.05)' }}
                                className="group bg-w1-dark-bg p-10 transition-colors"
                            >
                                <div className="mb-8 text-w1-brand transition-transform group-hover:scale-110">
                                    {cloneElement(item.icon, { size: 32 })}
                                </div>
                                <h3 className="mb-6 text-xs font-mono uppercase tracking-[0.3em] text-white/40">
                                    {item.type}
                                </h3>
                                <ul className="space-y-3">
                                    {item.models.map((model) => (
                                        <li
                                            key={model}
                                            className="flex items-center text-sm font-light"
                                        >
                                            <div className="mr-3 h-1 w-1 rounded-full bg-w1-brand/40" />
                                            {model}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-32">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid items-center gap-20 lg:grid-cols-2">
                        <div className="relative">
                            <div className="absolute -left-20 -top-20 aspect-square w-[140%] animate-[spin_20s_linear_infinite] rounded-full border border-white/5" />
                            <div className="relative z-10 rotate-2 rounded-3xl p-4 w1-glass">
                                <img
                                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80"
                                    className="h-[500px] w-full rounded-2xl object-cover brightness-50 grayscale"
                                    alt="Interior"
                                />
                                <div className="absolute inset-0 rounded-2xl bg-w1-brand/10 mix-blend-overlay" />
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-8 text-4xl font-black uppercase leading-none tracking-tighter">
                                ENHANCED
                                <br />
                                <span className="text-w1-brand">MODULES.</span>
                            </h2>
                            <p className="mb-12 font-light leading-relaxed text-white/40">
                                Every unit is equipped with standard-issue comfort modules to
                                ensure optimal passenger state during transit.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { name: 'Neural-Net Access', icon: <Zap /> },
                                    { name: 'Climate Control', icon: <Wind /> },
                                    { name: 'First Aid Kit', icon: <Shield /> },
                                    { name: 'Hydration Unit', icon: <Coffee /> },
                                    { name: 'Navigation Sync', icon: <Map /> },
                                    { name: 'Backup Power', icon: <Zap /> },
                                ].map((item) => (
                                    <div
                                        key={item.name}
                                        className="group flex items-center rounded-xl p-5 transition-colors hover:border-w1-brand/40 w1-glass"
                                    >
                                        <span className="mr-4 text-w1-brand transition-transform group-hover:scale-110">
                                            {item.icon}
                                        </span>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ProfilePage() {
    return (
        <div className="pb-32 pt-40">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.5em] text-w1-brand">
                        Core Identity
                    </span>
                    <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter">
                        Profile Summary
                    </h1>
                    <div className="h-1 w-24 bg-w1-brand" />
                </motion.div>

                <div className="grid items-start gap-20 lg:grid-cols-2">
                    <div className="space-y-10">
                        <div className="rounded-3xl border-l-4 border-l-w1-brand p-10 w1-glass">
                            <p className="text-2xl font-light italic leading-relaxed text-white/90">
                                "To ensure an environment that our Clients, Cab Users and Staff
                                are proud to be a part of."
                            </p>
                        </div>
                        <div className="space-y-6 font-light leading-relaxed text-white/60">
                            <p>
                                Royal CorpTravel Pvt. Ltd. (RCPL) was incorporated on 21st April
                                2011, evolving from a startup in 2006. We professionally manage
                                Corporate Travel with a mission to provide long-term quality
                                transportation solutions.
                            </p>
                            <p>
                                Our operational philosophy is built on the pillars of safety,
                                punctuality, and technological integration. We do not just move
                                people; we move the corporate world forward.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-3xl p-10 w1-glass">
                        <h3 className="mb-10 text-xs font-mono uppercase tracking-[0.4em] text-w1-brand">
                            Expansion Protocol
                        </h3>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="mr-6 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-w1-brand/10 text-w1-brand">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-sm font-bold uppercase tracking-widest">
                                        Pan-India Nexus
                                    </h4>
                                    <p className="text-sm font-light text-white/40">
                                        Establishing strategic hubs across major industrial
                                        corridors beyond NCR.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="mr-6 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-w1-brand/10 text-w1-brand">
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-sm font-bold uppercase tracking-widest">
                                        Tech Integration
                                    </h4>
                                    <p className="text-sm font-light text-white/40">
                                        Implementing AI-driven dispatch and predictive maintenance
                                        systems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServicesPage() {
    return (
        <div className="pb-32 pt-40">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20">
                    <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.5em] text-w1-brand">
                        Capabilities
                    </span>
                    <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter">
                        Service Matrix
                    </h1>
                    <div className="h-1 w-24 bg-w1-brand" />
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="grid gap-8 md:grid-cols-2 lg:col-span-2">
                        {[
                            {
                                title: 'Employee Sync',
                                desc: 'Pioneering transportation solutions for large-scale corporate workforces.',
                                icon: <Users />,
                            },
                            {
                                title: 'Shuttle Nodes',
                                desc: 'Fixed-route logistics with guaranteed uptime and precision timing.',
                                icon: <MapPin />,
                            },
                            {
                                title: 'Instant Deployment',
                                desc: 'On-demand vehicle allocation for unscheduled corporate requirements.',
                                icon: <Zap />,
                            },
                            {
                                title: 'Deep Outstation',
                                desc: 'Extended range operations for destinations outside the primary nexus.',
                                icon: <Globe />,
                            },
                        ].map((service) => (
                            <motion.div
                                key={service.title}
                                whileHover={{ y: -5 }}
                                className="group rounded-3xl p-10 w1-glass"
                            >
                                <div className="mb-8 text-w1-brand transition-transform group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="mb-4 text-xl font-bold uppercase tracking-tighter">
                                    {service.title}
                                </h3>
                                <p className="text-sm font-light leading-relaxed text-white/40">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-w1-brand p-12">
                        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 transition-transform duration-700 group-hover:scale-150" />
                        <div className="relative z-10">
                            <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter">
                                Custom Logistics
                            </h2>
                            <p className="mb-10 font-light leading-relaxed text-white/80">
                                Need a bespoke mobility solution? Our engineers can design a
                                custom logistics framework for your specific corporate needs.
                            </p>
                        </div>
                        <button
                            type="button"
                            className="relative z-10 rounded-sm bg-white px-8 py-4 text-xs font-mono uppercase tracking-widest text-w1-brand transition-all hover:bg-white/90"
                        >
                            Consult Nexus
                        </button>
                    </div>
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
            qualifications: ['BCA', 'LL.B', 'MBA', 'MCSE', 'OCP'],
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
            bio: 'Founder and visionary. Effectively bridging the gap between legacy transport and future technology.',
        },
        {
            name: 'Dr. Sudesh Yadav',
            role: 'Director - HR & Maintenance',
            qualifications: ['PhD', 'LL.B'],
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
            bio: 'Specializing in human capital and fleet health. Ensuring peak operational efficiency through rigorous maintenance protocols.',
        },
        {
            name: 'Mahesh Kumar Yadav',
            role: 'Director - Operations',
            qualifications: ['MPM', '21+ Yrs Exp'],
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
            bio: 'Strategic operational oversight. 21 years of industrial experience in high-pressure corporate environments.',
        },
        {
            name: 'Amit Yadav',
            role: 'Head - Finance & BD',
            qualifications: ['MBA', '20+ Yrs Exp'],
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
            bio: 'Driving sustainable growth and financial precision. Two decades of corporate leadership.',
        },
    ];

    return (
        <div className="pb-32 pt-40">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20">
                    <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.5em] text-w1-brand">
                        Leadership
                    </span>
                    <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter">
                        Management Nexus
                    </h1>
                    <div className="h-1 w-24 bg-w1-brand" />
                </div>

                <div className="grid gap-px border border-white/5 bg-white/5 md:grid-cols-2">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group flex flex-col gap-10 bg-w1-dark-bg p-12 md:flex-row"
                        >
                            <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/10 transition-colors group-hover:border-w1-brand">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                                />
                            </div>
                            <div>
                                <h3 className="mb-1 text-2xl font-bold uppercase tracking-tighter">
                                    {member.name}
                                </h3>
                                <p className="mb-6 text-xs font-mono uppercase tracking-widest text-w1-brand">
                                    {member.role}
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {member.qualifications.map((qualification) => (
                                        <span
                                            key={qualification}
                                            className="rounded border border-white/10 px-2 py-1 text-[8px] font-mono uppercase text-white/40"
                                        >
                                            {qualification}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm font-light leading-relaxed text-white/40">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ToursPage({ setCurrentPage }) {
    return (
        <div className="pb-32 pt-40">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20">
                    <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.5em] text-w1-brand">
                        Exploration
                    </span>
                    <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter">
                        Tour Modules
                    </h1>
                    <div className="h-1 w-24 bg-w1-brand" />
                </div>

                <div className="grid gap-12 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        {[
                            {
                                title: 'Agra Fort Nexus',
                                desc: 'Historical data node built by Akbar. UNESCO Heritage status confirmed.',
                            },
                            {
                                title: 'Taj Mahal Module',
                                desc: 'World wonder architectural feat. High-precision marble construction.',
                            },
                            {
                                title: 'Mathura/Vrindavan Sync',
                                desc: 'Spiritual frequency alignment at the birthplace of Krishna.',
                            },
                        ].map((tour) => (
                            <div
                                key={tour.title}
                                className="group flex items-center gap-8 rounded-3xl p-10 transition-all hover:border-w1-brand/40 w1-glass"
                            >
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-w1-brand/10 text-w1-brand transition-transform group-hover:scale-110">
                                    <Box size={24} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-xl font-bold uppercase tracking-tighter">
                                        {tour.title}
                                    </h3>
                                    <p className="text-sm font-light text-white/40">{tour.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="sticky top-40 h-fit rounded-3xl p-10 w1-glass">
                        <h3 className="mb-10 text-center text-xs font-mono uppercase tracking-[0.4em] text-w1-brand">
                            Pricing Matrix
                        </h3>
                        <div className="mb-10 space-y-6">
                            <div className="flex items-end justify-between">
                                <span className="text-[10px] font-mono uppercase text-white/40">
                                    Sedan Module
                                </span>
                                <span className="font-mono text-xl font-bold">Rs. 7,000</span>
                            </div>
                            <div className="flex items-end justify-between">
                                <span className="text-[10px] font-mono uppercase text-white/40">
                                    Innova Module
                                </span>
                                <span className="font-mono text-xl font-bold">Rs. 8,500</span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setCurrentPage('contact')}
                            className="w-full rounded-sm bg-w1-brand py-5 text-xs font-mono uppercase tracking-widest text-white shadow-[0_0_20px_rgba(255,87,87,0.2)] transition-all hover:shadow-[0_0_30px_rgba(255,87,87,0.4)]"
                        >
                            Initiate Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactPage() {
    return (
        <div className="pb-32 pt-40">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20">
                    <span className="mb-4 block text-[10px] font-mono uppercase tracking-[0.5em] text-w1-brand">
                        Communication
                    </span>
                    <h1 className="mb-8 text-6xl font-black uppercase tracking-tighter">
                        Nexus Contact
                    </h1>
                    <div className="h-1 w-24 bg-w1-brand" />
                </div>

                <div className="grid overflow-hidden rounded-3xl border border-white/5 bg-white/5 lg:grid-cols-2 lg:gap-px">
                    <div className="space-y-12 bg-w1-dark-bg p-16">
                        <div className="flex items-start">
                            <div className="mr-8 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-w1-brand/10 text-w1-brand">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                                    Physical Node
                                </h4>
                                <p className="text-lg font-light">Sector 34, Gurugram, HR</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-8 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-w1-brand/10 text-w1-brand">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                                    Voice Link
                                </h4>
                                <p className="font-mono text-2xl font-bold">+91 124 444 4444</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="mr-8 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-w1-brand/10 text-w1-brand">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="mb-2 text-[10px] font-mono uppercase tracking-widest text-white/40">
                                    Data Stream
                                </h4>
                                <p className="text-lg font-light">ops@royalcorp.io</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-w1-dark-bg p-16">
                        <h2 className="mb-10 text-xs font-mono uppercase tracking-[0.4em] text-w1-brand">
                            Inquiry Protocol
                        </h2>
                        <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                            <div className="space-y-2">
                                <label className="ml-2 text-[8px] font-mono uppercase tracking-widest text-white/40">
                                    Identity
                                </label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full rounded-sm border border-white/10 bg-transparent p-5 font-light outline-none transition-colors focus:border-w1-brand w1-glass"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="ml-2 text-[8px] font-mono uppercase tracking-widest text-white/40">
                                    Comms Link
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="w-full rounded-sm border border-white/10 bg-transparent p-5 font-light outline-none transition-colors focus:border-w1-brand w1-glass"
                                />
                            </div>
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full rounded-sm bg-w1-brand py-5 text-xs font-mono uppercase tracking-widest text-white shadow-[0_0_20px_rgba(255,87,87,0.2)] transition-all hover:shadow-[0_0_30px_rgba(255,87,87,0.4)]"
                                >
                                    Transmit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Website1App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="w1-root min-h-screen selection:bg-w1-brand selection:text-white">
            <Navbar
                currentPage={currentPage}
                isMenuOpen={isMenuOpen}
                setCurrentPage={setCurrentPage}
                setIsMenuOpen={setIsMenuOpen}
            />

            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentPage}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
                        {currentPage === 'profile' && <ProfilePage />}
                        {currentPage === 'services' && <ServicesPage />}
                        {currentPage === 'team' && <TeamPage />}
                        {currentPage === 'tours' && (
                            <ToursPage setCurrentPage={setCurrentPage} />
                        )}
                        {currentPage === 'contact' && <ContactPage />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
}
