import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Corporate Travel', 'Safety', 'Fleet', 'Technology', 'Travel Tips'];

const posts = [
    {
        id: 1,
        title: 'The Future of Corporate Mobility in 2024',
        excerpt: 'How AI and sustainable energy are reshaping the way enterprises manage employee transportation.',
        category: 'Technology',
        date: 'May 15, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
        featured: true,
    },
    {
        id: 2,
        title: 'Female Safety: Our Top Priority',
        excerpt: 'A deep dive into the protocols and technology we use to ensure every night drop is 100% safe.',
        category: 'Safety',
        date: 'May 12, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 3,
        title: 'Optimizing Fleet Efficiency with AI',
        excerpt: 'How our proprietary routing algorithms reduce travel time by up to 25% for our corporate partners.',
        category: 'Technology',
        date: 'May 10, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 4,
        title: 'Choosing the Right Fleet for Your Office',
        excerpt: 'A guide to selecting between hatchbacks, sedans, and buses based on employee density and routes.',
        category: 'Fleet',
        date: 'May 08, 2024',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop',
    },
    {
        id: 5,
        title: 'The Rise of Electric Vehicles in Corporate Travel',
        excerpt: 'Why DTC Bharat is investing heavily in EV infrastructure for a greener tomorrow.',
        category: 'Corporate Travel',
        date: 'May 05, 2024',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop',
    },
    {
        id: 6,
        title: 'Maintaining Professionalism: Driver Training',
        excerpt: 'Behind the scenes of our rigorous in-house training programs for our mobility partners.',
        category: 'Corporate Travel',
        date: 'May 01, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop',
    },
];

function BlogsPage() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterMessage, setNewsletterMessage] = useState('');

    const filteredPosts =
        activeCategory === 'All'
            ? posts
            : posts.filter((post) => post.category === activeCategory);

    const featuredPost = posts.find((post) => post.featured);
    const visiblePosts = filteredPosts.filter((post) => !post.featured);

    const handleNewsletterSubmit = (event) => {
        event.preventDefault();

        if (!newsletterEmail.trim()) {
            setNewsletterMessage('Enter your work email to stay updated.');
            return;
        }

        setNewsletterMessage('Thanks. Newsletter signups will be enabled shortly.');
        setNewsletterEmail('');
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-sm font-bold uppercase tracking-widest text-brand">
                        Our Blog
                    </div>
                    <h1 className="mb-6 font-display text-5xl font-bold text-corporate-blue md:text-7xl">
                        Insights & <span className="text-brand">Innovation</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-500">
                        Stay updated with the latest trends in corporate mobility,
                        safety protocols, and the future of transportation.
                    </p>
                </div>

                {featuredPost && (
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group mb-20"
                    >
                        <div className="flex flex-col overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-2xl lg:flex-row">
                            <div className="h-[400px] overflow-hidden lg:h-auto lg:w-1/2">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-10 md:p-16 lg:w-1/2">
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                                        Featured
                                    </span>
                                    <span className="text-sm font-medium text-slate-400">
                                        {featuredPost.date}
                                    </span>
                                </div>
                                <h2 className="mb-6 font-display text-3xl font-bold text-corporate-blue transition-colors group-hover:text-brand md:text-4xl">
                                    {featuredPost.title}
                                </h2>
                                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-slate-200" />
                                        <div>
                                            <div className="text-sm font-bold text-corporate-blue">
                                                RCPL Editorial
                                            </div>
                                            <div className="text-xs text-slate-400">
                                                {featuredPost.readTime}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="flex items-center gap-2 font-bold text-brand transition-all group-hover:gap-4">
                                        Read Article <ArrowRight size={20} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.article>
                )}

                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full border px-6 py-2.5 text-sm font-bold transition-all ${
                                activeCategory === category
                                    ? 'border-corporate-blue bg-corporate-blue text-white shadow-lg'
                                    : 'border-slate-200 bg-white text-slate-500 hover:border-brand hover:text-brand'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence mode="popLayout">
                        {visiblePosts.map((post) => (
                            <motion.article
                                key={post.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all hover:shadow-2xl"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute left-6 top-6">
                                        <span className="rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-corporate-blue shadow-sm backdrop-blur-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-grow flex-col p-8">
                                    <div className="mb-4 text-xs font-medium text-slate-400">
                                        {post.date} | {post.readTime}
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold leading-tight text-corporate-blue transition-colors group-hover:text-brand">
                                        {post.title}
                                    </h3>
                                    <p className="mb-6 text-sm leading-relaxed text-slate-500">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-6">
                                        <span className="flex items-center gap-2 text-xs font-bold text-brand transition-all group-hover:gap-3">
                                            Read More <ArrowRight size={14} />
                                        </span>
                                        <div className="flex -space-x-2">
                                            <div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200" />
                                            <div className="h-6 w-6 rounded-full border-2 border-white bg-slate-300" />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="relative overflow-hidden rounded-[3rem] bg-brand p-10 text-center text-white md:p-20">
                    <div className="absolute left-0 top-0 -ml-32 -mt-32 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 -mb-32 -mr-32 h-64 w-64 rounded-full bg-corporate-blue/10 blur-3xl" />

                    <div className="relative z-10 mx-auto max-w-2xl">
                        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md">
                            <Mail size={32} />
                        </div>
                        <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">
                            Stay Ahead of the Curve
                        </h2>
                        <p className="mb-10 text-lg text-white/80">
                            Subscribe to our newsletter and get the latest insights on
                            corporate mobility delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleNewsletterSubmit}>
                            <input
                                type="email"
                                value={newsletterEmail}
                                onChange={(event) => setNewsletterEmail(event.target.value)}
                                placeholder="Enter your work email"
                                className="flex-grow rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/50 focus:bg-white/20 focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-2xl bg-corporate-blue px-10 py-4 font-bold text-white shadow-xl transition-all hover:bg-corporate-blue/90"
                            >
                                Subscribe Now
                            </button>
                        </form>
                        <p className="mt-6 text-xs text-white/60">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                        {newsletterMessage && (
                            <p className="mt-4 text-sm font-semibold text-white">
                                {newsletterMessage}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsPage;
