import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  FlaskConical, 
  Droplets, 
  ShieldCheck, 
  ShoppingCart, 
  Check, 
  X, 
  Sparkles, 
  Info, 
  Package, 
  Image as ImageIcon,
  Building2,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Product, ProductCategory, BrandName, Language } from '../types';
import { productsData } from '../data/products';
import { translations } from '../data/translations';
import { ProductDetailModal } from './ProductDetailModal';
import { ProductPackagingVisual } from './ProductPackagingVisual';

interface ProductCatalogProps {
  lang: Language;
  onAddToInquiry: (product: Product, packageSize: string) => void;
  inquiryProductIds: Set<string>;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  lang,
  onAddToInquiry,
  inquiryProductIds
}) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [viewMode, setViewMode] = useState<'package' | 'photo'>('package');
  const [cardViewOverrides, setCardViewOverrides] = useState<Record<string, 'package' | 'photo'>>({});

  const toggleCardView = (productId: string, current: 'package' | 'photo') => {
    setCardViewOverrides((prev) => ({
      ...prev,
      [productId]: current === 'package' ? 'photo' : 'package'
    }));
  };

  // Company metadata and brand specifications
  const companySections = [
    {
      id: 'all',
      name: lang === 'en' ? 'All Companies' : 'सबै कम्पनी',
      tagline: lang === 'en' ? 'Complete Authorized Input Portfolio' : 'सम्पूर्ण अधिकृत कृषि सामग्री सूची',
      color: '#047857'
    },
    {
      id: 'SML Limited',
      name: 'SML Limited',
      tagline: lang === 'en' ? 'World Leader in Sulphur, Micronutrients & Crop Protection' : 'सल्फर, सूक्ष्म पोषक तत्व र पेटेन्टेड ढुसीनाशक प्रविधि',
      color: '#047857'
    },
    {
      id: 'ADAMA India',
      name: 'ADAMA India',
      tagline: lang === 'en' ? 'Global Off-Patent Innovation, Advanced Herbicides & Insecticides' : 'विश्वस्तरीय झारनाशक, कस्टोडिया, ब्याराजाइड र कीटनाशक',
      color: '#1e3a8a'
    },
    {
      id: 'Mankind Agritech',
      name: 'Mankind Agritech',
      tagline: lang === 'en' ? 'Bio-Enriched Manures, Eco Pheromone Traps & Agrochemicals' : 'शील्डकाइन्ड फेरोमोन ट्रयाप, जैविक मल र आधुनिक रसायन',
      color: '#9d174d'
    },
    {
      id: 'Albaugh / Rotam',
      name: 'Albaugh / Rotam',
      tagline: lang === 'en' ? 'Global Post-Patent Crop Protection & Selective Weed Control' : 'रोटाम तथा अल्बौका भरपर्दा झारनाशक तथा कीटनाशक',
      color: '#b45309'
    },
    {
      id: 'ISP Seeds',
      name: 'ISP Seeds (Inventive)',
      tagline: lang === 'en' ? 'Certified Hybrid Paddy, Maize, Mustard & Hybrid Vegetables' : 'उन्नत हाइब्रिड धान, मकै, तोरी र तरकारीका प्रमाणित बीउ',
      color: '#15803d'
    }
  ];

  // Live product counts by company
  const companyCounts = useMemo(() => {
    const counts: Record<string, number> = { all: productsData.length };
    for (const p of productsData) {
      counts[p.brand] = (counts[p.brand] || 0) + 1;
    }
    return counts;
  }, []);

  const categories: { id: ProductCategory; label: string }[] = [
    { id: 'all', label: t.catalog.all },
    { id: 'seeds', label: t.catalog.seeds },
    { id: 'insecticides', label: t.catalog.insecticides },
    { id: 'fungicides', label: t.catalog.fungicides },
    { id: 'herbicides', label: t.catalog.herbicides },
    { id: 'nutrition', label: t.catalog.nutrition },
    { id: 'biologicals', label: t.catalog.biologicals },
    { id: 'traps', label: t.catalog.traps },
    { id: 'pgr', label: t.catalog.pgr },
    { id: 'equipment', label: t.catalog.equipment }
  ];

  // Dynamic category counts for currently selected company
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: 0 };
    for (const p of productsData) {
      if (selectedBrand === 'all' || p.brand === selectedBrand) {
        counts.all = (counts.all || 0) + 1;
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    }
    return counts;
  }, [selectedBrand]);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      // Company / Brand filter
      if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query) || p.nepaliName.toLowerCase().includes(query);
        const matchesActive = p.activeIngredient.toLowerCase().includes(query);
        const matchesPest = p.targetPests.some((pest) => pest.toLowerCase().includes(query));
        const matchesCrop = p.targetCrops.some((crop) => crop.toLowerCase().includes(query)) ||
                            p.nepaliTargetCrops.some((crop) => crop.toLowerCase().includes(query));
        return matchesName || matchesActive || matchesPest || matchesCrop;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const activeCompany = companySections.find((c) => c.id === selectedBrand);

  return (
    <section id="catalog" className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <FlaskConical className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Authentic Input Portfolio' : 'प्रमाणित कृषि सामग्री क्याटलग'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.catalog.title}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {t.catalog.subtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. COMPANY SECTIONS SELECTOR (AS REQUESTED)                               */}
        {/* ========================================================================= */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-emerald-700" />
              {lang === 'en' ? 'Filter By Company Section:' : 'कम्पनी खण्ड अनुसार छान्नुहोस्:'}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              {lang === 'en' ? '5 Official Partner Companies' : '५ आधिकारिक साझेदार कम्पनीहरू'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {companySections.map((company) => {
              const isSelected = selectedBrand === company.id;
              const count = companyCounts[company.id] || 0;

              return (
                <button
                  key={company.id}
                  type="button"
                  onClick={() => {
                    setSelectedBrand(company.id);
                    // If switching company, keep category if valid or reset if no products
                    if (company.id !== 'all') {
                      const hasCurrentCategory = productsData.some(
                        (p) => p.brand === company.id && p.category === selectedCategory
                      );
                      if (!hasCurrentCategory && selectedCategory !== 'all') {
                        setSelectedCategory('all');
                      }
                    }
                  }}
                  className={`p-2.5 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                    isSelected
                      ? 'bg-emerald-950 text-white border-emerald-900 shadow-md ring-2 ring-emerald-600'
                      : 'bg-stone-50 hover:bg-white text-stone-800 border-stone-200/90 hover:border-emerald-300 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold truncate">
                      {company.name}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                        isSelected
                          ? 'bg-emerald-700 text-white'
                          : 'bg-stone-200 text-stone-700'
                      }`}
                    >
                      {count}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] line-clamp-1 leading-tight ${
                      isSelected ? 'text-emerald-200' : 'text-stone-500'
                    }`}
                  >
                    {company.tagline}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Company Active Spotlight Banner */}
        {selectedBrand !== 'all' && activeCompany && (
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-extrabold text-amber-300">
                  {lang === 'en' ? 'Official Company Section' : 'आधिकारिक कम्पनी खण्ड'}
                </span>
                <span className="text-xs text-emerald-200">·</span>
                <span className="text-xs font-semibold text-emerald-100">
                  {companyCounts[selectedBrand]} {lang === 'en' ? 'Verified Products' : 'प्रमाणित उत्पादनहरू'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {activeCompany.name}
              </h3>
              <p className="text-xs text-emerald-100 mt-0.5 max-w-2xl">
                {activeCompany.tagline}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelectedBrand('all')}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-semibold text-white transition-colors shrink-0 flex items-center gap-1"
            >
              <span>{lang === 'en' ? 'View All Companies' : 'सबै कम्पनी हेर्नुहोस्'}</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. SEARCH & CATEGORY FILTER TABS                                         */}
        {/* ========================================================================= */}
        <div className="space-y-3 mb-6">
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.catalog.searchPlaceholder}
              className="w-full pl-10 pr-9 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 focus:bg-white transition-all shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 p-1 bg-stone-100 rounded-xl border border-stone-200">
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-white text-emerald-950 shadow-xs border border-stone-200/80 font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
                  }`}
                >
                  <span>{cat.label}</span>
                  {count > 0 && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-stone-200/80 text-stone-500'
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 mb-6">
          <div className="flex items-center gap-3">
            <span>
              {lang === 'en' 
                ? `Showing ${filteredProducts.length} verified products` 
                : `${filteredProducts.length} वटा प्रमाणित उत्पादन उपलब्ध`}
            </span>
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedBrand('all');
                  setSearchQuery('');
                }}
                className="text-emerald-700 hover:text-emerald-900 font-semibold hover:underline"
              >
                {lang === 'en' ? 'Reset Filters' : 'फिल्टर हटाउनुहोस्'}
              </button>
            )}
          </div>

          {/* View Mode Switcher */}
          <div className="inline-flex items-center bg-stone-100 p-0.5 rounded-lg border border-stone-200">
            <button
              type="button"
              onClick={() => { setViewMode('package'); setCardViewOverrides({}); }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'package' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Package className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'en' ? 'Packaging View' : 'बोतल तथा प्याक'}</span>
            </button>
            <button
              type="button"
              onClick={() => { setViewMode('photo'); setCardViewOverrides({}); }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                viewMode === 'photo' ? 'bg-white text-emerald-800 shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>{lang === 'en' ? 'Field Photo View' : 'बाली तथा खेत फोटो'}</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-stone-50 rounded-2xl border border-stone-200">
            <FlaskConical className="w-12 h-12 text-stone-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-stone-800">
              {lang === 'en' ? 'No agricultural products found' : 'कुनै उत्पादन फेला परेन'}
            </h3>
            <p className="text-xs text-stone-500 max-w-md mx-auto mt-1">
              {lang === 'en' 
                ? 'Try broadening your search query or selecting a different category or company filter.' 
                : 'कृपया खोज्ने शब्द परिवर्तन गर्नुहोस् वा अन्य क्याटेगोरी वा कम्पनी छान्नुहोस्।'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isAdded = inquiryProductIds.has(product.id);
              const effectiveView = cardViewOverrides[product.id] || viewMode;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Brand Banner */}
                    <div className="relative overflow-hidden border-b border-stone-100 bg-stone-50">
                      
                      {effectiveView === 'package' ? (
                        <div className="cursor-pointer" onClick={() => setActiveModalProduct(product)}>
                          <ProductPackagingVisual product={product} size="md" />
                        </div>
                      ) : (
                        <div className="relative aspect-16/10 bg-stone-100 overflow-hidden cursor-pointer" onClick={() => setActiveModalProduct(product)}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-3 right-3 text-white text-[11px] font-semibold truncate drop-shadow-xs">
                            {product.name} · {product.formulation}
                          </div>
                        </div>
                      )}

                      {/* View Switcher Button on Card */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardView(product.id, effectiveView);
                        }}
                        className="absolute top-2.5 right-2.5 z-10 bg-white/95 hover:bg-white text-stone-700 hover:text-emerald-800 px-2 py-1 rounded-md border border-stone-200/90 shadow-xs transition-colors flex items-center gap-1 text-[10px] font-bold"
                        title={effectiveView === 'package' ? 'View Field Photo' : 'View Package Visual'}
                      >
                        {effectiveView === 'package' ? (
                          <>
                            <ImageIcon className="w-3 h-3 text-emerald-700" />
                            <span>Photo</span>
                          </>
                        ) : (
                          <>
                            <Package className="w-3 h-3 text-emerald-700" />
                            <span>Pack</span>
                          </>
                        )}
                      </button>

                      {product.popular && effectiveView === 'photo' && (
                        <div className="absolute top-2.5 left-2.5 bg-amber-400 text-stone-950 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider">
                          {lang === 'en' ? 'Top Choice' : 'किसान रोजाइ'}
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      
                      {/* Metadata row with zero pill discipline */}
                      <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                        <span className="uppercase tracking-wider font-semibold text-emerald-800">
                          {product.brand}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-stone-600 truncate">{product.formulation}</span>
                      </div>

                      {/* Titles */}
                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                          {product.nepaliName}
                        </p>
                      </div>

                      {/* Active Ingredient */}
                      <div className="text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                        <span className="font-semibold text-stone-900 block mb-0.5">
                          {lang === 'en' ? 'Active Chemistry:' : 'सक्रिय तत्व:'}
                        </span>
                        <span className="font-mono text-emerald-950">{product.activeIngredient}</span>
                      </div>

                      {/* Target Crops & Dosage */}
                      <div className="text-xs text-stone-600 space-y-1">
                        <div>
                          <span className="font-semibold text-stone-800">{lang === 'en' ? 'Crops: ' : 'बाली: '}</span>
                          <span>{(lang === 'en' ? product.targetCrops : product.nepaliTargetCrops).slice(0, 3).join(', ')}...</span>
                        </div>
                        <div>
                          <span className="font-semibold text-stone-800">{lang === 'en' ? 'Dosage: ' : 'मात्रा: '}</span>
                          <span className="font-bold text-emerald-700">{product.dosage.perTank16L}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Card Bottom CTA Actions */}
                  <div className="p-5 pt-0 border-t border-stone-100 mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 py-2 px-3 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-stone-400"
                    >
                      {t.catalog.viewSpecs}
                    </button>

                    <button
                      type="button"
                      onClick={() => onAddToInquiry(product, product.packagingSizes[0] || 'Standard Unit')}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition-all focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                        isAdded
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          : 'bg-emerald-700 hover:bg-emerald-800 text-white border-emerald-700'
                      }`}
                      aria-label={`Add ${product.name} to inquiry`}
                      title="Add to inquiry basket"
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Technical Specs Modal */}
        <ProductDetailModal
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          lang={lang}
          onAddToInquiry={onAddToInquiry}
          isAdded={activeModalProduct ? inquiryProductIds.has(activeModalProduct.id) : false}
        />

      </div>
    </section>
  );
};
