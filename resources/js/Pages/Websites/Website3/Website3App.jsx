import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion';
import {
    ArrowRight,
    ArrowUpRight,
    Award,
    Briefcase,
    ChevronRight,
    Clock,
    Globe,
    Instagram,
    Linkedin,
    ShieldCheck,
    Star,
    Twitter,
    Users,
    Zap,
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => (
    <nav className="fixed left-1/2 top-8 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full px-8 py-3 w3-glass">
        <div className="mr-8 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-w3-brand shadow-lg shadow-w3-brand/20">
                <div className="h-3 w-3 rotate-45 rounded-sm border-2 border-white" />
            </div>
            <span className="font-display text-sm font-bold tracking-tighter text-w3-ink">
                ROYAL<span className="text-w3-brand">.</span>NEXT
            </span>
        </div>

        <div className="hidden items-center gap-2 md:flex">
            <a href="#" className="w3-pill-nav">
                Fleet
            </a>
            <a href="#" className="w3-pill-nav">
                Services
            </a>
            <a href="#" className="w3-pill-nav">
                Resources
            </a>
            <a href="#" className="w3-pill-nav">
                Pricing
            </a>
        </div>

        <div className="ml-8 flex items-center gap-2">
            <button
                type="button"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-w3-ink opacity-40 transition-opacity hover:opacity-100"
            >
                Access
            </button>
            <button
                type="button"
                className="rounded-full px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-w3-ink transition-all hover:bg-white w3-glass"
            >
                Book
            </button>
        </div>
    </nav>
);

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative flex min-h-screen flex-col overflow-hidden lg:flex-row">
            <div className="w3-atmosphere absolute inset-0 z-0" />

            <div className="relative z-10 flex flex-1 flex-col items-center justify-center border-r border-w3-ink/5 px-6 pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    className="max-w-4xl"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mb-12 inline-flex items-center gap-2 rounded-full border border-w3-brand/10 bg-w3-brand/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-w3-brand"
                    >
                        <Star className="h-3 w-3 fill-w3-brand" /> 2026 Excellence Award
                    </motion.div>

                    <h1 className="w3-text-balance mb-12 font-display text-6xl font-medium leading-[0.85] tracking-tighter text-w3-ink md:text-[9rem]">
                        The Future Of <br />
                        <span className="font-serif italic text-w3-ink/20">Superhuman</span>{' '}
                        <br />
                        Mobility.
                    </h1>

                    <p className="w3-text-balance mx-auto mb-16 max-w-xl text-sm font-light leading-relaxed text-w3-ink/40 md:text-lg">
                        Where precision meets empathy. We do not just move people; we
                        orchestrate seamless transitions for the world&apos;s most ambitious
                        teams.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <button
                            type="button"
                            className="group relative overflow-hidden rounded-full bg-w3-ink px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:shadow-2xl hover:shadow-w3-ink/20"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started{' '}
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 translate-y-full bg-w3-brand transition-transform duration-500 group-hover:translate-y-0" />
                        </button>
                        <button
                            type="button"
                            className="rounded-full px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-w3-ink/60 transition-all hover:bg-white hover:text-w3-ink w3-glass"
                        >
                            Watch Experience
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: y1 }}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-40"
                >
                    <div className="absolute inset-0 rounded-full bg-w3-brand/5 blur-[160px]" />
                    <div className="w3-glow-edge absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full border border-w3-ink/5" />
                </motion.div>
            </div>

            <div className="relative z-10 flex w-full flex-col justify-center border-l border-w3-ink/5 bg-white/60 p-16 backdrop-blur-3xl lg:w-[450px]">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                    <h2 className="mb-16 font-display text-5xl font-medium leading-[0.9] tracking-tighter text-w3-ink">
                        Truly <br />
                        <span className="text-w3-brand">Shine.</span>
                    </h2>

                    <div className="space-y-16">
                        {[
                            {
                                icon: Zap,
                                title: 'Instant Dispatch',
                                desc: 'Our neural network predicts demand, ensuring your vehicle is ready before you even book.',
                            },
                            {
                                icon: Globe,
                                title: 'Global Concierge',
                                desc: 'A dedicated travel partner in 120+ cities, handling every detail of your journey.',
                            },
                            {
                                icon: Award,
                                title: 'Elite Fleet',
                                desc: 'Meticulously curated vehicles that serve as an extension of your corporate brand.',
                            },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                whileHover={{ x: 10 }}
                                className="group cursor-pointer"
                            >
                                <div className="mb-5 flex items-center gap-5">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:bg-w3-brand group-hover:text-white group-hover:shadow-xl group-hover:shadow-w3-brand/20 w3-glass">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-w3-ink/80">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="pl-[68px] text-xs leading-relaxed text-w3-ink/40">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    style={{ y: y2 }}
                    className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-full overflow-hidden opacity-20"
                >
                    <div className="absolute bottom-[-100px] right-[-100px] h-[400px] w-[400px] rotate-45 rounded-full border-2 border-w3-ink/5" />
                    <div className="absolute bottom-[-150px] right-[-150px] h-[500px] w-[500px] rounded-full border border-w3-ink/5" />
                </motion.div>
            </div>
        </section>
    );
};

