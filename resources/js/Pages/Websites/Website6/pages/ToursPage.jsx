import { Car, CheckCircle2, Clock, Info } from 'lucide-react';

function ToursPage({ setActivePage }) {
    const pricing = [
        { type: "Hatchback", seater: "4 Seater Cab", price: "₹7,500", original: "₹9,000" },
        { type: "Sedan", seater: "4 Seater Cab", price: "₹10,000", original: "₹12,000" },
        { type: "SUV/MUV (CUV)", seater: "6 Seater Cab", price: "₹12,500", original: "₹15,000" },
    ];

    const places = [
        {
            name: "Agra Fort",
            desc: "Agra Fort in Agra is a UNESCO World Heritage site was built by Mughal Empire Akbar. It is located nearly 2 km from Historic Taj Mahal. The fort built by splendid red stone so it is also known as Lal Qila. The fort contains many palaces built by both red and white marble. Some palaces were built with traditional Gujarati and Bengali designs is a major tourist destiny of India.",
            img: "/images/tours/agra-fort.jpg"
        },
        {
            name: "Taj Mahal",
            desc: "Taj Mahal is one of the Seven Wonders of the World built by Saha Jahan for his beloved wife Mamtaz Mahal. Taj displays its different moods throughout the day through its varied shades, pinkish in the morning, milky white in the evening, golden when the moon shines. The tomb represents the house of the queen paradise and it is based on the palace garden of the great nobles on the both sides of river Yamuna in Agra. The Taj made up with white marble is a great attraction of India and is considered as a symbol of love.",
            img: "/images/tours/taj-mahal.webp"
        },
        {
            name: "Sikandra",
            desc: "Sikandra the Mausoleum of Mughal Emperor Akbar, is located in the city of Agra. The Monument was started by the Emperor himself. A visit to Sikandra opens before the tourists a complete lifestyle and personality of Empire Akbar including the arts, literature, philosophy & science during his period. The Construction of the pyramidal tomb was completed by Akbar’s son Jahangir.",
            img: "/images/tours/sikandra-agra.jpg"
        },
        {
            name: "Mathura",
            desc: "Mathura or Brij- Bhoomi is popularly known as the birthplace of Lord Krishna. The place is known as a holy place by Hindus and is one of the most religious place of India. Mathura is situated in 145km from Delhi. The city is known for its many temples dedicated to Hindu God & Goddesses. Many religious places like Vrindavan, Govardhan, Kusum Sarovar, Barsana and Nandgaon are surrounded to the holy city Mathura. Dwarkadesh temple of Mathura with beautiful, ethereal pictures depicting the entire life of Krishna. Mathura is a must visit place for Hindu devotees.",
            img: "/images/tours/mathura.jpg"
        },
        {
            name: "Vrindavan",
            desc: "Vrindavan, just 15km from Mathura is a sacred place for Hindu Religion. Vrindavan is the place where Lord Krishna spent his childhood days. This notable place is famous for its lovable characteristics of Lord Krishna with his beloved Radha. Vrindavan attracts Hindu deities for its numerous temples like Guru Govinda temple, Madon Mohan Temple. Millions of devotees visit Vrindavan in a number of festivals relates to the life of Krishna On earth. The Vrindavan Ashram for the devotees is also a great attraction for the Hindu pilgrims.",
            img: "/images/tours/vrindavan.jpg"
        }
    ];

    const itinerary = [
        { time: "06:00 AM", location: "Delhi/Gurgaon", event: "Departure" },
        { time: "08:30 AM", location: "Yamuna Expressway", event: "Breakfast Break (Arr. 08.30 AM Dep. 9.00 AM)" },
        { time: "11:00 AM", location: "Agra Fort", event: "Arrival & Sightseeing (Dep. 12.30 PM)" },
        { time: "12:30 PM", location: "Agra", event: "Shopping (Dep. 01.30 PM)" },
        { time: "01:30 PM", location: "Agra", event: "Lunch Break (Dep. 02.30 PM)" },
        { time: "02:30 PM", location: "Taj Mahal", event: "Arrival & Sightseeing (Dep. 04.30 PM)" },
        { time: "06:00 PM", location: "Mathura (Lord Krishna Temple)", event: "Arrival & Visit (Dep. 07.00 PM)" },
        { time: "07:15 PM", location: "Vrindavan", event: "Arrival & Visit (Dep. 08.15 PM)" },
        { time: "09:00 PM", location: "Yamuna Expressway", event: "Dinner Break (Arr. 09.00 PM Dep. 10.00 PM)" },
        { time: "11:30 PM", location: "Delhi/Gurgaon", event: "Arrival & Drop-off" },
    ];

    return (
        <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Special Tour Package</div>
                    <h1 className="text-4xl md:text-7xl font-display font-bold text-corporate-blue mb-6">
                        Agra - <span className="text-brand">Mathura</span> - Vrindavan
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg">
                        Daily 16 Hours Tour (Dep. from 6.00 AM) starting from Gurgaon
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm overflow-hidden">
                            <div className="bg-corporate-blue p-8 text-white">
                                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                                    <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                                        <Car className="text-brand" /> Fleet Pricing
                                    </h3>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-slate-100">
                                        <Clock size={14} className="text-brand" />
                                        16+ Hours | 06:00 AM - 11:30 PM
                                    </div>
                                </div>
                            </div>
                            <div className="p-0">
                                <div className="space-y-3 p-4 md:hidden">
                                    {pricing.map((p, i) => (
                                        <div
                                            key={`mobile-price-${i}`}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                                        >
                                            <div className="mb-2 flex items-center justify-between">
                                                <div className="text-base font-bold text-corporate-blue">
                                                    {p.type}
                                                </div>
                                                <div className="text-xs font-semibold text-slate-500">
                                                    {p.seater}
                                                </div>
                                            </div>
                                            <div className="flex items-end justify-between">
                                                <span className="text-xs text-slate-400 line-through">
                                                    {p.original}
                                                </span>
                                                <span className="text-xl font-bold text-brand">{p.price}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden md:block">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-50 border-b border-slate-200">
                                                <th className="px-8 py-4 font-bold text-corporate-blue">Cab Type</th>
                                                <th className="px-8 py-4 font-bold text-corporate-blue">Capacity</th>
                                                <th className="px-8 py-4 font-bold text-corporate-blue text-right">Special Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {pricing.map((p, i) => (
                                                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                                    <td className="px-8 py-6 font-bold text-corporate-blue">{p.type}</td>
                                                    <td className="px-8 py-6 text-slate-500">{p.seater}</td>
                                                    <td className="px-8 py-6 text-right">
                                                        <span className="text-slate-400 line-through text-sm mr-2">{p.original}</span>
                                                        <span className="text-lg md:text-xl font-bold text-brand">{p.price}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-brand/5 rounded-[2rem] p-8 border border-brand/10">
                            <h3 className="text-lg md:text-xl font-bold text-corporate-blue mb-6 flex items-center gap-2">
                                <Info className="text-brand" /> Please Note
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Passenger Must Carry ID proof",
                                    "Package Includes Cabs & Guide Only",
                                    "GST will be extra as per actual",
                                    "Above mentioned schedule is for ideal traffic conditions",
                                    "Departure 6.00 Am Arrival. 11.30 Pm Saturday & Sunday"
                                ].map((note, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                                        <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={16} />
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-px flex-grow bg-slate-200" />
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-corporate-blue px-4">Places Covered</h2>
                        <div className="h-px flex-grow bg-slate-200" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {places.map((place, i) => (
                            <div key={i} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all">
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={place.img}
                                        alt={place.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-lg md:text-xl font-bold text-corporate-blue mb-4">{place.name}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{place.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-corporate-blue mb-4">Tour Itinerary</h2>
                        <p className="text-slate-500">Detailed schedule for the Agra - Mathura - Vrindavan experience</p>
                    </div>

                    <div className="max-w-4xl mx-auto relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-300 -translate-x-1/2" />

                        <div className="space-y-12">
                            {itinerary.map((item, i) => (
                                <div key={i} className={`relative flex flex-col gap-8 pl-10 md:pl-0 md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="absolute left-4 md:left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand shadow-sm z-10" />

                                    <div className="md:w-1/2">
                                        <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand/20 transition-all ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                            <div className="text-brand font-bold text-sm mb-1">{item.time}</div>
                                            <div className="text-base md:text-lg font-bold text-corporate-blue mb-1">{item.location}</div>
                                            <div className="text-slate-500 text-sm">{item.event}</div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <button
                        type="button"
                        onClick={() => setActivePage('contact')}
                        className="bg-brand text-white px-12 py-5 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:bg-brand-dark transition-all electric-glow"
                    >
                        Book This Tour Package
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ToursPage;
