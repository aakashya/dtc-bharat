import { router } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    CheckCircle2,
    ChevronLeft,
    Facebook,
    Linkedin,
    Mail,
    Twitter,
} from 'lucide-react';
import { useState } from 'react';

const categories = ['All', 'Corporate Travel', 'Safety', 'Fleet', 'Technology', 'Travel Tips'];

const articleContent = {
    'future-of-corporate-mobility-2024': {
        intro: 'Corporate mobility is becoming more data-driven, more visible, and more accountable.',
        heading: 'Technology Is Reshaping Operations',
        paragraphs: [
            'AI-assisted planning helps reduce idle time, improve route selection, and give operations teams better control over changing trip conditions.',
            'For enterprise clients, this means stronger punctuality, clearer reporting, and a transport program that scales with less friction.',
        ],
        takeaways: [
            'Real-time visibility improves both service quality and safety.',
            'Smarter routing reduces delays and unnecessary operating cost.',
            'Better reporting helps clients measure transport performance clearly.',
        ],
        closing: 'The future belongs to transport partners who combine safety, discipline, and technology in one operating model.',
    },
    'female-safety-our-top-priority': {
        intro: 'Female safety depends on process discipline, not verbal assurance.',
        heading: 'Structured Safety Matters',
        paragraphs: [
            'Night-drop transport requires escort protocols, monitored closures, and clear escalation rules that are followed every time.',
            'Technology supports this through GPS visibility, alert workflows, and faster intervention from the control room when needed.',
        ],
        takeaways: [
            'Night-drop SOPs must be consistent and auditable.',
            'Monitoring systems improve response time and oversight.',
            'Driver verification and training remain essential.',
        ],
        closing: 'Safe mobility is built through repeatable systems and zero compromise on passenger security.',
    },
    'optimizing-fleet-efficiency-with-ai': {
        intro: 'Fleet efficiency improves when route planning is based on live operating data instead of static assumptions.',
        heading: 'Efficiency Starts with Better Allocation',
        paragraphs: [
            'Dynamic routing helps align pickup order, vehicle type, and travel flow with real-world traffic conditions.',
            'That improves seat utilization, reduces travel time, and gives employees a more consistent transport experience.',
        ],
        takeaways: [
            'Dynamic routing reduces route overlap.',
            'Better utilization lowers fleet strain.',
            'Data-driven dispatch helps teams scale more reliably.',
        ],
        closing: 'An efficient fleet is not the largest fleet. It is the fleet allocated with precision.',
    },
    'choosing-the-right-fleet-for-your-office': {
        intro: 'Fleet planning should reflect route density, rider expectations, and day-to-day utilization.',
        heading: 'The Right Mix Matters',
        paragraphs: [
            'Choosing between hatchbacks, sedans, SUVs, and buses affects both service quality and cost efficiency.',
            'The strongest operating model usually comes from reviewing route patterns regularly and adjusting the fleet mix accordingly.',
        ],
        takeaways: [
            'Vehicle choice should follow route density.',
            'Comfort and utilization need to be balanced together.',
            'Periodic reviews prevent long-term inefficiency.',
        ],
        closing: 'Fleet selection works best as an ongoing strategy rather than a one-time decision.',
    },
    'rise-of-electric-vehicles-in-corporate-travel': {
        intro: 'Electric vehicles are becoming a practical part of corporate transport where routes and charging windows support them.',
        heading: 'EV Adoption Needs Planning',
        paragraphs: [
            'A useful EV program depends on more than vehicle procurement. Charging access, route stability, and standby time all matter.',
            'When aligned correctly, EV deployment supports cleaner operations and a more future-ready fleet strategy.',
        ],
        takeaways: [
            'EVs fit best on predictable route patterns.',
            'Charging readiness is as important as vehicle selection.',
            'A mixed fleet often offers the best transition path.',
        ],
        closing: 'Sustainable transport works when it is integrated into operations, not treated as a branding exercise.',
    },
    'maintaining-professionalism-driver-training': {
        intro: 'Professional transport service depends heavily on the quality of driver behavior and training.',
        heading: 'Training Protects Service Standards',
        paragraphs: [
            'Punctuality, conduct, communication, and escalation awareness all shape how passengers experience the service.',
            'Refresher training and operational audits are what keep those standards intact over time.',
        ],
        takeaways: [
            'Professional behavior should be trained and reinforced.',
            'Refresher programs help maintain consistency at scale.',
            'Driver quality strongly influences client trust.',
        ],
        closing: 'Strong driver training is one of the clearest signs of a disciplined mobility partner.',
    },
};

