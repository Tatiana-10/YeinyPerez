import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="pt-8 pb-12 md:pt-16 md:pb-16 bg-stone-50 overflow-hidden">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 1 }}
                className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center"
            >
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto"
                >
                    <img 
                        src="/assets/yeiny-fotografa-6.webp" 
                        alt="Yeiny Perez - Fotógrafa en Villavicencio Meta" 
                        className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#480d47] mb-6 text-balance uppercase">Sobre Mí</h2>
                    <div className="border-l-4 border-lavender-300 pl-6 py-2 my-4">
                        <p className="text-xl md:text-2xl font-serif italic text-stone-600 leading-relaxed">
                            "Soy fotógrafa, pero ante todo, una humana apasionada por la cotidianidad de la vida. Me inspiran los colores de mi llano y la belleza en cada detalle."
                        </p>
                    </div>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        Soy fotógrafa y creadora de recuerdos, con más de dos años de experiencia. He fotografiado a más de 100 personas, guiándolas para que se sientan seguras y auténticas frente a la cámara. 
                    </p>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        Como llanera, mi esencia está en lo natural, lo libre y la conexión genuina. Amo los postres, escuchar un buen pasaje llanero mientras de fondo cae la lluvia. El llano despierta el arte en mí y me lleva a ver la elegancia en ti.
                    </p>
                    
                    <div className="flex gap-8 mt-8">
                        <div>
                            <div className="text-4xl font-bold tracking-tighter text-stone-900 mb-1">100+</div>
                            <div className="text-sm uppercase tracking-widest font-semibold text-stone-500">Personas</div>
                        </div>
                        <div className="w-[1px] bg-stone-200"></div>
                        <div>
                            <div className="text-4xl font-bold tracking-tighter text-stone-900 mb-1">2+</div>
                            <div className="text-sm uppercase tracking-widest font-semibold text-stone-500">Años</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
