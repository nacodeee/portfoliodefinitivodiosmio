import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Terminal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const skills = {
  development: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TypeScript',
    'NodeJS',
    'Python',
    'Git',
    'GitHub'
  ],
  design: [
    'Photoshop',
    'Illustrator',
    'Lightroom'
  ],
  systems: [
    'Linux Terminal',
    'MySQL',
    'MongoDB',
    'Redis'
  ]
};

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-gray-50"
          >
            <div className="flex items-center gap-4 mb-6">
              <Code size={24} className="text-[#0099ff]" />
              <h3 className="text-xl font-semibold">{t('skills.development')}</h3>
            </div>
            <ul className="space-y-3">
              {skills.development.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#0099ff] rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-xl bg-gray-50"
          >
            <div className="flex items-center gap-4 mb-6">
              <Palette size={24} className="text-[#0099ff]" />
              <h3 className="text-xl font-semibold">{t('skills.design')}</h3>
            </div>
            <ul className="space-y-3">
              {skills.design.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#0099ff] rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-xl bg-gray-50"
          >
            <div className="flex items-center gap-4 mb-6">
              <Terminal size={24} className="text-[#0099ff]" />
              <h3 className="text-xl font-semibold">{t('skills.systems')}</h3>
            </div>
            <ul className="space-y-3">
              {skills.systems.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#0099ff] rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};