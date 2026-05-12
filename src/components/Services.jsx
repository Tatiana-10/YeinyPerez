import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/services';

const Services = ({ setSelectedService }) => {
    return (
        <section id="services" className="pt-12 pb-24 md:pt-12 md:pb-36 bg-stone-100 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 md:px-12"
            >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-[#480d47] uppercase">Mis Servicios</h2>
                        <p className="text-xl text-stone-500 max-w-xl">Curaduría de recuerdos. Haz clic para ver los detalles de cada experiencia.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <motion.div 
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setSelectedService(service)}
                            className={`group cursor-pointer rounded-[40px] overflow-hidden relative bg-stone-200 shadow-xl ${index < 3 ? 'lg:col-span-2 aspect-[4/5]' : 'lg:col-span-3 aspect-[4/5] lg:aspect-[4/3]'}`}
                        >
                            <div className="absolute inset-0 bg-stone-900/10 z-10 group-hover:bg-transparent transition-all duration-500"></div>
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover img-grayscale-hover group-hover:scale-105 transition-transform duration-700" 
                                style={{ objectPosition: service.objectPosition || 'center' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent z-20 flex flex-col justify-end p-8 md:p-12">
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-[#9191C5] font-semibold transition-opacity duration-300">
                                    Ver detalles y portafolio →
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
