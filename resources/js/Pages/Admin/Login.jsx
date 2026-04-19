import { Head, Link, router } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    AlertCircle,
    ArrowRight,
    Car,
    Eye,
    EyeOff,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Menu,
    Phone,
    Twitter,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import http from '../../lib/http';
import '../Websites/Website6/website6.css';

const DEFAULT_FORM = {
    email: '',
    password: '',
    remember: false,
};

const PAGE_URLS = {
    home: '/',
    profile: '/profile',
    services: '/services',
    team: '/team',
    tours: '/tours',
    blogs: '/blogs',
    contact: '/contact',
};

function BrandWordmark({ light = false, compact = false, mobileCompact = false }) {
    const sizeClass = compact
        ? 'h-10'
        : mobileCompact
        ? 'h-10 md:h-14 md:pt-2'
        : 'h-14 md:h-16';

    return (
        <img
            src="/images/logo/dtc.png"
            alt="Delphimium Travelcorp"
            className={`w-auto object-contain pt-2 ${sizeClass} ${light ? 'brightness-0 invert' : ''}`}
            loading="eager"
        />
    );
}

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
        { label: 'Blogs', value: 'blogs' },
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
                <Link href={PAGE_URLS.home} prefetch className="flex cursor-pointer items-center gap-3">
                    <img
                        src="/images/logo/full-logo-no-bg-icon.PNG"
                        alt="Delphinium Travelcorp"
                        className="h-12 w-auto rounded-xl object-cover md:h-16"
                        loading="eager"
                    />
                    <BrandWordmark light={isHomePage && !isScrolled} mobileCompact />
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
                        href="/admin/login"
                        prefetch
                        className="w6-electric-glow flex items-center gap-2 rounded-full bg-w6-brand px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-w6-brand-dark"
                    >
                        Login
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
                                    <BrandWordmark light compact />
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
                                    href="/admin/login"
                                    prefetch
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w6-electric-glow flex w-full items-center justify-center gap-2 rounded-2xl bg-w6-brand py-4 text-base font-bold text-white"
                                >
                                    Login <ArrowRight size={18} />
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
                            <BrandWordmark light />
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
                        <li><Link href={PAGE_URLS.home} prefetch className="transition-colors hover:text-w6-brand">Home</Link></li>
                        <li><Link href={PAGE_URLS.profile} prefetch className="transition-colors hover:text-w6-brand">Our Profile</Link></li>
                        <li><Link href={PAGE_URLS.services} prefetch className="transition-colors hover:text-w6-brand">Services</Link></li>
                        <li><Link href={PAGE_URLS.team} prefetch className="transition-colors hover:text-w6-brand">Our Team</Link></li>
                        <li><Link href={PAGE_URLS.tours} prefetch className="transition-colors hover:text-w6-brand">Tour Packages</Link></li>
                        <li><Link href={PAGE_URLS.blogs} prefetch className="transition-colors hover:text-w6-brand">Blogs</Link></li>
                    </ul>
                </div>

                <div className="hidden text-center md:col-span-3 md:block md:text-left">
                    <h3 className="mb-6 text-lg font-bold">
                        <Link href={PAGE_URLS.services} prefetch className="transition-colors hover:text-w6-brand">
                            Our Services
                        </Link>
                    </h3>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><a href={`${PAGE_URLS.services}#employee-transportation`} className="transition-colors hover:text-w6-brand">Employee Transportation</a></li>
                        <li><a href={`${PAGE_URLS.services}#shuttle-services`} className="transition-colors hover:text-w6-brand">Shuttle Services</a></li>
                        <li><a href={`${PAGE_URLS.services}#spot-rental`} className="transition-colors hover:text-w6-brand">Spot Rental</a></li>
                        <li><a href={`${PAGE_URLS.services}#outstation-trip-packages`} className="transition-colors hover:text-w6-brand">Outstation Travel</a></li>
                        <li><a href={`${PAGE_URLS.services}#vip-airport-transfers`} className="transition-colors hover:text-w6-brand">Airport Transfers</a></li>
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
                        <h4 className="mb-4 text-sm font-semibold text-slate-300">Follow Us Online</h4>
                        <div className="flex justify-center gap-4 md:justify-start">
                            <Facebook size={20} className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand" />
                            <Twitter size={20} className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand" />
                            <Linkedin size={20} className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand" />
                            <Instagram size={20} className="cursor-pointer text-slate-400 transition-colors hover:text-w6-brand" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-2 max-w-7xl border-t border-white/10 px-6 pt-5 text-center">
                <p className="text-xs text-slate-400">(c) 2026 Delphinium Travelcorp. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default function LoginPage() {
    const { isAuthenticated, isLoading, isReady, login } = useAuth();
    const [form, setForm] = useState(DEFAULT_FORM);
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isForgotPasswordSubmitting, setIsForgotPasswordSubmitting] = useState(false);

    useEffect(() => {
        if (isReady && !isLoading && isAuthenticated) {
            router.visit('/admin/dashboard', { replace: true });
        }
    }, [isAuthenticated, isLoading, isReady]);

    const isBusy = isSubmitting || isForgotPasswordSubmitting || (!isReady && isLoading);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({});
        setServerError('');
        setSuccess('');
        setIsSubmitting(true);

        try {
            await login(form);
            router.visit('/admin/dashboard');
        } catch (error) {
            const apiErrors = error?.response?.data?.errors ?? {};
            const message = error?.response?.data?.message ?? 'Unable to sign in. Please try again.';

            setErrors(apiErrors);
            setServerError(message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleForgotPassword = async () => {
        setErrors({});
        setServerError('');
        setSuccess('');

        if (!form.email?.trim()) {
            setServerError('Please enter your email first, then click Forgot Password.');
            return;
        }

        setIsForgotPasswordSubmitting(true);

        try {
            const { data } = await http.post('/api/auth/forgot-password', {
                email: form.email,
            });

            setSuccess(data?.message ?? 'If an account exists for that email, a reset link has been sent.');
        } catch (error) {
            const apiErrors = error?.response?.data?.errors ?? {};
            const message = error?.response?.data?.message ?? 'Unable to process request right now.';

            setErrors(apiErrors);
            setServerError(message);
        } finally {
            setIsForgotPasswordSubmitting(false);
        }
    };

    return (
        <div className="w6-root min-h-screen bg-slate-50">
            <Head title="Admin Login" />

            <Navbar activePage="login" />

            <main className="min-h-screen bg-slate-50 px-6 pb-24 pt-32">
                <div className="flex items-center justify-center pt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-md rounded-[3rem] border border-slate-100 bg-white p-10 shadow-2xl md:p-12"
                    >
                        <div className="mb-10 text-center">
                            <div className="electric-glow mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-white">
                                <Car size={32} />
                            </div>
                            <h1 className="font-display text-3xl font-bold text-corporate-blue">Welcome Back</h1>
                            <p className="mt-2 text-slate-500">Login to your DTC Bharat dashboard</p>
                        </div>

                        {serverError ? (
                            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 text-sm text-red-600">
                                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                                <span>{serverError}</span>
                            </div>
                        ) : null}

                        {success ? (
                            <div className="mb-5 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-600">
                                {success}
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(event) => setForm((previous) => ({ ...previous, email: event.target.value }))}
                                    placeholder="admin@dtcbharat.com"
                                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 focus:border-brand focus:outline-none transition-all"
                                />
                                {errors?.email ? <p className="mt-2 text-xs text-red-500">{errors.email[0]}</p> : null}
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-bold text-corporate-blue">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                        value={form.password}
                                        onChange={(event) => setForm((previous) => ({ ...previous, password: event.target.value }))}
                                        placeholder="••••••••"
                                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 pr-24 focus:border-brand focus:outline-none transition-all"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword((previous) => !previous)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl px-3 py-2 text-xs font-bold text-slate-500 hover:bg-white"
                                    >
                                        <span className="flex items-center gap-1">
                                            {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                            {showPassword ? 'Hide' : 'Show'}
                                        </span>
                                    </button>
                                </div>
                                {errors?.password ? <p className="mt-2 text-xs text-red-500">{errors.password[0]}</p> : null}
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex cursor-pointer items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={form.remember}
                                        onChange={(event) => setForm((previous) => ({ ...previous, remember: event.target.checked }))}
                                        className="rounded border-slate-300 text-brand focus:ring-brand"
                                    />
                                    <span className="text-slate-500">Remember me</span>
                                </label>
                                <button
                                    type="button"
                                    onClick={handleForgotPassword}
                                    disabled={isBusy}
                                    className="font-bold text-brand hover:underline disabled:opacity-60"
                                >
                                    {isForgotPasswordSubmitting ? 'Sending...' : 'Forgot Password?'}
                                </button>
                            </div>
                            <button
                                type="submit"
                                disabled={isBusy}
                                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-corporate-blue py-4 font-bold text-white shadow-xl transition-all hover:bg-corporate-blue/90 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                ) : (
                                    <>
                                        Sign In <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="mt-10 border-t border-slate-100 pt-8 text-center">
                            <p className="text-sm text-slate-500">
                                Need help? <button type="button" className="font-bold text-brand hover:underline">Contact Support</button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
