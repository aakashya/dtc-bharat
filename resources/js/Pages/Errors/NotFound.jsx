import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <>
            <Head title="404 | Page Not Found" />

            <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-corporate-blue px-6 py-20 text-white">
                <div className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 rounded-full bg-w6-brand/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.14),transparent_55%)]" />

                <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur md:p-12">
                    <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-orange-100">
                        <span className="text-w6-brand">404</span> Page Not Found
                    </div>

                    <img
                        src="/images/logo/full-logo-no-bg-icon.PNG"
                        alt="DTC Bharat"
                        className="mx-auto mt-6 h-20 w-auto rounded-xl object-contain md:h-24"
                        loading="eager"
                    />

                    <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                        This route is not available
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-200 md:text-base">
                        The page you are trying to access may have been moved or no longer exists. Continue to the
                        homepage or contact our team for assistance.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/"
                            className="rounded-xl bg-w6-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-w6-brand-dark"
                        >
                            Back to Homepage
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Contact Support
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
