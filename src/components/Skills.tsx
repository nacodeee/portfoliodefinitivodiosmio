import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Terminal, Database, FolderGit2, FileCode2, Cpu, Paintbrush2, Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skills = [
  {
    category: 'skills.development',
    icon: <Code size={20} className="text-[#0099ff]" />,
    items: [
      { name: 'HTML', icon: <FileCode2 size={18} /> },
      { name: 'CSS', icon: <FileCode2 size={18} /> },
      { name: 'JavaScript', icon: <FileCode2 size={18} /> },
      { name: 'React', icon: <React.Fragment />, customIcon: <Cpu size={18} /> }, // Usamos Fragment y customIcon
      { name: 'TypeScript', icon: <FileCode2 size={18} /> },
      { name: 'NodeJS', icon: <Cpu size={18} /> },
      { name: 'Python', icon: <FileCode2 size={18} /> },
      { name: 'Git', icon: <FolderGit2 size={18} /> },
      { name: 'GitHub', icon: <GithubIcon size={18} /> }, // Reutilizamos GithubIcon
    ],
  },
  {
    category: 'skills.systems',
    icon: <Terminal size={20} className="text-[#0099ff]" />,
    items: [
      { name: 'Linux Terminal', icon: <Terminal size={18} /> },
      { name: 'MySQL', icon: <Database size={18} /> },
      { name: 'MongoDB', icon: <Database size={18} /> },
      { name: 'Redis', icon: <Database size={18} /> },
    ],
  },
  {
    category: 'skills.design',
    icon: <Palette size={20} className="text-[#0099ff]" />,
    items: [
      { name: 'Photoshop', icon: <ImageIcon size={18} /> },
      { name: 'Illustrator', icon: <Paintbrush2 size={18} /> },
      { name: 'Lightroom', icon: <ImageIcon size={18} /> },
    ],
  },
];

// Importamos el icono de Github desde lucide-react
import { Github as GithubIcon } from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-3xl font-bold text-center mb-10"
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
              className="p-4 rounded-xl bg-gray-100 hover:bg-[#F0F0F0] transition-colors flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-lg font-semibold">{t(group.category)}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-white rounded-md shadow-sm px-3 py-2 flex items-center gap-2 text-gray-700 text-sm"
                  >
                    {skill.customIcon ? skill.customIcon : skill.icon} {/* Renderizamos el customIcon si existe */}
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