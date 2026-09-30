export type Language = 'en' | 'ne';

export type ProductCategory = 
  | 'all' 
  | 'seeds' 
  | 'insecticides' 
  | 'fungicides' 
  | 'herbicides' 
  | 'nutrition' 
  | 'biologicals'
  | 'pgr'
  | 'equipment';

export type BrandName = 
  | 'SML Limited'
  | 'ADAMA India' 
  | 'Mankind Agritech' 
  | 'Albaugh / Rotam' 
  | 'ISP Seeds';

export type ToxicityClass = 'green' | 'blue' | 'yellow' | 'bio';

export interface Product {
  id: string;
  name: string;
  nepaliName: string;
  brand: BrandName;
  category: Exclude<ProductCategory, 'all'>;
  activeIngredient: string;
  formulation: string;
  toxicityClass: ToxicityClass;
  targetCrops: string[];
  nepaliTargetCrops: string[];
  targetPests: string[];
  dosage: {
    perTank16L: string;
    perKattha: string;
    perAcre: string;
  };
  packagingSizes: string[];
  features: string[];
  nepaliFeatures: string[];
  preHarvestInterval: string; // e.g. "7 Days", "14 Days", "N/A"
  germinationRate?: string;
  maturityDays?: string;
  safetyInstructions: string;
  image: string;
  popular?: boolean;
}

export interface CropIssue {
  id: string;
  cropId: string;
  cropName: string;
  cropNepaliName: string;
  issueType: 'insect' | 'disease' | 'weed' | 'deficiency';
  issueName: string;
  issueNepaliName: string;
  symptoms: string;
  nepaliSymptoms: string;
  recommendedProductId: string;
  recommendedProductName: string;
  recommendedDosage: string;
  preventiveAction: string;
  severity: 'mild' | 'moderate' | 'critical';
}

export interface InquiryItem {
  product: Product;
  quantity: number;
  selectedPackage: string;
}

export interface DealerInquiryForm {
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  location: string;
  district: string;
  panNumber: string;
  interestedCategories: string[];
  message: string;
}
