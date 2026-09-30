import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Printer, 
  Send, 
  Mail, 
  ShoppingCart, 
  Sprout, 
  FileText,
  MapPin,
  Phone
} from 'lucide-react';
import { InquiryItem, Language } from '../types';
import { translations } from '../data/translations';

interface InquiryBasketModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  lang: Language;
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const InquiryBasketModal: React.FC<InquiryBasketModalProps> = ({
  isOpen,
  onClose,
  items,
  lang,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const handleWhatsAppSend = () => {
    if (items.length === 0) return;

    let message = `*Purchase / Price Inquiry - Adarsh Beej Bhandar, Birgunj*\n`;
    message += `Date: ${new Date().toLocaleDateString()}\n\n`;
    message += `*Requested Products:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.product.name}* (${item.product.brand})\n`;
      message += `   Packaging: ${item.selectedPackage} | Quantity: ${item.quantity}\n`;
      message += `   Active: ${item.product.activeIngredient}\n\n`;
    });

    message += `Please provide current wholesale/retail availability and delivery timeline to our location.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/9779855023456?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSend = () => {
    if (items.length === 0) return;

    const subject = encodeURIComponent('Product Price & Availability Inquiry - Adarsh Beej Bhandar');
    let body = `Namaste,\n\nI would like to inquire about price and stock availability for the following agricultural inputs from Adarsh Beej Bhandar (Birgunj):\n\n`;

    items.forEach((item, index) => {
      body += `${index + 1}. ${item.product.name} (${item.product.brand})\n`;
      body += `   Pack Size: ${item.selectedPackage} | Qty: ${item.quantity}\n`;
      body += `   Technical: ${item.product.activeIngredient}\n\n`;
    });

    body += `Please send quotation to this email address.\n\nThank you.`;

    window.location.href = `mailto:adarshbeejbhandar123birgunj@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Printable Official Header (visible during print) */}
        <div className="hidden print:block p-6 border-b border-stone-300 text-center">
          <h1 className="text-xl font-bold uppercase text-slate-900">
            Adarsh Beej Bhandar – Seed & Pesticide Hub
          </h1>
          <p className="text-xs text-stone-600">
            Authorized Distributor: SML Limited, ADAMA India, Mankind Agritech, Albaugh & ISP Seeds
          </p>
          <p className="text-xs text-stone-600">
            Main Road, Birgunj, Parsa, Nepal | Tel: +977-51-522134 | Email: adarshbeejbhandar123birgunj@gmail.com
          </p>
          <div className="mt-2 text-xs font-semibold text-stone-800">
            Official Product Estimate / Price Quotation Request Slip
          </div>
        </div>

        {/* Modal Header (Screen view) */}
        <div className="bg-stone-900 text-white px-6 py-4 flex items-center justify-between border-b border-stone-800 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 flex items-center justify-center text-white">
              <ShoppingCart className="w-4 h-4" />
            </div>
            <div>
              <h2 id="inquiry-title" className="text-sm font-bold text-white tracking-tight">
                {t.basket.title}
              </h2>
              <span className="text-[11px] text-emerald-400 block font-medium">
                {items.length} {lang === 'en' ? 'products selected' : 'वटा सामान छानिएको'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[65vh] overflow-y-auto space-y-4">
          
          {items.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShoppingCart className="w-12 h-12 text-stone-300 mx-auto" />
              <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto">
                {t.basket.emptyMsg}
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all"
              >
                {lang === 'en' ? 'Browse Catalog' : 'क्याटलग हेर्नुहोस्'}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-2">
                <span>{lang === 'en' ? 'Product & Formulation' : 'उत्पादन र प्याकिङ'}</span>
                <button
                  type="button"
                  onClick={onClearAll}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  {lang === 'en' ? 'Clear List' : 'सबै हटाउनुहोस्'}
                </button>
              </div>

              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      {item.product.brand}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900">
                      {item.product.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[11px] text-stone-500">
                      <span className="font-semibold text-stone-700">
                        {lang === 'en' ? 'Pack: ' : 'प्याकिङ: '}
                        {item.selectedPackage}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono truncate">{item.product.activeIngredient}</span>
                    </div>
                  </div>

                  {/* Quantity Adjustment Controls */}
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden shadow-2xs">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1.5 text-stone-600 hover:bg-stone-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-stone-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1.5 text-stone-600 hover:bg-stone-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                      title="Remove product"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Central Birgunj Direct Dispatch Note */}
          {items.length > 0 && (
            <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2">
              <Sprout className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">
                  {lang === 'en' ? 'Direct Dispatch from Birgunj Depot:' : 'वीरगञ्ज केन्द्रीय गोदामबाट डेलिभरी:'}
                </span>
                <p className="text-[11px] text-emerald-900 mt-0.5">
                  {lang === 'en'
                    ? 'Orders placed via WhatsApp or Email are verified and dispatched within 24 hours to your designated transport counter.'
                    : 'व्हाट्सएप वा इमेलबाट पठाइएका अर्डरहरू २४ घण्टाभित्र प्रमाणित गरी तपाईंको नजिकको ट्रान्सपोर्ट काउन्टरमा पठाइनेछ।'}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer / Actions */}
        {items.length > 0 && (
          <div className="bg-stone-50 px-6 py-4 border-t border-stone-200 space-y-2.5 print:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>{t.basket.whatsappOrder}</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>{t.basket.emailOrder}</span>
              </button>
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                type="button"
                onClick={handlePrint}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900 inline-flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t.basket.printSlip}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="text-xs font-semibold text-stone-600 hover:text-stone-900"
              >
                {t.basket.close}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
