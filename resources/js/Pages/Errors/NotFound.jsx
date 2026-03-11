import { Head, Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <>
            <Head title="404 | Page Not Found">
                <meta name="robots" content="noindex, nofollow" head-key="robots" />
            </Head>

            <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-20 text-white">
                <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-2xl backdrop-blur md:p-12">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-300">Error 404</p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Page not found</h1>
                    <p className="mt-4 text-sm text-slate-300 md:text-base">
                        The page you requested does not exist or has been moved. Please return to the homepage.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <Link
                            href="/"
                            className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                        >
                            Go to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}

