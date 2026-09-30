import React from 'react';
import { Award, CheckCircle2, TrendingUp, MapPin, Calendar, Sprout } from 'lucide-react';
import { Language } from '../types';

interface FieldTrialsProps {
  lang: Language;
}

export const FieldTrials: React.FC<FieldTrialsProps> = ({ lang }) => {
  const trials = [
    {
      crop: lang === 'en' ? 'Paddy / Rice' : 'धान बाली',
      location: 'Bindyabasini Rural Municipality, Parsa',
      nepaliLocation: 'विन्ध्यवासिनी गाउँपालिका, पर्सा',
      productUsed: 'ISP 184 Hybrid Paddy + SML Techno-Z',
      date: 'Kharif Season',
      result: '+52% Yield Increase',
      nepaliResult: '+५२% उत्पादन वृद्धि',
      details: lang === 'en'
        ? 'Field demonstration with 12 local farmers. Recorded 32.4 Quintals per Bigha compared to 21.2 Quintals with farmer saved seed. High tolerance to lodging during late monsoon rains.'
        : '१२ जना अगुवा किसानहरूसँग गरिएको परीक्षण। स्थानीय बीउको २१.२ क्विन्टलको तुलनामा प्रति बिघा ३२.४ क्विन्टल धान उत्पादन। बर्खाको हावाहुरीमा पनि नढल्ने प्रमाणित।'
    },
    {
      crop: lang === 'en' ? 'Maize / Corn' : 'मकै बाली',
      location: 'Chandrapur / Chandranigahpur, Rautahat',
      nepaliLocation: 'चन्द्रपुर, रौतहट',
      productUsed: 'Adama Plethora Insecticide',
      date: 'Spring Season',
      result: '96% Armyworm Eradication',
      nepaliResult: '९६% फौजी कीरा नियन्त्रण',
      details: lang === 'en'
        ? 'Severe Fall Armyworm (FAW) outbreak controlled within 24 hours of single whorl application. Feeding stopped completely, leading to healthy cob formation.'
        : 'अमेरिकी फौजी कीराको भयानक प्रकोपमा एक पटक गुभोमा छर्नासाथ २४ घण्टाभित्रै ९६% कीरा नियन्त्रण। घोघा स्वस्थ र भरिलो निस्किएको।'
    },
    {
      crop: lang === 'en' ? 'Mustard / Oilseed' : 'तोरी बाली',
      location: 'Pokhariya Municipality, Parsa',
      nepaliLocation: 'पोखरिया नगरपालिका, पर्सा',
      productUsed: 'SML Fertis 90% Sulphur WDG',
      date: 'Rabi Season',
      result: 'Oil Yield Jumped to 42.5%',
      nepaliResult: 'तेलको मात्रा ४२.५% सम्म पुग्यो',
      details: lang === 'en'
        ? 'Basal application of SML 90% Sulphur increased oil extraction percentage from 36.2% to 42.5%, fetching higher price in local oil mills.'
        : 'तोरी रोप्दा सल्फर ९०% प्रयोग गर्दा तेलको मात्रा ३६.२% बाट बढेर ४२.५% पुगेको र तेल मिलमा प्रति क्विन्टल उच्च मूल्य प्राप्त भएको।'
    },
    {
      crop: lang === 'en' ? 'Paddy Seedbed' : 'धानको खैरा रोग',
      location: 'Kalaiya Sub-Metropolitan, Bara',
      nepaliLocation: 'कलैया उपमहानगरपालिका, बारा',
      productUsed: 'SML Techno-Z (Zinc 33% + Sulphur 15%)',
      date: 'Early Tillering Stage',
      result: '100% Recovery from Khaira',
      nepaliResult: 'खैरा रोगबाट १००% मुक्ति',
      details: lang === 'en'
        ? 'Bronze rust discoloration reversed within 7 days of broadcasting Techno-Z with urea. Produced profuse healthy green tillers with strong root anchorage.'
        : 'खैरो दाग लागेर सुक्न थालेको धानको बिरुवा युरियासँग टेक्नो-जेड मिसाएर छरेको ७ दिनभित्रै पूरै हरियो भएको र बाक्लो गाँज हालेको।'
    }
  ];

  return (
    <section id="field-trials" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Verified Field Demonstrations' : 'नेपाली माटोमा प्रमाणित नतिजाहरू'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'On-Ground Field Trials & Proven Yield Results' : 'खेतबारी परीक्षण तथा वास्तविक उत्पादन नतिजा'}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {lang === 'en'
              ? 'Every product in our catalog undergoes rigorous field testing in Parsa, Bara, and Rautahat farmlands to ensure peak adaptation to local soil and climatic conditions.'
              : 'हाम्रा सबै उत्पादनहरू पर्सा, बारा, रौतहट लगायतका किसानको खेतमै परीक्षण गरिएका छन्, जसले नेपालको हावापानीमा अधिकतम उत्पादन दिने ग्यारेन्टी गर्दछ।'}
          </p>
        </div>

        {/* Trials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trials.map((trial, index) => (
            <div
              key={index}
              className="bg-stone-50 rounded-2xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                  <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
                    <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{lang === 'en' ? trial.location : trial.nepaliLocation}</span>
                  </div>
                  <span className="font-mono text-stone-500">{trial.date}</span>
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {trial.crop}
                  </h3>
                  <span className="text-sm font-extrabold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-md">
                    {lang === 'en' ? trial.result : trial.nepaliResult}
                  </span>
                </div>

                <div className="text-xs text-stone-600 mb-3 font-medium">
                  <span className="text-stone-900 font-bold">{lang === 'en' ? 'Input Program: ' : 'प्रयोग गरिएको प्रविधि: '}</span>
                  <span className="font-mono text-emerald-950 font-semibold">{trial.productUsed}</span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed bg-white p-3.5 rounded-xl border border-stone-200">
                  {trial.details}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Verified by Adarsh Beej Agronomists' : 'आदर्श बीज कृषि प्राविधिकद्वारा प्रमाणित'}</span>
                </span>
                <span>{lang === 'en' ? 'Terai Trial Plot' : 'तराई प्लट'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
