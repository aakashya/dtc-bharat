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

function WhatsAppIcon({ size = 18 }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.6 5.94L0 24l6.36-1.67a11.8 11.8 0 0 0 5.7 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.41-8.44Zm-8.45 18.3h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.77.99 1-3.67-.23-.38a9.84 9.84 0 0 1-1.5-5.28c0-5.42 4.41-9.83 9.84-9.83 2.63 0 5.1 1.02 6.96 2.88a9.79 9.79 0 0 1 2.87 6.96c0 5.42-4.41 9.83-9.83 9.83Zm5.39-7.36c-.3-.15-1.8-.89-2.08-.99-.28-.1-.49-.15-.69.15-.2.3-.79.99-.96 1.19-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.39-1.48a8.97 8.97 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.7-1.69-.96-2.31-.25-.6-.51-.52-.69-.53h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.03-1.06 2.5 0 1.47 1.08 2.88 1.23 3.08.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.8-.73 2.05-1.43.25-.71.25-1.31.18-1.43-.08-.13-.28-.2-.58-.35Z" />
        </svg>
    );
}

const categories = ['All', 'EV Mobility', 'Women Safety', 'Corporate Mobility'];

const articleContent = {
    'are-we-pushing-ev-adoption-too-early-in-indias-transport-ecosystem': {
        heading: 'Ground Reality vs EV Promise',
        blocks: [
            {
                type: 'paragraph',
                text: 'Let’s keep it real.',
            },
            {
                type: 'paragraph',
                text: 'Even today, CNG stations in India still have long queues, waiting times, and availability issues. Drivers lose time. Routes get disrupted. Operations suffer.',
            },
            {
                type: 'paragraph',
                text: 'And this is a system that has existed for years. Now look at EVs:',
            },
            {
                type: 'list',
                items: [
                    'Limited charging stations (many non-functional)',
                    'Long charging hours',
                    'Uncertain real-world range',
                    'Uncertain power supply in summer season',
                    'Overload power grid/Power-cut',
                ],
            },
            {
                type: 'paragraph',
                text: 'For a transporter, this is not inconvenience.',
            },
            {
                type: 'paragraph',
                text: 'It is a direct hit on efficiency and profitability.',
            },
            {
                type: 'paragraph',
                text: 'Now let’s talk numbers.',
            },
            {
                type: 'paragraph',
                text: 'Charging costs (India 2025–26):',
            },
            {
                type: 'list',
                items: [
                    '₹12–₹25 per unit (public charging)',
                ],
            },
            {
                type: 'paragraph',
                text: 'Yes, running cost is low: ₹2.5 per km, but here is the real problem:',
            },
            {
                type: 'list',
                items: [
                    'EVs are expensive to buy',
                    'Higher capital investment',
                    'Same route payouts',
                    'Lower returns per km for transporters',
                ],
            },
            {
                type: 'paragraph',
                text: 'So while EVs look economical, the business model does not always work on ground.',
            },
            {
                type: 'paragraph',
                text: 'Now the part most people ignore:',
            },
            {
                type: 'paragraph',
                text: 'EVs are not completely clean.',
            },
            {
                type: 'paragraph',
                text: 'Vehicle Whole Life Carbon Emissions Analysis:',
            },
            {
                type: 'list',
                items: [
                    'Gasoline - 24 | 23% | 5.6',
                    'Hybrid - 21 | 31% | 6.5',
                    'EV - 19 | 46% | 8.8',
                ],
            },
            {
                type: 'list',
                items: [
                    'Up to 46% emissions come from production',
                    'Battery manufacturing adds high carbon load',
                    'Production emissions (~8.8t CO2e) > gasoline (~5.6t CO2e)',
                ],
            },
            {
                type: 'paragraph',
                text: '(Source: earth.org)',
            },
            {
                type: 'paragraph',
                text: 'So the real question is:',
            },
            {
                type: 'paragraph',
                text: 'Are we evaluating EVs fully, or just focusing on tailpipe emissions? And this is not just India.',
            },
            {
                type: 'paragraph',
                text: 'Globally, some of the biggest names have already started stepping back:',
            },
            {
                type: 'list',
                items: [
                    'Honda reviewing its EV plans after major losses',
                    'Volvo moving away from full EV commitments',
                    'Apple shutting down its EV project',
                    'Dyson exiting due to lack of commercial viability',
                    'Ford, Nissan, Stellantis slowing down investments',
                    'Mercedes-Benz and Porsche shifting focus back to hybrids',
                ],
            },
            {
                type: 'paragraph',
                text: 'If global players are recalibrating, are we moving too fast without infrastructure?',
            },
            {
                type: 'paragraph',
                text: 'For Indian transporters:',
            },
            {
                type: 'list',
                items: [
                    'Limited options (mostly Tata EVs)',
                    'High upfront cost',
                    'Range challenges',
                    'Charging downtime',
                    'Weak infrastructure',
                ],
            },
            {
                type: 'paragraph',
                text: 'At DTC BHARAT - Delphinium Travelcorp Private Limited), we believe EV is the future. But the transition must be practical, scalable, and sustainable. Because in transportation, decisions are not made on trends. They are made on what works every single day on Indian roads.',
            },
        ],
    },
    'ev-push-by-mncs-green-vision-vs-ground-reality': {
        heading: 'Challenges Behind the EV Transition',
        blocks: [
            {
                type: 'paragraph',
                text: 'The shift towards electric vehicles (EVs) in employee transportation by MNCs in India is a welcome step in the direction of sustainability and reduced carbon footprint. The transition to EVs for their transport partners, while the intent is progressive, the ground reality presents several challenges that need careful consideration as observed by DTC BHARAT - Delphinium Travelcorp Private Limited) Management.',
            },
            {
                type: 'paragraph',
                text: '1. High Initial Investment:EVs come with a significantly higher upfront cost compared to CNG vehicles. For transport vendors and fleet operators, especially small and mid-sized businesses, this becomes a major financial burden without adequate subsidies or assured long-term contracts.',
            },
            {
                type: 'paragraph',
                text: '2. Charging Infrastructure Constraints:The availability of reliable and fast-charging infrastructure is still limited in many cities. Unlike CNG, where refuelling is relatively quicker and more accessible, EV charging requires time, planning, and infrastructure support—which is not yet uniformly available across operational zones.',
            },
            {
                type: 'paragraph',
                text: '3. Operational Downtime:Charging time directly impacts fleet utilization. A vehicle that spends several hours charging reduces daily trip capacity, affecting overall productivity and revenue for vendors.',
            },
            {
                type: 'paragraph',
                text: '4. Tariff Mismatch:One of the biggest concerns is that transport rates have not been revised proportionately to justify the higher cost of EV procurement and operations. Vendors are expected to invest more but are compensated at rates designed for traditional fuel vehicles.',
            },
            {
                type: 'paragraph',
                text: '5. Uncertain Residual Value & Battery Life: Unlike CNG or diesel vehicles, EVs have uncertainties around battery life, replacement costs, and resale value. This adds to the financial risk for fleet owners.',
            },
            {
                type: 'paragraph',
                text: '6. Policy vs Practicality Gap: While ESG goals and green initiatives are being aggressively pursued at the corporate level, the implementation often overlooks operational challenges faced by on-ground partners.',
            },
            {
                type: 'paragraph',
                text: 'The Way Forward:',
            },
            {
                type: 'list',
                items: [
                    'Revision of transport rates aligned with EV economics',
                    'Long-term contracts to ensure ROI for vendors',
                    'Investment support or leasing models for EV adoption',
                    'Development of dedicated charging hubs at client locations',
                    'Incentives and subsidies passed effectively to fleet operators',
                    'Sustainability is a shared responsibility.',
                ],
            },
            {
                type: 'paragraph',
                text: 'For MNCs, transport partners, and policymakers, the goal should not just be to adopt EVs—but to build an ecosystem where the transition is practical, viable, and beneficial for all stakeholders involved.',
            },
        ],
    },
    'womens-safety-in-corporate-transportation': {
        heading: 'Safety, Respect, and Responsibility',
        blocks: [
            {
                type: 'paragraph',
                text: 'A safe journey is not a privilege for women. It is a necessity and a responsibility that every company must uphold.',
            },
            {
                type: 'paragraph',
                text: 'In today’s corporate environment, thousands of women professionals travel to and from workplaces every day, often during early morning or late night hours. Ensuring that these journeys are safe, secure, and reliable is not just a service requirement, it is a critical responsibility.',
            },
            {
                type: 'paragraph',
                text: 'At DTC BHARAT - Delphinium Travelcorp Private Limited), women’s safety is a fundamental priority in the way we design and manage our corporate transportation services.',
            },
            {
                type: 'paragraph',
                text: 'We believe that every woman professional should feel confident, respected, and protected during her commute, regardless of the time of travel.',
            },
            {
                type: 'paragraph',
                text: 'To strengthen this commitment, we regularly conduct awareness and training sessions focused on women safety, professional conduct, and strict zero tolerance policies for all operational staff and drivers.',
            },
            {
                type: 'paragraph',
                text: 'Our approach focuses on key safety principles:',
            },
            {
                type: 'list',
                items: [
                    'Promoting respectful and professional conduct at all times.',
                    'Ensuring heightened awareness and accountability among drivers and staff.',
                    'Enforcing strict zero tolerance towards any form of misconduct.',
                    'Building a transportation culture where safety, dignity, and trust are always prioritized.',
                ],
            },
            {
                type: 'paragraph',
                text: 'For us, corporate mobility is not only about efficiency and punctuality. It is about creating an environment where women professionals can travel to work with complete peace of mind.',
            },
            {
                type: 'paragraph',
                text: 'Because a truly progressive workplace is one where every woman feels safe on her journey to success.',
            },
        ],
    },
    'what-keeps-a-modern-company-moving-efficiently': {
        heading: 'Corporate Mobility That Keeps Business Moving',
        blocks: [
            {
                type: 'paragraph',
                text: 'What keeps a modern company moving efficiently every single day? A mobility system that is safe, reliable, and professionally managed.',
            },
            {
                type: 'paragraph',
                text: 'In today’s fast paced corporate environment, transportation is no longer just a logistical requirement. It is a critical element that supports employee safety, operational continuity, punctuality, and overall productivity.',
            },
            {
                type: 'paragraph',
                text: 'Companies today require mobility solutions that are structured, dependable, and aligned with the expectations of modern business operations.',
            },
            {
                type: 'paragraph',
                text: 'At DTC BHARAT - Delphinium Travelcorp Private Limited), we provide professionally managed corporate mobility solutions designed to support the diverse transportation needs of organizations.',
            },
            {
                type: 'paragraph',
                text: 'Our key service offerings include:',
            },
            {
                type: 'list',
                items: [
                    'Corporate / Employee Transportation Services (ETS) - Structured and dependable employee commute programs designed to ensure safe, timely, and efficient workforce mobility while supporting seamless daily operations.',
                    'Spot Rental Services - Flexible on demand vehicle solutions designed to support business meetings, corporate visits, and immediate travel requirements with efficiency and professionalism.',
                ],
            },
            {
                type: 'paragraph',
                text: 'With nearly two decades of experience in the corporate transportation sector, DTC BHARAT - Delphinium Travelcorp Private Limited) continues to deliver mobility solutions built on safety, operational discipline, and service excellence.',
            },
            {
                type: 'paragraph',
                text: 'Our focus is simple. To support Corporates with transportation systems that enhance efficiency, reliability, and employee convenience, enabling businesses to move forward with confidence in a rapidly evolving corporate landscape.',
            },
            {
                type: 'paragraph',
                text: 'Because when mobility works seamlessly, businesses move forward without disruption.',
            },
        ],
    },
    'why-driver-training-is-the-foundation-of-safe-mobility': {
        heading: 'Training Builds Safer Journeys',
        blocks: [
            {
                type: 'paragraph',
                text: 'In corporate transportation, safety begins long before the vehicle starts moving. It begins with a well trained driver.',
            },
            {
                type: 'paragraph',
                text: 'Drivers are the most critical link in delivering safe, reliable, and professional mobility services. Every journey reflects not only driving skills but also the discipline, responsibility, and professionalism of the person behind the wheel.',
            },
            {
                type: 'paragraph',
                text: 'At DTC BHARAT - Delphinium Travelcorp Private Limited), we place strong emphasis on structured driver training and continuous skill development, ensuring that every driver represents our standards of safety, professionalism, and service excellence.',
            },
            {
                type: 'paragraph',
                text: 'Our driver training programs focus on:',
            },
            {
                type: 'list',
                items: [
                    'Defensive driving and road safety practices',
                    'Professional behaviour and passenger etiquette',
                    'Corporate safety protocols and compliance awareness',
                    'Emergency preparedness and responsible decision making',
                    'Punctuality, route discipline, and service reliability',
                ],
            },
            {
                type: 'paragraph',
                text: 'Through continuous training, monitoring, and operational guidance, we ensure that every driver representing DTC BHARAT understands the responsibility of transporting corporate professionals safely and respectfully.',
            },
            {
                type: 'paragraph',
                text: 'Because in corporate mobility, a well trained driver is the foundation of every safe and dependable journey.',
            },
        ],
    },
};

