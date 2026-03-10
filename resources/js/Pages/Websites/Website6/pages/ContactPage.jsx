import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Mail, MapPin, Phone, Users } from 'lucide-react';

const CUSTOMER_BOOKING_DEFAULTS = {
    form_type: 'customer',
    source_page: 'home',
    booked_by_name: '',
    booked_by_phone: '',
    booked_by_email: '',
    reporting_date: '',
    reporting_place: '',
    reporting_time: '',
    cab_type: '',
    special_instructions: '',
};

const CLIENT_BOOKING_DEFAULTS = {
    form_type: 'client',
    source_page: 'home',
    booked_by_name: '',
    booked_by_phone: '',
    booked_by_email: '',
    client_name: '',
    client_phone: '',
    client_email: '',
    reporting_date: '',
    reporting_place: '',
    reporting_time: '',
    cab_type: '',
    special_instructions: '',
};

function ContactPage() {
    const [formType, setFormType] = useState('customer');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const customerForm = useForm({ ...CUSTOMER_BOOKING_DEFAULTS, source_page: 'contact' });
    const clientForm = useForm({ ...CLIENT_BOOKING_DEFAULTS, source_page: 'contact' });

    const submitCustomerForm = (e) => {
        e.preventDefault();
        customerForm.post('/booking-requests', {
            preserveScroll: true,
            onSuccess: () => {
                customerForm.reset();
                setSuccessMessage('Booking request submitted successfully.');
                setErrorMessage('');
            },
            onError: (errors) => {
                setSuccessMessage('');
                setErrorMessage(
                    Object.values(errors || {})[0] || 'Failed to submit booking request. Please check your details.'
                );
            },
        });
    };

    const submitClientForm = (e) => {
        e.preventDefault();
        clientForm.post('/booking-requests', {
            preserveScroll: true,
            onSuccess: () => {
                clientForm.reset();
                setSuccessMessage('Booking request submitted successfully.');
                setErrorMessage('');
            },
            onError: (errors) => {
                setSuccessMessage('');
                setErrorMessage(
                    Object.values(errors || {})[0] || 'Failed to submit booking request. Please check your details.'
                );
            },
        });
    };

    const renderCustomerForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-xl font-bold text-corporate-blue md:text-2xl">
                Booking Form for Customers
            </h3>
            {successMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-emerald-600">
                    {successMessage}
                </p>
            )}
            {errorMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-rose-600">
                    {errorMessage}
                </p>
            )}
            <form className="space-y-6" onSubmit={submitCustomerForm}>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Users size={18} /> Customer Information
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input
                            type="text"
                            value={customerForm.data.booked_by_name}
                            onChange={(e) => customerForm.setData('booked_by_name', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Full Name"
                        />
                        <input
                            type="tel"
                            value={customerForm.data.booked_by_phone}
                            onChange={(e) => customerForm.setData('booked_by_phone', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Contact No."
                        />
                        <input
                            type="email"
                            value={customerForm.data.booked_by_email}
                            onChange={(e) => customerForm.setData('booked_by_email', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Clock size={18} /> Scheduling
                    </h4>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="date"
                            value={customerForm.data.reporting_date}
                            onChange={(e) => customerForm.setData('reporting_date', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <input
                            type="text"
                            value={customerForm.data.reporting_place}
                            onChange={(e) => customerForm.setData('reporting_place', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                            placeholder="Reporting Place"
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input
                            type="time"
                            value={customerForm.data.reporting_time}
                            onChange={(e) => customerForm.setData('reporting_time', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        />
                        <select
                            value={customerForm.data.cab_type}
                            onChange={(e) => customerForm.setData('cab_type', e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                        >
                            <option value="">Select Cab Type</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV/MUV">SUV/MUV (CUV)</option>
                            <option value="Bus">Bus</option>
                        </select>
                    </div>
                </div>
                <textarea
                    rows={4}
                    value={customerForm.data.special_instructions}
                    onChange={(e) => customerForm.setData('special_instructions', e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none"
                    placeholder="Special Instructions (if any)"
                />
                <button
                    type="submit"
                    disabled={customerForm.processing}
                    className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {customerForm.processing ? 'Submitting...' : 'Book Now'}
                </button>
            </form>
        </>
    );

    const renderClientForm = () => (
        <>
            <h3 className="mb-8 text-center font-display text-xl font-bold text-corporate-blue md:text-2xl">
                Booking Form for Clients
            </h3>
            {successMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-emerald-600">
                    {successMessage}
                </p>
            )}
            {errorMessage && (
                <p className="mb-6 text-center text-sm font-semibold text-rose-600">
                    {errorMessage}
                </p>
            )}
            <form className="space-y-8" onSubmit={submitClientForm}>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Users size={18} /> Booked By
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input type="text" value={clientForm.data.booked_by_name} onChange={(e) => clientForm.setData('booked_by_name', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Your Name" />
                        <input type="tel" value={clientForm.data.booked_by_phone} onChange={(e) => clientForm.setData('booked_by_phone', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Contact No." />
                        <input type="email" value={clientForm.data.booked_by_email} onChange={(e) => clientForm.setData('booked_by_email', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Your Email" />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Briefcase size={18} /> Booked For
                    </h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <input type="text" value={clientForm.data.client_name} onChange={(e) => clientForm.setData('client_name', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Name" />
                        <input type="tel" value={clientForm.data.client_phone} onChange={(e) => clientForm.setData('client_phone', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Contact No." />
                        <input type="email" value={clientForm.data.client_email} onChange={(e) => clientForm.setData('client_email', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Client Email" />
                    </div>
                </div>
                <div>
                    <h4 className="mb-4 flex items-center gap-2 text-base font-bold text-brand md:text-lg">
                        <Clock size={18} /> Scheduling
                    </h4>
                    <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input type="date" value={clientForm.data.reporting_date} onChange={(e) => clientForm.setData('reporting_date', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <input type="text" value={clientForm.data.reporting_place} onChange={(e) => clientForm.setData('reporting_place', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Reporting Place" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <input type="time" value={clientForm.data.reporting_time} onChange={(e) => clientForm.setData('reporting_time', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" />
                        <select value={clientForm.data.cab_type} onChange={(e) => clientForm.setData('cab_type', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none">
                            <option value="">Select</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV/MUV">SUV/MUV (CUV)</option>
                            <option value="Bus">Bus</option>
                        </select>
                    </div>
                </div>
                <textarea rows={3} value={clientForm.data.special_instructions} onChange={(e) => clientForm.setData('special_instructions', e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand focus:outline-none" placeholder="Special Instructions (if any)" />
                <button
                    type="submit"
                    disabled={clientForm.processing}
                    className="electric-glow w-full rounded-xl bg-brand py-4 text-base font-bold text-white shadow-lg shadow-brand/20 transition-all hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {clientForm.processing ? 'Submitting...' : 'Submit Booking'}
                </button>
            </form>
        </>
    );

    return (
        <div className="relative min-h-screen bg-slate-50 pb-24 pt-32">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-10 text-center">
                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-brand">
                        Contact Us
                    </div>
                    <h1 className="font-display text-3xl font-bold text-corporate-blue md:text-6xl">
                        Get in <span className="text-brand">Touch</span>
                    </h1>
                </div>
                <div className="mb-10 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-lg md:p-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-corporate-blue md:text-base">Location</h4>
                                <p className="text-xs text-slate-500 md:text-sm">
                                    Unit 705, Tower-C, Business Zone, Sector 50, Gurugram
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-corporate-blue md:text-base">Phone Number</h4>
                                <p className="text-xs text-slate-500 md:text-sm">+91 9899925362</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-4">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-corporate-blue md:text-base">Email</h4>
                                <p className="text-xs text-slate-500 md:text-sm">info@dtcbharat.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="flex justify-center mb-12 p-1 bg-slate-200 rounded-2xl w-fit mx-auto relative z-30">
                        <button
                            onClick={() => setFormType('customer')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all relative z-10 ${
                                formType === 'customer' ? 'text-brand' : 'text-slate-500 hover:text-corporate-blue'
                            }`}
                        >
                            {formType === 'customer' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            For Customers
                        </button>
                        <button
                            onClick={() => setFormType('client')}
                            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all relative z-10 ${
                                formType === 'client' ? 'text-brand' : 'text-slate-500 hover:text-corporate-blue'
                            }`}
                        >
                            {formType === 'client' && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white rounded-xl shadow-sm -z-10"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                            For Clients
                        </button>
                    </div>

                    <div className="relative h-[1160px] md:h-[820px]">
                        <motion.div
                            initial={false}
                            animate={{
                                x: formType === 'customer' ? 24 : 0,
                                y: formType === 'customer' ? 24 : 0,
                                rotate: 0,
                                zIndex: formType === 'customer' ? 10 : 20,
                                opacity: formType === 'customer' ? 0.4 : 1,
                                scale: 1,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-10 md:p-12 overflow-hidden cursor-pointer md:cursor-default"
                            onClick={() => formType === 'customer' && setFormType('client')}
                            whileHover={formType === 'customer' ? { x: 12, y: 12, opacity: 0.6 } : {}}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-corporate-blue/5 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="relative z-10">
                                {renderClientForm()}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={false}
                            animate={{
                                x: formType === 'client' ? 24 : 0,
                                y: formType === 'client' ? 24 : 0,
                                rotate: 0,
                                zIndex: formType === 'client' ? 10 : 20,
                                opacity: formType === 'client' ? 0.4 : 1,
                                scale: 1,
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                            }}
                            className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-10 md:p-12 overflow-hidden cursor-pointer md:cursor-default"
                            onClick={() => formType === 'client' && setFormType('customer')}
                            whileHover={formType === 'client' ? { x: 12, y: 12, opacity: 0.6 } : {}}
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full blur-3xl -mr-32 -mt-32" />
                            <div className="relative z-10">
                                {renderCustomerForm()}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContactPage;
