import React, { useState, useMemo } from 'react';
import { 
  Bug, 
  Sprout, 
  FlaskConical, 
  AlertTriangle, 
  ShieldCheck, 
  Droplets, 
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { Language, Product } from '../types';
import { cropList, cropIssuesData } from '../data/cropsAndProblems';
import { productsData } from '../data/products';
import { translations } from '../data/translations';

interface CropDoctorProps {
  lang: Language;
  onSelectProduct: (product: Product) => void;
}

export const CropDoctor: React.FC<CropDoctorProps> = ({ lang, onSelectProduct }) => {
  const t = translations[lang];
  const [selectedCrop, setSelectedCrop] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredIssues = useMemo(() => {
    return cropIssuesData.filter((issue) => {
      if (selectedCrop !== 'all' && issue.cropId !== selectedCrop) {
        return false;
      }
      if (selectedType !== 'all' && issue.issueType !== selectedType) {
        return false;
      }
      return true;
    });
  }, [selectedCrop, selectedType]);

  const handleProductClick = (productId: string) => {
    const prod = productsData.find((p) => p.id === productId);
    if (prod) {
      onSelectProduct(prod);
    }
  };

  return (
    <section id="crop-doctor" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
          <div className="lg:col-span-8 max-w-3xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
              <FlaskConical className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'Field Problem Diagnosis & Prescription' : 'रोग कीरा पहिचान तथा वैज्ञानिक समाधान'}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {t.doctor.title}
            </h2>
            <p className="text-stone-600 text-sm mt-2 leading-relaxed">
              {t.doctor.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 rounded-xl overflow-hidden border border-emerald-200/80 shadow-xs h-28 sm:h-32 relative">
            <img
              src="/src/assets/images/crop_doctor_diagnosis_1790738125406.jpg"
              alt="Crop Diagnosis Agronomy by Adarsh Beej Bhandar"
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
            <div className="absolute bottom-2 left-3 right-3 text-white text-[11px] font-semibold">
              {lang === 'en' ? 'Verified IPM & MoALD Solutions' : 'वैज्ञानिक बाली स्वास्थ्य परामर्श'}
            </div>
          </div>
        </div>

        {/* Diagnostic Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs mb-8 space-y-4">
          
          {/* Crop Selector Segmented Row */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-2">
              {t.doctor.filterByCrop}:
            </label>
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {cropList.map((crop) => (
                <button
                  key={crop.id}
                  type="button"
                  onClick={() => setSelectedCrop(crop.id)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                    selectedCrop === crop.id
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {lang === 'en' ? crop.name : crop.nepaliName}
                </button>
              ))}
            </div>
          </div>

          {/* Issue Type Selector */}
          <div>
            <label className="text-xs font-bold text-stone-700 block mb-2">
              {t.doctor.filterByType}:
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: t.doctor.allTypes },
                { id: 'insect', label: t.doctor.insects },
                { id: 'disease', label: t.doctor.diseases },
                { id: 'weed', label: t.doctor.weeds },
                { id: 'deficiency', label: t.doctor.deficiencies }
              ].map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    selectedType === type.id
                      ? 'bg-stone-900 text-white border-stone-900 shadow-xs font-bold'
                      : 'bg-white text-stone-600 border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Issues List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredIssues.map((issue) => (
            <div
              key={issue.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header row: quiet unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-emerald-800 uppercase tracking-wide">
                      {lang === 'en' ? issue.cropName : issue.cropNepaliName}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="capitalize">{issue.issueType}</span>
                  </div>

                  {issue.severity === 'critical' && (
                    <span className="text-[11px] font-bold text-red-700 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'High Risk' : 'उच्च जोखिम'}</span>
                    </span>
                  )}
                </div>

                {/* Issue Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {issue.issueName}
                  </h3>
                  <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                    {issue.issueNepaliName}
                  </p>
                </div>

                {/* Symptoms */}
                <div className="bg-stone-50 p-3 rounded-xl border border-stone-100 text-xs">
                  <span className="font-bold text-stone-800 block mb-1">
                    {t.doctor.symptomsTitle}:
                  </span>
                  <p className="text-stone-700 leading-relaxed">
                    {lang === 'en' ? issue.symptoms : issue.nepaliSymptoms}
                  </p>
                </div>

                {/* Recommended Product Box */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 text-xs">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-emerald-950 uppercase tracking-wider text-[11px]">
                      {t.doctor.solutionTitle}:
                    </span>
                    <button
                      type="button"
                      onClick={() => handleProductClick(issue.recommendedProductId)}
                      className="text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center gap-1 hover:underline"
                    >
                      <span>{lang === 'en' ? 'View Details' : 'विवरण हेर्नुहोस्'}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <p className="text-sm font-bold text-emerald-900">
                    {issue.recommendedProductName}
                  </p>

                  <div className="mt-2 pt-2 border-t border-emerald-200/80 flex items-start gap-1.5 text-emerald-950">
                    <Droplets className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">{t.doctor.recommendedDosage}: </span>
                      <span>{issue.recommendedDosage}</span>
                    </div>
                  </div>
                </div>

                {/* Preventive agronomy action */}
                <div className="text-xs text-stone-600 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-800">{t.doctor.preventionTitle}: </span>
                    <span>{issue.preventiveAction}</span>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Button */}
              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => handleProductClick(issue.recommendedProductId)}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{lang === 'en' ? 'Open Product Sheet' : 'औषधि विवरण खोल्नुहोस्'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Expert Advice Support Banner */}
        <div className="mt-10 bg-emerald-900 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold">
              {lang === 'en' ? 'Unsure about your crop symptoms? Speak with an Agronomist.' : 'बालीको लक्षण ठम्याउन गाह्रो भयो? हाम्रो कृषि प्राविधिकसँग सल्लाह लिनुहोस्।'}
            </h3>
            <p className="text-xs text-emerald-200 max-w-xl">
              {lang === 'en'
                ? 'Send a photo of the affected plant to our Birgunj central technical desk on WhatsApp for instant identification and custom dosage advice.'
                : 'रोगी पात वा कीराको फोटो हाम्रो वीरगञ्ज कार्यालयको व्हाट्सएपमा पठाउनुहोस्। कृषि प्राविधिकले तुरुन्त पहिचान गरी सल्लाह दिनेछन्।'}
            </p>
          </div>

          <a
            href="https://wa.me/9779855023456?text=Namaste%2C%20I%20need%20agronomy%20advice%20for%20my%20crop%20from%20Adarsh%20Beej%20Bhandar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-all shrink-0 inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-stone-950" />
            <span>{lang === 'en' ? 'WhatsApp Crop Doctor Desk' : 'व्हाट्सएपमा फोटो पठाउनुहोस्'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
