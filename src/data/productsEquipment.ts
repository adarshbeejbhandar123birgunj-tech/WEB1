import { Product } from '../types';

export const productsEquipment: Product[] = [
  {
    id: 'adarsh-knapsack-sprayer-16l',
    name: 'Adarsh Agro Pro 16L 2-in-1 Sprayer',
    nepaliName: 'आदर्श एग्रो प्रो १६ लिटर ब्याट्री तथा म्यानुअल स्प्रेयर',
    brand: 'SML Limited',
    category: 'equipment',
    activeIngredient: '12V 12Ah Heavy Duty Battery + Stainless Telescopic Lance',
    formulation: 'High-Density Polyethylene (HDPE) Tank with Dual Motor',
    toxicityClass: 'green',
    targetCrops: ['All Crops & Orchards'],
    nepaliTargetCrops: ['सबै बालीनाली तथा फलफूल बगैँचा'],
    targetPests: ['Uniform spray application for all pesticides, fungicides, and foliar nutrients'],
    dosage: {
      perTank16L: '16 Litres capacity (8-10 tanks per battery charge)',
      perKattha: '1.5 - 2 tanks per Kattha',
      perAcre: '8 - 10 tanks per Acre'
    },
    packagingSizes: ['Single Unit with 4 Brass Nozzles + Fast Charger'],
    features: [
      'Dual functionality: Works on 12V battery and manual hand pump if battery discharges in field',
      'Up to 6-8 hours of continuous spraying on a single 3-hour charge (sprays 25-30 tanks)',
      'Supplied with 4 interchangeable brass nozzles (Hollow cone, Flat fan, 4-hole cluster, Dual jet)',
      'Heavy-duty padded back straps for ergonomic farmer comfort without back strain'
    ],
    nepaliFeatures: [
      '२-इन-१ सुविधा: ब्याट्रीबाट चल्ने र ब्याट्री सकिएमा हातले पनि पम्प गर्न मिल्ने',
      'एक पटक फुल चार्ज गर्दा २५ देखि ३० ट्याङ्कीसम्म छर्न सकिने',
      '४ वटा फरक ब्रास (पित्तल) को नोजल र चार्जर सहित'
    ],
    preHarvestInterval: 'Equipment / Long-life',
    safetyInstructions: 'Always rinse tank with clean fresh water after spraying chemicals.',
    image: '/src/assets/images/sml_crop_protection_1790738101074.jpg',
    popular: true
  },
  {
    id: 'taiwan-power-sprayer-768',
    name: 'Adarsh Taiwan Power Sprayer TU-26',
    nepaliName: 'आदर्श ताइवान पावर स्प्रेयर (इन्जिन सहित)',
    brand: 'SML Limited',
    category: 'equipment',
    activeIngredient: '2-Stroke 26cc Engine + High-Pressure Brass Pump',
    formulation: '25 Litre HDPE Chemical Resistant Tank',
    toxicityClass: 'green',
    targetCrops: ['High Canopy Orchards, Mango, Sugarcane, Paddy'],
    nepaliTargetCrops: ['आँप, लिची, उखु तथा अग्ला फलफूल बगैँचा'],
    targetPests: ['High pressure mist penetration into dense foliage'],
    dosage: {
      perTank16L: '25 Litres tank capacity',
      perKattha: '1 tank per Kattha',
      perAcre: '6 - 8 tanks per Acre'
    },
    packagingSizes: ['Complete Engine Sprayer Set with 3-Nozzle Gun + Lance'],
    features: [
      'Heavy-duty 26cc 2-stroke petrol engine generating 25-35 kg/cm² spraying pressure',
      'Throws high-velocity mist up to 25-30 feet high into tree canopies',
      'Solid forged brass plunger pump with stainless steel pistons for long life',
      'Ideal for orchard disease control and large acreage paddy blast management'
    ],
    nepaliFeatures: [
      '२६ सीसी पेट्रोल इन्जिन, २५-३५ केजी प्रेसर दिने',
      '२५ देखि ३० फिट अग्ला रुखमा समेत सजिलै औषधि पुर्याउने'
    ],
    preHarvestInterval: 'Equipment / Long-life',
    safetyInstructions: 'Use 2T engine oil mixed in petrol at 1:25 ratio.',
    image: '/src/assets/images/sml_crop_protection_1790738101074.jpg'
  }
];
