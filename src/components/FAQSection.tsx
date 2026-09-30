import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: lang === 'en' 
        ? 'Which international brands does Adarsh Beej Bhandar distribute in Nepal?' 
        : 'आदर्श बीज भण्डारले नेपालमा कुन-कुन अन्तर्राष्ट्रिय ब्राण्डहरूको वितरण गर्दछ?',
      a: lang === 'en'
        ? 'Adarsh Beej Bhandar is the official authorized importer and distributor for globally renowned agricultural innovators: SML Limited (formerly Sulphur Mills Limited), ADAMA India (part of Syngenta Group), Mankind Agritech, Albaugh LLC (Rotam Crop Protection), and Inventive Seeds (ISP Seeds).'
        : 'आदर्श बीज भण्डार विश्वप्रसिद्ध कृषि कम्पनीहरू: एस.एम.एल. (SML Limited - ५५०+ पेटेन्ट भएको कम्पनी), अदामा इन्डिया (ADAMA India), म्यानकाइन्ड एग्रिटेक (Mankind Agritech), अलबग (Albaugh / Rotam) र इन्भेन्टिभ सीड्स (ISP Seeds) को नेपालका लागि आधिकारिक वितरक हो।'
    },
    {
      q: lang === 'en'
        ? 'How can agrovets and dealers place wholesale orders from Birgunj?'
        : 'एग्रोभेट व्यवसायी र सहकारीहरूले वीरगञ्जबाट थोक सामान कसरी अर्डर गर्न सक्छन्?',
      a: lang === 'en'
        ? 'Agrovets and registered agro-dealers across Nepal can place bulk orders by submitting our online B2B Dealer Form, contacting our central Birgunj distribution warehouse via phone at +977-51-522134, or emailing adarshbeejbhandar123birgunj@gmail.com. We dispatch daily shipments via regular transport networks to all Terai, Bagmati, Gandaki, and Eastern Nepal destinations.'
        : 'नेपालका कुनै पनि जिल्लाका एग्रोभेट पसलहरूले हाम्रो वेबसाइटमा रहेको डिलर फारम भरेर, वीरगञ्ज कार्यालयको फोन ०५१-५२२१३४ मा सम्पर्क गरेर वा adarshbeejbhandar123birgunj@gmail.com मा इमेल पठाएर सिधै थोक मूल्यमा सामान मगाउन सक्नुहुन्छ। दैनिक ट्रान्सपोर्ट मार्फत सामान पठाइनेछ।'
    },
    {
      q: lang === 'en'
        ? 'What safety precautions should farmers take when spraying pesticides?'
        : 'विषादी छर्दा किसानहरूले कुन-कुन सुरक्षा सावधानी अपनाउनुपर्छ?',
      a: lang === 'en'
        ? 'Farmers must always wear complete Personal Protective Equipment (gloves, face mask, eye goggles, boots), spray during calm morning or late afternoon hours against the wind, strictly respect Pre-Harvest Intervals (PHI), and perform the 3-time triple-rinse method on empty containers before disposing of them responsibly.'
        : 'विषादी छर्दा सधैं पन्जा, मास्क, चस्मा र गमबुट लगाउनुहोस्। बिहान वा साँझ हावा नचलेको बेला हावाको दिशातर्फ पिठ्युँ फर्काएर स्प्रे गर्नुहोस्। तरकारी टिप्नुअघि पर्खनुपर्ने दिन (PHI) अनिवार्य पालना गर्नुहोस् र खाली बट्टालाई ३ पटक सफा पानीले पखाल्नुहोस्।'
    },
    {
      q: lang === 'en'
        ? 'Do you provide germination guarantees for vegetable and paddy seeds?'
        : 'के तपाईंको उन्नत तथा हाइब्रिड बीउमा उमार शक्तिको ग्यारेन्टी हुन्छ?',
      a: lang === 'en'
        ? 'Yes! All seeds distributed by Adarsh Beej Bhandar under ISP Seeds and our partner brands are officially tested for seed purity and carry a certified laboratory germination rate exceeding 90%. Each seed lot is sealed with lot numbers and harvest dates according to national seed quality guidelines.'
        : 'अवश्य! आदर्श बीज भण्डारबाट वितरित ISP Seeds तथा हाम्रा साझेदार कम्पनीका सबै बीउहरू प्रयोगशालाबाट परीक्षण गरिएका हुन्छन् जसको उमार शक्ति ९०% भन्दा बढी प्रमाणित गरिएको हुन्छ। प्रत्येक प्याकेटमा ब्याच नम्बर र परीक्षण मिति स्पष्ट उल्लेख हुन्छ।'
    },
    {
      q: lang === 'en'
        ? 'How can farmers identify genuine products and avoid counterfeit chemicals?'
        : 'नक्कली विषादी र बीउबाट जोगिन किसानले के कुरामा ध्यान दिनुपर्छ?',
      a: lang === 'en'
        ? 'All authentic bottles and seed bags distributed by Adarsh Beej Bhandar come with tamper-proof holographic seals, registered batch numbers, and official distribution markings. Always verify the seals and purchase from authorized agrovets and dealers.'
        : 'आदर्श बीज भण्डारबाट वितरित सामानमा कम्पनीको आधिकारिक होलोग्राम, सिलबन्दी बिर्को र ब्याच कोड हुन्छ। सिल च्यातिएको वा शंकास्पद उत्पादन खरिद नगर्नुहोस् र आधिकारिक डिलरबाट मात्र लिनुहोस्।'
    },
    {
      q: lang === 'en'
        ? 'When is the best time to apply SML Techno-Z and 90% Sulphur?'
        : 'एस.एम.एल. टेक्नो-जेड र सल्फर ९०% कहिले र कसरी प्रयोग गर्ने?',
      a: lang === 'en'
        ? 'SML Techno-Z (Zinc 33% + Sulphur 15%) is best applied as a basal broadcast during transplanting or early tillering with urea/DAP at 200 gm per Kattha to prevent Khaira disease. SML Fertis 90% Sulphur is ideal during land preparation for mustard and oilseeds at 175-200 gm per Kattha to maximize oil percentage.'
        : 'टेक्नो-जेड (जिंक र सल्फर) धान रोप्दा वा गाँज हाल्ने बेला प्रति कठ्ठा २०० ग्राम युरिया मलसँग मिसाएर छर्नुपर्छ, जसले खैरा रोग लाग्न दिँदैन। फर्टिस ९०% सल्फर तोरी रोप्ने बेला अन्तिम जोताइमा प्रति कठ्ठा १७५-२०० ग्राम हाल्दा तेलको मात्रा उल्लेख्य रूपमा बढ्छ।'
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 tracking-wider uppercase mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'en' ? 'Knowledge Hub & Clarifications' : 'किसान तथा व्यवसायी जिज्ञासा'}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-stone-600 text-sm mt-2 leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-emerald-800 transition-colors focus-visible:outline-hidden focus-visible:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
