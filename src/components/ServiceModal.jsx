import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/services';

const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const ChevronDownIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;
const ChevronLeftIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const ChevronRightIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const DotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>;

const Accordion = ({ faqs, title = "Preguntas Frecuentes" }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    return (
        <div className="mt-12 border-t border-stone-200 pt-8">
            <h4 className="text-2xl font-bold mb-6">{title}</h4>
            <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-stone-200 pb-4">
                        <button 
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                            className="w-full flex justify-between items-center text-left py-2 font-semibold text-lg hover:text-plum-900 transition-colors"
                        >
                            {faq.q || faq.name}
                            <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-plum-900' : ''}`} />
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    {faq.a ? (
                                        <p className="pt-2 pb-4 text-stone-600 leading-relaxed">{faq.a}</p>
                                    ) : (
                                        <ul className="pt-2 pb-4 space-y-2">
                                            {faq.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-stone-600">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9191C5] flex-shrink-0"></div>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ServiceModal = ({ service, onClose }) => {
    const [currentImage, setCurrentImage] = useState(0);

    // Auto-slide photos
    useEffect(() => {
        if (!service || !service.images || service.images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % service.images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [service]);

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % service.images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + service.images.length) % service.images.length);

    useEffect(() => {
        const handleEscape = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, []);

    if (!service) return null;

    return (
        <div className="fixed inset-0 z-[100] flex bg-stone-50 overflow-y-auto md:overflow-hidden flex-col md:flex-row">
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-3 bg-lavender-200 text-plum-900 rounded-full shadow-2xl hover:bg-lavender-300 ring-4 ring-stone-900/5 transition-all active:scale-90"
                aria-label="Cerrar ventana"
            >
                <XIcon />
            </button>

            <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-stone-900 flex-shrink-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.img 
                        key={`${service.id}-${currentImage}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        src={service.images[currentImage]} 
                        alt={service.title} 
                        className="w-full h-full object-contain"
                    />
                </AnimatePresence>
                
                {service.images.length > 1 && (
                    <>
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-stone-50/10 hover:bg-stone-50/30 text-white rounded-full transition-colors backdrop-blur-sm shadow-xl"
                            aria-label="Foto anterior"
                        >
                            <ChevronLeftIcon className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-stone-50/10 hover:bg-stone-50/30 text-white rounded-full transition-colors backdrop-blur-sm shadow-xl"
                            aria-label="Siguiente foto"
                        >
                            <ChevronRightIcon className="w-6 h-6 md:w-8 md:h-8" />
                        </button>
                    </>
                )}
            </div>

            <div className="w-full md:w-1/2 h-full md:h-screen overflow-y-auto no-scrollbar p-8 md:p-16 lg:p-24 flex flex-col justify-start bg-stone-50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="pt-12 md:pt-0"
                >
                    <div className="flex items-center gap-3 text-plum-900 font-semibold uppercase tracking-widest text-sm mb-4">
                        <span className="text-lavender-300"><DotIcon /></span>
                        Sesiones Exclusivas
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">{service.title}</h2>
                    <p className={`text-xl text-stone-600 leading-relaxed ${service.disclaimer ? 'mb-6' : 'mb-12'}`}>
                        {service.description}
                    </p>

                    {service.disclaimer && (
                        <div className="bg-[#9191C5]/10 border-l-4 border-[#480d47] p-5 mb-12 rounded-r-2xl shadow-sm">
                            <p className="text-[#480d47] font-medium text-sm leading-relaxed">
                                <strong>Nota de Privacidad:</strong> {service.disclaimer}
                            </p>
                        </div>
                    )}

                    {service.features && service.features.length > 0 && (
                        <>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                Incluye <span className="bg-lavender-200 text-plum-900 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold">Premium</span>
                            </h3>
                            <ul className="space-y-4 mb-12">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-stone-700 text-lg">
                                        <div className="mt-1 text-plum-900"><CheckIcon /></div>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}

                    {service.packages && (
                        <Accordion faqs={service.packages} title="Paquetes Disponibles" />
                    )}

                    <div className="mt-12">
                        <a href="https://wa.me/573142634086" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-[#9191C5] text-white py-5 rounded-full text-lg font-bold uppercase tracking-widest hover:bg-[#480d47] transition-colors shadow-xl">
                            Solicitar Cotización
                        </a>
                    </div>

                    <Accordion faqs={FAQS} />
                </motion.div>
            </div>
        </div>
    );
};

export default ServiceModal;
