import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Droplets, 
  Layers, 
  Printer, 
  Copy, 
  Check, 
  RotateCcw,
  Sparkles,
  Info
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LandDosageCalculatorProps {
  lang: Language;
}

type LandSystem = 'terai' | 'hill' | 'metric';

interface ProgramSpec {
  id: string;
  name: string;
  nepaliName: string;
  unitType: 'liquid' | 'powder' | 'seed';
  ratePerKattha: number; // in grams or ml
  ratePerRopani: number; // in grams or ml
  ratePerAcre: number;   // in grams or ml
  waterLitersPerKattha: number; // water needed
  displayUnit: string;
  tankDosage: string;
  advice: string;
  nepaliAdvice: string;
}

const programs: ProgramSpec[] = [
  {
    id: 'sml-hybritz-fungicide',
    name: 'Paddy Blast & Blight (SML Hybritz SC / Adama Custodia)',
    nepaliName: 'धानको मरुवा र डढुवा (एस.एम.एल. हाइब्रिट्ज / कस्टोडिया)',
    unitType: 'liquid',
    ratePerKattha: 15,
    ratePerRopani: 22.5,
    ratePerAcre: 250,
    waterLitersPerKattha: 8,
    displayUnit: 'ml',
    tankDosage: '25 - 30 ml per 16L spray tank',
    advice: 'Spray uniformly covering upper and lower foliage during early morning before 10 AM.',
    nepaliAdvice: 'बिहान १० बजेअघि शीत ओभाइसकेपछि पातको माथिल्लो र तल्लो भाग भिज्ने गरी छर्नुहोस्।'
  },
  {
    id: 'sml-vamos-s-borer',
    name: 'Paddy Stem Borer (SML Vamos-S GR with SRT)',
    nepaliName: 'धानको गवारो नियन्त्रण (एस.एम.एल. भामोस-एस दानादार)',
    unitType: 'powder',
    ratePerKattha: 200,
    ratePerRopani: 300,
    ratePerAcre: 4000,
    waterLitersPerKattha: 0,
    displayUnit: 'grams',
    tankDosage: 'Soil broadcast: 200g per Kattha in standing water',
    advice: 'Broadcast at 15-25 days after transplanting in 2-3 inches standing water.',
    nepaliAdvice: 'धान रोपेको १५-२५ दिनपछि २-३ इन्च पानी भएको खेतमा समान रूपमा छर्नुहोस्।'
  },
  {
    id: 'plethora-insecticide',
    name: 'Fall Armyworm & Borer (SML Emzet / Adama Plethora)',
    nepaliName: 'मकैको फौजी कीरा (एस.एम.एल. एमजेट / प्लेथोरा)',
    unitType: 'liquid',
    ratePerKattha: 18,
    ratePerRopani: 27,
    ratePerAcre: 350,
    waterLitersPerKattha: 8,
    displayUnit: 'ml',
    tankDosage: '35 ml per 16L spray tank',
    advice: 'Direct spray nozzle right into the central whorl of maize where caterpillars hide.',
    nepaliAdvice: 'मकैको गुभोभित्र पसेर औषधि पर्ने गरी सिधै गुभोमा स्प्रे गर्नुहोस्।'
  },
  {
    id: 'sml-pause-weedicide',
    name: 'Paddy Weed Control (SML Pause / Adama Shaked)',
    nepaliName: 'धानको साँवा र मोथा झार (एस.एम.एल. पज / शाकेद)',
    unitType: 'liquid',
    ratePerKattha: 5,
    ratePerRopani: 7.5,
    ratePerAcre: 100,
    waterLitersPerKattha: 8,
    displayUnit: 'ml',
    tankDosage: '10 - 12 ml per 16L spray tank',
    advice: 'Drain field water completely 24h prior. Re-flood fields 48 hours after application.',
    nepaliAdvice: 'छर्नुभन्दा २४ घण्टा अघि खेतको पानी निकाल्नुहोस् र छरेको २ दिनपछि फेरि पानी लगाउनुहोस्।'
  },
  {
    id: 'technoz-zinc',
    name: 'Khaira & Zinc Cure (SML Techno-Z Zinc + Sulphur ORT)',
    nepaliName: 'खैरा रोग र जिंक सल्फर पोषण (एस.एम.एल. टेक्नो-जेड ORT)',
    unitType: 'powder',
    ratePerKattha: 200,
    ratePerRopani: 300,
    ratePerAcre: 4000,
    waterLitersPerKattha: 0, // soil application
    displayUnit: 'grams',
    tankDosage: 'Soil broadcast with Urea/DAP (No sprayer needed)',
    advice: 'Broadcast alongside top-dressing urea or basal DAP at transplanting.',
    nepaliAdvice: 'युरिया वा डीएपी मलसँग मिसाएर खेतमा छर्नुहोस्। स्प्रेयर चाहिँदैन।'
  },
  {
    id: 'fertis-sulphur',
    name: 'Mustard/Paddy Sulphur 90% (SML Fertis)',
    nepaliName: 'तोरी तथा धानमा सल्फर ९०% (एस.एम.एल. फर्टिस WDG)',
    unitType: 'powder',
    ratePerKattha: 175,
    ratePerRopani: 260,
    ratePerAcre: 3500,
    waterLitersPerKattha: 0,
    displayUnit: 'grams',
    tankDosage: 'Soil application at last ploughing',
    advice: 'Crucial for increasing mustard oil content and correcting soil alkalinity.',
    nepaliAdvice: 'तोरीमा तेलको मात्रा बढाउन र माटो सुधार्न अन्तिम जोताइमा छर्नुहोस्।'
  },
  {
    id: 'seed-paddy-isp184',
    name: 'ISP 184 Certified Hybrid Paddy Seed',
    nepaliName: 'आइ.एस.पी. १८४ प्रमाणित हाइब्रिड धान बीउ',
    unitType: 'seed',
    ratePerKattha: 300,
    ratePerRopani: 450,
    ratePerAcre: 6000,
    waterLitersPerKattha: 0,
    displayUnit: 'grams',
    tankDosage: 'Nursery bed sowing',
    advice: 'Achieves 20-25% greater yield. Soak seeds in clean water for 24 hours before nursery sowing.',
    nepaliAdvice: '२०-२५% बढी उत्पादन दिने प्रमाणित बीउ। २४ घण्टा सफा पानीमा भिजाएर ब्याडमा छर्नुहोस्।'
  },
  {
    id: 'seed-maize-isp176',
    name: 'ISP 176 High Yield Hybrid Maize Seed',
    nepaliName: 'आइ.एस.पी. १७६ उन्नत हाइब्रिड मकै बीउ',
    unitType: 'seed',
    ratePerKattha: 400,
    ratePerRopani: 600,
    ratePerAcre: 8000,
    waterLitersPerKattha: 0,
    displayUnit: 'grams',
    tankDosage: 'Line sowing (60cm x 20cm)',
    advice: 'High yielding 95-110 days semi-flint hybrid. Maintain 60 cm line to line distance.',
    nepaliAdvice: '९५-११० दिनमा पाक्ने पहेंलो सुन्तला दाना। लाइनदेखि लाइन ६० से.मी. दूरीमा रोप्नुहोस्।'
  }
];

