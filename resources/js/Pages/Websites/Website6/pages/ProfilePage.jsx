import { motion } from 'framer-motion';
import { Car, CheckCircle2, Clock, Navigation } from 'lucide-react';

function ProfilePage() {
    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Company Profile</div>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-corporate-blue mb-8">
                        Our Journey & <span className="text-brand">Vision</span>
                    </h1>
                    <div className="max-w-4xl mx-auto p-10 glass-card rounded-3xl border-l-8 border-l-brand">
                        <p className="text-xl md:text-3xl font-display italic text-corporate-blue leading-relaxed">
                            “To ensure an environment that our Clients, Cab Users and Staff are proud to be a part of”
                        </p>
                        <div className="mt-6 font-bold text-brand uppercase tracking-widest">- Our Philosophy</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-corporate-blue mb-6">Profile Summary</h2>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed text-justify">
                            Founded in 2006 as Royal Travels, the company began with a clear vision to deliver dependable, disciplined, and professional transportation solutions to the evolving corporate sector. Under the dynamic leadership and foresight of its founder, <span className="font-bold text-corporate-blue">Dr. Sushil Ranvir Singh</span>, the company established a strong foundation built on operational integrity, service reliability, and an unwavering commitment to client satisfaction. From its earliest days, the company distinguished itself through professionalism and a results-driven approach, fostering long-term relationships with its corporate partners.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg mb-6 leading-relaxed text-justify">
                            With steady growth and expanding corporate trust, the enterprise was formally incorporated in 2011 as Royal Corptravel Private Limited, marking a significant milestone in its journey. This transition strengthened its corporate framework, enabling the company to scale its operations, streamline service standards, and effectively cater to the growing and sophisticated mobility requirements of corporate clients.
                        </p>
                    </motion.div>
                    <div>
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl" alt="Corporate Office" referrerPolicy="no-referrer" />
                            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand rounded-[2rem] flex items-center justify-center text-white p-8 shadow-2xl rotate-3">
                                <div className="text-center">
                                    <Clock size={40} className="mx-auto mb-2" />
                                    <div className="text-sm font-bold uppercase tracking-tighter">Established 2006</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                            Driven by innovation and a forward-looking outlook, the company entered a new era in 2024 with its transformation into <span className="font-bold text-brand">DTC Bharat</span>. This evolution represents not merely a change of identity, but a strategic advancement towards adopting modern technology, enhanced compliance systems, and elevated standards of operational excellence in the corporate transportation sector.
                        </p>
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed text-justify">
                            Today, <span className="font-bold text-brand">DTC Bharat</span>, under the visionary guidance of its founder <span className="font-bold text-corporate-blue">Dr. Sushil Ranvir Singh</span>, stands as a progressive and trusted name in corporate mobility. With nearly two decades of industry experience, the company continues to set higher benchmarks in delivering secure, efficient, and seamless transportation solutions, tailored to the dynamic and ever-evolving needs of corporate India.
                        </p>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="bg-corporate-blue rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                        <div className="relative z-10">
                            <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Business Profile</div>
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Our Mission & Commitment</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                                    The mission of Delphinium Travelcorp is to provide customers with long-term quality transportation solutions, which are cost effective with the objective to be recognized as a preferred business partner with a high standard of safety of service. We assure our esteemed customers for best transport solution available in a professional way.
                                </p>
                                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                                    DTC Bharat is committed to maintaining the highest standard of safety, security and environmental protection always. This is achieved by investing in the training and future of all our employees. We operate a diverse fleet of vehicles however, these have one thing in common, that is they all operate to the same high standard.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
                    <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-corporate-blue mb-8 flex items-center gap-3">
                            <Navigation className="text-brand" /> Cab Running Models
                        </h3>
                        <ul className="space-y-4">
                            {[
                                'Fix Route based Cab Running Model',
                                'Multiple Trip Based Cab running Model',
                                'Adhoc Pickup & Drop',
                                'Spot Rental',
                                'Outstation Trips Packages'
                            ].map((model, i) => (
                                <li key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                    <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                                        <CheckCircle2 size={18} />
                                    </div>
                                    <span className="font-semibold text-corporate-blue">{model}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-12 bg-white rounded-[3rem] border border-slate-200 shadow-sm">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-corporate-blue mb-8 flex items-center gap-3">
                            <Car className="text-brand" /> Our Fleet Consists of
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
                            {[
                                {
                                    cat: 'Hatchback',
                                    models: ['Suzuki Wagon-R', 'Suzuki Ritz', 'Hyundai Santro'],
                                },
                                {
                                    cat: 'Sedan',
                                    models: ['Hyundai Aura', 'Suzuki Swift Dzire', 'Tata Tigor EV'],
                                },
                                {
                                    cat: 'SUV/MUV (CUV)',
                                    models: ['Suzuki Ertiga', 'MG Windsor', 'Toyota Innova Crysta', 'Toyota Innova Hycross'],
                                },
                                { cat: 'Bus', models: ['Force Traveller', 'Force Urbania'] }
                            ].map((item, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="inline-flex items-center border-l-4 border-brand pl-3 text-sm font-bold uppercase tracking-wider text-corporate-blue md:text-[15px]">
                                        {item.cat}
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {item.models.map((model) => (
                                            <span
                                                key={`${item.cat}-${model}`}
                                                className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold text-corporate-blue"
                                            >
                                                {model}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-corporate-blue mb-6">Growth & Vision</h2>
                        <p className="text-slate-600 text-base md:text-lg mb-12 leading-relaxed">
                            We have grown to a fleet of over <span className="text-brand font-bold">300+ cars</span> to date, and have formed a wide network of vendors to increase capacity at short notice. This has been possible due to the sheer goodwill created because of the <span className="font-bold">QUALITY</span> of our services and the <span className="font-bold">VISION</span> of our core team.
                        </p>

                        <div className="inline-block p-1 bg-brand rounded-full mb-8">
                            <div className="bg-white px-10 py-4 rounded-full">
                                <p className="text-lg md:text-2xl font-display font-bold text-corporate-blue italic">
                                    “Safe & Joyful journey in excellent timings”
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            This is a commitment from the highest level of our management and its implementation and effectiveness is checked regularly to verify compliance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProfilePage;
