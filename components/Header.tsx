
import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Info, User, Zap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { APP_NAME, LOGO_URL } from '../constants';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className={`glass-card flex items-center justify-between px-4 md:px-8 py-3 rounded-2xl md:rounded-3xl border border-white/20 dark:border-white/5 transition-all shadow-xl ${scrolled ? 'bg-white/80 dark:bg-slate-900/80' : 'bg-white/40 dark:bg-slate-900/40'}`}>
          
          <div 
            className="flex items-center gap-3 md:gap-4 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-indigo-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={LOGO_URL} 
                alt="Logo" 
                className="relative w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-lg transition-transform group-hover:scale-110"
              />
            </div>
            <span className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">
              {APP_NAME}
            </span>
          </div>

          {/* Shortcut Buttons (Desktop) */}
          <nav className="hidden lg:flex items-center gap-4">
            <button onClick={() => scrollTo('features')} className="flex items-center gap-2 px-4 py-2 text-sm font-black text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 rounded-xl transition-all">
              <Zap className="w-4 h-4" /> المميزات
            </button>
            <button onClick={() => scrollTo('about')} className="flex items-center gap-2 px-4 py-2 text-sm font-black text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 rounded-xl transition-all">
              <Info className="w-4 h-4" /> عن التطبيق
            </button>
            <button onClick={() => scrollTo('developer')} className="flex items-center gap-2 px-4 py-2 text-sm font-black text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 rounded-xl transition-all">
              <User className="w-4 h-4" /> المطور
            </button>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle isDark={isDark} toggle={toggleTheme} />
            <button 
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 active:scale-90 transition-transform"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Quick Shortcuts) */}
        {isOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 animate-fade-in-down">
            <div className="glass-card rounded-[2rem] p-4 border border-white/20 dark:border-white/5 shadow-2xl flex flex-col gap-2">
              <button onClick={() => scrollTo('features')} className="flex items-center justify-between w-full px-6 py-5 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-black text-lg">
                <span>استكشف المميزات</span>
                <Zap className="w-6 h-6" />
              </button>
              <button onClick={() => scrollTo('about')} className="flex items-center justify-between w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 font-black text-lg">
                <span>عن التطبيق</span>
                <Info className="w-6 h-6" />
              </button>
              <button onClick={() => scrollTo('developer')} className="flex items-center justify-between w-full px-6 py-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 font-black text-lg">
                <span>تواصل مع المطور</span>
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
