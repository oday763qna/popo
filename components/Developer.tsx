
import React from 'react';
import { Mail, ShieldCheck, Cpu, User, Sparkles, Smartphone } from 'lucide-react';
import { DEV_INFO } from '../constants';

const Developer: React.FC = () => {
  return (
    <section id="developer" className="py-20 md:py-48 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm md:text-lg font-black mb-6 border border-indigo-100 dark:border-indigo-800 uppercase tracking-widest shadow-md">
            <User className="w-4 h-4 md:w-5 md:h-5" />
            الهوية الرقمية
          </div>
          <h2 className="text-5xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-6">
            تعرف على <span className="text-gradient">المبدع</span>
          </h2>
        </div>

        <div className="glass-card p-8 md:p-24 rounded-[3rem] md:rounded-[6rem] shadow-2xl relative overflow-hidden border border-white/60 dark:border-slate-700/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            
            <div className="lg:col-span-5 flex flex-col items-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-10 bg-indigo-500/20 rounded-full blur-[60px] opacity-20"></div>
                <div className="relative w-48 h-48 md:w-96 md:h-96 rounded-full overflow-hidden border-[10px] md:border-[20px] border-white dark:border-slate-800 shadow-2xl transition-transform duration-1000 group-hover:scale-105">
                  <img 
                    src={DEV_INFO.avatar} 
                    alt={DEV_INFO.name} 
                    className="w-full h-full object-cover scale-110"
                  />
                </div>
                <div className="absolute -top-4 -right-4 p-4 md:p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-float">
                  <Cpu className="w-8 h-8 md:w-10 md:h-10 text-indigo-500" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 text-center lg:text-right order-1 lg:order-2">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-indigo-600 text-white text-lg font-black mb-4">
                  <Sparkles className="w-5 h-5" />
                  <span>مطور تطبيقات أول</span>
                </div>
                <h3 className="text-4xl md:text-8xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">{DEV_INFO.name}</h3>
                <p className="text-xl md:text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-8">{DEV_INFO.role}</p>
                <p className="text-lg md:text-3xl font-bold text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
                  {DEV_INFO.bio}
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-8">
                <a 
                  href={`mailto:${DEV_INFO.email}`}
                  className="group flex items-center justify-center gap-4 px-8 py-5 md:px-16 md:py-10 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-[2rem] md:rounded-[3.5rem] hover:scale-105 transition-all shadow-xl w-full md:w-auto"
                >
                  <Mail className="w-6 h-6 md:w-12 md:h-12" />
                  <span className="font-black text-xl md:text-4xl">{DEV_INFO.email}</span>
                </a>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-6 h-6 md:w-10 md:h-10" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl md:text-3xl font-black text-slate-800 dark:text-slate-100">موثوقية وجودة</div>
                    <div className="text-sm md:text-xl font-bold text-slate-500 dark:text-slate-400">تطوير مستمر ودعم فني متكامل للمستخدمين.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
