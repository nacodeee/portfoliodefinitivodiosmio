// about.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const About: React.FC = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section className={`py-24 bg-gray-900 transition-colors duration-300 select-none`}>
            <div className="container mx-auto px-6">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className={`text-4xl font-bold mb-8 text-white transition-colors duration-300 select-none`}>{t('about.title')}</h2>
                    <div className="mb-8 select-none">
                        <img
                            src="https://i.imgur.com/tQZvLQZ.png"
                            alt="Ignacio Gimenez Novo"
                            className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                        />
                        <h3 className={`text-2xl font-semibold mb-2 text-white transition-colors duration-300 select-none`}>Ignacio Gimenez Novo</h3>
                        <p className={`mb-6 text-gray-400 transition-colors duration-300 select-none`}>{t('about.role')}</p>
                    </div>
                    <p className={`mb-8 leading-relaxed select-text text-gray-300 transition-colors duration-300`}>
                        {t('about.description')}
                    </p>
                    <a
                        href="https://drive.google.com/file/d/1oDTPb3IWjTp5p8G1IPwVEaSU51n9u_I-/view?usp=sharing"
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-[#0099ff] text-white px-8 py-3 rounded-full hover:bg-[#0077cc] transition-colors select-none"
                    >
                        <Download size={20} />
                        {t('hero.downloadCV')}
                    </a>
                </motion.div>
            </div>
        </section>
    );
};