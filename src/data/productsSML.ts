import { Product } from '../types';

export const productsSML: Product[] = [
  // ==========================================
  // SML FUNGICIDES (FROM SML CATALOG)
  // ==========================================
  {
    id: 'sml-u-save',
    name: 'SML U-SAVE Fungicide',
    nepaliName: 'एस.एम.एल. यु-सेभ (ढुसीनाशक)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Sulphur 58.5% + Azoxystrobin 4.2% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'blue',
    targetCrops: ['Grapes', 'Chilli', 'Mango', 'Tomato', 'Paddy', 'Apple', 'Vegetables'],
    nepaliTargetCrops: ['अङ्गुर', 'खुर्सानी', 'आँप', 'गोलभेँडा', 'धान', 'स्याउ', 'तरकारी'],
    targetPests: ['Powdery Mildew', 'Anthracnose', 'Leaf Spots', 'Dieback'],
    dosage: {
      perTank16L: '30 - 35 ml',
      perKattha: '15 - 20 ml',
      perAcre: '300 - 350 ml'
    },
    packagingSizes: ['200 ml', '400 ml', '800 ml', '1 Ltr'],
    features: [
      'Broad spectrum, preventive and curative dual powerful action',
      'Multiple modes of action: Systemic, Contact, and Fumigation action',
      'Recommended by NRCG with low MRL (3 mg/kg) and short PHI of 7 days',
      'Superior resistance management with multisite sulphur action'
    ],
    nepaliFeatures: [
      'दोहोरो शक्ति: रोग लाग्नु अघि र पछि दुवै अवस्थामा प्रभावकारी',
      'प्रणालीगत, सम्पर्क र ग्यासयुक्त त्रिपक्षीय ढुसी नियन्त्रण',
      'छोटो पर्खने अवधि (PHI केवल ७ दिन) र पर्यावरणमैत्री',
      'पाउडर मिल्ड्यू र फल कुहिने रोगको स्थायी समाधान'
    ],
    preHarvestInterval: '7 Days',
    safetyInstructions: 'Shake well before mixing. Use standard protective equipment while spraying.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22511?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-cosavet-df',
    name: 'SML COSAVET-DF (Sulphur 80% WDG)',
    nepaliName: 'एस.एम.एल. कोसाभेट-डिएफ (सल्फर ८०% WDG)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Micronised Sulphur 80% WDG',
    formulation: 'Water Dispersible Granules (WDG)',
    toxicityClass: 'green',
    targetCrops: ['Grapes', 'Apple', 'Cowpea', 'Guava', 'Mango', 'Mustard', 'Paddy', 'Cumin'],
    nepaliTargetCrops: ['अङ्गुर', 'स्याउ', 'बोडी', 'अम्बा', 'आँप', 'तोरी', 'धान', 'जिरा'],
    targetPests: ['Powdery Mildew', 'Mites (Red Spider Mite, Yellow Mite)', 'Sulphur Deficiency'],
    dosage: {
      perTank16L: '30 - 40 grams',
      perKattha: '100 - 150 grams',
      perAcre: '1.5 - 2.0 kg'
    },
    packagingSizes: ['250 gm', '500 gm', '1 kg', '3 kg', '5 kg', '10 kg', '25 kg', '30 kg'],
    features: [
      "India's first WDG formulation product with 2-4 Micron particle size",
      'Global presence: Trusted by farmers across 60+ countries worldwide',
      'Certified for Organic Farming (OMRI, ECUCERT, ACO Certification)',
      '30+ years proven brand legacy with excellent crop safety'
    ],
    nepaliFeatures: [
      'विश्वभर ६०+ देशका किसानहरूले ३० वर्षदेखि विश्वास गरेको नम्बर १ सल्फर',
      'अन्तर्राष्ट्रिय जैविक खेती (Organic) प्रमाणित',
      'ढुसी र सुलसुले (Mites) दुवैलाई एकैसाथ नियन्त्रण गर्ने',
      '२-४ माइक्रोन अति मसिनो दाना, पानीमा तुरुन्तै घुल्ने'
    ],
    preHarvestInterval: 'Safe / Low PHI',
    safetyInstructions: 'Avoid spraying during extreme midday heat above 35°C.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-bulton',
    name: 'SML BULTON 70% WG',
    nepaliName: 'एस.एम.एल. बुल्टोन (थायोफिनेट मिथाइल ७०% WG)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Thiophanate Methyl 70% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'blue',
    targetCrops: ['Papaya', 'Apple', 'Tomato', 'Bottle Gourd', 'Paddy', 'Soybean'],
    nepaliTargetCrops: ['मेवा', 'स्याउ', 'गोलभेँडा', 'लौका', 'धान', 'भटमास'],
    targetPests: ['Powdery Mildew', 'Anthracnose', 'Scab', 'Brown Rot', 'Blast'],
    dosage: {
      perTank16L: '15 - 20 grams',
      perKattha: '10 grams',
      perAcre: '200 - 250 grams'
    },
    packagingSizes: ['100 gm', '250 gm', '500 gm', '1 kg'],
    features: [
      'Protective, curative, and eradicative action offering broad-spectrum control',
      'Finer particles (2-4 microns) ensure better dispersion, coverage, and performance',
      'MBC fungicide (Group 1) ideal for tank-mix or rotation for resistance management',
      'Better rain-fastness and excellent tank-mix compatibility'
    ],
    nepaliFeatures: [
      'रोग लाग्नु अगाडि र लागिसकेपछि दुवै अवस्थामा काम गर्ने विशेष WG प्रविधि',
      '२-४ माइक्रोनको मसिनो दाना वर्षा प्रतिरोधी क्षमता सहित',
      'पातको दाग, मरुवा र फल कुहिने समस्या तत्काल रोक्ने'
    ],
    preHarvestInterval: '7 - 14 Days',
    safetyInstructions: 'Wear gloves and mask during spray preparation.',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-hybritz',
    name: 'SML HYBRITZ Fungicide',
    nepaliName: 'एस.एम.एल. हाइब्रिट्ज (ढुसीनाशक)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Azoxystrobin 18.2% + Difenoconazole 11.4% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'blue',
    targetCrops: ['Paddy', 'Tomato', 'Chilli', 'Maize', 'Wheat', 'Vegetables'],
    nepaliTargetCrops: ['धान', 'गोलभेँडा', 'खुर्सानी', 'मकै', 'गहुँ', 'तरकारी'],
    targetPests: ['Sheath Blight', 'Blast', 'Early & Late Blight', 'Yellow Rust', 'Powdery Mildew'],
    dosage: {
      perTank16L: '20 - 25 ml',
      perKattha: '10 - 12 ml',
      perAcre: '200 ml'
    },
    packagingSizes: ['100 ml', '200 ml', '500 ml', '1 Ltr'],
    features: [
      'Two well-proven active ingredients: Strobilurin protectant + Difenoconazole curative',
      'Yield and Quality booster: Excellent marketable yields and enhanced produce shelf life',
      'Higher grain test weight and greener leaves',
      'Excellent value for money and proven crop safety'
    ],
    nepaliFeatures: [
      'विश्व प्रसिद्ध दुई ढुसीनाशकको शक्तिशाली संयोजन',
      'धानको सिथ ब्लाइट र पातको डढुवा पूर्ण रूपमा रोक्ने',
      'बाली हरियो राख्ने, दाना भरिलो बनाउने र उत्पादन बढाउने'
    ],
    preHarvestInterval: '10 - 14 Days',
    safetyInstructions: 'Apply preventively or at first sign of disease symptoms.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-topgun-df',
    name: 'SML TOPGUN-DF (Copper Oxychloride 50% WG)',
    nepaliName: 'एस.एम.एल. टपगन-डिएफ (कपर अक्सिक्लोराइड ५०% WG)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Copper Oxychloride 50% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'blue',
    targetCrops: ['Potato', 'Tomato', 'Citrus', 'Banana', 'Paddy', 'Grapes', 'Cardamom'],
    nepaliTargetCrops: ['आलु', 'गोलभेँडा', 'सुन्तला जात', 'केरा', 'धान', 'अङ्गुर', 'अलैँची'],
    targetPests: ['Early & Late Blight', 'Bacterial Canker', 'Leaf Spot', 'Downy Mildew', 'Foot Rot'],
    dosage: {
      perTank16L: '35 - 40 grams',
      perKattha: '25 grams',
      perAcre: '500 grams'
    },
    packagingSizes: ['100 gm', '250 gm', '400 gm', '1 kg'],
    features: [
      'Unique WDG formulation gives uniform coverage without nozzle clogging',
      'Low-dose, significantly more effective than traditional WP powders',
      'Multicrop utility with broad-spectrum fungal and bacterial suppression',
      'Enhances plant health and stimulates chlorophyll photosynthesis'
    ],
    nepaliFeatures: [
      'आधुनिक WDG दानादार प्रविधि: नोजल जाम नहुने र समान रूपले फैलिने',
      'ढुसी तथा ब्याक्टेरिया दुवैको संक्रमणबाट बाली जोगाउने',
      'आलु तथा गोलभेँडाको डढुवा (Blight) विरुद्ध अचुक कवच'
    ],
    preHarvestInterval: '7 Days',
    safetyInstructions: 'Do not mix with acidic chemicals or copper incompatible products.',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-stealth',
    name: 'SML STEALTH Fungicide',
    nepaliName: 'एस.एम.एल. स्टेल्थ (ढुसीनाशक)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Azoxystrobin 11% + Tebuconazole 18.3% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'blue',
    targetCrops: ['Paddy', 'Chilli', 'Onion', 'Wheat', 'Soybean', 'Tomato'],
    nepaliTargetCrops: ['धान', 'खुर्सानी', 'प्याज', 'गहुँ', 'भटमास', 'गोलभेँडा'],
    targetPests: ['Sheath Blight', 'Purple Blotch', 'Yellow Rust', 'Fruit Rot', 'Die Back'],
    dosage: {
      perTank16L: '25 - 30 ml',
      perKattha: '15 ml',
      perAcre: '250 - 300 ml'
    },
    packagingSizes: ['100 ml', '250 ml', '500 ml', '1 Ltr'],
    features: [
      'Broad spectrum fungicide with prolonged disease control',
      'Multicide action with superior resistance management',
      'Dual systemic protection moving upwards and across leaf tissues',
      'Delivers cleaner grain appearance and higher market price'
    ],
    nepaliFeatures: [
      'प्याजको बैजनी दाग र धानको सिथ ब्लाइटमा अचुक प्रभाव',
      'लामो समयसम्म ढुसीको संक्रमण फैलिन नदिने सुरक्षा',
      'दाना चम्किलो र वजनदार बनाउने'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Maintain uniform foliar coverage during cool morning hours.',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-liquiflo',
    name: 'SML LIQUIFLO (Liquid Sulphur 55.16% SC)',
    nepaliName: 'एस.एम.एल. लिक्विफ्लो (तरल सल्फर ५५.१६% SC)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Sulphur 55.16% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'green',
    targetCrops: ['Mustard', 'Grapes', 'Mango', 'Vegetables', 'Apple', 'Tea', 'Pulses'],
    nepaliTargetCrops: ['तोरी', 'अङ्गुर', 'आँप', 'तरकारी बाली', 'स्याउ', 'चिया', 'दाल'],
    targetPests: ['Powdery Mildew', 'Mites (Red Spider, Yellow Mites)', 'Sulphur Nutrition'],
    dosage: {
      perTank16L: '35 - 40 ml',
      perKattha: '25 ml',
      perAcre: '500 - 750 ml'
    },
    packagingSizes: ['500 ml', '1 Ltr', '5 Ltr'],
    features: [
      'High-loaded Sulphur SC formulation with ultrafine uniform particle size',
      'Longer adhesion of sulphur on the leaf surface without wash-off',
      'Multiple action: Protective, Fumigation, and Surface protectant activity',
      'Enhances plant vigour and supplies vital secondary nutrient sulphur'
    ],
    nepaliFeatures: [
      'तरल सल्फरको आधुनिक रूप: पातमा टाँसिएर रहने र नधुइने',
      'पाउडर मिल्ड्यू र सुलसुले दुवैलाई प्रभावकारी नियन्त्रण',
      'तोरी र तेलहन बालीमा तेल बढाउन उत्तम'
    ],
    preHarvestInterval: 'Safe / Low',
    safetyInstructions: 'Avoid tank-mix with mineral oil or within 14 days of oil sprays.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-pearl',
    name: 'SML PEARL (Carbendazim 46.27% SC)',
    nepaliName: 'एस.एम.एल. पर्ल (कार्बेन्डाजिम ४६.२७% SC)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Carbendazim 46.27% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'green',
    targetCrops: ['Apple', 'Paddy', 'Wheat', 'Vegetables', 'Cotton', 'Sugarcane'],
    nepaliTargetCrops: ['स्याउ', 'धान', 'गहुँ', 'तरकारी बाली', 'कपास', 'उखु'],
    targetPests: ['Blast', 'Sheath Blight', 'Anthracnose', 'Loose Smut', 'Damping Off'],
    dosage: {
      perTank16L: '15 - 20 ml',
      perKattha: '10 ml',
      perAcre: '200 ml'
    },
    packagingSizes: ['50 ml', '100 ml', '250 ml', '500 ml', '1 Ltr', '5 Ltr'],
    features: [
      'Broad-spectrum systemic fungicide with micronized particles for uniform coverage',
      'Leaves zero stains on fruits and leaves after foliar spray',
      'Versatile: Best in sprays as well as seed treatment and soil drenching',
      'Quick acropetal absorption through roots and leaves'
    ],
    nepaliFeatures: [
      'पात र फलफूलमा कुनै दाग नबस्ने आधुनिक तरल फर्मुलेसन',
      'बीउ उपचार, जरा भिजाउने र पातमा छर्ने सबैमा उपयोगी',
      'धानको मरुवा र गहुँको कालोपोके रोग नियन्त्रण'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Store in tightly closed original containers in cool dry conditions.',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-metaboot',
    name: 'SML METABOOT Fungicide',
    nepaliName: 'एस.एम.एल. मेटाबुट (ढुसीनाशक)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Metiram 44% + Dimethomorph 9% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'blue',
    targetCrops: ['Grapes', 'Potato', 'Tomato', 'Cucumber', 'Vegetables'],
    nepaliTargetCrops: ['अङ्गुर', 'आलु', 'गोलभेँडा', 'काँक्रा', 'तरकारी'],
    targetPests: ['Downy Mildew', 'Late Blight (डढुवा)'],
    dosage: {
      perTank16L: '30 - 35 grams',
      perKattha: '20 grams',
      perAcre: '400 - 500 grams'
    },
    packagingSizes: ['500 gm', '1 kg'],
    features: [
      'Reliable solution for Downy Mildew and Late Blight control',
      'Balanced combination of two trusted active ingredients with translaminar action',
      'Easy dispersion: No need of mixing multiple individual molecules',
      'Highly effective in anti-resistance management'
    ],
    nepaliFeatures: [
      'काँक्रा, अङ्गुरको डाउनी मिल्ड्यू र आलुको डढुवा रोगको विशेषज्ञ',
      'पातको वारपार फैलिएर भित्र लुकेको ढुसी मार्ने गुण'
    ],
    preHarvestInterval: '7 Days',
    safetyInstructions: 'Ensure spray reaches lower surfaces of leaves.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-nuprid',
    name: 'SML NUPRID (Difenoconazole 25% EC)',
    nepaliName: 'एस.एम.एल. नुप्रीड (डिफेनोकोनाजोल २५% EC)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Difenoconazole 25% EC',
    formulation: 'Emulsifiable Concentrate (EC)',
    toxicityClass: 'blue',
    targetCrops: ['Apple', 'Paddy', 'Chilli', 'Groundnut', 'Onion', 'Tomato'],
    nepaliTargetCrops: ['स्याउ', 'धान', 'खुर्सानी', 'बदाम', 'प्याज', 'गोलभेँडा'],
    targetPests: ['Powdery Mildew', 'Anthracnose', 'Scab', 'Leaf Spots', 'Sheath Blight'],
    dosage: {
      perTank16L: '10 - 12 ml',
      perKattha: '5 - 8 ml',
      perAcre: '100 - 125 ml'
    },
    packagingSizes: ['100 ml', '250 ml', '500 ml', '1 Lt'],
    features: [
      'Systemic fungicide with strong translaminar and acropetal movement',
      'Excellent rainfastness: Enters plant tissue within 2-3 hours preventing wash-off',
      'Protects emerging new leaves from subsequent fungal infections'
    ],
    nepaliFeatures: [
      'छरेको २-३ घण्टामै बिरुवाले सोस्ने हुँदा पानी परे पनि नधुइने',
      'नयाँ पलाउने मुन्टा र पातलाई समेत रोगबाट सुरक्षित राख्ने'
    ],
    preHarvestInterval: '7 - 14 Days',
    safetyInstructions: 'Store in cool dry conditions away from food grains.',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-tussle',
    name: 'SML TUSSLE Fungicide',
    nepaliName: 'एस.एम.एल. टसल (टेबुकोनाजोल १०% + सल्फर ६५% WG)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Tebuconazole 10% + Sulphur 65% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'blue',
    targetCrops: ['Chilli', 'Soybean', 'Groundnut', 'Paddy', 'Wheat'],
    nepaliTargetCrops: ['खुर्सानी', 'भटमास', 'बदाम', 'धान', 'गहुँ'],
    targetPests: ['Powdery Mildew', 'Fruit Rot', 'Leaf Spot', 'Tikka Disease', 'Rust'],
    dosage: {
      perTank16L: '30 - 35 grams',
      perKattha: '20 grams',
      perAcre: '500 grams'
    },
    packagingSizes: ['100 ml', '200 ml', '500 ml', '1 Ltr'],
    features: [
      'Two-way mode of action: Systemic triazole + Multisite contact sulphur',
      'Prophylactic and curative with prolonged residual disease control',
      'Cost-effective solution delivering higher ROI to growers'
    ],
    nepaliFeatures: [
      'खुर्सानीको फल कुहिने र पातको थोप्ले रोगमा अति प्रभावकारी',
      'सल्फरको पोषण सहित ढुसी नियन्त्रण'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Spray during morning or evening when air is calm.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22511?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-hydroman',
    name: 'SML HYDROMAN (Mancozeb 35% SC)',
    nepaliName: 'एस.एम.एल. हाइड्रोम्यान (म्यान्कोजेब ३५% SC)',
    brand: 'SML Limited',
    category: 'fungicides',
    activeIngredient: 'Mancozeb 35% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'green',
    targetCrops: ['Potato', 'Tomato', 'Grapes', 'Paddy', 'Apple', 'Vegetables'],
    nepaliTargetCrops: ['आलु', 'गोलभेँडा', 'अङ्गुर', 'धान', 'स्याउ', 'तरकारी'],
    targetPests: ['Early Blight', 'Late Blight', 'Leaf Spots', 'Downy Mildew'],
    dosage: {
      perTank16L: '40 - 50 ml',
      perKattha: '25 ml',
      perAcre: '600 - 800 ml'
    },
    packagingSizes: ['100 gm', '250 gm', '500 gm', '1 kg', '5 kg'],
    features: [
      'Advanced liquid SC formulation of classic Mancozeb fungicide',
      'Easy application with enhanced results compared to WP powders',
      'Micronized particles create a continuous protective barrier on leaves',
      'Best rain-fastness in the dithiocarbamate category'
    ],
    nepaliFeatures: [
      'म्यान्कोजेबको अत्याधुनिक तरल फर्मुलेसन: सजिलै मिसिने र पानीले नपखाल्ने',
      'आलु र गोलभेँडाको पात डढुवाबाट जोगाउने भरपर्दो औषधि'
    ],
    preHarvestInterval: '7 Days',
    safetyInstructions: 'Shake bottle thoroughly before measuring.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // SML INSECTICIDES (FROM SML CATALOG)
  // ==========================================
  {
    id: 'sml-vamos-s',
    name: 'SML VAMOS-S (Chlorantraniliprole 0.53% GR)',
    nepaliName: 'एस.एम.एल. भामोस-एस (दानादार कीटनाशक)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Chlorantraniliprole 0.53% GR (Powered by SRT Technology)',
    formulation: 'Patented DG Granules',
    toxicityClass: 'green',
    targetCrops: ['Paddy / Rice', 'Sugarcane'],
    nepaliTargetCrops: ['धान बाली', 'उखु बाली'],
    targetPests: ['Stem Borer in Paddy', 'Early Shoot Borer in Sugarcane', 'Top Borer'],
    dosage: {
      perTank16L: 'Soil broadcast: 4 kg per Acre (200 gm per Kattha)',
      perKattha: '200 grams',
      perAcre: '4 kg'
    },
    packagingSizes: ['2 kg', '4 kg'],
    features: [
      'Patented DG formulation powered by SRT (Slow Release Technology)',
      '25% higher CTPR active ingredient compared to conventional brands',
      'Major nutrient base with zero inert filler waste',
      'Prolonged systemic absorption: Gives greener foliage, better tillers, and balanced pH'
    ],
    nepaliFeatures: [
      'एसआरटी (SRT) प्रविधिबाट निर्मित: धानको गवारो र उखुको डाँठ छेडेर खाने कीराको पूर्ण नियन्त्रण',
      'अन्य उत्पादनभन्दा २५% बढी सक्रिय तत्व',
      'मलखादसँग मिसाएर सजिलै छर्न सकिने, बाली हरियो बनाउने र धेरै गाँज हाल्ने'
    ],
    preHarvestInterval: '21 Days',
    safetyInstructions: 'Broadcast uniformly when standing water is 2-3 inches in paddy.',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-imara',
    name: 'SML IMARA (Insecticide + Nutrition WDG)',
    nepaliName: 'एस.एम.एल. इमारा (कीटनाशक + पोषण WDG)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Fipronil 0.6% + Sulphur 70% + Zinc 13% WG',
    formulation: 'Patented Multi-Action WDG',
    toxicityClass: 'yellow',
    targetCrops: ['Sugarcane', 'Paddy', 'Wheat', 'Maize', 'Vegetables'],
    nepaliTargetCrops: ['उखु', 'धान', 'गहुँ', 'मकै', 'तरकारी बाली'],
    targetPests: ['Early Shoot Borer', 'Root Borer', 'Termites (धमिरा)', 'Stem Borer', 'Soil Pests'],
    dosage: {
      perTank16L: 'Soil application: 4 kg per Acre / 200 gm per Kattha at sowing',
      perKattha: '200 grams',
      perAcre: '4 kg'
    },
    packagingSizes: ['2 kg', '4 kg'],
    features: [
      "World's first patented Insecticide + Nutrition WDG formulation",
      'Touch New Heights: Initial crop establishment with maximum tillering and root development',
      'Triple protection: Systemic, contact, and ingestion-based pest kill',
      'Sulphur 70% + Zinc 13% provides immunity and lush plant growth'
    ],
    nepaliFeatures: [
      'विश्वमै पहिलो पेटेन्टेड कीटनाशक + जिंक + सल्फर पोषण प्रविधि',
      'धमिरा, जरा खाने कीरा र गवारोबाट १००% सुरक्षा',
      'बलियो जरा, धेरै गाँज र द्रुत वृद्धि गराउने'
    ],
    preHarvestInterval: 'Apply at sowing/transplanting',
    safetyInstructions: 'Handle with gloves. Apply at root zone during sowing or first irrigation.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-vamos-liquid',
    name: 'SML VAMOS 18.5% SC',
    nepaliName: 'एस.एम.एल. भामोस (Chlorantraniliprole १८.५% SC)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Chlorantraniliprole 18.5% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'green',
    targetCrops: ['Paddy', 'Sugarcane', 'Cotton', 'Cabbage', 'Tomato', 'Chilli', 'Soybean', 'Pulses'],
    nepaliTargetCrops: ['धान', 'उखु', 'कपास', 'बन्दा', 'गोलभेँडा', 'खुर्सानी', 'भटमास', 'दाल'],
    targetPests: ['Stem Borer', 'Leaf Folder', 'Diamondback Moth (DBM)', 'Fruit Borer', 'Pod Borer'],
    dosage: {
      perTank16L: '6 - 8 ml',
      perKattha: '4 ml',
      perAcre: '60 ml'
    },
    packagingSizes: ['30 ml', '60 ml', '150 ml', '300 ml'],
    features: [
      'Anthranilic diamide broad spectrum insecticide in suspension concentrate',
      'Unique mode of action controlling pests resistant to traditional chemistries',
      'Very low dosage with long duration of insect control',
      'Safe for non-target arthropods, conserving natural predators, parasitoids and honeybees'
    ],
    nepaliFeatures: [
      'धानको गवारो, पात बेर्ने कीरा र गोलभेँडाको फल प्वाल पार्ने कीरामा अति उत्तम',
      'थोरै मात्रा (१ ट्याङ्कीमा ६-८ मिलि) ले लामो समयसम्म सुरक्षा दिने',
      'मित्रजीव र माहुरीका लागि सुरक्षित'
    ],
    preHarvestInterval: '3 - 7 Days',
    safetyInstructions: 'Do not overdose. Spray when target pest reaches economic threshold level.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22511?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-pronto',
    name: 'SML PRONTO 70% WG',
    nepaliName: 'एस.एम.एल. प्रोन्टो (इमिडाक्लोप्रिड ७०% WG)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Imidacloprid 70% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'yellow',
    targetCrops: ['Cotton', 'Paddy', 'Chilli', 'Sugarcane', 'Mango', 'Vegetables'],
    nepaliTargetCrops: ['कपास', 'धान', 'खुर्सानी', 'उखु', 'आँप', 'तरकारी बाली'],
    targetPests: ['Brown Plant Hopper (BPH)', 'Aphids (लाही)', 'Jassids', 'Whitefly', 'Thrips (थ्रिप्स)'],
    dosage: {
      perTank16L: '2 - 3 grams',
      perKattha: '1.5 grams',
      perAcre: '15 - 20 grams'
    },
    packagingSizes: ['16 gm', '30 gm', '75 gm', '150 gm', '250 gm', '500 gm'],
    features: [
      'High loading 70% WG formulation with immediate water dispersion',
      'Longer duration of control against tough sap-sucking insect complexes',
      'Low application dose reduces chemical load on crops and lowers cost per day',
      'Systemic action protects newly formed foliage'
    ],
    nepaliFeatures: [
      'चुसाहा कीराहरू: लाही, थ्रिप्स, सेतो झिँगा र धानको फड्के (BPH) को तत्काल अन्त्य',
      '७०% उच्च सक्रिय तत्व भएको WDG दाना, पानीमा तुरुन्तै घुल्ने',
      'प्रति ट्याङ्की केवल २-३ ग्राम मात्र प्रयोग गर्दा पुग्ने'
    ],
    preHarvestInterval: '21 Days in Paddy',
    safetyInstructions: 'Highly toxic to bees. Avoid spraying during crop full bloom.',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-judwaa-g',
    name: 'SML JUDWAA G (Dry Cap Technology WDG)',
    nepaliName: 'एस.एम.एल. जुडवा-जी (ड्राई क्याप WDG)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Chlorpyrifos 50% + Cypermethrin 5% WDG',
    formulation: 'Patented DRY Cap Technology WDG',
    toxicityClass: 'yellow',
    targetCrops: ['Paddy', 'Cotton', 'Vegetables', 'Maize', 'Sugarcane'],
    nepaliTargetCrops: ['धान', 'कपास', 'तरकारी', 'मकै', 'उखु'],
    targetPests: ['Stem Borer', 'Leaf Folder', 'Bollworm', 'Cutworm', 'Spodoptera'],
    dosage: {
      perTank16L: '20 - 25 grams',
      perKattha: '12 - 15 grams',
      perAcre: '250 - 300 grams'
    },
    packagingSizes: ['100 gm', '250 gm', '500 gm', '1 kg'],
    features: [
      'Patented DRY Cap Technology: Micro-encapsulated controlled release granules',
      'No foul chemical smell — a revolutionary breakthrough for applicator comfort',
      'Complete a.i. utilization: Zero losses during application neither bounce off leaf',
      'Quick knockdown combined with longer residual control'
    ],
    nepaliFeatures: [
      'ड्राई क्याप (DRY Cap) विश्व पेटेन्ट प्रविधि: विषादीको गन्ध नआउने विशेष दानादार',
      'पातमा टाँसिएर रहने र लामो समयसम्म कीरा मार्ने क्षमता',
      'काट्ने र पात बेर्ने दुवै कीरामा तत्काल प्रभावकारी'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Handle with gloves. Dissolves cleanly in water without dust.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-mazda',
    name: 'SML MAZDA (SPB Technology for BPH)',
    nepaliName: 'एस.एम.एल. माज्दा (धानको फड्के र मरुवा नाशक)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Pymetrozine 30% + Dinotefuran 10% + Pyraclostrobin 20% WG',
    formulation: 'Unique SPB Technology WG',
    toxicityClass: 'blue',
    targetCrops: ['Paddy / Rice'],
    nepaliTargetCrops: ['धान बाली'],
    targetPests: ['Brown Plant Hopper (BPH)', 'White Backed Plant Hopper (WBPH)', 'Neck & Leaf Blast'],
    dosage: {
      perTank16L: '20 - 25 grams',
      perKattha: '12 grams',
      perAcre: '250 grams'
    },
    packagingSizes: ['100 gm', '200 gm', '500 gm', '1 kg'],
    features: [
      'Dual-Action Protection: Combines insecticidal and fungicidal properties in one product',
      'Provides complete control of Brown Plant Hopper and White Backed Plant Hopper in Paddy',
      'Concurrently controls Blast disease in paddy crop',
      'Promotes vigorous green growth and higher yields'
    ],
    nepaliFeatures: [
      'धानको फड्के (BPH/मधुवा) र मरुवा रोग (ब्लास्ट) दुवै एकै पटक नियन्त्रण गर्ने अद्भुत प्रविधि',
      'कीरालाई तुरुन्त खान र अन्डा पार्न रोक्ने',
      'धानको बोट जोगाएर उत्पादन वृद्धि गराउने'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Direct spray at the base of paddy hills where hoppers congregate.',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-scorpio',
    name: 'SML SCORPIO (ZC Formulation)',
    nepaliName: 'एस.एम.एल. स्कोर्पियो (ZC फर्मुलेसन)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Thiamethoxam 12.6% + Lambda-cyhalothrin 9.5% ZC',
    formulation: 'Advanced ZC (CS + SC Mixture)',
    toxicityClass: 'yellow',
    targetCrops: ['Cotton', 'Groundnut', 'Soybean', 'Chilli', 'Vegetables', 'Paddy'],
    nepaliTargetCrops: ['कपास', 'बदाम', 'भटमास', 'खुर्सानी', 'तरकारी', 'धान'],
    targetPests: ['Aphids', 'Thrips', 'Bollworms', 'Leaf Eating Caterpillars', 'Shoot Borer'],
    dosage: {
      perTank16L: '15 - 20 ml',
      perKattha: '10 ml',
      perAcre: '150 - 200 ml'
    },
    packagingSizes: ['100 ml', '200 ml', '500 ml', '1 Ltr'],
    features: [
      'Triple action: Contact, Systemic & Vapour action',
      'Cutting-edge ZC formulation for prolonged residual control against broad-spectrum pests',
      'Controls both sucking pests and chewing caterpillars simultaneously',
      'Quick knockdown effect with rapid crop relief'
    ],
    nepaliFeatures: [
      'ZC फर्मुलेसन: चुस्ने कीरा (लाही, थ्रिप्स) र पात खाने लार्भा दुवैलाई एकै पटक नष्ट गर्ने',
      'सम्पर्क, प्रणालीगत र वाष्पयुक्त त्रिपक्षीय असर'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Wear face protection and spray early morning.',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-emzet',
    name: 'SML EMZET (Emamectin Benzoate 5% SG)',
    nepaliName: 'एस.एम.एल. एमजेट (इमामेक्टिन बेन्जोएट ५% SG)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Emamectin Benzoate 5% SG',
    formulation: 'Soluble Granule (SG)',
    toxicityClass: 'yellow',
    targetCrops: ['Cabbage', 'Cauliflower', 'Tomato', 'Okra', 'Cotton', 'Chilli'],
    nepaliTargetCrops: ['बन्दा', 'काउली', 'गोलभेँडा', 'भिण्डी', 'कपास', 'खुर्सानी'],
    targetPests: ['Diamondback Moth (DBM)', 'Fruit & Shoot Borer', 'Thrips', 'Spodoptera'],
    dosage: {
      perTank16L: '8 - 10 grams',
      perKattha: '4 - 5 grams',
      perAcre: '80 - 100 grams'
    },
    packagingSizes: ['10 gm', '50 gm', '100 gm', '250 gm', '500 gm', '1 kg'],
    features: [
      'Translaminar action kills hidden caterpillars on the lower surface of leaves',
      'Ovicidal action causes caterpillars to stop feeding within 2 hours of application',
      'Safe for environment and beneficial insects, ideal for IPM programs',
      'Quick water dispersion without sedimentation'
    ],
    nepaliFeatures: [
      'पातको पछाडि लुकेर बस्ने सुँडसुँडे र लार्भालाई छेड्ने क्षमता',
      'छरेको २ घण्टाभित्रै कीराले बाली खान बन्द गर्ने',
      'काउली र गोलभेँडाको फल कुहाउने कीरामा अचुक'
    ],
    preHarvestInterval: '3 - 5 Days',
    safetyInstructions: 'Avoid spraying when flowering crops are visited by honeybees.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22511?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-java-super',
    name: 'SML JAVA SUPER (Pymetrozine 50% WG)',
    nepaliName: 'एस.एम.एल. जाभा सुपर (पाइमेट्रोजिन ५०% WG)',
    brand: 'SML Limited',
    category: 'insecticides',
    activeIngredient: 'Pymetrozine 50% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'blue',
    targetCrops: ['Paddy / Rice'],
    nepaliTargetCrops: ['धान बाली'],
    targetPests: ['Brown Plant Hopper (BPH - धानको फड्के/मधुवा)', 'Green Leaf Hopper'],
    dosage: {
      perTank16L: '25 - 30 grams',
      perKattha: '15 grams',
      perAcre: '300 grams'
    },
    packagingSizes: ['120 gm', '250 gm', '500 gm', '1 kg'],
    features: [
      'Provides excellent control of resistant plant hoppers when used at panicle initiation stage (55-60 DAT)',
      'Translaminar & systemic insecticide with unique mode of action stopping feeding, movement and egg laying',
      'Dust-free WG formulation allows ease of use during measuring and mixing',
      'Kills all stages of BPH from Nymph to Adult'
    ],
    nepaliFeatures: [
      'धानको मधुवा/फड्के (BPH) को चिल र बच्चा दुवैलाई निर्मूल पार्ने',
      'कीराको सुँड जाम गरिदिने जसले गर्दा बोटको रस चुस्न नसकी कीरा मर्छ',
      'धुलो नउड्ने आधुनिक WG दानादार'
    ],
    preHarvestInterval: '14 Days',
    safetyInstructions: 'Direct spray strictly onto the lower base of paddy stems.',
    image: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // SML HERBICIDES (FROM SML CATALOG)
  // ==========================================
  {
    id: 'sml-metrite',
    name: 'SML METRITE++ (Metribuzin 70% WG)',
    nepaliName: 'एस.एम.एल. मेट्राइट++ (मेट्रिब्युजिन ७०% WG)',
    brand: 'SML Limited',
    category: 'herbicides',
    activeIngredient: 'Metribuzin 70% WG',
    formulation: 'Water Dispersible Granules (WG)',
    toxicityClass: 'blue',
    targetCrops: ['Sugarcane', 'Potato', 'Tomato', 'Wheat', 'Soybean'],
    nepaliTargetCrops: ['उखु', 'आलु', 'गोलभेँडा', 'गहुँ', 'भटमास'],
    targetPests: ['Annual Grasses', 'Broad-leaved Weeds', 'Trianthema', 'Chenopodium'],
    dosage: {
      perTank16L: '20 - 25 grams',
      perKattha: '15 grams',
      perAcre: '250 - 300 grams'
    },
    packagingSizes: ['100 gm', '250 gm', '500 gm'],
    features: [
      'Effective against a wide range of annual grasses and broad-leaved weeds',
      'Suitable for both pre-emergence and early post-emergence use',
      'Extremely safe and recommended for Sugarcane and Potato fields'
    ],
    nepaliFeatures: [
      'उखु र आलुमा उम्रने सबै प्रकारका झारपात रोक्ने विशेषज्ञ',
      'बीउ छरेपछि वा उम्रेको सुरुवाती अवस्था दुवैमा प्रयोग गर्न मिल्ने'
    ],
    preHarvestInterval: '60 Days',
    safetyInstructions: 'Ensure uniform moisture in the soil before application.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-flecto',
    name: 'SML FLECTO Herbicide',
    nepaliName: 'एस.एम.एल. फ्लेक्टो (झारनाशक)',
    brand: 'SML Limited',
    category: 'herbicides',
    activeIngredient: 'Fomesafen 11.1% + Fluazifop-p-butyl 11.1% SL',
    formulation: 'Soluble Liquid (SL)',
    toxicityClass: 'blue',
    targetCrops: ['Soybean', 'Groundnut / Peanut'],
    nepaliTargetCrops: ['भटमास', 'बदाम'],
    targetPests: ['Broadleaf and Grassy Weeds (Dicanthium, Commelina, Echinochloa)'],
    dosage: {
      perTank16L: '40 ml',
      perKattha: '20 ml',
      perAcre: '400 ml'
    },
    packagingSizes: ['250 ml', '400 ml', '1 L', '2 L'],
    features: [
      'Rapid action: Shows visible wilting results within hours of application',
      'Broad-spectrum control over both tough broadleaf and grassy weeds',
      'Highly selective and completely safe for soybean and groundnut crops',
      'Applied at ground level on young newly emerged weeds'
    ],
    nepaliFeatures: [
      'भटमास र बदामको खेतमा चौडापाते र घाँसे झारलाई केही घण्टामै सुकाउने',
      'बालीलाई सुरक्षित राखी झार मात्र निर्मूल पार्ने'
    ],
    preHarvestInterval: '45 Days',
    safetyInstructions: 'Use flat fan spray nozzle at low pressure.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-tocco',
    name: 'SML TOCCO Herbicide',
    nepaliName: 'एस.एम.एल. टोक्को (मकै र उखुको झारनाशक)',
    brand: 'SML Limited',
    category: 'herbicides',
    activeIngredient: 'Mesotrione 2.27% + Atrazine 22.7% SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'blue',
    targetCrops: ['Maize / Corn', 'Sugarcane'],
    nepaliTargetCrops: ['मकै बाली', 'उखु बाली'],
    targetPests: ['Broadleaf Weeds', 'Annual Grasses', 'Sedges (मोथा)'],
    dosage: {
      perTank16L: '140 ml (in 200 litres water per acre)',
      perKattha: '70 ml',
      perAcre: '1400 ml'
    },
    packagingSizes: ['350 ml', '700 ml', '1.4 Ltr'],
    features: [
      'Dual-action herbicide with Mesotrione and Atrazine for enhanced weed control',
      'Controls grasses, broadleaf weeds, and sedges simultaneously',
      'Long residual activity ensures prolonged weed-free period for rapid crop vegetative growth',
      'Application window: 15-25 days after sowing when weeds are at 2-4 leaf stage'
    ],
    nepaliFeatures: [
      'मकै र उखु रोपेको १५-२५ दिनमा मोथा, घाँसे र चौडापाते झार पूर्ण नष्ट गर्ने',
      'लामो समयसम्म खेतलाई झारमुक्त राख्ने'
    ],
    preHarvestInterval: '60 Days',
    safetyInstructions: 'Apply when weeds are small (2-4 leaves) with good soil moisture.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-pause',
    name: 'SML PAUSE (Bispyribac Sodium 10% W/V SC)',
    nepaliName: 'एस.एम.एल. पज (धानको साँवा झारनाशक)',
    brand: 'SML Limited',
    category: 'herbicides',
    activeIngredient: 'Bispyribac Sodium 10% W/V SC',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'blue',
    targetCrops: ['Paddy / Rice (Nursery, DSR & Transplanted)'],
    nepaliTargetCrops: ['धान (ब्याड, छरुवा तथा रोपुवा दुवै)'],
    targetPests: ['Echinochloa (साँवा झार)', 'Cyperus (मोथा)', 'Ischaemum', 'Broadleaf Weeds'],
    dosage: {
      perTank16L: '10 - 12 ml',
      perKattha: '5 - 6 ml',
      perAcre: '80 - 100 ml'
    },
    packagingSizes: ['100 ml', '200 ml', '500 ml', '1 Ltr'],
    features: [
      'Effective weed control during early stages of crop (15-25 DAT)',
      'Highly selective: Eliminates major weeds of paddy without checking paddy seedling growth',
      'Reduces further spread of seed heads from major weeds',
      'Very safe to mammals and applicators'
    ],
    nepaliFeatures: [
      'धान रोपेको १५-२५ दिनमा साँवा र मोथा झार निर्मूल पार्ने सुरक्षित औषधि',
      'धानको बिरुवालाई कुनै असर नपारी झार मात्र सुकाउने'
    ],
    preHarvestInterval: '45 Days',
    safetyInstructions: 'Drain standing water before spray. Re-flood 48 hours later.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-pendisul-x',
    name: 'SML PENDISUL-X (Pendimethalin 38.7% CS)',
    nepaliName: 'एस.एम.एल. पेन्डिसुल-एक्स (क्याप्सुल प्रविधि ३८.७% CS)',
    brand: 'SML Limited',
    category: 'herbicides',
    activeIngredient: 'Pendimethalin 38.7% CS',
    formulation: 'Capsule Suspension (CS)',
    toxicityClass: 'blue',
    targetCrops: ['Wheat', 'Paddy', 'Mustard', 'Soybean', 'Cotton', 'Garlic', 'Onion'],
    nepaliTargetCrops: ['गहुँ', 'धान', 'तोरी', 'भटमास', 'कपास', 'लसुन', 'प्याज'],
    targetPests: ['Phalaris minor (गहुँको मामा / मन्दुसी)', 'Annual Grasses and Weeds'],
    dosage: {
      perTank16L: '60 - 70 ml',
      perKattha: '35 - 40 ml',
      perAcre: '700 ml'
    },
    packagingSizes: ['350 ml', '700 ml', '3.5 Ltr'],
    features: [
      'Selective pre-emergence herbicide with advanced CS (Capsule Suspension) formulation',
      'Kills weeds before they germinate and cause early crop damage',
      'Lower dosage required compared to traditional 30% EC formulations',
      'Highly cost-effective compared to post-emergence weed control treatments'
    ],
    nepaliFeatures: [
      'क्याप्सुल सस्पेन्सन (CS) प्रविधि: गहुँको मामा (मन्दुसी) र मौसमी झारलाई उम्रनै नदिने',
      'बीउ छरेको २-३ दिनभित्रै चिसो माटोमा छर्नुपर्ने'
    ],
    preHarvestInterval: 'Pre-emergence at sowing',
    safetyInstructions: 'Apply within 48-72 hours of sowing on moist soil.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-vinash-power',
    name: 'SML VINASH POWER (Glyphosate 71% SG)',
    nepaliName: 'एस.एम.एल. विनाश पावर (ग्लाइफोसेट ७१% SG)',
    brand: 'SML Limited',
    category: 'herbicides',
    activeIngredient: 'Glyphosate 71% SG (Ammonium Salt)',
    formulation: 'Soluble Granule (SG)',
    toxicityClass: 'blue',
    targetCrops: ['Non-cropped land', 'Bunds / Aali', 'Tea', 'Orchards'],
    nepaliTargetCrops: ['बाँझो जमिन', 'खेतको आलि/कान्ला', 'चिया बगान', 'बगैँचा'],
    targetPests: ['Perennial Grasses (दुबो, काँस)', 'Broadleaf Weeds', 'Deep-rooted Sedges'],
    dosage: {
      perTank16L: '70 - 80 grams',
      perKattha: '50 grams',
      perAcre: '1 kg'
    },
    packagingSizes: ['100 gm', '1 kg'],
    features: [
      'Systemic, broad-spectrum, non-selective, post-emergent herbicide',
      'Gives complete and speedy control of hard-to-kill perennial and grass weeds',
      'Quicker & higher absorption by weed root systems compared to other formulations',
      'Easy to handle, measure, and mix without dust'
    ],
    nepaliFeatures: [
      'खेतको कान्ला र बाँझो जमिनमा उम्रने दुबो, काँस र कडा झारलाई जरासहित सुकाउने',
      '७१% उच्च सक्रिय तत्व भएको दानादार'
    ],
    preHarvestInterval: 'Non-crop / Pre-ploughing',
    safetyInstructions: 'Non-selective! Do not spray onto green foliage of standing crops.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // SML PLANT GROWTH REGULATORS & SPREADERS (PGR)
  // ==========================================
  {
    id: 'sml-mahawet',
    name: 'SML MAHAWET (Silicone Spreader & Efficacy Enhancer)',
    nepaliName: 'एस.एम.एल. महावेट (सिलिकन स्प्रेडर तथा टाँसिने औषधि)',
    brand: 'SML Limited',
    category: 'pgr',
    activeIngredient: 'Organo-silicone Super Spreader & Penetrant',
    formulation: 'Silicone Liquid Concentrate',
    toxicityClass: 'green',
    targetCrops: ['All Agricultural & Horticultural Crops'],
    nepaliTargetCrops: ['सबै प्रकारका बालीनाली, फलफूल र तरकारी'],
    targetPests: ['Reduces surface tension for 100% spray coverage'],
    dosage: {
      perTank16L: '5 - 7 ml per 16L spray tank',
      perKattha: '3 - 4 ml',
      perAcre: '50 - 75 ml'
    },
    packagingSizes: ['50 ml', '100 ml', '250 ml', '500 ml', '1 Ltr'],
    features: [
      'The Ultimate Efficacy Enhancer: Reduces surface tension of spray droplet up to 70%',
      'Spreads instantaneously over waxy, hairy, and blade-like vertical leaf surfaces',
      'Penetrates dust-covered surfaces of target plants',
      'Rain-fastness within 30 minutes due to rapid stomatal infiltration'
    ],
    nepaliFeatures: [
      'विषादी र मलको प्रभावकारिता दोब्बर बनाउने सिलिकन स्प्रेडर',
      'चिल्लो वा भुवादार पातमा पनि तुरुन्तै फिँजाउने र ३० मिनेटमै वर्षा प्रतिरोधी बनाउने',
      'औषधि भुइँमा खसेर खेर जान नदिने'
    ],
    preHarvestInterval: 'Safe / Natural',
    safetyInstructions: 'Add last into spray tank after mixing pesticide or nutrient.',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-gibbrasul',
    name: 'SML GIBBRASUL (Gibberellic Acid 0.001% SL)',
    nepaliName: 'एस.एम.एल. गिब्रासुल (गिबरेलिक एसिड ०.००१% SL)',
    brand: 'SML Limited',
    category: 'pgr',
    activeIngredient: 'Gibberellic Acid 0.001% SL',
    formulation: 'Soluble Liquid (SL)',
    toxicityClass: 'green',
    targetCrops: ['Paddy', 'Cotton', 'Sugarcane', 'Groundnut', 'Brinjal', 'Okra', 'Grapes'],
    nepaliTargetCrops: ['धान', 'कपास', 'उखु', 'बदाम', 'भण्टा', 'भिण्डी', 'अङ्गुर'],
    targetPests: ['Stunted growth', 'Flower Drop', 'Fruit Drop', 'Dormancy'],
    dosage: {
      perTank16L: '30 - 35 ml',
      perKattha: '20 ml',
      perAcre: '300 ml'
    },
    packagingSizes: ['100 ml', '250 ml', '500 ml', '1 Ltr'],
    features: [
      'Stimulates overall plant growth: Promotes strong stems, vigorous roots, and plant development',
      'Enhances photosynthesis: Improves solar energy conversion efficiency',
      'Reduces flower and fruit drop, ensuring higher yield and uniform quality produce',
      'Frost protection and drought stress mitigation'
    ],
    nepaliFeatures: [
      'बोटबिरुवाको द्रुत विकास, डाँठ र जरा बलियो बनाउने हर्मोन',
      'फूल र फल झर्नबाट रोक्ने, फलको आकार र चमक बढाउने',
      'धानको बाला लामो र दाना भरिलो बनाउन उपयोगी'
    ],
    preHarvestInterval: 'Safe / None',
    safetyInstructions: 'Spray during active vegetative or pre-flowering stage.',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // SML CROP NUTRITION & MICRONUTRIENTS (FROM SML CATALOG)
  // ==========================================
  {
    id: 'sml-fertis-wg',
    name: 'SML FERTIS-WG (World-Patented 90% Sulphur WDG)',
    nepaliName: 'एस.एम.एल. फर्टिस-डब्लुजी (पेटेन्टेड सल्फर ९०% WDG)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Elemental Sulphur 90% WDG (Micro-granules)',
    formulation: 'Water Dispersible Granules (WDG)',
    toxicityClass: 'green',
    targetCrops: ['Mustard', 'Paddy', 'Wheat', 'Sugarcane', 'Potato', 'Onion', 'Pulses', 'Oilseeds'],
    nepaliTargetCrops: ['तोरी', 'धान', 'गहुँ', 'उखु', 'आलु', 'प्याज', 'दाल', 'तेलहन बाली'],
    targetPests: ['Sulphur Deficiency', 'Soil Alkalinity', 'Low Oil Content', 'Poor Tillering'],
    dosage: {
      perTank16L: 'Soil broadcast: 3 - 4 kg per Acre / Fertigation drip compatible',
      perKattha: '150 - 200 grams',
      perAcre: '3 kg - 4 kg'
    },
    packagingSizes: ['1 kg', '3 kg', '6 kg', '15 kg', '30 kg'],
    features: [
      'World-patented 90% WDG Sulphur Fertilizer (First low-dosage WDG in the world)',
      'Small particle size (2-4 micron) ensures rapid dispersion and quick 24-hour plant availability',
      'Reduces pH of alkaline Terai soils and stimulates strong root growth',
      'Crucial for oilseed synthesis in mustard and protein nodulation in legumes'
    ],
    nepaliFeatures: [
      'विश्व पेटेन्ट प्राप्त ९०% सल्फर मल (भारत र नेपालको १ नम्बर सल्फर)',
      'तोरीमा तेलको प्रतिशत उल्लेख्य बढाउने र माटोको क्षारीयपन घटाउने',
      '२-४ माइक्रोनको अति मसिनो दाना, ड्रिप सिँचाइ र छरुवा दुवैमा मिल्ने'
    ],
    preHarvestInterval: 'Safe / FCO Approved',
    safetyInstructions: 'Can be mixed with Urea, DAP, or Potash during basal application.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-technoz-ort',
    name: 'SML TECHNO-Z (Zinc 14% + Sulphur 67% with ORT)',
    nepaliName: 'एस.एम.एल. टेक्नो-जेड (जिंक र सल्फर ORT प्रविधि)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Sulphur 67% + Zinc 14% min WDG (ORT Patented Technology)',
    formulation: 'Water Dispersible Micro-granules (WDG)',
    toxicityClass: 'green',
    targetCrops: ['Paddy', 'Wheat', 'Maize', 'Sugarcane', 'Vegetables', 'Mustard'],
    nepaliTargetCrops: ['धान', 'गहुँ', 'मकै', 'उखु', 'तरकारी बाली', 'तोरी'],
    targetPests: ['Khaira Disease in Rice', 'Zinc Deficiency', 'Yellowing of Young Leaves', 'Poor Rooting'],
    dosage: {
      perTank16L: 'Soil broadcast: 4 kg per Acre mixed with basal/top dressing fertilizer',
      perKattha: '200 grams',
      perAcre: '4 kg'
    },
    packagingSizes: ['1 kg', '4 kg', '20 kg'],
    features: [
      "India's first Zinc with ORT (Oxide Reduction Technology) patented technology",
      'Less run-off losses: Season-long sustained availability of Zinc and Sulphur to plant roots',
      'Cures Khaira disease in paddy within 7-8 days of application',
      'Significantly higher root interception and nutrient efficiency compared to traditional zinc sulphate'
    ],
    nepaliFeatures: [
      'ओआरटी (ORT) पेटेन्ट प्रविधि: धानमा लाग्ने खैरा रोगको स्थायी उपचार',
      'माटोबाट बगेर खेर नजाने र पूरै बाली अवधिभर जिंक र सल्फर उपलब्ध गराउने',
      'युरिया वा डीएपीसँग सजिलै मिसाउन सकिने'
    ],
    preHarvestInterval: 'Safe Nutrition',
    safetyInstructions: 'Apply at sowing or transplanting with basal fertilizer.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-sulanex-z',
    name: 'SML SULANEX-Z (Sulphur 70% + Zinc 8% DG)',
    nepaliName: 'एस.एम.एल. सुलानेक्स-जेड (सल्फर ७०% + जिंक ८% DG)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Sulphur 70% + Zinc 8% DG (Powered by SRT Technology)',
    formulation: 'Dispersible Granules (DG)',
    toxicityClass: 'green',
    targetCrops: ['Wheat', 'Paddy', 'Mustard', 'Sugarcane', 'Maize'],
    nepaliTargetCrops: ['गहुँ', 'धान', 'तोरी', 'उखु', 'मकै'],
    targetPests: ['Soil Nutrient Depletion', 'Initial Seedling Weakness', 'Zinc & Sulphur Hunger'],
    dosage: {
      perTank16L: 'Basal Soil Application: 4 to 8 kg per Acre',
      perKattha: '200 - 400 grams',
      perAcre: '4 kg - 8 kg'
    },
    packagingSizes: ['4 kg', '8 kg', '40 kg'],
    features: [
      "World's 1st patented granular fertilizer in DG powered by SRT (Slow Release) Technology",
      'Provides balanced soil nutrition right from seed germination stage',
      'Compatible with mechanical seed drills and other basal fertilizers',
      'Boosts plant immunity from the initial vegetative stage'
    ],
    nepaliFeatures: [
      'उम्रने समयदेखि नै बिरुवालाई सन्तुलित सल्फर र जिंक प्रदान गर्ने',
      'सिड ड्रिल (Seed Drill) मेसिनबाट बीउ सँगै हाल्न मिल्ने दानादार मल'
    ],
    preHarvestInterval: 'Basal / Safe',
    safetyInstructions: 'Store in dry premises away from moisture.',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-zinkox-707',
    name: 'SML ZINK-OX 707 (Liquid Zinc 39.5% SC)',
    nepaliName: 'एस.एम.एल. जिंक-अक्स ७०७ (तरल जिंक ३९.५% SC)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Dense Suspension Concentrate of Liquid Zinc Oxide (39.5% Zn)',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'green',
    targetCrops: ['Paddy', 'Maize', 'Wheat', 'Vegetables', 'Citrus', 'Pulses'],
    nepaliTargetCrops: ['धान', 'मकै', 'गहुँ', 'तरकारी बाली', 'सुन्तला जात', 'दाल'],
    targetPests: ['Zinc Deficiency', 'Stunted Plant Internodes', 'Little Leaf Disease'],
    dosage: {
      perTank16L: '20 - 25 ml',
      perKattha: '10 - 15 ml',
      perAcre: '200 - 250 ml'
    },
    packagingSizes: ['100 ml', '250 ml', '500 ml', '1 Ltr'],
    features: [
      'Dense Suspension Concentrate with 39.5% Zinc content',
      'Ultra-fine particle size for rapid foliar leaf absorption and high metabolic utility',
      'Advanced co-formulants guarantee rain fastness and ease of application',
      'Boosts plant enzyme and hormone synthesis for flowering and grain set'
    ],
    nepaliFeatures: [
      '३९.५% उच्च सांद्रता भएको तरल जिंक, पातबाट तुरुन्तै सोसिने',
      'पात सानो हुने र बोट नबढ्ने समस्यामा तुरुन्त हरियोपन ल्याउने'
    ],
    preHarvestInterval: 'Safe / None',
    safetyInstructions: 'Shake well before use. Compatible with common fungicides.',
    image: 'https://images.unsplash.com/photo-1594488518065-81254394f0e6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-flocal-plus',
    name: 'SML FLO-CAL+ (Fortified Calcium Suspension)',
    nepaliName: 'एस.एम.एल. फ्लो-क्याल+ (तरल क्याल्सियम सस्पेन्सन)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Fortified High Load Calcium Suspension',
    formulation: 'Suspension Concentrate (SC)',
    toxicityClass: 'green',
    targetCrops: ['Tomato', 'Potato', 'Apple', 'Watermelon', 'Chilli', 'Cauliflower'],
    nepaliTargetCrops: ['गोलभेँडा', 'आलु', 'स्याउ', 'खर्बुजा', 'खुर्सानी', 'काउली'],
    targetPests: ['Blossom End Rot in Tomato', 'Fruit Cracking', 'Internal Browning', 'Soft Fruits'],
    dosage: {
      perTank16L: '30 - 40 ml',
      perKattha: '20 ml',
      perAcre: '350 - 400 ml'
    },
    packagingSizes: ['250 ml', '500 ml', '1 Ltr'],
    features: [
      'High-load calcium formulation enabling low application rates compared to traditional products',
      'Substantially improves fruit firmness, shelf life, and transit storage quality',
      'Prevents Blossom End Rot (कालो चाक हुने रोग) in tomatoes and peppers',
      'Stimulates plant defense responses against heat stress and bacterial invasion'
    ],
    nepaliFeatures: [
      'गोलभेँडाको पिँध कालो हुने (Blossom End Rot) र फल फुट्ने समस्या रोक्ने',
      'फलफूल र तरकारीलाई कडा बनाई ढुवानी र भण्डारणमा लामो समय टिकाउने'
    ],
    preHarvestInterval: 'Safe Nutrition',
    safetyInstructions: 'Spray at early fruit set stage and repeat after 15 days.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22511?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sml-probor-20',
    name: 'SML PROBOR (Boron 20% WP)',
    nepaliName: 'एस.एम.एल. प्रोबोर (बोरन २०% WP)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Di-Sodium Octaborate Tetrahydrate (Boron 20% min)',
    formulation: '100% Water Soluble Powder (WP)',
    toxicityClass: 'green',
    targetCrops: ['Mustard', 'Cauliflower', 'Tomato', 'Wheat', 'Apple', 'Vegetables'],
    nepaliTargetCrops: ['तोरी', 'काउली', 'गोलभेँडा', 'गहुँ', 'स्याउ', 'तरकारी'],
    targetPests: ['Hollow Stem in Cauliflower', 'Fruit Cracking', 'Poor Pollination', 'Flower Drop'],
    dosage: {
      perTank16L: '20 - 25 grams',
      perKattha: '10 - 15 grams',
      perAcre: '250 grams'
    },
    packagingSizes: ['100 gm', '250 gm', '500 gm', '1 kg'],
    features: [
      'Rapid dispersion with 100% water solubility and zero residue',
      'Highly compatible with diverse agrochemical spray formulations',
      'Improves flower retention, pollen tube germination, and fruit setting',
      'Minimizes fruit drop and hollow heart, delivering uniform premium produce'
    ],
    nepaliFeatures: [
      'फूल झर्न नदिने, परागसेचन राम्रो गराउने र दाना पोटिलो बनाउने १००% घुलनशील बोरन',
      'काउलीको डाँठ खोक्रो हुने र फल फुट्ने समस्याबाट मुक्ति'
    ],
    preHarvestInterval: 'Safe / None',
    safetyInstructions: 'Do not exceed prescribed dose to prevent vegetative leaf scorch.',
    image: 'https://images.unsplash.com/photo-1594488518065-81254394f0e6?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-emerald-z',
    name: 'SML EMERALD Z (Chelated Zinc Glycine)',
    nepaliName: 'एस.एम.एल. एमराल्ड जेड (चिलेटेड जिंक ग्लाइसिन)',
    brand: 'SML Limited',
    category: 'nutrition',
    activeIngredient: 'Chelated Zinc as Zinc Glycine Liquid',
    formulation: 'Amino-Acid Chelated Liquid',
    toxicityClass: 'green',
    targetCrops: ['Vegetables', 'Paddy', 'Maize', 'Sugarcane', 'Cotton', 'Fruits'],
    nepaliTargetCrops: ['तरकारी बाली', 'धान', 'मकै', 'उखु', 'कपास', 'फलफूल'],
    targetPests: ['Nutrient Lockup', 'Chlorosis', 'Poor Auxin Production'],
    dosage: {
      perTank16L: '25 - 30 ml',
      perKattha: '15 ml',
      perAcre: '250 - 300 ml'
    },
    packagingSizes: ['50 ml', '100 ml', '250 ml', '500 ml'],
    features: [
      'Next-generation plant growth stimulant enriched with amino-chelated Zinc',
      'Supplies balanced nutrition with growth-promoting enzymes and auxins',
      'Enhances photosynthesis for vigorous, deep-green healthy foliage',
      'Aids pollination and ensures optimal fruit formation and high yield'
    ],
    nepaliFeatures: [
      'एमिनो एसिड युक्त चिलेटेड जिंक: बिरुवाले शतप्रतिशत सोस्ने आधुनिक प्रविधि',
      'बोटलाई हरियो, फुर्तिलो र उत्पादनशील बनाउने'
    ],
    preHarvestInterval: 'Safe / None',
    safetyInstructions: 'Foliar spray during active vegetative and early flowering stage.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80'
  },

  // ==========================================
  // SML BIOLOGICALS (FROM SML CATALOG)
  // ==========================================
  {
    id: 'sml-stellar-on',
    name: 'SML STELLAR-ON (Spirulina 10% Liquid Bio-stimulant)',
    nepaliName: 'एस.एम.एल. स्टेलर-अन (स्पाइरुलिना १०% जैविक टनिक)',
    brand: 'SML Limited',
    category: 'biologicals',
    activeIngredient: 'Spirulina 10% (Pure Marine Cyanobacteria Bio-stimulant)',
    formulation: 'Bioactive Liquid',
    toxicityClass: 'bio',
    targetCrops: ['All Field Crops, Vegetables, Orchards & Greenhouse Crops'],
    nepaliTargetCrops: ['सबै बालीनाली, तरकारी, फलफूल र टनेल खेती'],
    targetPests: ['Abiotic Drought Stress', 'Heat Stress', 'Flower & Fruit Drop'],
    dosage: {
      perTank16L: '25 - 30 ml',
      perKattha: '15 - 20 ml',
      perAcre: '250 - 300 ml'
    },
    packagingSizes: ['250 ml', '500 ml', '1 Ltr'],
    features: [
      'Supports root and shoot growth, strengthens plant cell walls and maintains flexibility',
      'Drives energy transfer, photosynthesis, and rapid nutrient movement in plants',
      'Vital for enzyme function: Improves nitrogen use efficiency and fixes atmospheric N into usable forms',
      'Helps withstand abiotic heat/drought stress and enhances resistance against diseases'
    ],
    nepaliFeatures: [
      '१०% स्पाइरुलिना लेउबाट बनेको १००% जैविक प्लान्ट टनिक',
      'खडेरी र अत्यधिक गर्मीमा पनि बिरुवालाई ओइलाउन नदिने',
      'फूल र फल झर्न रोकी उत्पादन र गुणस्तर अत्यधिक बढाउने'
    ],
    preHarvestInterval: '100% Organic / Zero Days',
    safetyInstructions: 'Natural non-toxic biological product. Safe for beneficial insects.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
  {
    id: 'sml-rootiva',
    name: 'SML ROOTIVA (Mycorrhizal Bio-Fertilizer)',
    nepaliName: 'एस.एम.एल. रुटिवा (माइकोराइजा जैविक मल)',
    brand: 'SML Limited',
    category: 'biologicals',
    activeIngredient: 'Mycorrhizal Bio-fertilizer (RhizoMyx Technology)',
    formulation: 'Granular Bio-fertilizer',
    toxicityClass: 'bio',
    targetCrops: ['Paddy', 'Sugarcane', 'Maize', 'Vegetables', 'Wheat', 'Orchards'],
    nepaliTargetCrops: ['धान', 'उखु', 'मकै', 'तरकारी बाली', 'गहुँ', 'फलफूल'],
    targetPests: ['Phosphorus Lockup', 'Root Rot susceptibility', 'Poor Soil Water Retention'],
    dosage: {
      perTank16L: 'Soil application: 4 kg per Acre / 200 gm per Kattha at root zone',
      perKattha: '200 grams',
      perAcre: '4 kg'
    },
    packagingSizes: ['4 kg'],
    features: [
      'Equipped with patented RhizoMyx Technology: Unique blend of Mycorrhizal species',
      'High-quality viable spores with superior infectivity potential',
      'Encourages vigorous root expansion and deep moisture/nutrient absorption',
      'Significantly improves soil organic fertility and long-term water retention capacity'
    ],
    nepaliFeatures: [
      'राइजोमिक्स (RhizoMyx) प्रविधि: जराको सञ्जाल १००-२००% सम्म बढाउने जैविक ढुसी',
      'माटोमा जमेर बसेको फस्फोरस बिरुवालाई उपलब्ध गराउने',
      'माटोको चिस्यान सोस्ने क्षमता बढाउने र खडेरीबाट बाली जोगाउने'
    ],
    preHarvestInterval: '100% Organic / Zero Days',
    safetyInstructions: 'Broadcast at sowing/transplanting. Do not expose bag to direct sunlight.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    popular: true
  },
];
