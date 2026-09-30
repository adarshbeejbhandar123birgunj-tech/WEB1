import React, { useState } from 'react';
import { 
  Sprout, 
  Phone, 
  Mail, 
  MapPin, 
  ShoppingCart, 
  Globe, 
  Menu, 
  X,
  ShieldCheck
} from 'lucide-react';
import { Language, InquiryItem } from '../types';
import { translations } from '../data/translations';
import { AdarshLogo } from './AdarshLogo';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  inquiryItems: InquiryItem[];
  onOpenBasket: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  inquiryItems,
  onOpenBasket
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const totalItemCount = inquiryItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { href: '#catalog', label: t.nav.products },
    { href: '#crop-doctor', label: t.nav.cropDoctor },
    { href: '#calculator', label: t.nav.calculator },
    { href: '#partners', label: t.nav.brands },
    { href: '#safety', label: t.nav.safety },
    { href: '#field-trials', label: t.nav.fieldTrials },
    { href: '#dealers', label: t.nav.dealers },
    { href: '#contact', label: t.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 transition-all shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'en' ? 'Adarsh Beej Bhandar · Authorized National Distributor' : 'आदर्श बीज भण्डार · आधिकारिक राष्ट्रिय वितरक'}</span>
            </span>
            <span className="hidden sm:inline text-emerald-700">|</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t.locationShort}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-emerald-200">
            <a 
              href="tel:+97751522134" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call Central Birgunj Distribution Desk"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+977-51-522134</span>
            </a>
            <span className="text-emerald-700">|</span>
            <a 
              href="mailto:adarshbeejbhandar123birgunj@gmail.com" 
              className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors"
              title="Official Agro-Input Inquiries"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>adarshbeejbhandar123birgunj@gmail.com</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center bg-emerald-900/80 rounded-md p-0.5 border border-emerald-800">
              <Globe className="w-3 h-3 text-emerald-400 ml-1.5 mr-1" />
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded ${
                  lang === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('ne')}
                className={`px-2 py-0.5 text-[11px] font-semibold rounded ${
                  lang === 'ne' ? 'bg-emerald-600 text-white shadow-xs' : 'text-emerald-300 hover:text-white'
                }`}
              >
                नेपाली
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg py-1">
          <AdarshLogo className="h-10 sm:h-12" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 text-xs font-semibold text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/80 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Cart Action */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenBasket}
            aria-label="View Inquiry Basket"
            className="relative flex items-center gap-2 px-3.5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-semibold shadow-xs hover:shadow-md transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">
              {lang === 'en' ? 'Inquiry List' : 'अर्डर सूची'}
            </span>
            {totalItemCount > 0 && (
              <span className="inline-flex items-center justify-center bg-amber-400 text-slate-950 text-[11px] font-extrabold w-5 h-5 rounded-full shadow-xs">
                {totalItemCount}
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:text-emerald-700 hover:bg-stone-100 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-600"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-stone-800 hover:bg-emerald-50 hover:text-emerald-800 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-700" />
              <span>Main Road, Wholesale Market, Birgunj - 44300, Nepal</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Tel: +977-51-522134 / Mobile: +977-9855023456</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
