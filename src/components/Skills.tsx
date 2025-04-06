import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';

// Tipos (opcionales)
type Skill = {
    name: string;
    icon: JSX.Element;
    customIcon?: JSX.Element;
};

type SkillGroup = {
    category: string;
    icon: JSX.Element;
    items: Skill[];
};

const skills: SkillGroup[] = [
    {
        category: 'skills.development',
        icon: <Code size={20} className="text-[#0099ff]" />,
        items: [
            { name: 'HTML', icon: <img src="/pics/html5.svg" className="w-[14px] h-[14px]" alt="HTML5" /> },
            { name: 'CSS', icon: <img src="/pics/css.svg" className="w-[14px] h-[14px]" alt="CSS3" /> },
            { name: 'Tailwind CSS', icon: <img src="/pics/tailwindcss.svg" className="w-[14px] h-[14px]" alt="Tailwind CSS" /> },
            { name: 'React', icon: <img src="/pics/react.svg" className="w-[14px] h-[14px]" alt="React" /> },
            { name: 'JavaScript', icon: <img src="/pics/javascript.svg" className="w-[14px] h-[14px]" alt="JavaScript" /> },
            { name: 'TypeScript', icon: <img src="/pics/typescript.svg" className="w-[14px] h-[14px]" alt="TypeScript" /> },
            { name: 'NodeJS', icon: <img src="/pics/nodejs.svg" className="w-[14px] h-[14px]" alt="NodeJS" /> },
            { name: 'Python', icon: <img src="/pics/python.svg" className="w-[14px] h-[14px]" alt="Python" /> },
            { name: 'Git', icon: <img src="/pics/git.svg" className="w-[14px] h-[14px]" alt="Git" /> },
            { name: 'GitHub', icon: <img src="/pics/github.svg" className="w-[14px] h-[14px]" alt="GitHub" /> },
        ],
    },
    {
        category: 'skills.systems',
        icon: <Terminal size={20} className="text-[#0099ff]" />,
        items: [
            { name: 'Linux Terminal', icon: <img src="/pics/linux.svg" className="w-[14px] h-[14px]" alt="Linux" /> },
            { name: 'MySQL', icon: <img src="/pics/mysql.svg" className="w-[14px] h-[14px]" alt="MySQL" /> },
            { name: 'MongoDB', icon: <img src="/pics/mongodb.svg" className="w-[14px] h-[14px]" alt="MongoDB" /> },
            { name: 'Redis', icon: <img src="/pics/redis.svg" className="w-[14px] h-[14px]" alt="Redis" /> },
        ],
    },
    {
        category: 'skills.design',
        icon: <Palette size={20} className="text-[#0099ff]" />,
        items: [
            { name: 'Photoshop', icon: <img src="/pics/photoshop.svg" className="w-[14px] h-[14px]" alt="Photoshop" /> },
            { name: 'Illustrator', icon: <img src="/pics/illustrator.svg" className="w-[14px] h-[14px]" alt="Illustrator" /> },
            { name: 'Lightroom', icon: <img src="/pics/lightroom.svg" className="w-[14px] h-[14px]" alt="Lightroom" /> },
        ],
    },
];

export const Skills: React.FC = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const { theme } = useTheme();

    return (
        <section
            className={`py-16 ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            } transition-colors duration-300 select-none`}
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    ref={ref}
                    className={`text-3xl font-bold text-center mb-10 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                    } transition-colors duration-300`}
                >
                    {t('skills.title')}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 + index * 0.2 }}
                            className={`p-4 rounded-xl transition-colors flex flex-col ${
                                theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-[#F0F0F0]'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {group.icon}
                                <h3
                                    className={`text-lg font-semibold ${
                                        theme === 'dark' ? 'text-white' : 'text-gray-800'
                                    } transition-colors duration-300`}
                                >
                                    {t(group.category)}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className={`rounded-md shadow-sm px-3 py-2 flex items-center gap-2 text-sm transition-colors ${
                                            theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
                                        }`}
                                    >
                                        {skill?.customIcon ?? skill.icon}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};