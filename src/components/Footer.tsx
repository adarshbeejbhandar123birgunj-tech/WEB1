import React from 'react';
import { Sprout, ShieldCheck, Mail, Phone, MapPin, Award, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { AdarshLogo } from './AdarshLogo';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <AdarshLogo className="h-11" light />

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Premier agricultural input distributor connecting international agrochemical innovations with Nepalese farmers. Dedicated to higher yields, soil fertility, and sustainable farming.'
                : 'नेपाली कृषिलाई आत्मनिर्भर र नाफामूलक बनाउन अन्तर्राष्ट्रिय स्तरका प्रमाणित बीउ, आधुनिक विषादी र सूक्ष्म पोषक तत्वहरूको आधिकारिक वितरक।'}
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'en' ? 'Nepal MoALD & SQCC Registered Dealer' : 'नेपाल सरकार कृषि मन्त्रालयमा दर्ता भएको संस्था'}</span>
            </div>
          </div>

          {/* Strategic Brands */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Brand Partners' : 'आधिकारिक ब्राण्डहरू'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <span className="hover:text-white transition-colors">ADAMA India (Advanced Solutions)</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">SML Limited (Transforming Agriculture)</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Mankind Agritech (Serving Farmers)</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">Albaugh / Rotam Crop Protection</span>
              </li>
              <li>
                <span className="hover:text-white transition-colors">ISP Seeds (Inventive Hybrid Series)</span>
              </li>
            </ul>
          </div>

          {/* Quick Hub Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Agro Hub Links' : 'मुख्य लिङ्कहरू'}
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#catalog" className="hover:text-white transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href="#crop-doctor" className="hover:text-white transition-colors">
                  {t.nav.cropDoctor}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.nav.calculator}
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">
                  {t.nav.safety}
                </a>
              </li>
              <li>
                <a href="#field-trials" className="hover:text-white transition-colors">
                  {t.nav.fieldTrials}
                </a>
              </li>
              <li>
                <a href="#dealers" className="hover:text-white transition-colors">
                  {t.nav.dealers}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'en' ? 'Birgunj Depot' : 'सम्पर्क ठेगाना'}
            </h4>
            <div className="space-y-2 text-xs text-stone-400 leading-relaxed">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Main Road, Birgunj - 44300, Parsa, Nepal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+97751522134" className="hover:text-white transition-colors">
                  +977-51-522134
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:adarshbeejbhandar123birgunj@gmail.com" className="hover:text-white transition-colors break-all">
                  adarshbeejbhandar123birgunj@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer Note */}
        <div className="py-6 border-b border-stone-800 text-[11px] text-stone-500 leading-relaxed">
          <p>
            <strong className="text-stone-400">Agricultural Safety & Disclaimer:</strong> Use pesticides and agrochemicals responsibly. Read all package labels and instructions carefully before usage. Adarsh Beej Bhandar advocates integrated pest management (IPM) and strict adherence to recommended pre-harvest intervals (PHI). All trade names and brand trademarks belong to their respective registered corporate owners.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Adarsh Beej Bhandar – Harvesting Tomorrow. All rights reserved. Birgunj, Nepal.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors p-1"
          >
            <span>{lang === 'en' ? 'Back to top' : 'माथि जानुहोस्'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
