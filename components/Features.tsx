
import React from 'react';
import { FEATURES } from '../constants';
import { Check, Sparkles } from 'lucide-react';

const FeatureCard: React.FC<{ feature: typeof FEATURES[0]; index: number }> = ({ feature, index }) => {
  return (
    <div 
      className={`glass-card p-10 md:p-16 rounded-[5rem] flex flex-col lg:flex-row gap-16 items-center transition-all duration-1000 hover-lift ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="shrink-0 relative group">
        <div className="absolute -inset-6 bg-indigo-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-28 h-28 md:w-40 md:h-40 rounded-[3rem] bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-500 shadow-2xl transition-all duration-700 group-hover:rotate-12 group-hover:scale-110">
          {feature.icon}
        </div>
      </div>
      
      <div className="flex-1 text-center lg:text-right">
        <h3 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
          {feature.title}
        </h3>
        
        <p className="text-indigo-600 dark:text-indigo-400 leading-relaxed mb-10 text-2xl md:text-4xl font-black italic opacity-90">
          {feature.shortDesc}
        </p>

        <div className="pt-10 border-t border-slate-100 dark:border-slate-800 space-y-12">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xl md:text-3xl font-medium opacity-80">
            {feature.detailedDesc}
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            {feature.highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-5 rounded-[2rem] bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800 text-lg md:text-2xl font-black text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-40 relative overflow-hidden">
      {/* Background visual art */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
        <Sparkles className="w-96 h-96 text-indigo-500 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-40">
          <span className="inline-block px-10 py-4 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-lg font-black mb-10 uppercase tracking-[0.5em] border border-indigo-100 dark:border-indigo-800 shadow-2xl">
            دليل القوة والإنتاجية
          </span>
          <h2 className="text-7xl md:text-[10rem] font-black text-slate-900 dark:text-white mb-12 tracking-tighter leading-none">
            ماذا يقدم لك <br /> <span className="text-gradient">OD مهام</span>؟
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-5xl mx-auto text-3xl md:text-5xl leading-relaxed font-black opacity-80">
            استكشف كل زاوية في تطبيقك الجديد. صممنا OD مهام ليكون الأداة العربية الأكثر كمالاً في إدارة الوقت.
          </p>
        </div>

        <div className="space-y-24 md:space-y-40">
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
