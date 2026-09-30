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
  const isTrap = product.category === 'traps';
  const isManureBag = product.category === 'biologicals' && (product.id.includes('prom') || product.id.includes('vermi') || product.id.includes('manure'));
  
  const isPouch = 
    !isTrap &&
    !isManureBag &&
    (product.formulation.includes('WDG') || 
     product.formulation.includes('WP') || 
     product.formulation.includes('SP') || 
     product.formulation.includes('DG') ||
     product.formulation.includes('Granule') ||
     product.formulation.includes('Powder'));
     
  const isBottle = !isSeed && !isEquipment && !isTrap && !isManureBag && !isPouch;

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
    'Mankind Agritech': { bg: '#9d174d', accent: '#fbbf24', label: 'MANKIND AGRITECH', text: '#ffffff' },
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
      {/* 1. SEED SACK / HYBRID BAG                                                 */}
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
            {product.name.replace(/ISP /g, '').slice(0, 20)}
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
      {/* 2. HEAVY ORGANIC MANURE SACK (PROM / VERMI WIZARD)                        */}
      {/* ========================================================================= */}
      {isManureBag && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
          <rect x="35" y="24" width="150" height="8" rx="2" fill="#15803d" />
          <path
            d="M 36 32
               C 32 120, 28 220, 34 260
               C 50 266, 170 266, 186 260
               C 192 220, 188 120, 184 32 Z"
            fill="#f7fee7"
            stroke="#a3e635"
            strokeWidth="1.8"
          />
          <rect x="38" y="32" width="144" height="60" fill="#166534" />
          <text x="110" y="54" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
            MANKIND AGRITECH
          </text>
          <text x="110" y="70" textAnchor="middle" fill="#bef264" fontSize="9" fontWeight="700">
            100% ORGANIC BIO-ENRICHED
          </text>
          <text x="110" y="84" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="600">
            SOIL CONDITIONER &amp; MICROBES
          </text>

          {/* Organic Leaf Emblem */}
          <circle cx="110" cy="130" r="26" fill="#ecfdf5" stroke="#22c55e" strokeWidth="2" />
          <path d="M 110 114 C 122 114, 126 126, 122 136 C 118 144, 110 148, 110 148 C 110 148, 102 144, 98 136 C 94 126, 98 114, 110 114 Z" fill="#16a34a" />
          <path d="M 110 120 L 110 144" stroke="#ffffff" strokeWidth="1.5" />

          {/* Product Name */}
          <rect x="42" y="168" width="136" height="36" rx="4" fill="#ffffff" stroke="#dcfce7" strokeWidth="1" />
          <text x="110" y="184" textAnchor="middle" fill="#14532d" fontSize="11" fontWeight="800">
            {product.name.replace(/Mankind /g, '')}
          </text>
          <text x="110" y="197" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="700">
            {product.nepaliName.slice(0, 24)}
          </text>

          <rect x="50" y="214" width="120" height="22" rx="4" fill="#15803d" />
          <text x="110" y="228" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">
            PACK: {product.packagingSizes[0] || '50 kg Bag'}
          </text>
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 3. PHEROMONE TRAP / LURE / STICKY TRAP                                    */}
      {/* ========================================================================= */}
      {isTrap && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
          {product.id.includes('magnet-blue') ? (
            // Blue sticky trap
            <>
              <rect x="45" y="30" width="130" height="210" rx="6" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
              <circle cx="110" cy="45" r="5" fill="#ffffff" stroke="#0369a1" strokeWidth="1.5" />
              {/* Sticky grid */}
              <line x1="45" y1="80" x2="175" y2="80" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="45" y1="120" x2="175" y2="120" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="45" y1="160" x2="175" y2="160" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="45" y1="200" x2="175" y2="200" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="88" y1="30" x2="88" y2="240" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="132" y1="30" x2="132" y2="240" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 3" />
              <rect x="55" y="95" width="110" height="65" rx="6" fill="#ffffff" />
              <text x="110" y="115" textAnchor="middle" fill="#0369a1" fontSize="10" fontWeight="800">MANKIND MAGNET</text>
              <text x="110" y="130" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">BLUE STICKY TRAP</text>
              <text x="110" y="145" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="700">FOR THRIPS &amp; FLIES</text>
            </>
          ) : product.id.includes('magnet-yellow') ? (
            // Yellow sticky trap
            <>
              <rect x="45" y="30" width="130" height="210" rx="6" fill="#facc15" stroke="#eab308" strokeWidth="2" />
              <circle cx="110" cy="45" r="5" fill="#ffffff" stroke="#ca8a04" strokeWidth="1.5" />
              {/* Sticky grid */}
              <line x1="45" y1="80" x2="175" y2="80" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="45" y1="120" x2="175" y2="120" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="45" y1="160" x2="175" y2="160" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="45" y1="200" x2="175" y2="200" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="88" y1="30" x2="88" y2="240" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="132" y1="30" x2="132" y2="240" stroke="#eab308" strokeWidth="1" strokeDasharray="3 3" />
              <rect x="55" y="95" width="110" height="65" rx="6" fill="#ffffff" />
              <text x="110" y="115" textAnchor="middle" fill="#854d0e" fontSize="10" fontWeight="800">MANKIND MAGNET</text>
              <text x="110" y="130" textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="900">YELLOW STICKY TRAP</text>
              <text x="110" y="145" textAnchor="middle" fill="#16a34a" fontSize="8" fontWeight="700">WHITEFLY &amp; APHIDS</text>
            </>
          ) : (
            // Delta/Funnel Pheromone Trap & Lure
            <>
              {/* Canopy / Hood */}
              <path d="M 60 70 Q 110 35 160 70 L 170 85 L 50 85 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
              {/* Wire Hanger */}
              <path d="M 110 35 L 110 15 Q 110 8 118 8 Q 126 8 126 15" stroke="#71717a" strokeWidth="2" fill="none" />
              {/* Lure Septa Cage in Middle */}
              <rect x="102" y="85" width="16" height="28" rx="2" fill="#ef4444" stroke="#b91c1c" strokeWidth="1" />
              <text x="110" y="103" textAnchor="middle" fill="#ffffff" fontSize="7" fontWeight="800">LURE</text>
              {/* Transparent Collection Funnel */}
              <path d="M 55 85 L 75 220 C 75 235 145 235 145 220 L 165 85 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" opacity="0.9" />
              {/* Brand label plate */}
              <rect x="68" y="125" width="84" height="60" rx="4" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <text x="110" y="140" textAnchor="middle" fill="#9d174d" fontSize="9" fontWeight="800">MANKIND TRAP</text>
              <text x="110" y="154" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900">
                {product.name.replace(/Mankind Shieldkind /g, '').slice(0, 12)}
              </text>
              <text x="110" y="167" textAnchor="middle" fill="#16a34a" fontSize="7" fontWeight="700">ECO PHEROMONE</text>
              <text x="110" y="177" textAnchor="middle" fill="#64748b" fontSize="6.5" fontWeight="600">ZERO RESIDUE</text>
            </>
          )}
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 4. SPRAYER / EQUIPMENT                                                    */}
      {/* ========================================================================= */}
      {isEquipment && (
        <svg viewBox="0 0 240 280" className="h-full w-auto drop-shadow-lg" fill="none">
          <rect x="55" y="55" width="130" height="180" rx="28" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
          <rect x="68" y="70" width="104" height="150" rx="18" fill="#38bdf8" opacity="0.3" />
          <rect x="95" y="32" width="50" height="24" rx="6" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
          <rect x="100" y="26" width="40" height="8" rx="2" fill="#ca8a04" />
          
          <path d="M 50 80 C 40 120, 40 200, 52 230" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" />
          <path d="M 190 80 C 200 120, 200 200, 188 230" stroke="#1e293b" strokeWidth="7" strokeLinecap="round" />

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

          <rect x="172" y="100" width="4" height="100" rx="2" fill="#ffffff" opacity="0.8" />
          <line x1="168" y1="120" x2="176" y2="120" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="168" y1="150" x2="176" y2="150" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="168" y1="180" x2="176" y2="180" stroke="#ffffff" strokeWidth="1.5" />
          
          <line x1="205" y1="40" x2="205" y2="250" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
          <line x1="205" y1="40" x2="215" y2="35" stroke="#eab308" strokeWidth="3" strokeLinecap="round" />
          <rect x="202" y="140" width="6" height="25" rx="2" fill="#ef4444" />
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 5. FOIL POUCH / SACHET (WDG / WP / SP / DG / Granules)                   */}
      {/* ========================================================================= */}
      {isPouch && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
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

          <polygon points="36,44 42,42 42,46" fill="#71717a" />
          <polygon points="184,44 178,42 178,46" fill="#71717a" />
          <line x1="44" y1="44" x2="176" y2="44" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="2 3" />

          <rect x="41" y="48" width="138" height="42" fill={theme.bg} />
          <text x="110" y="66" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800" letterSpacing="0.05em">
            {theme.label}
          </text>
          <text x="110" y="80" textAnchor="middle" fill={theme.accent} fontSize="8" fontWeight="700">
            {product.category.toUpperCase()} · HIGH PURITY
          </text>

          <text x="110" y="116" textAnchor="middle" fill="#0f172a" fontSize="15" fontWeight="900" letterSpacing="-0.02em">
            {product.name.replace(/Adama |SML |Rotam |Albaugh |Mankind /g, '').slice(0, 15)}
          </text>
          <text x="110" y="132" textAnchor="middle" fill="#15803d" fontSize="9" fontWeight="700">
            {product.formulation}
          </text>

          <rect x="48" y="142" width="124" height="34" rx="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
          <text x="110" y="156" textAnchor="middle" fill="#334155" fontSize="7.5" fontWeight="700">
            ACTIVE INGREDIENT:
          </text>
          <text x="110" y="168" textAnchor="middle" fill="#0f172a" fontSize="7" fontWeight="600">
            {product.activeIngredient.length > 24 ? product.activeIngredient.slice(0, 24) + '...' : product.activeIngredient}
          </text>

          <rect x="42" y="184" width="136" height="30" fill="#f4f4f5" />
          <g transform="translate(110, 199)">
            <polygon points="-12,0 0,-12 12,0 0,12" fill="#ffffff" stroke="#52525b" strokeWidth="0.8" />
            <polygon points="-12,0 0,12 12,0" fill={tox.fill} />
          </g>
          <text x="110" y="212" textAnchor="middle" fill="#52525b" fontSize="6.5" fontWeight="700">
            {tox.text}
          </text>

          <rect x="55" y="222" width="110" height="20" rx="4" fill={theme.bg} />
          <text x="110" y="235" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="700">
            NET WEIGHT: {product.packagingSizes[0] || '1 kg'}
          </text>
        </svg>
      )}

      {/* ========================================================================= */}
      {/* 6. LIQUID CANISTER / AGROCHEMICAL BOTTLE (SC / EC / SL / FS)             */}
      {/* ========================================================================= */}
      {isBottle && (
        <svg viewBox="0 0 220 280" className="h-full w-auto drop-shadow-lg" fill="none">
          <rect x="94" y="22" width="32" height="24" rx="3" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1.5" />
          <line x1="98" y1="26" x2="98" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="104" y1="26" x2="104" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="110" y1="26" x2="110" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="116" y1="26" x2="116" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          <line x1="122" y1="26" x2="122" y2="42" stroke="#e4e4e7" strokeWidth="1.5" />
          
          <rect x="92" y="44" width="36" height="5" rx="1.5" fill="#ef4444" />

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

          <line x1="52" y1="120" x2="58" y2="120" stroke="#a1a1aa" strokeWidth="1.5" />
          <text x="61" y="122" fill="#71717a" fontSize="6">500ml</text>
          <line x1="52" y1="150" x2="58" y2="150" stroke="#a1a1aa" strokeWidth="1.5" />
          <text x="61" y="152" fill="#71717a" fontSize="6">250ml</text>
          <line x1="52" y1="180" x2="58" y2="180" stroke="#a1a1aa" strokeWidth="1.5" />
          <text x="61" y="182" fill="#71717a" fontSize="6">100ml</text>

          <rect x="70" y="80" width="96" height="152" rx="4" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1" />

          <rect x="70" y="80" width="96" height="28" rx="4" fill={theme.bg} />
          <text x="118" y="94" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" letterSpacing="0.04em">
            {theme.label}
          </text>
          <text x="118" y="103" textAnchor="middle" fill={theme.accent} fontSize="6.5" fontWeight="700">
            {product.category.toUpperCase()}
          </text>

          <text x="118" y="126" textAnchor="middle" fill="#0f172a" fontSize="13" fontWeight="900" letterSpacing="-0.02em">
            {product.name.replace(/Adama |SML |Rotam |Albaugh |Mankind /g, '').slice(0, 13)}
          </text>
          <text x="118" y="138" textAnchor="middle" fill="#15803d" fontSize="8" fontWeight="700">
            {product.formulation}
          </text>

          <text x="118" y="152" textAnchor="middle" fill="#475569" fontSize="6.5" fontWeight="600">
            {product.activeIngredient.length > 20 ? product.activeIngredient.slice(0, 20) + '...' : product.activeIngredient}
          </text>

          <g transform="translate(118, 172)">
            <polygon points="-10,0 0,-10 10,0 0,10" fill="#ffffff" stroke="#52525b" strokeWidth="0.8" />
            <polygon points="-10,0 0,10 10,0" fill={tox.fill} />
          </g>
          <text x="118" y="187" textAnchor="middle" fill="#52525b" fontSize="5.5" fontWeight="700">
            {tox.text}
          </text>

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
