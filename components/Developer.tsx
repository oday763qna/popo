
import React from 'react';
import { Mail, ShieldCheck, Cpu, User, Sparkles, ExternalLink, Smartphone, Code2 } from 'lucide-react';
import { DEV_INFO } from '../constants';

const Developer: React.FC = () => {
  return (
    <section id="developer" className="py-24 md:py-48 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      {/* Background visual effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-indigo-500/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-24">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs md:text-sm font-black mb-6 border border-indigo-100 dark:border-indigo-800/50 uppercase tracking-widest">
            <Code2 className="w-4 h-4" />
            فريق التطوير
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">
            خلف <span className="text-gradient">الإبداع</span>
          </h2>
        </div>

        <div className="glass-card p-6 md:p-16 rounded-[2.5rem] md:rounded-[5rem] shadow-2xl relative overflow-hidden border border-white dark:border-slate-800/50">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            
            {/* Avatar Section */}
            <div className="w-full lg:w-2/5 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-8 md:border-[15px] border-white dark:border-slate-800 shadow-2xl transition-all duration-700 group-hover:scale-105">
                  <img 
                    src={DEV_INFO.avatar} 
                    alt={DEV_INFO.name} 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800 px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100 dark:border-slate-700 whitespace-nowrap">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  <span className="font-black text-slate-800 dark:text-slate-100 text-sm">Verified Developer</span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="w-full lg:w-3/5 text-center lg:text-right">
              <h3 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-2 md:mb-4 tracking-tighter leading-none">{DEV_INFO.name}</h3>
              <p className="text-xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-8 md:mb-10">{DEV_INFO.role}</p>
              
              <div className="space-y-6 md:space-y-8 mb-12">
                <p className="text-lg md:text-3xl font-bold text-slate-600 dark:text-slate-400 leading-relaxed">
                  {DEV_INFO.bio}
                </p>
                <div className="h-1.5 w-24 bg-indigo-500 rounded-full mx-auto lg:mr-0 lg:ml-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
                 <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600">
                        <Smartphone className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-bold text-slate-400 uppercase">التخصص</div>
                        <div className="text-lg font-black text-slate-800 dark:text-slate-100">تطبيقات الجوال</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                        <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-bold text-slate-400 uppercase">الحالة</div>
                        <div className="text-lg font-black text-slate-800 dark:text-slate-100">متاح للمشاريع</div>
                    </div>
                 </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href={`mailto:${DEV_INFO.email}`}
                  className="group flex items-center justify-center gap-3 px-8 py-5 md:px-12 md:py-8 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] hover:scale-105 transition-all shadow-xl w-full sm:w-auto active:scale-95"
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-black text-lg md:text-2xl">{DEV_INFO.email}</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
