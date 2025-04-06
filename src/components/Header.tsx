// header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, FolderGit2, Info, User2, Mail, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';

interface HeaderProps {
  onSectionClick: (section: string) => void;
}

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'es', name: 'Español', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/es.svg' },
  { code: 'en', name: 'English', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/gb.svg' },
  { code: 'ca', name: 'Valencià', flag: 'https://raw.githubusercontent.com/lipis/flag-icons/main/flags/4x3/es-ct.svg' },
];

export const Header: React.FC<HeaderProps> = ({ onSectionClick }) => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    languages.find(lang => lang.code === i18n.language) || languages[0]
  );

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { name: t('sections.home'), icon: <Home size={18} /> },
    { name: t('sections.projects'), icon: <FolderGit2 size={18} /> },
    { name: t('sections.info'), icon: <Info size={18} /> },
    { name: t('sections.about'), icon: <User2 size={18} /> },
    { name: t('sections.contact'), icon: <Mail size={18} /> },
  ];

  const handleLanguageChange = (lang: LanguageOption) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang.code);
    setIsLangMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  const baseColor = '#09f';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-white/30 dark:bg-gray-900/30'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold select-none" // Added select-none
            style={{
              background: `linear-gradient(to bottom, #09f, ${baseColor})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            nacode
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 select-none"> {/* Added select-none */}
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => onSectionClick(section.name)}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] transition-colors"
              >
                {section.icon}
                {section.name}
              </button>
            ))}

            {/* Theme Toggle Button 
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button> */}

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] transition-colors"
              >
                <img
                  src={currentLang.flag}
                  alt={currentLang.name}
                  className="w-6 h-4 object-cover rounded"
                />
                <span>{currentLang.name}</span>
              </button>

              {isLangMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 py-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl select-none" // Added select-none
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#0099ff] dark:hover:text-[#0099ff] transition-colors"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-6 h-4 object-cover rounded"
                      />
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4 select-none"> {/* Added select-none */}
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4 select-none" // Added select-none
          >
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => {
                  onSectionClick(section.name);
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 w-full text-left text-gray-700 dark:text-gray-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] py-2 transition-colors"
              >
                {section.icon}
                {section.name}
              </button>
            ))}

            {/* Mobile Language Selector */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 w-full px-2 py-2 text-left text-gray-700 dark:text-gray-300 hover:text-[#0099ff] dark:hover:text-[#0099ff] transition-colors"
                >
                  <img
                    src={lang.flag}
                    alt={lang.name}
                    className="w-6 h-4 object-cover rounded"
                  />
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};