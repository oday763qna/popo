
import React from 'react';
import { 
  Clock, 
  Sparkles, 
  BarChart3, 
  LayoutGrid,
  Palette
} from 'lucide-react';
import { Feature, Developer } from './types';

export const APP_NAME = "OD مهام";
export const DOWNLOAD_LINK = "https://www.appcreator24.com/app3930281-ghb0nt";
export const LOGO_URL = "https://i.imgur.com/1H0qFv7.png";

export const FEATURES: Feature[] = [
  {
    title: "إدارة المهام باحترافية",
    shortDesc: "تنظيم يومك أصبح أسهل من أي وقت مضى بفضل واجهتنا الذكية.",
    detailedDesc: "صنف مهامك حسب احتياجاتك: دراسة، عمل، أو ترفيه. يوفر التطبيق ميزات التعديل والحذف المرنة مع نظام بحث فوري للوصول السريع، كل ذلك مع حفظ تلقائي يضمن عدم ضياع أي ثانية من وقتك.",
    icon: <LayoutGrid className="w-10 h-10 text-indigo-500" />,
    highlights: ["تصنيف ذكي للمهام", "تعديل وحذف سريع", "بحث فوري", "تتبع الإنجاز"]
  },
  {
    title: "تركيز بأسلوب البومودورو",
    shortDesc: "تقنية عالمية لزيادة الإنتاجية مدمجة داخل تطبيقك المفضل.",
    detailedDesc: "وداعاً للتشتت. تتبع جلسات تركيزك وحللها لتعرف متى تكون في قمة عطائك. يمكنك تخصيص فترات الراحة والعمل بما يتناسب مع روتينك الشخصي.",
    icon: <Clock className="w-10 h-10 text-rose-500" />,
    highlights: ["جلسات قابلة للتخصيص", "إحصائيات دقيقة", "تنبيهات هادئة", "تحليل أنماط التركيز"]
  },
  {
    title: "ذكاء اصطناعي (AI)",
    shortDesc: "شريكك الرقمي الذي يساعدك في اتخاذ قرارات إنتاجية أفضل.",
    detailedDesc: "دع الذكاء الاصطناعي يقوم بالعمل الشاق. يقترح عليك تقسيم المهام الكبيرة لخطوات بسيطة ويحدد لك الأولويات بناءً على أهمية المهمة ووقتك المتاح.",
    icon: <Sparkles className="w-10 h-10 text-amber-500" />,
    highlights: ["تقسيم المهام", "تحديد الأولويات", "توصيات ذكية", "تحكم كامل"]
  },
  {
    title: "تحليلات الأداء",
    shortDesc: "حول أداءك اليومي إلى بيانات مرئية واضحة تساعدك على التطور.",
    detailedDesc: "شاهد تقدمك من خلال رسوم بيانية تفاعلية تظهر معدلات الإنجاز الأسبوعية، مما يساعدك على تحسين عاداتك اليومية وزيادة انضباطك الذاتي.",
    icon: <BarChart3 className="w-10 h-10 text-emerald-500" />,
    highlights: ["تقارير يومية", "رسوم بيانية", "تتبع العادات", "قياس الالتزام"]
  },
  {
    title: "تصميم عالمي مريح",
    shortDesc: "واجهة مستخدم عربية بالكامل مصممة لراحة عينك وسهولة وصولك.",
    detailedDesc: "واجهة عصرية تدعم الوضعين الليلي والنهاري بشكل آلي، مع حركات انسيابية تجعل استخدام التطبيق تجربة ممتعة لا تمل منها.",
    icon: <Palette className="w-10 h-10 text-purple-500" />,
    highlights: ["واجهة عربية 100%", "وضع ليلي احترافي", "تجربة مستخدم سلسة", "متوافق مع كل الشاشات"]
  }
];

export const DEV_INFO: Developer = {
  name: "عُدي قطقط",
  role: "خبير تطوير برمجيات وواجهات مستخدم",
  bio: "مهندس برمجيات متخصص في بناء تجارب رقمية فاخرة. أسعى من خلال OD مهام لتقديم نموذج عربي عالمي في أدوات الإنتاجية الشخصية.",
  email: "oday5qutqut@gmail.com",
  avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Oday&backgroundColor=c0aede&mood=happy"
};
