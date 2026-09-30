import React from 'react';
import { Product } from '../types';

interface ProductPackagingVisualProps {
  product: Product;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductPackagingVisual: React.FC<ProductPackagingVisualProps> = ({
  product,
  className = '',
  size = 'md'
}) => {
  // Determine container type based on formulation or category
  const isSeed = product.category === 'seeds';
  const isEquipment = product.category === 'equipment';
  const isPouch = 
    product.formulation.includes('WDG') || 
    product.formulation.includes('WP') || 
    product.formulation.includes('SP') || 
    product.formulation.includes('DG') ||
    product.formulation.includes('Granule') ||
    product.formulation.includes('Powder');
  const isBottle = !isSeed && !isEquipment && !isPouch;

  // Toxicity triangle colors
  const toxicityColors = {
    green: { fill: '#16a34a', text: 'CAUTION / सावधानी' },
    blue: { fill: '#2563eb', text: 'DANGER / खतरा' },
    yellow: { fill: '#eab308', text: 'HIGHLY TOXIC / विष' },
    bio: { fill: '#059669', text: 'ORGANIC / जैविक' }
  };

  const tox = toxicityColors[product.toxicityClass] || toxicityColors.green;

  // Primary brand theme colors
  const brandThemes: Record<string, { bg: string; accent: string; label: string; text: string }> = {
    'SML Limited': { bg: '#047857', accent: '#fbbf24', label: 'SML LIMITED', text: '#ffffff' },
    'ADAMA India': { bg: '#1e3a8a', accent: '#ef4444', label: 'ADAMA', text: '#ffffff' },
    'Mankind Agritech': { bg: '#be185d', accent: '#f59e0b', label: 'MANKIND AGRITECH', text: '#ffffff' },
    'Albaugh / Rotam': { bg: '#b45309', accent: '#10b981', label: 'ALBAUGH / ROTAM', text: '#ffffff' },
    'ISP Seeds': { bg: '#15803d', accent: '#facc15', label: 'ISP SEEDS', text: '#ffffff' }
  };

  const theme = brandThemes[product.brand] || brandThemes['SML Limited'];

  // Dimensions based on size
  const heightClass = size === 'lg' ? 'h-72' : size === 'sm' ? 'h-40' : 'h-52';

  return (
    <div className={`relative w-full ${heightClass} flex items-center justify-center p-3 select-none overflow-hidden bg-gradient-to-b from-stone-100/90 via-stone-50 to-stone-200/80 rounded-xl ${className}`}>
      
      {/* Subtle shelf background shadow */}
      <div className="absolute bottom-2 inset-x-8 h-4 bg-stone-900/15 rounded-full blur-md" />

      {/* ========================================================================= */}
      {/* 1. SEED SACK / BAG                                                        */}
      {/* ========================================================================= */}
      {isSeed && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
          {/* Top stitch bar */}
          <rect x="35" y="24" width="150" height="8" rx="2" fill="#d97706" />
          <path d="M 40 28 L 180 28" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Main Bag Body */}
          <path
            d="M 38 32
               C 35 120, 30 220, 36 260
               C 50 264, 170 264, 184 260
               C 190 220, 185 120, 182 32 Z"
            fill="#fef3c7"
            stroke="#d4d4d8"
            strokeWidth="1.5"
          />

          {/* Bag Texture / Weave Shading */}
          <path
            d="M 38 32 L 182 32 L 178 110 L 42 110 Z"
            fill={theme.bg}
          />

          {/* Brand Header */}
          <text x="110" y="58" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="800" letterSpacing="0.05em">
            {theme.label}
          </text>
          <text x="110" y="74" textAnchor="middle" fill="#fef08a" fontSize="10" fontWeight="700">
            CERTIFIED HYBRID SEED
          </text>
          <text x="110" y="94" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="600" opacity="0.9">
            GERMINATION &gt; 90% · TESTED PURITY
          </text>

          {/* Golden Seal Badge */}
          <circle cx="110" cy="138" r="24" fill="#fef3c7" stroke="#eab308" strokeWidth="2.5" />
          <path d="M 110 120 L 115 132 L 126 132 L 118 140 L 121 152 L 110 144 L 99 152 L 102 140 L 94 132 L 105 132 Z" fill="#ca8a04" opacity="0.25" />
          <text x="110" y="136" textAnchor="middle" fill="#854d0e" fontSize="9" fontWeight="800">GOVT REG.</text>
          <text x="110" y="147" textAnchor="middle" fill="#15803d" fontSize="8" fontWeight="700">ISO 9001</text>

          {/* Product Name Banner */}
          <rect x="42" y="172" width="136" height="34" rx="4" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
          <text x="110" y="187" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="800">
            {product.name.replace(/KD |ISP /g, '').slice(0, 20)}
          </text>
          <text x="110" y="200" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="700">
            {product.nepaliName.slice(0, 24)}
          </text>

          {/* Package Weight & Specifications */}
          <rect x="52" y="214" width="116" height="18" rx="3" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
          <text x="110" y="226" textAnchor="middle" fill="#065f46" fontSize="8" fontWeight="700">
            NET WT: {product.packagingSizes[0] || '3 kg Bag'}
          </text>

          {/* Green Caution Triangle */}
          <polygon points="104,252 110,242 116,252" fill="#16a34a" />
          <text x="110" y="258" textAnchor="middle" fill="#71717a" fontSize="6.5" fontWeight="600">TREATED SEED</text>
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 2. SPRAYER / EQUIPMENT                                                    */}
      {/* ========================================================================= */}
      {isEquipment && (
        <svg viewBox="0 0 240 280" className="h-full w-auto drop-shadow-lg" fill="none">
          {/* Sprayer Tank Body */}
          <rect x="55" y="55" width="130" height="180" rx="28" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
          {/* Pressure chamber contour */}
          <rect x="68" y="70" width="104" height="150" rx="18" fill="#38bdf8" opacity="0.3" />
          {/* Fill Cap */}
          <rect x="95" y="32" width="50" height="24" rx="6" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
          <rect x="100" y="26" width="40" height="8" rx="2" fill="#ca8a04" />
          
          {/* Back Straps Accent */}
          <path d="M 50 80 C 40 120, 40 200, 52 230" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" />
          <path d="M 190 80 C 200 120, 200 200, 188 230" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" />

          {/* Brand Plate */}
          <rect x="70" y="90" width="100" height="60" rx="8" fill="#ffffff" />
          <text x="120" y="110" textAnchor="middle" fill="#0369a1" fontSize="11" fontWeight="800">
            ADARSH AGRO
          </text>
          <text x="120" y="126" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="800">
            PRO 16L
          </text>
          <text x="120" y="140" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="700">
            2-IN-1 BATTERY + MANUAL
          </text>

          {/* Volumetric Gauge Line */}
          <rect x="172" y="100" width="4" height="100" rx="2" fill="#ffffff" opacity="0.8" />
          <line x1="168" y1="120" x2="176" y2="120" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="168" y1="150" x2="176" y2="150" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="168" y1="180" x2="176" y2="180" stroke="#ffffff" strokeWidth="1.5" />
          
          {/* Stainless Lance on side */}
          <line x1="205" y1="40" x2="205" y2="250" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="205" y1="40" x2="215" y2="35" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
          <rect x="202" y="140" width="6" height="25" rx="2" fill="#ef4444" />
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 3. FOIL POUCH / SACHET (WDG / WP / SP / DG / Granules)                   */}
      {/* ========================================================================= */}
      {isPouch && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
          {/* Pouch Silhouette */}
          <path
            d="M 40 30 
               L 180 30 
               C 176 130, 186 230, 178 255
               C 160 262, 60 262, 42 255
               C 34 230, 44 130, 40 30 Z"
            fill="#ffffff"
            stroke="#d4d4d8"
            strokeWidth="1.5"
          />

          {/* Foil Tear Notch */}
          <polygon points="36,44 42,42 42,46" fill="#71717a" />
          <polygon points="184,44 178,42 178,46" fill="#71717a" />
          <line x1="44" y1="44" x2="176" y2="44" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="2 3" />

          {/* Top Brand Banner */}
          <rect x="41" y="48" width="138" height="42" fill={theme.bg} />
          <text x="110" y="66" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" letterSpacing="0.05em">
            {theme.label}
          </text>
          <text x="110" y="80" textAnchor="middle" fill={theme.accent} fontSize="8" fontWeight="700">
            {product.category.toUpperCase()} · HIGH PURITY
          </text>

          {/* Central Product Name Badge */}
          <text x="110" y="116" textAnchor="middle" fill="#0f172a" fontSize="16" fontWeight="900" letterSpacing="-0.02em">
            {product.name.replace(/Adama |SML |Rotam /g, '').slice(0, 14)}
          </text>
          <text x="110" y="132" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="700">
            {product.formulation}
          </text>

          {/* Active Chemical Spec */}
          <rect x="48" y="142" width="124" height="34" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="110" y="156" textAnchor="middle" fill="#334155" fontSize="7.5" fontWeight="700">
            ACTIVE INGREDIENT:
          </text>
          <text x="110" y="168" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="600">
            {product.activeIngredient.length > 24 ? product.activeIngredient.slice(0, 24) + '...' : product.activeIngredient}
          </text>

          {/* Statutory Toxicity Band */}
          <rect x="42" y="184" width="136" height="30" fill="#f4f4f5" />
          {/* Split toxicity square/diamond */}
          <g transform="translate(110, 199)">
            <polygon points="-12,0 0,-12 12,0 0,12" fill="#ffffff" stroke="#52525b" strokeWidth="0.8" />
            <polygon points="-12,0 0,12 12,0" fill={tox.fill} />
          </g>
          <text x="110" y="212" textAnchor="middle" fill="#52525b" fontSize="6.5" fontWeight="700">
            {tox.text}
          </text>

          {/* Package Net Content */}
          <rect x="55" y="222" width="110" height="20" rx="4" fill={theme.bg} />
          <text x="110" y="235" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="700">
            NET WEIGHT: {product.packagingSizes[0] || '1 kg'}
          </text>
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 4. LIQUID CANISTER / AGROCHEMICAL BOTTLE (SC / EC / SL / FS)             */}
      {/* ========================================================================= */}
      {isBottle && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
          {/* Bottle Neck & Ribbed Cap */}
          <rect x="94" y="22" width="32" height="24" rx="3" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1.5" />
          <line x1="98" y1="26" x2="98" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="104" y1="26" x2="104" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="110" y1="26" x2="110" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="116" y1="26" x2="116" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="122" y1="26" x2="122" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          
          {/* Tamper Seal Ring */}
          <rect x="92" y="44" width="36" height="5" rx="1.5" fill="#ef4444" />

          {/* Shoulder of the Bottle */}
          <path
            d="M 94 48 
               C 84 56, 54 75, 48 95
               L 48 245
               C 50 256, 170 256, 172 245
               L 172 95
               C 166 75, 136 56, 126 48 Z"
            fill="#ffffff"
            stroke="#d4d4d8"
            strokeWidth="1.5"
          />

          {/* Side Measuring Graduation Marks */}
          <line x1="52" y1="120" x2="58" y2="120" stroke="#a1a1aa" strokeWidth="1.5" />
          <text x="61" y="122" fill="#71717a" fontSize="6">500ml</text>
          <line x1="52" y1="150" x2="58" y2="150" stroke="#a1a1aa" strokeWidth="1.5" />
          <text x="61" y="152" fill="#71717a" fontSize="6">250ml</text>
          <line x1="52" y1="180" x2="58" y2="180" stroke="#a1a1aa" strokeWidth="1.5" />
          <text x="61" y="182" fill="#71717a" fontSize="6">100ml</text>

          {/* Main Label Wrap */}
          <rect x="70" y="80" width="96" height="152" rx="4" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1" />

          {/* Brand Header Band on Label */}
          <rect x="70" y="80" width="96" height="28" rx="4" fill={theme.bg} />
          <text x="118" y="94" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" letterSpacing="0.04em">
            {theme.label}
          </text>
          <text x="118" y="103" textAnchor="middle" fill={theme.accent} fontSize="6.5" fontWeight="700">
            {product.category.toUpperCase()}
          </text>

          {/* Product Name */}
          <text x="118" y="126" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="900" letterSpacing="-0.02em">
            {product.name.replace(/Adama |SML |Rotam /g, '').slice(0, 12)}
          </text>
          <text x="118" y="138" textAnchor="middle" fill="#15803d" fontSize="8" fontWeight="700">
            {product.formulation}
          </text>

          {/* Chemistry description */}
          <text x="118" y="152" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="600">
            {product.activeIngredient.length > 20 ? product.activeIngredient.slice(0, 20) + '...' : product.activeIngredient}
          </text>

          {/* Statutory Toxicity Diamond */}
          <g transform="translate(118, 172)">
            <polygon points="-10,0 0,-10 10,0 0,10" fill="#ffffff" stroke="#52525b" strokeWidth="0.8" />
            <polygon points="-10,0 0,10 10,0" fill={tox.fill} />
          </g>
          <text x="118" y="187" textAnchor="middle" fill="#52525b" fontSize="5.5" fontWeight="700">
            {tox.text}
          </text>

          {/* Bottom Volume Indicator */}
          <rect x="75" y="196" width="86" height="18" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.8" />
          <text x="118" y="208" textAnchor="middle" fill="#0f172a" fontSize="7.5" fontWeight="700">
            VOLUME: {product.packagingSizes[0] || '1 Litre'}
          </text>
          <text x="118" y="222" textAnchor="middle" fill="#16a34a" fontSize="6.5" fontWeight="700">
            MoALD &amp; CIBRC APPROVED
          </text>
        </svg>
      )}

      {/* Floating brand chip at top-right */}
      <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-xs" style={{ backgroundColor: theme.bg }}>
        {theme.label}
      </div>

      {/* Toxicity badge chip at bottom-left */}
      <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-bold border border-stone-200 shadow-xs">
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: tox.fill }} />
        <span className="text-stone-700 font-semibold">{product.formulation}</span>
      </div>

    </div>
  );
};