export const LandDosageCalculator: React.FC<LandDosageCalculatorProps> = ({ lang }) => {
  const t = translations[lang];
  const [system, setSystem] = useState<LandSystem>('terai');
  const [selectedProgramId, setSelectedProgramId] = useState<string>(programs[0].id);
  const [copied, setCopied] = useState(false);

  // Terai unit state
  const [bigha, setBigha] = useState<number>(0);
  const [kattha, setKattha] = useState<number>(5);
  const [dhur, setDhur] = useState<number>(0);

  // Hill unit state
  const [ropani, setRopani] = useState<number>(2);
  const [aana, setAana] = useState<number>(0);

  // Metric unit state
  const [acres, setAcres] = useState<number>(1);

  const selectedProgram = useMemo(() => {
    return programs.find((p) => p.id === selectedProgramId) || programs[0];
  }, [selectedProgramId]);

  // Convert all systems into Kattha equivalent for standardized calculation
  // 1 Kattha = 20 Dhur; 1 Bigha = 20 Kattha.
  // 1 Ropani = 508.74 m²; 1 Kattha = 338.63 m². So 1 Ropani = 1.502 Kattha. 1 Aana = 1/16 Ropani.
  // 1 Acre = 4046.86 m² = 11.95 Kattha.
  const totalKattha = useMemo(() => {
    if (system === 'terai') {
      return (Number(bigha) || 0) * 20 + (Number(kattha) || 0) + (Number(dhur) || 0) / 20;
    } else if (system === 'hill') {
      const ropaniCount = (Number(ropani) || 0) + (Number(aana) || 0) / 16;
      return ropaniCount * 1.502;
    } else {
      return (Number(acres) || 0) * 11.95;
    }
  }, [system, bigha, kattha, dhur, ropani, aana, acres]);

  // Calculations
  const calculatedRequirement = useMemo(() => {
    const rawVal = totalKattha * selectedProgram.ratePerKattha;
    if (selectedProgram.displayUnit === 'ml') {
      if (rawVal >= 1000) {
        return `${(rawVal / 1000).toFixed(2)} Litres (${rawVal.toFixed(0)} ml)`;
      }
      return `${rawVal.toFixed(0)} ml`;
    } else {
      // grams
      if (rawVal >= 1000) {
        return `${(rawVal / 1000).toFixed(2)} kg (${rawVal.toFixed(0)} grams)`;
      }
      return `${rawVal.toFixed(0)} grams`;
    }
  }, [totalKattha, selectedProgram]);

  // Water calculation
  const totalWaterLiters = useMemo(() => {
    if (selectedProgram.waterLitersPerKattha === 0) return 0;
    return Math.round(totalKattha * selectedProgram.waterLitersPerKattha);
  }, [totalKattha, selectedProgram]);

  // Spray tank count (16 Liter knapsack sprayers)
  const tanksNeeded = useMemo(() => {
    if (totalWaterLiters === 0) return 0;
    return Math.ceil(totalWaterLiters / 16);
  }, [totalWaterLiters]);

  const handleCopySummary = () => {
    const summaryText = `[Adarsh Beej Bhandar Dosage Prescription]
Program: ${selectedProgram.name}
Calculated Area: ${totalKattha.toFixed(2)} Kattha
Required Input: ${calculatedRequirement}
Sprayer Tanks Needed: ${tanksNeeded > 0 ? `${tanksNeeded} tanks (16-Liter)` : 'Direct Soil Application'}
Total Water: ${totalWaterLiters > 0 ? `${totalWaterLiters} Litres` : 'N/A'}
Recommendation: ${selectedProgram.advice}
Central Hub: Birgunj, Nepal (+977-51-522134)`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="calculator" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Nepal Precision Agronomy Calculator' : 'नेपाली जग्गा नाप र विषादी हिसाब'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.calc.title}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {t.calc.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calculator Controls */}
          <div className="lg:col-span-7 bg-stone-50 p-6 rounded-2xl border border-stone-200 space-y-6">
            
            {/* System Selector */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-2">
                {t.calc.systemSelect}:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSystem('terai')}
                  className={`p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                    system === 'terai'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <span className="block">{lang === 'en' ? 'Terai System' : 'तराई प्रणाली'}</span>
                  <span className={`text-[11px] block mt-0.5 font-normal ${system === 'terai' ? 'text-emerald-200' : 'text-stone-500'}`}>
                    बिघा / कठ्ठा / धुर
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSystem('hill')}
                  className={`p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                    system === 'hill'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <span className="block">{lang === 'en' ? 'Hilly System' : 'पहाडी प्रणाली'}</span>
                  <span className={`text-[11px] block mt-0.5 font-normal ${system === 'hill' ? 'text-emerald-200' : 'text-stone-500'}`}>
                    रोपनी / आना
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSystem('metric')}
                  className={`p-3 text-xs font-bold rounded-xl border text-left transition-all ${
                    system === 'metric'
                      ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                      : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  <span className="block">{lang === 'en' ? 'Metric' : 'एकर / हेक्टर'}</span>
                  <span className={`text-[11px] block mt-0.5 font-normal ${system === 'metric' ? 'text-emerald-200' : 'text-stone-500'}`}>
                    Acres
                  </span>
                </button>
              </div>
            </div>

            {/* Land Area Inputs */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-2">
                {lang === 'en' ? 'Enter Land Size' : 'जमिनको क्षेत्रफल हाल्नुहोस्'}:
              </label>

              {system === 'terai' && (
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-600 block mb-1">
                      {lang === 'en' ? 'Bigha (बिघा)' : 'बिघा'}
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={bigha || ''}
                      onChange={(e) => setBigha(Number(e.target.value))}
                      placeholder="0"
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-stone-600 block mb-1">
                      {lang === 'en' ? 'Kattha (कठ्ठा)' : 'कठ्ठा'}
                    </span>
                    <input
                      type="number"
                      min="0"
                      max="19"
                      value={kattha || ''}
                      onChange={(e) => setKattha(Number(e.target.value))}
                      placeholder="5"
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-stone-600 block mb-1">
                      {lang === 'en' ? 'Dhur (धुर)' : 'धुर'}
                    </span>
                    <input
                      type="number"
                      min="0"
                      max="19"
                      value={dhur || ''}
                      onChange={(e) => setDhur(Number(e.target.value))}
                      placeholder="0"
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              )}

              {system === 'hill' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-600 block mb-1">
                      {lang === 'en' ? 'Ropani (रोपनी)' : 'रोपनी'}
                    </span>
                    <input
                      type="number"
                      min="0"
                      value={ropani || ''}
                      onChange={(e) => setRopani(Number(e.target.value))}
                      placeholder="2"
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <span className="text-[11px] font-semibold text-stone-600 block mb-1">
                      {lang === 'en' ? 'Aana (आना)' : 'आना'}
                    </span>
                    <input
                      type="number"
                      min="0"
                      max="15"
                      value={aana || ''}
                      onChange={(e) => setAana(Number(e.target.value))}
                      placeholder="0"
                      className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>
              )}

              {system === 'metric' && (
                <div>
                  <span className="text-[11px] font-semibold text-stone-600 block mb-1">
                    {lang === 'en' ? 'Acres (एकर)' : 'एकर'}
                  </span>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    value={acres || ''}
                    onChange={(e) => setAcres(Number(e.target.value))}
                    placeholder="1"
                    className="w-full p-2.5 bg-white border border-stone-300 rounded-xl text-sm font-bold text-stone-900 focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              )}
            </div>

            {/* Program / Chemical Selector */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-2">
                {t.calc.selectProduct}:
              </label>
              <select
                value={selectedProgramId}
                onChange={(e) => setSelectedProgramId(e.target.value)}
                className="w-full p-3 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm font-medium text-stone-900 focus:ring-2 focus:ring-emerald-600"
              >
                {programs.map((prog) => (
                  <option key={prog.id} value={prog.id}>
                    {lang === 'en' ? prog.name : prog.nepaliName}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Reset Button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setBigha(0);
                  setKattha(5);
                  setDhur(0);
                  setRopani(2);
                  setAana(0);
                  setAcres(1);
                }}
                className="text-xs text-stone-500 hover:text-stone-800 font-semibold inline-flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Reset Defaults' : 'रिसेट गर्नुहोस्'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Calculated Results Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950 to-stone-900 text-white p-6 rounded-2xl border border-emerald-800/50 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-emerald-800/60 pb-4">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  {lang === 'en' ? 'Precision Prescription' : 'खेतको हिसाब पर्ची'}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {t.calc.resultsTitle}
                </h3>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-colors"
                  title="Copy Prescription"
                  aria-label="Copy prescription summary"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="p-2 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 transition-colors"
                  title="Print Prescription"
                  aria-label="Print prescription"
                >
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Calculated Values Grid */}
            <div className="space-y-4">
              
              {/* Total Area */}
              <div className="bg-emerald-900/40 p-3.5 rounded-xl border border-emerald-700/40">
                <span className="text-xs text-emerald-300 font-medium block">
                  {t.calc.totalArea}:
                </span>
                <span className="text-lg font-extrabold text-white mt-0.5 block">
                  {totalKattha.toFixed(2)} Kattha / {(totalKattha / 20).toFixed(2)} Bigha
                </span>
                <span className="text-[11px] text-emerald-400/80 font-mono">
                  ~{(totalKattha * 338.63).toFixed(0)} m² ({(totalKattha / 11.95).toFixed(2)} Acres)
                </span>
              </div>

              {/* Chemical / Seed Requirement */}
              <div className="bg-emerald-900/40 p-3.5 rounded-xl border border-emerald-700/40">
                <span className="text-xs text-amber-300 font-medium block">
                  {t.calc.chemicalAmount}:
                </span>
                <span className="text-2xl font-black text-amber-400 mt-0.5 block tracking-tight">
                  {calculatedRequirement}
                </span>
                <span className="text-[11px] text-emerald-200/90 font-mono">
                  Rate: {selectedProgram.tankDosage}
                </span>
              </div>

              {/* Spray Tank & Water Volume (if applicable) */}
              {selectedProgram.waterLitersPerKattha > 0 ? (
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/40">
                    <span className="text-xs text-emerald-300 block">
                      {t.calc.tanksCount}:
                    </span>
                    <span className="text-xl font-extrabold text-white mt-0.5 block">
                      {tanksNeeded} {lang === 'en' ? 'Tanks' : 'ट्याङ्की'}
                    </span>
                    <span className="text-[10px] text-emerald-400">
                      (16-Liter standard)
                    </span>
                  </div>

                  <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/40">
                    <span className="text-xs text-emerald-300 block">
                      {t.calc.sprayVolume}:
                    </span>
                    <span className="text-xl font-extrabold text-white mt-0.5 block">
                      {totalWaterLiters} L
                    </span>
                    <span className="text-[10px] text-emerald-400">
                      {lang === 'en' ? 'Clean pond/tap water' : 'सफा पानी'}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-emerald-900/40 p-3 rounded-xl border border-emerald-700/40 text-xs text-emerald-200">
                  <span className="font-bold text-amber-300 block mb-0.5">
                    {lang === 'en' ? 'Solid Fertilizer / Seed Application:' : 'छरुवा मल तथा बीउ प्रयोग:'}
                  </span>
                  <span>{selectedProgram.tankDosage}</span>
                </div>
              )}

              {/* Agronomist Advice Note */}
              <div className="pt-2 text-xs text-emerald-100/90 leading-relaxed border-t border-emerald-800/60">
                <span className="font-bold text-emerald-300 block mb-1">
                  {t.calc.applicationNote}:
                </span>
                <p>
                  {lang === 'en' ? selectedProgram.advice : selectedProgram.nepaliAdvice}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
