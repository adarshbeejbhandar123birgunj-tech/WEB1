import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Send, 
  FileSpreadsheet, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Truck
} from 'lucide-react';
import { Language, DealerInquiryForm } from '../types';
import { translations } from '../data/translations';

interface WholesaleDealerPortalProps {
  lang: Language;
}

export const WholesaleDealerPortal: React.FC<WholesaleDealerPortalProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<DealerInquiryForm>({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    location: '',
    district: 'Parsa',
    panNumber: '',
    interestedCategories: ['Certified Hybrid Seeds', 'Crop Protection Agrochemicals'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const districts = [
    'Parsa (पर्सा)',
    'Bara (बारा)',
    'Rautahat (रौतहट)',
    'Sarlahi (सर्लाही)',
    'Dhanusha (धनुषा)',
    'Mahottari (महोत्तरी)',
    'Siraha (सिराहा)',
    'Saptari (सप्तरी)',
    'Chitwan (चितवन)',
    'Makwanpur (मकवानपुर)',
    'Nawalparasi (नवलपरासी)',
    'Rupandehi (रुपन्देही)',
    'Kapilvastu (कपिलवस्तु)',
    'Morang (मोरङ)',
    'Jhapa (झापा)',
    'Sunsari (सुनसरी)',
    'Other District (अन्य जिल्ला)'
  ];

  const toggleCategory = (cat: string) => {
    if (formData.interestedCategories.includes(cat)) {
      setFormData({
        ...formData,
        interestedCategories: formData.interestedCategories.filter((c) => c !== cat)
      });
    } else {
      setFormData({
        ...formData,
        interestedCategories: [...formData.interestedCategories, cat]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phone) return;

    // Simulate instant recording and display confirmation
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = `*New Dealer Inquiry - Adarsh Beej Bhandar Birgunj*
*Agrovet/Firm:* ${formData.businessName}
*Contact Person:* ${formData.ownerName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'N/A'}
*District/Location:* ${formData.location}, ${formData.district}
*PAN/VAT:* ${formData.panNumber || 'Pending'}
*Categories:* ${formData.interestedCategories.join(', ')}
*Message:* ${formData.message || 'Requesting wholesale price list and distributorship terms.'}`;

    const url = `https://wa.me/9779855023456?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dealers" className="py-16 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <Building2 className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'B2B Wholesale Distribution Network' : 'एग्रोभेट तथा थोक विक्रेता सञ्जाल'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.dealers.title}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {t.dealers.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Benefits & Distributorship Terms */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div className="rounded-xl overflow-hidden aspect-16/9 bg-stone-100 border border-stone-200">
                <img
                  src="/src/assets/images/agrovet_dealer_warehouse_1790738139899.jpg"
                  alt="Adarsh Beej Bhandar Wholesale Depot & Warehouse"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <h3 className="text-base font-bold text-slate-900">
                {lang === 'en' ? 'Why Partner with Adarsh Beej Bhandar?' : 'हाम्रो आधिकारिक डिलर बन्नुका फाइदाहरू'}
              </h3>

              <div className="space-y-3 text-xs text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-bold">
                      {lang === 'en' ? '100% Guaranteed Genuine Formulations' : 'सक्कली उत्पादनको पूर्ण ग्यारेन्टी'}
                    </strong>
                    <span>
                      {lang === 'en' 
                        ? 'Official import licenses for Adama India, Rotam Crop Protection, SML Limited & Grow Indigo.'
                        : 'अदामा, रोटाम र एस.एम.एल. को आधिकारिक आयातकर्ता भएकोले गुणस्तरमा शून्य सम्झौता।'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-bold">
                      {lang === 'en' ? 'Express Logistics from Birgunj Hub' : 'वीरगञ्जबाट देशभर तीव्र ढुवानी'}
                    </strong>
                    <span>
                      {lang === 'en'
                        ? 'Immediate dispatches via regular transport to all Terai districts, Kathmandu, and Western Nepal.'
                        : 'दैनिक ट्रान्सपोर्ट मार्फत पूर्वदेखि पश्चिमसम्म जुनसुकै स्थानमा समयमै सामान पुर्याउने व्यवस्था।'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-stone-900 block font-bold">
                      {lang === 'en' ? 'Attractive Margins & Marketing Support' : 'आकर्षक मुनाफा र बजार प्रवर्द्धन सहयोग'}
                    </strong>
                    <span>
                      {lang === 'en'
                        ? 'Competitive tier-1 distributor pricing, dealer promotional materials, and on-ground farmer meeting support.'
                        : 'प्रतिस्पर्धी थोक मूल्य, फ्लेक्स ब्यानर, पर्चा तथा किसान भेलामा प्राविधिक सहयोग उपलब्ध।'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Dispatch Desk */}
              <div className="pt-4 border-t border-stone-100 text-xs text-stone-600 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700" />
                  <span className="font-semibold text-stone-800">
                    {lang === 'en' ? 'Wholesale Desk: +977-51-522134' : 'थोक बिक्री शाखा: ०५१-५२२१३४'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-700" />
                  <span>adarshbeejbhandar123birgunj@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dealer Registration Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-md">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'en' ? 'Dealer Inquiry Submitted!' : 'डिलरशिप अनुरोध प्राप्त भयो!'}
                </h3>
                <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                  {lang === 'en'
                    ? `Thank you, ${formData.businessName}. Our Birgunj commercial team has received your details and will contact you within 24 business hours with the wholesale price list.`
                    : `धन्यवाद ${formData.businessName}। हाम्रो वीरगञ्ज कार्यालयले तपाईंको विवरण प्राप्त गरेको छ र २४ घण्टाभित्र थोक मूल्य सूची सहित सम्पर्क गर्नेछ।`}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl transition-all"
                  >
                    {lang === 'en' ? 'Send Instant Copy to WhatsApp' : 'व्हाट्सएपमा तुरुन्त पठाउनुहोस्'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs rounded-xl transition-colors"
                  >
                    {lang === 'en' ? 'Submit Another Inquiry' : 'अर्को फारम भर्नुहोस्'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-stone-100 pb-3">
                  {t.dealers.formTitle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Agrovet / Firm Name *' : 'एग्रोभेट / फर्मको नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. Kisan Agrovet Center' : 'जस्तै: किसान एग्रोभेट सेन्टर'}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Proprietor Name *' : 'सञ्चालकको नाम *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder={lang === 'en' ? 'Full name' : 'पूरा नाम'}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Mobile / WhatsApp Number *' : 'सम्पर्क / व्हाट्सएप नम्बर *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="98XXXXXXXX"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Email Address' : 'इमेल ठेगाना'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="agrovet@example.com"
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Town / Local Market *' : 'बजार / ठेगाना *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder={lang === 'en' ? 'e.g. Kalaiya Bazar, Main Chowk' : 'जस्तै: कलैया बजार, मुख्य चोक'}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'District' : 'जिल्ला'}
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    >
                      {districts.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    {lang === 'en' ? 'PAN / VAT Registration Number (Optional)' : 'प्यान / भ्याट दर्ता नम्बर (ऐच्छिक)'}
                  </label>
                  <input
                    type="text"
                    value={formData.panNumber}
                    onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                    placeholder="XXXXXXXXX"
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600 font-mono"
                  />
                </div>

                {/* Interested Categories */}
                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1.5">
                    {lang === 'en' ? 'Product Lines of Interest:' : 'रुचि भएका उत्पादन वर्गहरू:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'ISP Certified Seeds (Paddy, Maize, Vegetables, Mustard)',
                      'Crop Protection (ADAMA & Albaugh Agrochemicals)',
                      'SML Micronutrients (Sulphur 90%, Techno-Z, Sulanex-Z)',
                      'Mankind Agritech (Pheromone Traps, Bio & Formulations)',
                      'Bio-Fertilizers & Organic Manure (Prom & Vermi Wizard)'
                    ].map((cat) => (
                      <label key={cat} className="flex items-center gap-2 p-2 rounded-lg border border-stone-200 bg-stone-50 cursor-pointer hover:bg-stone-100">
                        <input
                          type="checkbox"
                          checked={formData.interestedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="rounded text-emerald-700 focus:ring-emerald-600"
                        />
                        <span className="text-stone-800 text-[11px] font-medium">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 block mb-1">
                    {lang === 'en' ? 'Message / Special Requirements' : 'थप सन्देश वा माग:'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={lang === 'en' ? 'Expected monthly/seasonal volume or specific product inquiries...' : 'अनुमानित मौसमी माग वा कुनै विशेष उत्पादन सम्बन्धी सोधपुछ...'}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.dealers.submitBtn}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
