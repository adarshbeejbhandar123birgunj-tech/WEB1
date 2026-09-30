import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  FlaskConical, 
  Calculator, 
  CheckCircle2, 
  Award,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { AdarshLogo } from './AdarshLogo';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-stone-900 text-white pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Subtle Grid / Glow Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#86efac_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Official Brand Lockup & National Distributor Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
                <AdarshLogo className="h-8 sm:h-9" />
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300 tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.hero.badge}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {t.hero.headline}
            </h1>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-amber-400/20 hover:shadow-amber-400/40 transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>{t.hero.ctaProducts}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#crop-doctor"
                className="inline-flex items-center gap-2 px-4 py-3 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl border border-emerald-500/40 hover:border-emerald-400 transition-all focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <FlaskConical className="w-4 h-4 text-emerald-300" />
                <span>{t.hero.ctaDoctor}</span>
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center gap-2 px-4 py-3 bg-stone-900/60 hover:bg-stone-900/90 text-stone-200 font-medium text-sm rounded-xl border border-stone-700/60 hover:border-stone-500 transition-all focus-visible:ring-2 focus-visible:ring-stone-400"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaCalculator}</span>
              </a>
            </div>

            {/* Quick Guarantees Checklist */}
            <div className="pt-4 border-t border-emerald-700/50 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-200 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'en' ? 'Authentic original packaging with QR verification' : 'सक्कली उत्पादन, क्यूआर कोड र ब्याच प्रमाणीकरण सहित'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{lang === 'en' ? 'Nepal MoALD & CIBRC registered formulations' : 'नेपाल सरकार कृषि मन्त्रालयमा दर्ता भएका रसायनहरू'}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Trust Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-600/30 shadow-2xl bg-emerald-950/60 p-2">
              
              {/* Agricultural Hero Image */}
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden">
                <img
                  src="/src/assets/images/hero_agriculture_nepal_1790738090267.jpg"
                  alt="High-yield agricultural field in Nepal Terai"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                
                {/* Floating Top Badge */}
                <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-emerald-500/30 text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'Adarsh Agro Division' : 'आदर्श कृषि डिभिजन'}</span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-emerald-300 font-semibold tracking-wide uppercase">
                    {lang === 'en' ? 'Serving Parsa, Bara, Rautahat & Nationwide' : 'पर्सा, बारा, रौतहट र देशभर सेवा'}
                  </p>
                  <p className="text-sm font-bold text-white drop-shadow-xs">
                    {lang === 'en' ? 'Adarsh Beej Bhandar Central Warehouse & Depot' : 'आदर्श बीज भण्डार केन्द्रीय गोदाम तथा डिपो वीरगञ्ज'}
                  </p>
                </div>
              </div>

              {/* 4 Trust Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="bg-emerald-900/60 border border-emerald-700/40 rounded-xl p-3">
                  <span className="text-xl sm:text-2xl font-black text-amber-400 block tracking-tight">25+</span>
                  <span className="text-xs text-emerald-200 font-medium leading-tight block mt-0.5">
                    {t.hero.stats.years}
                  </span>
                </div>

                <div className="bg-emerald-900/60 border border-emerald-700/40 rounded-xl p-3">
                  <span className="text-xl sm:text-2xl font-black text-emerald-300 block tracking-tight">4+</span>
                  <span className="text-xs text-emerald-200 font-medium leading-tight block mt-0.5">
                    {t.hero.stats.brands}
                  </span>
                </div>

                <div className="bg-emerald-900/60 border border-emerald-700/40 rounded-xl p-3">
                  <span className="text-xl sm:text-2xl font-black text-white block tracking-tight">90%+</span>
                  <span className="text-xs text-emerald-200 font-medium leading-tight block mt-0.5">
                    {t.hero.stats.germination}
                  </span>
                </div>

                <div className="bg-emerald-900/60 border border-emerald-700/40 rounded-xl p-3">
                  <span className="text-xl sm:text-2xl font-black text-amber-300 block tracking-tight">50K+</span>
                  <span className="text-xs text-emerald-200 font-medium leading-tight block mt-0.5">
                    {t.hero.stats.acres}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
