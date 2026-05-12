import React from 'react';
import { motion } from 'framer-motion';

const InstaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const FBIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const Footer = () => {
    return (
        <footer id="contact" className="bg-stone-900 text-stone-50 pt-32 pb-16 px-6 md:px-12 rounded-t-[40px] mt-12 relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 border-b border-stone-800 pb-24">
                    <div>
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-8">
                            CREEMOS <br/> <span className="text-[#9191C5]">RECUERDOS</span> <br/> ETERNOS
                        </h3>
                        <p className="text-stone-400 max-w-sm text-lg">
                            Fotografía profesional en Villavicencio, Meta. Disponibilidad para viajar a nivel nacional.
                        </p>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-8 text-lg">
                            <div className="flex flex-col gap-4 font-semibold text-stone-300">
                                <a href="#about" className="hover:text-[#9191C5] transition-colors">Sobre Mí</a>
                                <a href="#services" className="hover:text-[#9191C5] transition-colors">Servicios</a>
                                <a href="https://wa.me/573142634086" target="_blank" className="hover:text-[#9191C5] transition-colors font-bold text-[#9191C5]">WhatsApp</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="https://www.instagram.com/yeiperezfotografavillavicencio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors">
                                    <InstaIcon /> Instagram
                                </a>
                                <a href="https://www.facebook.com/yeinyperezfotografiavillavicencio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors">
                                    <FBIcon /> Facebook
                                </a>
                                <a href="mailto:yeinyperezfotografia@gmail.com" className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors">
                                    <MailIcon /> Email
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                         <img src="/assets/logo-lila.webp" alt="Logo" className="h-8 opacity-50" />
                         <p className="text-stone-600 text-sm tracking-widest uppercase font-bold">
                            © {new Date().getFullYear()} Yeiny Perez Fotografía | Diseñado por Austral Marketing Solutions
                         </p>
                    </div>
                    <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] font-black text-stone-700">
                        <span>Villavicencio</span>
                        <span>Meta</span>
                        <span>Colombia</span>
                    </div>
                </div>
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-plum-900/20 rounded-full blur-[120px]"></div>
        </footer>
    );
};

export default Footer;
