
import React from 'react';
import { APP_NAME, LOGO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 pt-32 pb-16 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-5 mb-10">
            <img 
              src={LOGO_URL} 
              alt="Logo" 
              className="w-16 h-16 rounded-2xl shadow-xl" 
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/64/64'; }} 
            />
            <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{APP_NAME}</span>
          </div>
          
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-2xl font-bold leading-relaxed mb-16">
            تم تصميم هذا التطبيق بكل شغف واهتمام بالتفاصيل ليكون الأداة العربية الأفضل في إدارة المهام والوقت.
          </p>

          <div className="w-full pt-16 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-slate-500 dark:text-slate-400 text-xl font-bold">
              جميع الحقوق محفوظة © {new Date().getFullYear()} {APP_NAME}
            </p>
            <div className="flex items-center gap-12">
              <span className="text-indigo-500 dark:text-indigo-400 font-black text-xl">صُنع بحب في الوطن العربي</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
