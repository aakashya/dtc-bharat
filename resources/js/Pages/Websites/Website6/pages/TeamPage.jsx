import { motion } from 'framer-motion';
import { Clock, Shield, Users } from 'lucide-react';

function TeamPage() {
    const leaders = [
        {
            name: "Dr. Sushil Ranvir Singh",
            role: "Founder & Director",
            credentials: ["Ph.D.", "MBA", "LL.M.", "LL.B.", "BCA", "APDSE (Hons.)", "MCSE", "OCP", "DSM"],
            desc: "A visionary leader and the founder of Delphinium Travelcorp, Dr. Sushil Ranvir Singh has nurtured the organization from its inception. With a multi-faceted academic background and deep expertise in technology integration, he has been the driving force behind the company's phenomenal growth. He is committed to positioning India as Asia's premier travel destination while transforming Delphinium Travelcorp into a global benchmark for service excellence.",
            img: "/images/team/sushil.jpeg"
        },
    ];
    const additionalTeam = [
        {
            name: "Mrs. Pratibha",
            role: "Head - HR",
            credentials: ["BA", "DCM"],
            desc: "A dynamic leader in human resource management, she heads the company's HR function with a strong focus on organisational growth, people development, and operational discipline. She plays a vital role in building a professional, motivated, and high-performing workforce while ensuring smooth coordination across teams. With a keen understanding of talent management, employee relations, and workplace culture, she contributes significantly to strengthening the company's internal framework and long-term vision.",
            img: "/images/team/bhuaji-n.JPG",
        },
        {
            name: "Mr. Vikas",
            role: "Director of Business Development",
            credentials: ["B.Com", "MSc. Business Analytics & Decision Sciences"],
            desc: "A strategic leader in brand development and digital innovation, He leads the organisation’s brand positioning, digital presence, and reputation strategy as Director of Brand & Digital Strategy. With a background in Business Analytics & Decision Sciences from University of Leeds, UK, and experience in scaling international ventures, he drives brand growth through data-driven marketing, digital engagement, and strategic storytelling, strengthening the organisation’s global visibility and long-term market impact.",
            img: "/images/team/vi.jpg",
        },
        {
            name: "Mr. Vishal",
            role: "Transport Lead",
            credentials: ["Fleet Operations", "Route Planning", "Site Management"],
            desc: "As Transport Lead, he manages daily employee transport operations by leading drivers, coordinators, and transport vendors to ensure smooth execution. He plans and optimizes pickup and drop routes, monitors fleet movement through GPS systems, and maintains strong standards for safety, compliance, and service quality. He also resolves transport issues and employee complaints promptly, while maintaining MIS reports and coordinating closely with HR and Admin teams. His core objective is to deliver safe, efficient, and consistently on-time employee transportation.",
            img: "/images/team/vishal.jpg",
        },
        {
            name: "Adv. Chirag",
            role: "Legal Advisor",
            credentials: ["BA.LLB. Hons. (Gold Medalist)"],
            desc: "She serves as the Legal Advisor to the company, bringing strong legal expertise and strategic insight to its operations. As the Founder of The LawXpert, she specialises in corporate advisory, dispute resolution, and regulatory compliance. Her guidance ensures the company’s operations remain legally sound, transparent, and aligned with industry standards. Known for her precision and solution-oriented approach, she plays a key role in safeguarding the organisation’s interests and strengthening its governance framework.",
            img: "/images/team/chirag-neww.jpg",
        },
    ];
    const additionalTeamDisplayOrder = ["Mr. Vikas", "Adv. Chirag", "Mrs. Pratibha", "Mr. Vishal"];
    const orderedAdditionalTeam = [...additionalTeam].sort(
        (a, b) => additionalTeamDisplayOrder.indexOf(a.name) - additionalTeamDisplayOrder.indexOf(b.name)
    );

    return (
        <div className="pt-32 pb-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="text-brand font-bold tracking-widest uppercase text-base mb-4">Our Leadership</div>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-corporate-blue mb-6">The Visionary Behind <span className="text-brand">DTC Bharat</span></h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Leading with academic excellence and a passion for technological innovation in the transportation industry.
                    </p>
                </div>

                <div className="flex justify-center mb-24">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 group max-w-3xl w-full flex flex-col md:flex-row"
                        >
                            <div className="md:w-2/5 h-[22rem] md:h-auto overflow-hidden">
                                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                            </div>
                            <div className="md:w-3/5 p-10 flex flex-col justify-start">
                                <div className="mb-6">
                                    <div className="mb-2 inline-block">
                                        <h3 className="text-2xl md:text-3xl font-display font-bold text-corporate-blue">
                                            {leader.name}
                                        </h3>
                                        <div className="mt-1 text-left md:text-right text-brand text-sm font-bold uppercase tracking-widest">
                                            {leader.role}
                                        </div>
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {leader.credentials.map((credential) => (
                                            <span
                                                key={credential}
                                                className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold text-corporate-blue"
                                            >
                                                {credential}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-slate-600 text-base leading-relaxed text-left italic">
                                    {leader.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mb-24 mx-0 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-28">
                    {orderedAdditionalTeam.map((member, i) => (
                        <motion.div
                            key={`${member.name}-${i}`}
                            whileHover={{ y: -8 }}
                            className="group overflow-hidden rounded-[2.25rem] border border-slate-100 bg-white shadow-xl"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                    referrerPolicy="no-referrer"
                                />
                            </div> 
                            <div className="p-8">
                                <h3 className="mb-1 text-xl md:text-2xl font-display font-bold text-corporate-blue">
                                    {member.name}
                                </h3>
                                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand">
                                    {member.role}
                                </p>
                                <div className="mb-4 mt-3 flex flex-wrap gap-2">
                                    {member.credentials.map((credential) => (
                                        <span
                                            key={`${member.name}-${credential}`}
                                            className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-[11px] font-semibold text-corporate-blue"
                                        >
                                            {credential}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-sm leading-relaxed text-justify text-slate-600">
                                    {member.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-corporate-blue rounded-3xl p-12 text-white text-center">
                    <h3 className="text-xl md:text-2xl font-bold mb-4">Our Support Backbone</h3>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                        Beyond our leadership, we are powered by a dedicated 24/7 operations desk, fleet supervisors, and certified professional drivers who ensure every journey is safe and on time.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-2">
                            <Users className="text-brand" />
                            <span className="font-semibold">200+ Professional Drivers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="text-brand" />
                            <span className="font-semibold">50+ Operations Staff</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-brand" />
                            <span className="font-semibold">24/7 Support Desk</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TeamPage;
