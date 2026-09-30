import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface PartnershipBannerProps {
  lang: Language;
}

export const PartnershipBanner: React.FC<PartnershipBannerProps> = ({ lang }) => {
  const t = translations[lang];

  const partners = [
    {
      name: 'SML Limited',
      subtitle: 'Transforming Agriculture (550+ Global Patents)',
      specialty: lang === 'en' ? 'Micronized Sulphur 90% WDG, Techno-Z with ORT, Vamos-S DG' : '९०% सल्फर WDG र पेटेन्टेड जिंक पोषण प्रविधि',
      tag: 'Authorized Partner',
      nepaliTag: 'आधिकारिक वितरक',
      bgGlow: 'hover:border-emerald-500'
    },
    {
      name: 'ADAMA India',
      subtitle: 'Global Leader in Crop Protection & Solutions',
      specialty: lang === 'en' ? 'Barazide, Plethora, Custodia, Agil & Selective Herbicides' : 'विश्व प्रसिद्ध कीटनाशक, ढुसीनाशक र झारनाशक',
      tag: 'Authorized Importer',
      nepaliTag: 'आधिकारिक आयातकर्ता',
      bgGlow: 'hover:border-blue-500'
    },
    {
      name: 'Mankind Agritech',
      subtitle: 'Serving Farmers (High Quality Agrochemicals & IPM)',
      specialty: lang === 'en' ? 'Pheromone Lures, Sticky Traps, Pyrobrut, Defisure, Bifenforce' : 'फेरोमोन ट्रयाप, जैविक विषादी र उन्नत रसायनहरू',
      tag: 'Authorized Partner',
      nepaliTag: 'आधिकारिक वितरक',
      bgGlow: 'hover:border-pink-500'
    },
    {
      name: 'Albaugh / Rotam',
      subtitle: 'Your Alternative Global AgroSciences',
      specialty: lang === 'en' ? 'Ixus, Kopal, Rotrif, Cialotan, Bosforus, Oryblast, Toledo-S' : 'उत्कृष्ट फर्मुलेसन, कीटनाशक र ढुसीनाशक',
      tag: 'Authorized Partner',
      nepaliTag: 'आधिकारिक वितरक',
      bgGlow: 'hover:border-amber-500'
    },
    {
      name: 'ISP Seeds (Inventive)',
      subtitle: 'ISO 9001:2015 Certified Seed Company',
      specialty: lang === 'en' ? 'High Yield Hybrid Tomato, Chilli, Okra, Paddy, Maize & Wheat' : 'उन्नत हाइब्रिड तरकारी, धान, मकै र गहुँको बीउ',
      tag: 'Exclusive Seed Partner',
      nepaliTag: 'विशेष बीउ साझेदार',
      bgGlow: 'hover:border-green-600'
    }
  ];

  return (
    <section id="partners" className="py-12 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Direct Import & Quality Certification' : 'प्रत्यक्ष आयात र गुणस्तर प्रमाणीकरण'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.partners.title}
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            {t.partners.subtitle}
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`bg-white rounded-xl p-5 border border-stone-200 shadow-xs transition-all duration-200 ${partner.bgGlow} hover:shadow-md flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-emerald-700 tracking-wide">
                    {lang === 'en' ? partner.tag : partner.nepaliTag}
                  </span>
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>

                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  {partner.name}
                </h3>
                
                <p className="text-[11px] text-stone-500 font-medium mb-3 leading-tight">
                  {partner.subtitle}
                </p>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {partner.specialty}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-semibold">
                <span>{lang === 'en' ? 'Birgunj Depot' : 'वीरगञ्ज डिपो'}</span>
                <span className="text-emerald-700 font-bold">{lang === 'en' ? '100% Genuine' : '१००% सक्कली'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Anti-Counterfeit Notice for Farmers */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                {lang === 'en' ? 'Anti-Counterfeit & Authentic Batch Guarantee' : 'नक्कली विषादीबाट सावधान रहनुहोस्'}
              </p>
              <p className="text-xs text-amber-900 mt-0.5">
                {lang === 'en' 
                  ? 'All products distributed by Adarsh Beej Bhandar come with tamper-evident seals and authentic batch hologram codes. Buy only through authorized Birgunj depots and affiliated agrovets.'
                  : 'आदर्श बीज भण्डारबाट वितरित सबै सामानहरूमा कम्पनीको होलोग्राम तथा ब्याच नम्बर अंकित हुन्छ। नक्कली उत्पादनबाट बच्न आधिकारिक डिलरबाट मात्र खरिद गर्नुहोस्।'}
              </p>
            </div>
          </div>
          <a
            href="#dealers"
            className="shrink-0 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap"
          >
            {lang === 'en' ? 'Find Authorized Dealer' : 'आधिकारिक डिलर खोज्नुहोस्'}
          </a>
        </div>

      </div>
    </section>
  );
};
