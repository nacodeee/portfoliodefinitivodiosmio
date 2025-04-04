import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    titleKey: 'projects.project1.title',
    descriptionKey: 'projects.project1.description',
    image: 'https://i.imgur.com/zsY2IIg.png',
    tags: ['React', 'TypeScript', 'Tailwind'],
    links: {
      live: 'https://astralstudio.vercel.app/',
      github: 'https://github.com/nacodeee/astralstudio'
    }
  },
  {
    titleKey: 'projects.project2.title',
    descriptionKey: 'projects.project2.description',
    image: 'https://i.imgur.com/MU9bFgi.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://nacodelogin.vercel.app/',
      github: 'https://github.com/nacodeee/loginproject'
    }
  },
  {
    titleKey: 'projects.project3.title',
    descriptionKey: 'projects.project3.description',
    image: 'https://i.imgur.com/tVqmjJm.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://neptunehost.vercel.app/',
      github: 'https://github.com/nacodeee/neptunehost'
    }
  },
];

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-4xl font-bold text-center mb-16"
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
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-[#0099ff] hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-[#0099ff] hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{t(project.titleKey)}</h3>
                <p className="text-gray-600 mb-4">{t(project.descriptionKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-600"
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