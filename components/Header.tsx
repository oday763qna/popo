
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { APP_NAME, LOGO_URL } from '../constants';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border-b border-slate-200/20 dark:border-slate-800/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 md:gap-5 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src={LOGO_URL} 
            alt="Logo" 
            className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl shadow-lg transition-transform group-hover:rotate-6 group-hover:scale-110"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/56/56'; }}
          />
          <span className="text-xl md:text-3xl font-black tracking-tighter text-slate-900 dark:text-white">
            {APP_NAME}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 bg-slate-100/50 dark:bg-slate-800/50 px-6 py-2 rounded-2xl border border-white/20 dark:border-slate-700/20">
          <button onClick={() => scrollTo('features')} className="text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">المميزات</button>
          <button onClick={() => scrollTo('about')} className="text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">عن التطبيق</button>
          <button onClick={() => scrollTo('developer')} className="text-lg font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors">المطور</button>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle isDark={isDark} toggle={toggleTheme} />
          <button 
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-fade-in-down shadow-2xl">
          <button onClick={() => scrollTo('features')} className="text-xl font-black text-slate-700 dark:text-slate-200 py-4 border-b border-slate-100 dark:border-slate-800 text-right">المميزات</button>
          <button onClick={() => scrollTo('about')} className="text-xl font-black text-slate-700 dark:text-slate-200 py-4 border-b border-slate-100 dark:border-slate-800 text-right">عن التطبيق</button>
          <button onClick={() => scrollTo('developer')} className="text-xl font-black text-slate-700 dark:text-slate-200 py-4 text-right">المطور</button>
        </div>
      )}
    </header>
  );
};

export default Header;
