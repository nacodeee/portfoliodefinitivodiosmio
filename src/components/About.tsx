// about.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const { theme } = useTheme();

  return (
    <section className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300 select-none`}> {/* Added select-none to the section */}
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} transition-colors duration-300 select-none`}>{t('about.title')}</h2> {/* Added select-none */}
          <div className="mb-8 select-none"> {/* Added select-none */}
            <img
              src="https://i.imgur.com/tQZvLQZ.png"
              alt="Ignacio Gimenez Novo"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'} transition-colors duration-300 select-none`}>Ignacio Gimenez Novo</h3> {/* Added select-none */}
            <p className={`text-gray-600 mb-6 ${theme === 'dark' ? 'text-gray-400' : ''} transition-colors duration-300 select-none`}>{t('about.role')}</p> {/* Added select-none */}
          </div>
          <p className={`text-gray-700 mb-8 leading-relaxed select-text ${theme === 'dark' ? 'text-gray-300' : ''} transition-colors duration-300`}> {/* Added select-text */}
            {t('about.description')}
          </p>
          <a
            href="https://drive.google.com/file/d/1oDTPb3IWjTp5p8G1IPwVEaSU51n9u_I-/view?usp=sharing"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#0099ff] text-white px-8 py-3 rounded-full hover:bg-[#0077cc] transition-colors select-none" // Added select-none
          >
            <Download size={20} />
            {t('hero.downloadCV')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};