import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  PhoneCall, 
  Trash2, 
  Wind, 
  Eye, 
  Sparkles,
  Info
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SafetyGuideProps {
  lang: Language;
}

export const SafetyGuide: React.FC<SafetyGuideProps> = ({ lang }) => {
  const t = translations[lang];

  const toxicityBands = [
    {
      color: 'bg-red-600 text-white',
      border: 'border-red-500',
      title: lang === 'en' ? 'Extremely Toxic (Red Band)' : 'अति विषालु (रातो रङको सङ्केत)',
      subtitle: lang === 'en' ? 'Category I - Danger Poison' : 'पहिलो श्रेणी - कडा विष',
      desc: lang === 'en' 
        ? 'Oral LD50: 1-50 mg/kg. High hazard. Requires full chemical respirator, specialized certified applicator license.'
        : 'अत्यन्त कडा विष। पूर्ण सुरक्षा कवज र विशेष सावधानी विना प्रयोग गर्न पाइँदैन।'
    },
    {
      color: 'bg-amber-500 text-slate-950',
      border: 'border-amber-400',
      title: lang === 'en' ? 'Highly Toxic (Yellow Band)' : 'कडा विषालु (पहेंलो रङको सङ्केत)',
      subtitle: lang === 'en' ? 'Category II - Poison' : 'दोस्रो श्रेणी - विष',
      desc: lang === 'en'
        ? 'Oral LD50: 51-500 mg/kg. Strict PPE gloves, goggles, rubber boots mandatory. Keep away from water bodies.'
        : 'कडा विष। पन्जा, मास्क, चस्मा अनिवार्य लगाउनुपर्ने र जलस्रोतबाट टाढा राख्नुपर्ने।'
    },
    {
      color: 'bg-blue-600 text-white',
      border: 'border-blue-500',
      title: lang === 'en' ? 'Moderately Toxic (Blue Band)' : 'मध्यम विषालु (नीलो रङको सङ्केत)',
      subtitle: lang === 'en' ? 'Category III - Danger' : 'तेस्रो श्रेणी - मध्यम जोखिम',
      desc: lang === 'en'
        ? 'Oral LD50: 501-5000 mg/kg. Most common field insecticides and fungicides. Follow recommended label dosage.'
        : 'मध्यम स्तरको विष। सामान्यतया खेतबारीमा प्रयोग हुने विषादी र ढुसीनाशक।'
    },
    {
      color: 'bg-emerald-600 text-white',
      border: 'border-emerald-500',
      title: lang === 'en' ? 'Slightly Toxic (Green Band)' : 'सामान्य विषालु (हरियो रङको सङ्केत)',
      subtitle: lang === 'en' ? 'Category IV - Caution' : 'चौथो श्रेणी - सामान्य सावधानी',
      desc: lang === 'en'
        ? 'Oral LD50: >5000 mg/kg. Low mammalian toxicity. Micronutrients, bio-fungicides and natural formulation.'
        : 'सामान्य सावधानी। सूक्ष्म पोषक तत्व, जैविक मल र कम जोखिम भएका उत्पादन।'
    }
  ];

  const goldenRules = [
    {
      step: '01',
      title: lang === 'en' ? 'Wear Mandatory PPE' : 'अनिवार्य सुरक्षा कवज (PPE) लगाउनुहोस्',
      desc: lang === 'en' ? 'Always wear nitrile gloves, protective face mask/respirator, full sleeve shirt and boots.' : 'रसायन प्रतिरोधी पन्जा, मास्क, पूरै जिउ ढाक्ने कपडा र गमबुट अनिवार्य लगाउनुहोस्।'
    },
    {
      step: '02',
      title: lang === 'en' ? 'Never Spray Against Wind' : 'हावाको विपरीत दिशामा कहिल्यै नछर्नुहोस्',
      desc: lang === 'en' ? 'Spray during calm early morning or late afternoon hours. Stand with the wind blowing away from you.' : 'शान्त बिहानी वा साँझको समयमा छर्नुहोस्। हावा बगेको दिशातर्फ पिठ्युँ फर्काएर स्प्रे गर्नुहोस्।'
    },
    {
      step: '03',
      title: lang === 'en' ? 'Observe Pre-Harvest Interval (PHI)' : 'पर्खनुपर्ने अवधि (PHI) कडाइका साथ पालना गर्नुहोस्',
      desc: lang === 'en' ? 'Strictly wait the designated number of days between spraying and harvesting vegetables or grain.' : 'विषादी छरिसकेपछि बाली टिप्न वा उपभोग गर्न तोकिएको दिन पर्खनुहोस्।'
    },
    {
      step: '04',
      title: lang === 'en' ? 'Triple-Rinse Empty Containers' : 'खाली बट्टा ३ पटक पखाल्नुहोस् (Triple Rinse)',
      desc: lang === 'en' ? 'Rinse empty bottles 3 times, pour rinse water into spray tank, puncture container so it cannot be reused.' : 'खाली बट्टालाई तीन पटक सफा पानीले पखाली स्प्रेयरमा हाल्ने र बट्टा फुटाई खाल्डो खनेर पुर्ने।'
    },
    {
      step: '05',
      title: lang === 'en' ? 'Safe Locked Storage' : 'बालबालिका र खाद्यान्नबाट टाढा भण्डारण',
      desc: lang === 'en' ? 'Lock all agrochemicals in high cabinets separate from animal feed, drinking water, and living quarters.' : 'विषादीलाई दाना, खाद्यान्न र बालबालिकाको पहुँचभन्दा टाढा बन्द दराजमा सुरक्षित राख्नुहोस्।'
    }
  ];

  return (
    <section id="safety" className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <ShieldAlert className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'en' ? 'Responsible Stewardship & Food Safety' : 'जिम्मेवार विषादी प्रयोग तथा सुरक्षा मापदण्ड'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.safety.title}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {t.safety.subtitle}
          </p>
        </div>

        {/* 4 Toxicity Color Bands */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider mb-4">
            {t.safety.triangleTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {toxicityBands.map((band) => (
              <div
                key={band.title}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 font-bold text-xs ${band.color}`}>
                    <span className="block">{band.title}</span>
                    <span className="text-[11px] font-normal opacity-90 block mt-0.5">{band.subtitle}</span>
                  </div>
                  <div className="p-4 text-xs text-stone-700 leading-relaxed">
                    {band.desc}
                  </div>
                </div>

                <div className="p-3 bg-stone-50 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
                  {lang === 'en' ? 'Check bottom triangle on bottle' : 'बट्टाको तल रहेको त्रिकोण रङ हेर्नुहोस्'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Golden Rules Grid */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs mb-10">
          <h3 className="text-lg font-bold text-slate-900 mb-6">
            {t.safety.rulesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {goldenRules.map((rule) => (
              <div key={rule.step} className="space-y-2">
                <span className="text-2xl font-black text-emerald-700 font-mono block">
                  {rule.step}
                </span>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                  {rule.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency First-Aid & Poison Response Box */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span>{t.safety.emergencyTitle}</span>
            </div>
            <p className="text-xs text-red-800 max-w-2xl leading-relaxed">
              {lang === 'en'
                ? 'In case of accidental swallowing or skin contamination: Remove contaminated clothing immediately, wash skin with copious water and soap. Induce vomiting ONLY if instructed by doctor. Take the product bottle/label immediately to the nearest hospital or Narayani Hospital Birgunj.'
                : 'भूलवश विषादी निलेमा वा छालामा परेमा: तुरुन्तै लुगा फेरेर साबुनपानीले मज्जाले धुनुहोस्। डाक्टरको सल्लाह बिना बान्ता नगराउनुहोस्। विषादीको बट्टा/लेबल लिएर तुरुन्तै नजिकको स्वास्थ्य चौकी वा नारायणी अस्पताल वीरगञ्ज पुग्नुहोस्।'}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-2">
            <a
              href="tel:+97751522134"
              className="px-4 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors inline-flex items-center gap-2 justify-center"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'en' ? 'Birgunj Hub Emergency: +977-51-522134' : 'आदर्श बीज आकस्मिक: ०५१-५२२१३४'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
