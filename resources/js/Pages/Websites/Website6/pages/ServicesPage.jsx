import { router } from '@inertiajs/react';
import {
    Award,
    ArrowRight,
    Briefcase,
    Car,
    CheckCircle2,
    MapPin,
    Navigation,
    RefreshCcw,
    Users,
} from 'lucide-react';

const PAGE_URLS = {
    contact: '/contact',
};

function ServicesSection() {
    return (
        <section className="pt-32 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <div className="mx-auto max-w-5xl">
                        <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Our Services</div>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-corporate-blue">
                            Comprehensive <span className="text-brand">Mobility Solutions</span>
                        </h2>
                        <p className="mt-4 text-slate-500 text-sm md:text-base">
                            Tailored transportation services designed to meet the dynamic needs of modern enterprises.
                        </p>
                    </div>
                </div>

                <div id="employee-transportation" className="mb-20 scroll-mt-32">
                    <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="lg:w-2/3">
                                    <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                                        <Users size={32} />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold text-corporate-blue mb-6">Employee Transportation</h3>
                                    <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                                        DTC Bharat is one of the pioneers in providing Employee Transportation Solutions, expanding our service network at a PAN India level. We provide these solutions to large corporates with zero capital investment by them, allowing them to focus on their core area of business, leaving the operational hassles to an experienced service provider like Delphinium Travelcorp (DTC Bharat).
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h4 className="font-bold text-corporate-blue mb-4 flex items-center gap-2">
                                                <Briefcase className="text-brand" size={20} /> Industries Catered To:
                                            </h4>
                                            <ul className="space-y-3">
                                                {['BPOs & KPOs', 'IT, ITES & Consulting Companies', 'Real Estate', 'Telecom Companies', 'Banking and Financial Services'].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-corporate-blue mb-4 flex items-center gap-2">
                                                <Award className="text-brand" size={20} /> DTC Bharat Advantage:
                                            </h4>
                                            <ul className="space-y-3">
                                                {[
                                                    'Complete solutions with Routing, Rostering & Optimization',
                                                    'Fleet of 300+ vehicles, 36,000+ trips monthly',
                                                    'Customized MIS & Billing systems',
                                                    'GPS & GPRS enabled Safety Tracking',
                                                    '24/7 Dedicated Operational Support',
                                                    'PAN India Service Capability',
                                                    'Support for Adhoc transport services'
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                                        <CheckCircle2 className="text-brand shrink-0" size={16} />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/3">
                                    <div className="h-full rounded-3xl overflow-hidden shadow-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2017&auto=format&fit=crop"
                                            alt="Employee Transport"
                                            className="w-full h-full object-cover"
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: 'Shuttle Services',
                            anchor: 'shuttle-services',
                            desc: 'A Fix cab used as per Company requirement. Ideal for fixed working hours with a minimum running guarantee.',
                            icon: <RefreshCcw size={24} />,
                            img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop'
                        },
                        {
                            title: 'Spot Rental',
                            anchor: 'spot-rental',
                            desc: 'On-the-spot or unscheduled cab requests entertained with premium vehicles for VIPs and events.',
                            icon: <Car size={24} />,
                            img: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=2072&auto=format&fit=crop'
                        },
                        {
                            title: 'Outstation Trip Packages',
                            anchor: 'outstation-trip-packages',
                            desc: 'Professional outstation trip packages beyond Delhi NCR, tailored for corporate and individual needs.',
                            icon: <MapPin size={24} />,
                            img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop'
                        },
                        {
                            title: 'VIP Airport Transfers',
                            anchor: 'vip-airport-transfers',
                            desc: 'Priority airport pickups and drop-offs with professional chauffeurs, flight tracking, and premium vehicle options.',
                            icon: <Navigation size={24} />,
                            img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2070&auto=format&fit=crop'
                        }
                    ].map((service, i) => (
                        <div
                            key={i}
                            id={service.anchor}
                            className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all scroll-mt-32"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div className="p-8">
                                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-corporate-blue mb-4">{service.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                                <button
                                    type="button"
                                    onClick={() => router.visit(PAGE_URLS.contact)}
                                    className="flex items-center gap-2 text-brand font-bold text-xs group-hover:gap-4 transition-all"
                                >
                                    Book Now <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


export default ServicesSection;