const posts = [
    {
        id: 1,
        slug: 'future-of-corporate-mobility-2024',
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
        slug: 'female-safety-our-top-priority',
        title: 'Female Safety: Our Top Priority',
        excerpt: 'A deep dive into the protocols and technology we use to ensure every night drop is 100% safe.',
        category: 'Safety',
        date: 'May 12, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 3,
        slug: 'optimizing-fleet-efficiency-with-ai',
        title: 'Optimizing Fleet Efficiency with AI',
        excerpt: 'How our proprietary routing algorithms reduce travel time by up to 25% for our corporate partners.',
        category: 'Technology',
        date: 'May 10, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 4,
        slug: 'choosing-the-right-fleet-for-your-office',
        title: 'Choosing the Right Fleet for Your Office',
        excerpt: 'A guide to selecting between hatchbacks, sedans, and buses based on employee density and routes.',
        category: 'Fleet',
        date: 'May 08, 2024',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop',
    },
    {
        id: 5,
        slug: 'rise-of-electric-vehicles-in-corporate-travel',
        title: 'The Rise of Electric Vehicles in Corporate Travel',
        excerpt: 'Why DTC Bharat is investing heavily in EV infrastructure for a greener tomorrow.',
        category: 'Corporate Travel',
        date: 'May 05, 2024',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop',
    },
    {
        id: 6,
        slug: 'maintaining-professionalism-driver-training',
        title: 'Maintaining Professionalism: Driver Training',
        excerpt: 'Behind the scenes of our rigorous in-house training programs for our mobility partners.',
        category: 'Corporate Travel',
        date: 'May 01, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2070&auto=format&fit=crop',
    },
];

