import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const InstaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const FBIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                    <img src="/assets/logo-morado.webp" alt="Yeiny Perez Logo" className="h-8 md:h-10 object-contain" />
                </div>
                
                <div className={`hidden md:flex items-center gap-8 text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                    <a href="#about" className="relative hover:text-[#9191C5] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#480d47] after:left-0 after:-bottom-1.5 hover:after:w-full after:transition-all after:duration-300">Sobre Mí</a>
                    <a href="#services" className="relative hover:text-[#9191C5] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#480d47] after:left-0 after:-bottom-1.5 hover:after:w-full after:transition-all after:duration-300">Servicios</a>
                    <a href="#contact" className="relative hover:text-[#9191C5] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-[#480d47] after:left-0 after:-bottom-1.5 hover:after:w-full after:transition-all after:duration-300">Contacto</a>
                    <a href="https://wa.me/573142634086" target="_blank" rel="noopener noreferrer" className="bg-[#9191C5] text-stone-50 px-6 py-2 rounded-full hover:bg-plum-900 transition-colors">
                        Reservar
                    </a>
                </div>
                
                <div className="md:hidden">
                    <button onClick={() => setMobileOpen(!mobileOpen)} className={`p-2 transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                        <MenuIcon />
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-stone-50/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <button 
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-6 right-6 p-3 text-plum-900 hover:rotate-90 transition-transform duration-300"
                        >
                            <XIcon />
                        </button>
                        
                        <div className="flex flex-col items-center gap-10 text-3xl font-black tracking-tight uppercase text-plum-900">
                            <a href="#about" onClick={() => setMobileOpen(false)} className="relative hover:text-[#9191C5] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-lavender-300 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Sobre Mí</a>
                            <a href="#services" onClick={() => setMobileOpen(false)} className="relative hover:text-[#9191C5] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-lavender-300 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Servicios</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)} className="relative hover:text-[#9191C5] transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-lavender-300 after:left-0 after:-bottom-2 hover:after:w-full after:transition-all after:duration-300">Contacto</a>
                            
                            <a href="https://wa.me/573142634086" target="_blank" rel="noopener noreferrer" 
                               className="bg-[#9191C5] text-stone-50 px-10 py-5 rounded-full mt-4 text-xl shadow-2xl hover:bg-plum-900 transition-all active:scale-95"
                               onClick={() => setMobileOpen(false)}>
                                Reservar Sesión
                            </a>

                            <div className="flex gap-8 mt-4">
                                <a href="https://www.instagram.com/yeiperezfotografavillavicencio/" target="_blank" rel="noopener noreferrer" className="text-plum-900/50 hover:text-plum-900 transition-colors"><InstaIcon /></a>
                                <a href="https://www.facebook.com/yeinyperezfotografiavillavicencio" target="_blank" rel="noopener noreferrer" className="text-plum-900/50 hover:text-plum-900 transition-colors"><FBIcon /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