const posts = [
    {
        id: 1,
        slug: 'are-we-pushing-ev-adoption-too-early-in-indias-transport-ecosystem',
        title: 'Are We Pushing EV Adoption Too Early in India’s Transport Ecosystem?',
        excerpt: 'On paper, EVs look perfect. On Indian roads, the reality is very different.',
        category: 'EV Mobility',
        date: 'April 8, 2026',
        readTime: '4 min read',
        image: '/images/blogs/blog_ev.jpeg',
        featured: true,
    },
    {
        id: 2,
        slug: 'ev-push-by-mncs-green-vision-vs-ground-reality',
        title: 'EV Push by MNCs: Green Vision vs Ground Reality',
        excerpt: 'The EV shift in employee transportation is progressive in intent, but the on-ground challenges for transport partners remain significant.',
        category: 'EV Mobility',
        date: 'April 8, 2026',
        readTime: '4 min read',
        image: '/images/blogs/ev_push.jpeg',
    },
    {
        id: 3,
        slug: 'womens-safety-in-corporate-transportation',
        title: 'Women’s Safety in Corporate Transportation',
        excerpt: 'A safe journey is not a privilege for women. It is a necessity and a responsibility every company must uphold.',
        category: 'Women Safety',
        date: 'April 8, 2026',
        readTime: '3 min read',
        image: '/images/blogs/women_safety.jpeg',
    },
    {
        id: 4,
        slug: 'what-keeps-a-modern-company-moving-efficiently',
        title: 'What Keeps a Modern Company Moving Efficiently?',
        excerpt: 'A modern business runs better with mobility systems that are safe, reliable, and professionally managed.',
        category: 'Corporate Mobility',
        date: 'April 8, 2026',
        readTime: '3 min read',
        image: '/images/blogs/cabs.jpeg',
    },
    {
        id: 5,
        slug: 'why-driver-training-is-the-foundation-of-safe-mobility',
        title: 'Why Driver Training Is the Foundation of Safe Mobility',
        excerpt: 'In corporate transportation, safety begins long before the vehicle starts moving. It begins with a well trained driver.',
        category: 'Corporate Mobility',
        date: 'April 8, 2026',
        readTime: '3 min read',
        image: '/images/blogs/team_training.jpeg',
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

    const openShareWindow = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer,width=640,height=640');
    };

    const getShareLinks = (post) => {
        const articleUrl = `${window.location.origin}/blogs/${post.slug}`;
        const encodedUrl = encodeURIComponent(articleUrl);
        const encodedTitle = encodeURIComponent(post.title);
        const encodedText = encodeURIComponent(`${post.title} ${articleUrl}`);

        return [
            {
                key: 'facebook',
                label: 'Share on Facebook',
                Icon: Facebook,
                url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            },
            {
                key: 'twitter',
                label: 'Share on X',
                Icon: Twitter,
                url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            },
            {
                key: 'linkedin',
                label: 'Share on LinkedIn',
                Icon: Linkedin,
                url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            },
            {
                key: 'whatsapp',
                label: 'Share on WhatsApp',
                Icon: WhatsAppIcon,
                url: `https://wa.me/?text=${encodedText}`,
            },
        ];
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
                        <img src={selectedPost.image} alt={selectedPost.title} className="h-full w-full object-cover" />
                    </div>

                    <div className="space-y-8 text-slate-600">
                        <p className="border-l-4 border-brand py-2 pl-6 text-xl font-medium italic text-corporate-blue/80">
                            {selectedPost.excerpt}
                        </p>
                        <h3 className="font-display text-2xl font-bold text-corporate-blue">{content.heading}</h3>
                        {content.blocks.map((block, index) => {
                            if (block.type === 'list') {
                                return (
                                    <div key={`${selectedPost.slug}-list-${index}`} className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10">
                                        <ul className="space-y-4">
                                            {block.items.map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <CheckCircle2 className="mt-1 shrink-0 text-brand" size={20} />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            }

                            return (
                                <p key={`${selectedPost.slug}-paragraph-${index}`} className="text-lg leading-relaxed">
                                    {block.text}
                                </p>
                            );
                        })}
                    </div>

                    <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row">
                        <div className="flex flex-col items-center gap-4 md:flex-row">
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Share this article:</span>
                            <div className="flex gap-3">
                                {getShareLinks(selectedPost).map((shareItem) => (
                                    <button
                                        key={shareItem.key}
                                        type="button"
                                        aria-label={shareItem.label}
                                        onClick={() => openShareWindow(shareItem.url)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all hover:bg-brand hover:text-white"
                                    >
                                        <shareItem.Icon size={18} />
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
                                <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
                                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
