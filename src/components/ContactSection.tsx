import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck,
  Building
} from 'lucide-react';
import { Language } from '../types';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('Bulk Order Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const emailSubject = encodeURIComponent(`Inquiry from Website: ${topic} - ${name}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nTopic: ${topic}\n\nMessage:\n${message}`
    );

    // Open mailto link
    window.location.href = `mailto:adarshbeejbhandar123birgunj@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-stone-100 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <Building className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Central Depots & Direct Support' : 'केन्द्रीय कार्यालय तथा सम्पर्क'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'en' ? 'Connect with Adarsh Beej Bhandar' : 'आदर्श बीज भण्डार (वीरगञ्ज) सँग सम्पर्क गर्नुहोस्'}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {lang === 'en'
              ? 'Visit our central warehouse in Birgunj or reach out for prompt technical agronomy guidance and wholesale consignments.'
              : 'वीरगञ्ज मुख्य बजारस्थित हाम्रो केन्द्रीय गोदाममा पाल्नुहोस् वा प्राविधिक सल्लाह र सामान बुकिङको लागि सिधै सम्पर्क गर्नुहोस्।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Warehouse Address */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? 'Central Warehouse & Store' : 'केन्द्रीय गोदाम तथा पसल'}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Main Road, Near Agricultural Wholesale Mandi,<br />
                    Birgunj - 44300, Parsa District, Madhesh Province, Nepal
                  </p>
                  <p className="text-[11px] text-emerald-800 font-semibold mt-1">
                    (Adarsh™ – Harvesting Tomorrow)
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100">
                <a
                  href="https://maps.google.com/?q=Birgunj+Parsa+Nepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1.5 hover:underline"
                >
                  <span>{lang === 'en' ? 'Open in Google Maps' : 'गुगल म्यापमा हेर्नुहोस्'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Numbers & Email */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? 'Helpline & Telephone' : 'फोन तथा हटलाइन'}
                  </h3>
                  <p className="text-stone-700">
                    <span className="text-stone-500 font-medium">Landline: </span>
                    <a href="tel:+97751522134" className="font-bold text-emerald-900 hover:underline">
                      +977-51-522134
                    </a>
                  </p>
                  <p className="text-stone-700">
                    <span className="text-stone-500 font-medium">Mobile / WhatsApp: </span>
                    <a href="tel:+9779855023456" className="font-bold text-emerald-900 hover:underline">
                      +977-9855023456
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs space-y-1">
                  <h3 className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? 'Official Inquiries Email' : 'आधिकारिक इमेल'}
                  </h3>
                  <a 
                    href="mailto:adarshbeejbhandar123birgunj@gmail.com" 
                    className="font-mono text-emerald-900 hover:underline block break-all font-semibold"
                  >
                    adarshbeejbhandar123birgunj@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-xs space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {lang === 'en' ? 'Depot Store Hours' : 'खुल्ने समय'}
                  </h3>
                  <p className="text-stone-600 mt-0.5">
                    <strong>Sun – Fri:</strong> 8:00 AM – 7:00 PM
                  </p>
                  <p className="text-stone-600">
                    <strong>Saturday:</strong> 9:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Box & Interactive Map Placeholder */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Direct Message Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {lang === 'en' ? 'Send a Direct Message / Inquiry' : 'सिधै सन्देश वा सोधपुछ पठाउनुहोस्'}
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                {lang === 'en'
                  ? 'Our team will respond promptly to your request via email or phone call.'
                  : 'हाम्रो प्राविधिक टोलीले तपाईंको इमेल वा फोनमा तुरुन्त सम्पर्क गर्नेछ।'}
              </p>

              {sent ? (
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-950">
                    {lang === 'en' ? 'Message Generated!' : 'सन्देश पठाइयो!'}
                  </h4>
                  <p className="text-xs text-emerald-800">
                    {lang === 'en'
                      ? 'Your email draft has been generated for adarshbeejbhandar123birgunj@gmail.com.'
                      : 'तपाईंको इमेल adarshbeejbhandar123birgunj@gmail.com मा तयार भएको छ।'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-xs text-emerald-900 font-bold underline mt-2"
                  >
                    {lang === 'en' ? 'Send another message' : 'अर्को सन्देश पठाउनुहोस्'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {lang === 'en' ? 'Your Name *' : 'तपाईंको नाम *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'en' ? 'Full name' : 'नाम र थर'}
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-stone-700 block mb-1">
                        {lang === 'en' ? 'Phone / WhatsApp *' : 'फोन / व्हाट्सएप नम्बर *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98XXXXXXXX"
                        className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Inquiry Subject' : 'सोधपुछको विषय'}
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Bulk Order Inquiry">{lang === 'en' ? 'Bulk / Wholesale Order Inquiry' : 'थोक सामान अर्डर'}</option>
                      <option value="Agronomy Advisory">{lang === 'en' ? 'Crop Doctor / Agronomy Advice' : 'बाली रोग कीरा परामर्श'}</option>
                      <option value="Adama Chemistry">{lang === 'en' ? 'Adama India Formulations' : 'अदामा विषादी सोधपुछ'}</option>
                      <option value="SML Sulphur Micronutrients">{lang === 'en' ? 'SML 90% Sulphur & Techno-Z' : 'एस.एम.एल. सल्फर तथा जिंक'}</option>
                      <option value="General Dealer Terms">{lang === 'en' ? 'Agrovet Dealership Partnership' : 'एग्रोभेट डिलरशिप साझेदारी'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 block mb-1">
                      {lang === 'en' ? 'Your Message' : 'सन्देश विवरण'}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === 'en' ? 'Describe your farm requirements, question or dealer request...' : 'तपाईंको बाली, समस्या वा माग सम्बन्धी विवरण लेख्नुहोस्...'}
                      className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Send Message to Birgunj Desk' : 'वीरगञ्ज कार्यालयमा पठाउनुहोस्'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps Visual Location Card */}
            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Birgunj, Parsa, Nepal (Strategic Agricultural Gateway)</span>
                </span>
                <span className="text-[11px] font-mono text-stone-500">27.0135° N, 84.8773° E</span>
              </div>
              <div className="relative h-48 bg-stone-200 overflow-hidden">
                <iframe
                  title="Adarsh Beej Bhandar Birgunj Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.340915638294!2d84.8687728!3d27.0134988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993540eb42435f5%3A0x6b5a303868ad1df8!2sBirgunj%2C%20Nepal!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter saturate-75 contrast-105"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
