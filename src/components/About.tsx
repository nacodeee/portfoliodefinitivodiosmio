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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">{t('about.title')}</h2>
          <div className="mb-8">
            <img
              src="https://i.imgur.com/tQZvLQZ.png"
              alt="Ignacio Gimenez Novo"
              className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">Ignacio Gimenez Novo</h3>
            <p className="text-gray-600 mb-6">{t('about.role')}</p>
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            {t('about.description')}
          </p>
          <a
            href="/pics/cv.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#0099ff] text-white px-8 py-3 rounded-full hover:bg-[#0077cc] transition-colors"
          >
            <Download size={20} />
            {t('hero.downloadCV')}
          </a>
        </motion.div>
      </div>
    </section>
  );
};