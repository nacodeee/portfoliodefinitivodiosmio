// contact.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FaBehance } from "react-icons/fa";

export const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);

        const handleChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        };
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
        };
    }, []);

    const sectionBgClass = isDarkMode ? 'bg-gray-900' : 'bg-white';
    const textColorPrimary = isDarkMode ? 'text-white' : 'text-gray-800';
    const textColorSecondary = isDarkMode ? (isDarkMode ? 'text-gray-400' : 'text-gray-600') : 'text-gray-600';
    const linkBorderColorClass = isDarkMode ? 'border-gray-700 text-gray-300' : 'border-gray-200 text-gray-600';

    return (
        <section
            className={`py-24 ${sectionBgClass} transition-colors duration-300`}
        >
            <div className="container mx-auto px-6 select-none">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2
                        className={`text-4xl font-bold mb-8 ${textColorPrimary} transition-colors duration-300`}
                    >
                        {t('contact.title')}
                    </h2>
                    <p
                        className={`mb-12 ${textColorSecondary} transition-colors duration-300`}
                    >
                        {t('contact.subtitle')}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:nachogz@icloud.com"
                            className="flex items-center gap-2 bg-[#0099ff] text-white px-8 py-3 rounded-full hover:bg-[#0077cc] transition-colors"
                        >
                            <Mail size={20} />
                            {t('contact.sendEmail')}
                        </a>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/nacodeee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 border-2 rounded-full hover:border-[#0099ff] hover:text-[#0099ff] transition-colors ${linkBorderColorClass}`}
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 border-2 rounded-full hover:border-[#0099ff] hover:text-[#0099ff] transition-colors ${linkBorderColorClass}`}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://behance.net/nacode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 border-2 rounded-full hover:border-[#0099ff] hover:text-[#0099ff] transition-colors ${linkBorderColorClass}`}
                            >
                                <FaBehance size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};