function BlogsPage({ blogSlug = null }) {
    const [activeCategory, setActiveCategory] = useState('All');
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [newsletterMessage, setNewsletterMessage] = useState('');

    const filteredPosts = activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory);
    const featuredPost = posts.find((post) => post.featured);
    const visiblePosts = filteredPosts.filter((post) => !post.featured);
    const selectedPost = blogSlug ? posts.find((post) => post.slug === blogSlug) : null;

    const openPost = (post) => {
        router.visit(`/blogs/${post.slug}`, {
            preserveScroll: false,
            preserveState: false,
        });
    };

    const closePost = () => {
        router.visit('/blogs', {
            preserveScroll: false,
            preserveState: false,
        });
    };

    const handleNewsletterSubmit = (event) => {
        event.preventDefault();
        if (!newsletterEmail.trim()) {
            setNewsletterMessage('Enter your work email to stay updated.');
            return;
        }
        setNewsletterMessage('Thanks. Newsletter signups will be enabled shortly.');
        setNewsletterEmail('');
    };

    if (selectedPost) {
        const content = articleContent[selectedPost.slug];

        return (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="min-h-screen bg-white pb-24 pt-32">
                <div className="mx-auto max-w-4xl px-6">
                    <button type="button" onClick={closePost} className="group mb-12 flex items-center gap-2 font-bold text-slate-500 transition-colors hover:text-brand">
                        <ChevronLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                        Back to Blog
                    </button>

                    <div className="mb-12">
                        <div className="mb-6 flex flex-wrap items-center gap-4">
                            <span className="rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                                {selectedPost.category}
                            </span>
                            <span className="text-sm font-medium text-slate-400">
                                {selectedPost.date} | {selectedPost.readTime}
                            </span>
                        </div>
                        <h1 className="mb-8 font-display text-4xl font-bold leading-tight text-corporate-blue md:text-6xl">
                            {selectedPost.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-slate-200" />
                            <div>
                                <div className="font-bold text-corporate-blue">DTC Editorial Team</div>
                                <div className="text-xs text-slate-400">Published in {selectedPost.category}</div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-16 h-[400px] overflow-hidden rounded-[3rem] shadow-2xl md:h-[500px]">
                        <img src={selectedPost.image} alt={selectedPost.title} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                    </div>

                    <div className="space-y-8 text-slate-600">
                        <p className="border-l-4 border-brand py-2 pl-6 text-xl font-medium italic text-corporate-blue/80">
                            {selectedPost.excerpt}
                        </p>
                        <p className="text-lg leading-relaxed">{content.intro}</p>
                        <h3 className="font-display text-2xl font-bold text-corporate-blue">{content.heading}</h3>
                        {content.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-lg leading-relaxed">{paragraph}</p>
                        ))}
                        <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10">
                            <h4 className="mb-4 text-xl font-bold text-corporate-blue">Key Takeaways:</h4>
                            <ul className="space-y-4">
                                {content.takeaways.map((takeaway) => (
                                    <li key={takeaway} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 shrink-0 text-brand" size={20} />
                                        <span>{takeaway}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-lg leading-relaxed">{content.closing}</p>
                    </div>

                    <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
                        <div className="flex flex-col items-center gap-4 md:flex-row">
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Share this article:</span>
                            <div className="flex gap-3">
                                {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                                    <button key={index} type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-brand hover:text-white">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 font-bold text-brand transition-all hover:gap-3">
                            Back to Top <ArrowRight size={20} className="-rotate-90" />
                        </button>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <div className="mb-4 text-base font-bold uppercase tracking-widest text-brand">Our Blog</div>
                    <h1 className="mb-6 font-display text-4xl font-bold text-corporate-blue md:text-5xl">
                        Insights & <span className="text-brand">Innovation</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-500">
                        Stay updated with the latest trends in corporate mobility, safety protocols, and the future of transportation.
                    </p>
                </div>

                {featuredPost && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="group mb-20 cursor-pointer" onClick={() => openPost(featuredPost)}>
                        <div className="flex flex-col overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-2xl lg:flex-row">
                            <div className="h-[400px] overflow-hidden lg:h-auto lg:w-1/2">
                                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
                            </div>
                            <div className="flex flex-col justify-center p-10 md:p-16 lg:w-1/2">
                                <div className="mb-6 flex items-center gap-4">
                                    <span className="rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">Featured</span>
                                    <span className="text-sm font-medium text-slate-400">{featuredPost.date}</span>
                                </div>
                                <h2 className="mb-6 font-display text-3xl font-bold text-corporate-blue transition-colors group-hover:text-brand md:text-4xl">
                                    {featuredPost.title}
                                </h2>
                                <p className="mb-8 text-lg leading-relaxed text-slate-600">{featuredPost.excerpt}</p>
                                <div className="mt-auto flex items-center justify-between gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-slate-200" />
                                        <div>
                                            <div className="text-sm font-bold text-corporate-blue">DTC Editorial Team</div>
                                            <div className="text-xs text-slate-400">{featuredPost.readTime}</div>
                                        </div>
                                    </div>
                                    <button type="button" className="flex items-center gap-2 font-bold text-brand transition-all group-hover:gap-4">
                                        Read Article <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
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
                            <motion.article key={post.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} onClick={() => openPost(post)} className="group flex cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white transition-all hover:shadow-2xl">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
                                    <div className="absolute left-6 top-6">
                                        <span className="rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-corporate-blue shadow-sm backdrop-blur-md">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-grow flex-col p-8">
                                    <div className="mb-4 text-xs font-medium text-slate-400">{post.date} | {post.readTime}</div>
                                    <h3 className="mb-4 text-xl font-bold leading-tight text-corporate-blue transition-colors group-hover:text-brand">{post.title}</h3>
                                    <p className="mb-6 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
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
                        <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">Stay Ahead of the Curve</h2>
                        <p className="mb-10 text-lg text-white/80">
                            Subscribe to our newsletter and get the latest insights on corporate mobility delivered straight to your inbox.
                        </p>
                        <form className="flex flex-col gap-4 sm:flex-row" onSubmit={handleNewsletterSubmit}>
                            <input type="email" value={newsletterEmail} onChange={(event) => setNewsletterEmail(event.target.value)} placeholder="Enter your work email" className="flex-grow rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/50 focus:bg-white/20 focus:outline-none" />
                            <button type="submit" className="rounded-2xl bg-corporate-blue px-10 py-4 font-bold text-white shadow-xl transition-all hover:bg-corporate-blue/90">
                                Subscribe Now
                            </button>
                        </form>
                        <p className="mt-6 text-xs text-white/60">We respect your privacy. Unsubscribe at any time.</p>
                        {newsletterMessage && <p className="mt-4 text-sm font-semibold text-white">{newsletterMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsPage;
