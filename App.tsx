
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Developer from './components/Developer';
import Footer from './components/Footer';
import { DOWNLOAD_LINK, APP_NAME } from './constants';
import { Rocket, ShieldCheck, Heart } from 'lucide-react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${isDark ? 'dark bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        
        <Features />

        {/* Global Informative Section */}
        <section id="about" className="py-32 relative px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-14 md:p-28 rounded-[5rem] bg-indigo-600 dark:bg-indigo-900 transition-all shadow-[0_50px_100px_-20px_rgba(99,102,241,0.4)] overflow-hidden group">
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-400 rounded-full blur-[150px] translate-x-1/2 translate-y-1/2"></div>
              </div>

              <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex p-8 rounded-[3rem] bg-white/20 backdrop-blur-3xl mb-12 shadow-inner border border-white/30 animate-bounce">
                  <Rocket className="w-20 h-20 text-white" />
                </div>
                <h2 className="text-6xl md:text-[7rem] font-black text-white mb-12 tracking-tighter leading-tight">
                  ابدأ عصرك <br /> <span className="opacity-70">الإنتاجي الجديد</span>
                </h2>
                <p className="text-indigo-50 text-3xl md:text-5xl mb-16 font-bold leading-relaxed">
                  OD مهام هو شريكك الذكي في النجاح. صُمم بكل حب ليخدم المستخدم العربي بلمسة عالمية.
                </p>
                <div className="flex flex-col items-center gap-12">
                  <a 
                    href={DOWNLOAD_LINK}
                    className="group inline-flex items-center gap-8 px-20 py-10 bg-white text-indigo-600 text-4xl md:text-5xl font-black rounded-[3rem] transition-all hover:scale-110 hover:shadow-[0_20px_80px_rgba(255,255,255,0.4)] active:scale-95"
                  >
                    تنزيل OD مهام
                    <span className="inline-block transition-transform group-hover:translate-x-[-20px]">←</span>
                  </a>
                  
                  <div className="flex flex-wrap justify-center items-center gap-10 text-indigo-100 font-black">
                    <div className="flex items-center gap-4 bg-white/10 px-10 py-5 rounded-3xl backdrop-blur-2xl border border-white/20">
                      <ShieldCheck className="w-8 h-8" />
                      <span className="text-2xl">مجاني للأبد</span>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 px-10 py-5 rounded-3xl backdrop-blur-2xl border border-white/20">
                      <Heart className="w-8 h-8 text-rose-300" />
                      <span className="text-2xl">بسيط وجميل</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Developer />
      </main>

      <Footer />
    </div>
  );
};

export default App;
