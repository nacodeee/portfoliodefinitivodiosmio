import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, File } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  onScrollToProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-white to-gray-50">
      {/* Efecto de onda más suave */}
      <svg className="absolute w-0 h-0">
        <filter id="wave">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.02"
            numOctaves="2"
            result="turbulence"
          >
            <animate 
              attributeName="baseFrequency"
              values="0.006 0.02; 0.008 0.03; 0.006 0.02"
              dur="5s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="container mx-auto px-6 py-24 text-center">
        {/* Texto con gradiente animado y efecto de onda */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold mb-6 relative"
        >
          <motion.span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg, #005fa3, #0099ff, #005fa3)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              display: "inline-block",
              filter: "url(#wave)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            nacode
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12"
        >
          {t('hero.subtitle')}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <a
            href="/pics/cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-[#0099ff] text-white px-8 py-3 rounded-full hover:bg-[#0077cc] transition-colors"
          >
            <Download size={20} />
            {t('hero.downloadCV')}
          </a>
          <a
            href="./certificados.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 border-2 border-[#0099ff] text-[#0099ff] px-8 py-3 rounded-full hover:bg-[#0099ff] hover:text-white transition-colors"
          >
            <File size={20} />
            {t('hero.certificados')}
          </a>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          onClick={onScrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#0099ff] animate-bounce"
        >
          <ChevronDown size={32} />
        </motion.button>
      </div>
    </section>
  );
};
