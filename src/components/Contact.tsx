// contact.tsx
import React from 'react';
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

    return (
        <section
            className={`py-24 bg-gray-900 transition-colors duration-300`}
        >
            <div className="container mx-auto px-6 select-none">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2
                        className={`text-4xl font-bold mb-8 text-white transition-colors duration-300`}
                    >
                        {t('contact.title')}
                    </h2>
                    <p
                        className={`mb-12 text-gray-400 transition-colors duration-300`}
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
                                className={`p-3 border-2 rounded-full hover:border-[#0099ff] hover:text-[#0099ff] transition-colors border-gray-700 text-gray-300`}
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 border-2 rounded-full hover:border-[#0099ff] hover:text-[#0099ff] transition-colors border-gray-700 text-gray-300`}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://behance.net/nacode"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-3 border-2 rounded-full hover:border-[#0099ff] hover:text-[#0099ff] transition-colors border-gray-700 text-gray-300`}
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