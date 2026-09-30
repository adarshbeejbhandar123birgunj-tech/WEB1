import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Droplets, 
  FlaskConical, 
  Calendar, 
  AlertTriangle, 
  ShoppingCart, 
  Check, 
  CheckCircle2,
  Package,
  Image as ImageIcon
} from 'lucide-react';
import { Product, Language } from '../types';
import { ProductPackagingVisual } from './ProductPackagingVisual';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  lang: Language;
  onAddToInquiry: (product: Product, packageSize: string) => void;
  isAdded: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  lang,
  onAddToInquiry,
  isAdded
}) => {
  if (!product) return null;

  const [selectedPackage, setSelectedPackage] = React.useState<string>(
    product.packagingSizes[0] || 'Standard Unit'
  );
  const [modalView, setModalView] = React.useState<'package' | 'photo'>('package');

  const getToxicityBadge = (toxicity: Product['toxicityClass']) => {
    switch (toxicity) {
      case 'green':
        return {
          bg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
          label: lang === 'en' ? 'Slightly Toxic (Green Triangle)' : 'सामान्य विषादी (हरियो त्रिकोण - सुरक्षित)',
          desc: lang === 'en' ? 'Low mammalian toxicity when handled as per standard instructions.' : 'निर्देशन अनुसार प्रयोग गर्दा कम हानिकारक।'
        };
      case 'blue':
        return {
          bg: 'bg-blue-100 text-blue-900 border-blue-300',
          label: lang === 'en' ? 'Moderately Toxic (Blue Triangle)' : 'मध्यम विषादी (नीलो त्रिकोण)',
          desc: lang === 'en' ? 'Moderate toxicity. PPE gloves and masks mandatory.' : 'मध्यम जोखिम। पन्जा र मास्क अनिवार्य लगाउनुपर्ने।'
        };
      case 'yellow':
        return {
          bg: 'bg-amber-100 text-amber-900 border-amber-300',
          label: lang === 'en' ? 'Highly Toxic (Yellow Triangle)' : 'कडा विषादी (पहेंलो त्रिकोण)',
          desc: lang === 'en' ? 'High toxicity. Restricted use, strict PPE and non-wind spraying.' : 'कडा विषादी। विशेष सावधानी र सुरक्षा कवज आवश्यक।'
        };
      case 'bio':
        return {
          bg: 'bg-teal-100 text-teal-900 border-teal-300',
          label: lang === 'en' ? '100% Bio-Organic (Zero Residue)' : '१००% जैविक / कुनै रासायनिक अवशेष नहुने',
          desc: lang === 'en' ? 'Safe for organic certification and export crops.' : 'जैविक खेती तथा निर्यात बालीका लागि उपयुक्त।'
        };
    }
  };

  const toxInfo = getToxicityBadge(product.toxicityClass);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header Bar */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {product.brand}
            </span>
            <span className="text-stone-600">·</span>
            <span className="text-xs text-stone-300 font-mono">
              {product.formulation}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          
          {/* Main Title & Image Top Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 space-y-2">
              <div className="rounded-xl overflow-hidden border border-stone-200 bg-stone-50">
                {modalView === 'package' ? (
                  <ProductPackagingVisual product={product} size="md" />
                ) : (
                  <div className="aspect-4/3 overflow-hidden bg-stone-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
              </div>

              {/* Package vs Photo Switcher */}
              <div className="flex items-center justify-center gap-1 bg-stone-100 p-1 rounded-lg border border-stone-200 text-xs">
                <button
                  type="button"
                  onClick={() => setModalView('package')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1 px-2 rounded-md font-semibold transition-all ${
                    modalView === 'package' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Package className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? 'Package Visual' : 'बोतल / प्याक'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalView('photo')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-1 px-2 rounded-md font-semibold transition-all ${
                    modalView === 'photo' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'en' ? 'Field Photo' : 'खेत फोटो'}</span>
                </button>
              </div>
            </div>

            <div className="sm:col-span-7 space-y-2">
              <h2 id="modal-title" className="text-2xl font-bold text-slate-900 tracking-tight">
                {product.name}
              </h2>
              <p className="text-sm font-semibold text-emerald-800">
                {product.nepaliName}
              </p>
              
              <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-600">
                <div>
                  <span className="font-semibold text-stone-900">{lang === 'en' ? 'Active Ingredient: ' : 'सक्रिय तत्व: '}</span>
                  <span className="font-mono text-emerald-950 font-medium">{product.activeIngredient}</span>
                </div>
                {product.germinationRate && (
                  <div>
                    <span className="font-semibold text-stone-900">{lang === 'en' ? 'Germination: ' : 'उमार शक्ति: '}</span>
                    <span className="font-bold text-emerald-700">{product.germinationRate}</span>
                  </div>
                )}
                {product.maturityDays && (
                  <div>
                    <span className="font-semibold text-stone-900">{lang === 'en' ? 'Duration: ' : 'पाक्ने अवधि: '}</span>
                    <span className="font-medium text-stone-800">{product.maturityDays}</span>
                  </div>
                )}
              </div>

              {/* Toxicity Band Information */}
              <div className={`mt-3 p-3 rounded-lg border text-xs ${toxInfo.bg}`}>
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{toxInfo.label}</span>
                </div>
                <p className="mt-1 opacity-90 leading-relaxed">
                  {toxInfo.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Dosage Prescription Table */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-200">
            <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Droplets className="w-4 h-4 text-emerald-700" />
              <span>{lang === 'en' ? 'Dosage & Spray Guidelines' : 'छर्ने मात्रा तथा सिफारिस (Dosage)'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block font-medium">
                  {lang === 'en' ? 'Per 16L Spray Tank' : 'प्रति १६ लिटर ट्याङ्की'}
                </span>
                <span className="text-sm font-bold text-emerald-800 mt-1 block">
                  {product.dosage.perTank16L}
                </span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block font-medium">
                  {lang === 'en' ? 'Per Kattha (Terai)' : 'प्रति १ कठ्ठा (तराई)'}
                </span>
                <span className="text-sm font-bold text-emerald-800 mt-1 block">
                  {product.dosage.perKattha}
                </span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <span className="text-stone-500 block font-medium">
                  {lang === 'en' ? 'Per Acre / Bigha' : 'प्रति एकर / बिघा'}
                </span>
                <span className="text-sm font-bold text-emerald-800 mt-1 block">
                  {product.dosage.perAcre}
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-stone-600 pt-2 border-t border-stone-200">
              <span className="flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-stone-500" />
                <span>{lang === 'en' ? 'Pre-Harvest Interval (PHI): ' : 'बाली भित्र्याउन कुर्नुपर्ने दिन: '}</span>
                <strong className="text-stone-900">{product.preHarvestInterval}</strong>
              </span>
            </div>
          </div>

          {/* Target Crops & Target Pests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Target Crops' : 'सिफारिस गरिएका बालीहरू'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">
                {(lang === 'en' ? product.targetCrops : product.nepaliTargetCrops).join(', ')}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                {lang === 'en' ? 'Target Pests / Diseases' : 'नियन्त्रण हुने कीरा तथा रोगहरू'}
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed font-medium">
                {product.targetPests.join(', ')}
              </p>
            </div>
          </div>

          {/* Key Product Features */}
          <div>
            <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
              {lang === 'en' ? 'Key Features & Advantages' : 'मुख्य विशेषताहरू र फाइदा'}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {(lang === 'en' ? product.features : product.nepaliFeatures).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety & Handling Instructions */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 text-xs text-amber-950 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">
                {lang === 'en' ? 'Safety Handling Note:' : 'सुरक्षा तथा सावधानी:'}
              </span>
              <p className="mt-0.5 text-amber-900 leading-relaxed">
                {product.safetyInstructions}
              </p>
            </div>
          </div>

          {/* Packaging Selection & Add To Inquiry */}
          <div className="pt-2 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="w-full sm:w-auto">
              <label className="text-xs font-bold text-stone-700 block mb-1">
                {lang === 'en' ? 'Select Packaging Size:' : 'प्याकिङ साइज छान्नुहोस्:'}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.packagingSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedPackage(size)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      selectedPackage === size
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-stone-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => onAddToInquiry(product, selectedPackage)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Added to Inquiry' : 'सूचीमा थपियो'}</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  <span>{lang === 'en' ? 'Add to Inquiry List' : 'अर्डर सूचीमा थप्नुहोस्'}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
