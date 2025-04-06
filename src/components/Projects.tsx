// projects.tsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        titleKey: 'projects.project1.title',
        descriptionKey: 'projects.project1.description',
        image: 'https://i.imgur.com/g06TCl6.png',
        tags: ['React', 'TypeScript', 'Tailwind'],
        links: {
            live: 'https://astralstudio.vercel.app/',
            github: 'https://github.com/nacodeee/astralstudio'
        }
    },
    {
        titleKey: 'projects.project2.title',
        descriptionKey: 'projects.project2.description',
        image: 'https://i.imgur.com/lm3VISN.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://nacodelogin.vercel.app/',
            github: 'https://github.com/nacodeee/loginproject'
        }
    },
    {
        titleKey: 'projects.project3.title',
        descriptionKey: 'projects.project3.description',
        image: 'https://i.imgur.com/AIBbFa2.png',
        tags: ['HTML', 'CSS', 'JavaScript'],
        links: {
            live: 'https://neptunehost.vercel.app/',
            github: 'https://github.com/nacodeee/neptunehost'
        }
    },
    {
        titleKey: 'projects.project4.title',
        descriptionKey: 'projects.project4.description',
        image: 'https://i.imgur.com/0158sbY.png',
        tags: ['Photoshop', 'Illustrator'],
        links: {
            live: 'https://be.net/nacode'
        }
    },
    {
        titleKey: 'projects.project5.title',
        descriptionKey: 'projects.project5.description',
        image: 'https://i.imgur.com/dLFoSxs.png',
        tags: ['Photoshop'],
        links: {
            live: 'https://www.behance.net/gallery/212674323/Flyers-(SAMP-Events)'
        }
    },
    {
        titleKey: 'projects.project6.title',
        descriptionKey: 'projects.project6.description',
        image: 'https://i.imgur.com/n1OX4yA.png',
        tags: ['Photoshop'],
        links: {
            live: 'https://www.behance.net/gallery/212672551/Minecraft-servers-logos-banners'
        }
    },
];

export const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);

        // Opcional: Escuchar cambios en la preferencia del sistema
        const handleChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        };
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleChange);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleChange);
        };
    }, []);

    const sectionBgClass = isDarkMode ? 'bg-gray-900' : 'bg-gray-50';
    const titleTextColorClass = isDarkMode ? 'text-white' : 'text-gray-800';
    const descriptionTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const cardBgClass = isDarkMode ? 'bg-gray-800' : 'bg-white';

    return (
        <section id="projects" className={`py-24 ${sectionBgClass} transition-colors duration-300 select-none`}>
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    ref={ref}
                    className={`text-4xl font-bold text-center mb-16 ${titleTextColorClass} transition-colors duration-300`}
                >
                    {t('projects.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 }}
                            className={`rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 ${cardBgClass}`}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={t(project.titleKey)}
                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-full hover:bg-[#0099ff] hover:text-white transition-colors text-gray-800"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-white rounded-full hover:bg-[#0099ff] hover:text-white transition-colors text-gray-800"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className={`text-xl font-semibold mb-2 ${titleTextColorClass} transition-colors duration-300 select-none`}>{t(project.titleKey)}</h3>
                                <p className={`mb-4 ${descriptionTextColorClass} transition-colors duration-300 select-text`}>{t(project.descriptionKey)}</p>
                                <div className="flex flex-wrap gap-2 select-none">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`px-3 py-1 text-sm rounded-full ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-[#0099ff79] text-gray-600'}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};