import React from 'react';
import { motion } from 'framer-motion';

const ChevronDownIcon = ({ className }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>;

const Hero = () => {
    return (
        <section className="relative h-[122vh] w-full flex items-center justify-center overflow-hidden bg-stone-900">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img 
                    src="/assets/yeiny-fotografa-7.webp" 
                    alt="Yeiny Perez - Fotografía Profesional en Villavicencio | Bodas y Quinceañeras" 
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 brightness-75 -scale-x-100"
                />
                <div className="absolute bottom-0 w-full h-48 md:h-64 bg-gradient-to-t from-stone-50 via-stone-50/80 to-transparent z-10 pointer-events-none"></div>
            </motion.div>
            
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-white text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95] text-balance mb-8"
                >
                    Fotografia en <span className="text-[#9191C5]">VILLAVICENCIO.</span> <br/> Inmortalizo la versión <span className="text-[#9191C5]">MÁS SEGURA DE TI.</span>
                </motion.h1>
                
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <a href="#services" className="bg-[#9191C5] text-white hover:bg-[#480d47] px-8 py-4 rounded-full font-semibold transition-all shadow-xl hover:shadow-2xl text-center">
                        Ver Servicios
                    </a>
                    <a href="https://wa.me/573142634086" target="_blank" rel="noopener noreferrer" className="border-2 border-[#480d47] text-stone-50 hover:bg-[#480d47] px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm bg-black/20 text-center">
                        Agendar Sesión
                    </a>
                </motion.div>
            </div>
            
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-[#480d47] animate-bounce z-20">
                <ChevronDownIcon className="w-8 h-8 opacity-70" />
            </div>
        </section>
    );
};

export default Hero;