const ClientMarquee = () => (
    <section className="overflow-hidden border-y border-w3-ink/5 bg-white py-20">
        <div className="w3-marquee-track">
            {[...Array(2)].map((_, index) => (
                <div key={index} className="flex items-center gap-24 px-12">
                    {[
                        'SCHENKER',
                        'HINES',
                        'DLF',
                        'JAQUAR',
                        'CGN',
                        'KINAPSE',
                        'USG BORAL',
                        'WUNDERMAN',
                    ].map((client) => (
                        <span
                            key={client}
                            className="cursor-default font-display text-4xl font-bold uppercase tracking-tighter opacity-10 transition-opacity hover:opacity-100"
                        >
                            {client}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </section>
);

const FeatureGrid = () => (
    <section className="relative overflow-hidden bg-w3-bg py-40">
        <div className="container mx-auto px-6">
            <div className="grid overflow-hidden rounded-[3rem] border border-w3-ink/5 bg-w3-ink/5 shadow-2xl shadow-w3-ink/5 md:grid-cols-2 lg:grid-cols-4">
                {[
                    {
                        icon: Clock,
                        title: '24/7 Command',
                        desc: 'Real-time monitoring and support for every single trip.',
                    },
                    {
                        icon: ShieldCheck,
                        title: 'Neural Safety',
                        desc: 'AI-assisted safety protocols and real-time risk assessment.',
                    },
                    {
                        icon: Users,
                        title: 'Team Sync',
                        desc: 'Seamlessly manage thousands of employees with one dashboard.',
                    },
                    {
                        icon: Briefcase,
                        title: 'Executive Tier',
                        desc: 'White-glove service for your most critical stakeholders.',
                    },
                ].map((item) => (
                    <motion.div
                        key={item.title}
                        whileHover={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}
                        className="group cursor-default bg-white/60 p-16 transition-all duration-500"
                    >
                        <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-w3-brand/5 transition-all duration-500 group-hover:bg-w3-brand group-hover:text-white">
                            <item.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-6 font-display text-2xl font-bold uppercase tracking-tighter text-w3-ink">
                            {item.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-w3-ink/40">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FleetShowcase = () => {
    const [active, setActive] = useState(0);
    const fleet = [
        {
            name: 'Executive Sedan',
            image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
            desc: 'The gold standard for corporate mobility. Elegant, quiet, and efficient.',
        },
        {
            name: 'Luxury SUV',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
            desc: 'Commanding presence with unparalleled interior space for executive teams.',
        },
        {
            name: 'Corporate Coach',
            image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000',
            desc: 'Large-scale mobility without compromising on the premium experience.',
        },
    ];

    return (
        <section className="border-t border-w3-ink/5 bg-w3-bg py-40">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-32 lg:flex-row">
                    <div className="flex-1">
                        <span className="mb-8 block text-[10px] font-bold uppercase tracking-[0.4em] text-w3-brand">
                            The Collection
                        </span>
                        <h2 className="mb-16 font-display text-6xl font-medium leading-[0.9] tracking-tighter text-w3-ink md:text-8xl">
                            Curated For <br />
                            <span className="font-serif italic text-w3-ink/20">The Elite.</span>
                        </h2>

                        <div className="space-y-6">
                            {fleet.map((item, index) => (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => setActive(index)}
                                    className={`group flex w-full flex-col gap-4 rounded-3xl p-8 text-left transition-all duration-500 ${
                                        active === index
                                            ? 'shadow-2xl shadow-w3-ink/5 w3-glass'
                                            : 'hover:bg-white/40'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`text-2xl font-medium tracking-tight ${
                                                active === index
                                                    ? 'text-w3-ink'
                                                    : 'text-w3-ink/30'
                                            }`}
                                        >
                                            {item.name}
                                        </span>
                                        <div
                                            className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
                                                active === index
                                                    ? 'rotate-90 bg-w3-brand text-white'
                                                    : 'bg-w3-ink/5 text-w3-ink/20 group-hover:text-w3-ink'
                                            }`}
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {active === index && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden text-sm leading-relaxed text-w3-ink/40"
                                            >
                                                {item.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-[3rem] shadow-2xl shadow-w3-ink/10 w3-glass">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={active}
                                initial={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
                                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                                src={fleet[active].image}
                                alt={fleet[active].name}
                                className="absolute inset-0 h-full w-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-t from-w3-bg/60 via-transparent to-transparent" />

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            key={`detail-${active}`}
                            className="absolute bottom-12 left-12 right-12 rounded-3xl p-8 w3-glass"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-w3-brand">
                                        Availability
                                    </p>
                                    <p className="text-xl font-bold tracking-tight text-w3-ink">
                                        Instant Dispatch
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-w3-ink/40">
                                        Rating
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <Star
                                                key={starIndex}
                                                className="h-3 w-3 fill-w3-brand text-w3-brand"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="border-t border-w3-ink/5 bg-w3-bg py-32">
        <div className="container mx-auto px-6">
            <div className="mb-32 grid gap-24 md:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-1 lg:col-span-2">
                    <div className="mb-10 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-w3-brand">
                            <div className="h-4 w-4 rotate-45 rounded-sm border-2 border-white" />
                        </div>
                        <span className="font-display text-2xl font-bold tracking-tighter text-w3-ink">
                            ROYAL<span className="text-w3-brand">.</span>NEXT
                        </span>
                    </div>
                    <p className="mb-12 max-w-sm text-lg font-light leading-relaxed text-w3-ink/40">
                        We are orchestrating the future of human mobility. One seamless
                        transition at a time.
                    </p>
                    <div className="flex gap-6">
                        {[Twitter, Instagram, Linkedin].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 hover:bg-w3-brand hover:text-white hover:shadow-xl hover:shadow-w3-brand/20 w3-glass"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-w3-ink/40">
                        Ecosystem
                    </h5>
                    <ul className="space-y-6 text-sm font-medium text-w3-ink/60">
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                The Fleet
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Neural Dispatch
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Global Hubs
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Enterprise API
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="mb-10 text-[10px] font-bold uppercase tracking-[0.4em] text-w3-ink/40">
                        Connect
                    </h5>
                    <ul className="space-y-6 text-sm font-medium text-w3-ink/60">
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Support 24/7
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Partnerships
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Press Kit
                            </a>
                        </li>
                        <li>
                            <a href="#" className="transition-colors hover:text-w3-brand">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 border-t border-w3-ink/5 pt-16 md:flex-row">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-w3-ink/20">
                    © 2026 ROYAL CORPTRAVEL. CRAFTED FOR THE AMBITIOUS.
                </p>
                <div className="flex gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-w3-ink/20">
                    <a href="#" className="transition-colors hover:text-w3-brand">
                        Privacy Architecture
                    </a>
                    <a href="#" className="transition-colors hover:text-w3-brand">
                        Legal Framework
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default function Website3App() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="w3-root relative selection:bg-w3-brand selection:text-white">
            <motion.div
                className="fixed left-0 right-0 top-0 z-[110] h-1 origin-left bg-w3-brand"
                style={{ scaleX }}
            />

            <Navbar />
            <Hero />
            <ClientMarquee />
            <FeatureGrid />
            <FleetShowcase />

            <section className="relative overflow-hidden py-60">
                <div className="w3-atmosphere absolute inset-0 opacity-60" />
                <div className="container relative z-10 mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <h2 className="mb-16 font-display text-6xl font-medium leading-[0.85] tracking-tighter text-w3-ink md:text-[10rem]">
                            Ready For The <br />
                            <span className="font-serif italic text-w3-ink/20">
                                Next Level?
                            </span>
                        </h2>
                        <button
                            type="button"
                            className="group relative rounded-full px-16 py-8 text-xs font-bold uppercase tracking-[0.4em] shadow-2xl shadow-w3-ink/5 transition-all duration-700 hover:bg-w3-ink hover:text-white w3-glass"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                Initiate Journey{' '}
                                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
