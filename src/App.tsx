/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnershipBanner } from './components/PartnershipBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { CropDoctor } from './components/CropDoctor';
import { LandDosageCalculator } from './components/LandDosageCalculator';
import { SafetyGuide } from './components/SafetyGuide';
import { FieldTrials } from './components/FieldTrials';
import { WholesaleDealerPortal } from './components/WholesaleDealerPortal';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryBasketModal } from './components/InquiryBasketModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product, Language, InquiryItem } from './types';
import { productsData } from './data/products';
import { Check } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load saved language and inquiry items from localStorage if available
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('abb_lang') as Language;
      if (savedLang === 'en' || savedLang === 'ne') {
        setLang(savedLang);
      }

      const savedItems = localStorage.getItem('abb_inquiry_items');
      if (savedItems) {
        const parsed = JSON.parse(savedItems);
        if (Array.isArray(parsed)) {
          setInquiryItems(parsed);
        }
      }
    } catch {
      // LocalStorage error ignored safely
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem('abb_lang', newLang);
    } catch {
      // ignored
    }
  };

  const saveItems = (items: InquiryItem[]) => {
    setInquiryItems(items);
    try {
      localStorage.setItem('abb_inquiry_items', JSON.stringify(items));
    } catch {
      // ignored
    }
  };

  const handleAddToInquiry = (product: Product, packageSize: string) => {
    const existingIndex = inquiryItems.findIndex((item) => item.product.id === product.id);

    let updated: InquiryItem[];
    if (existingIndex >= 0) {
      updated = [...inquiryItems];
      updated[existingIndex].quantity += 1;
      if (packageSize) {
        updated[existingIndex].selectedPackage = packageSize;
      }
    } else {
      updated = [
        ...inquiryItems,
        {
          product,
          quantity: 1,
          selectedPackage: packageSize || product.packagingSizes[0] || 'Standard'
        }
      ];
    }

    saveItems(updated);
    
    // Show toast
    const msg = lang === 'en' 
      ? `Added "${product.name}" to Inquiry List` 
      : `"${product.nepaliName}" अर्डर सूचीमा थपियो`;
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    const updated = inquiryItems
      .map((item) => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as InquiryItem[];

    saveItems(updated);
  };

  const handleRemoveItem = (productId: string) => {
    const updated = inquiryItems.filter((item) => item.product.id !== productId);
    saveItems(updated);
  };

  const handleClearAll = () => {
    saveItems([]);
  };

  const inquiryProductIds = new Set(inquiryItems.map((item) => item.product.id));

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-stone-700 text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header & Navbar */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        inquiryItems={inquiryItems}
        onOpenBasket={() => setIsBasketOpen(true)}
      />

      {/* Main Body Content */}
      <main className="flex-1">
        
        {/* Hero Section with Trust Metrics */}
        <Hero lang={lang} />

        {/* Strategic International Brand Partnerships */}
        <PartnershipBanner lang={lang} />

        {/* Agricultural Inputs Product Catalog */}
        <ProductCatalog
          lang={lang}
          onAddToInquiry={handleAddToInquiry}
          inquiryProductIds={inquiryProductIds}
        />

        {/* Interactive Crop Doctor Diagnostic Tool */}
        <CropDoctor
          lang={lang}
          onSelectProduct={(product) => setSelectedProductForModal(product)}
        />

        {/* Precision Nepal Land & Dosage Calculator */}
        <LandDosageCalculator lang={lang} />

        {/* Safety, Stewardship & CIBRC Guidelines */}
        <SafetyGuide lang={lang} />

        {/* On-ground Field Trials in Parsa & Bara */}
        <FieldTrials lang={lang} />

        {/* Wholesale Agrovets & Cooperatives Portal */}
        <WholesaleDealerPortal lang={lang} />

        {/* Frequently Asked Questions */}
        <FAQSection lang={lang} />

        {/* Contact, Depots & Location */}
        <ContactSection lang={lang} />

      </main>

      {/* Footer & Certifications */}
      <Footer lang={lang} />

      {/* Inquiry Basket Modal */}
      <InquiryBasketModal
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        items={inquiryItems}
        lang={lang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
      />

      {/* Direct Product Sheet Modal (e.g. from Crop Doctor) */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        lang={lang}
        onAddToInquiry={handleAddToInquiry}
        isAdded={selectedProductForModal ? inquiryProductIds.has(selectedProductForModal.id) : false}
      />

    </div>
  );
}
