
import React from 'react';
import { Download, Sparkles, MousePointer2, Rocket } from 'lucide-react';
import { APP_NAME, DOWNLOAD_LINK, LOGO_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-64 md:pb-64 overflow-hidden min-h-screen flex items-center">
      <div className="blob top-[-200px] left-[-200px] w-[300px] md:w-[800px] h-[300px] md:h-[800px] opacity-20" style={{ animationDelay: '0s' }}></div>
      <div className="blob bottom-[-200px] right-[-200px] w-[300px] md:w-[900px] h-[300px] md:h-[900px] opacity-20" style={{ animationDelay: '-8s', background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.4) 100%)' }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          <div className="mb-12 md:mb-20 relative inline-block group animate-float">
            <div className="absolute -inset-10 md:-inset-32 bg-indigo-500/10 rounded-full blur-[60px] md:blur-[140px] animate-pulse"></div>
            <div className="relative">
                <img 
                src={LOGO_URL} 
                alt={APP_NAME} 
                className="relative w-32 h-32 md:w-72 md:h-72 rounded-[2.5rem] md:rounded-[5rem] shadow-2xl transition-all duration-1000 group-hover:scale-105"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://picsum.photos/300/300'; }}
                />
                <div className="absolute -top-6 -left-6 p-3 md:p-5 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 -rotate-12 animate-float-slow">
                    <Rocket className="w-6 h-6 md:w-10 md:h-10 text-indigo-500" />
                </div>
                <div className="absolute -bottom-6 -right-6 p-4 md:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 rotate-12 animate-float-delayed">
                    <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-amber-500" />
                </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-6 py-2 md:px-10 md:py-4 bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl rounded-full text-slate-900 dark:text-slate-100 text-sm md:text-xl font-black mb-8 md:mb-16 border border-white/40 dark:border-slate-700/40 shadow-xl">
            <MousePointer2 className="w-4 h-4 md:w-8 md:h-8 text-indigo-500" />
            <span>تجربة بصرية استثنائية</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[11rem] font-black text-slate-900 dark:text-white mb-8 md:mb-12 tracking-tighter leading-[1.1] md:leading-[0.9] max-w-7xl">
            {APP_NAME} <br /> 
            <span className="text-gradient">مستقبل</span> الإنجاز
          </h1>
          
          <p className="text-xl md:text-5xl text-slate-600 dark:text-slate-400 mb-12 md:mb-24 max-w-5xl mx-auto leading-relaxed md:leading-tight font-bold opacity-90 px-4">
            تطبيق ذكي لإدارة المهام وزيادة الإنتاجية، يجمع بين الجمال الفائق والأداء العربي الاحترافي.
          </p>

          <div className="w-full max-w-4xl px-4">
            <a 
              href={DOWNLOAD_LINK}
              className="group flex items-center justify-center gap-4 md:gap-8 w-full py-6 md:py-10 bg-indigo-600 text-white text-2xl md:text-6xl font-black rounded-[2rem] md:rounded-[3.5rem] transition-all shadow-2xl hover:scale-105 active:scale-95"
            >
              <Download className="w-8 h-8 md:w-14 md:h-14" />
              تنزيل التطبيق الآن
            </a>
          </div>

          <div className="mt-20 md:mt-40 opacity-20">
            <div className="w-6 h-10 md:w-8 md:h-14 border-2 md:border-4 border-slate-400 dark:border-slate-600 rounded-full flex justify-center p-1 md:p-2">
              <div className="w-1 md:w-2 h-2 md:h-3 bg-indigo-500 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0) rotate(-12deg); } 50% { transform: translateY(-10px) rotate(-5deg); } }
        @keyframes float-delayed { 0%, 100% { transform: translateY(0) rotate(12deg); } 50% { transform: translateY(-8px) rotate(5deg); } }
        @keyframes scroll { 0% { transform: translateY(0); opacity: 1; } 100% { transform: translateY(15px); opacity: 0; } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-scroll { animation: scroll 1.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
