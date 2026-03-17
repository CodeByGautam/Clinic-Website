"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function TreatmentFAQ({ 
  faqs = [],
  primaryColor = "#00A651",
  secondaryColor = "#0077C8"
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${secondaryColor}15`, color: secondaryColor }}
          >
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </span>
          <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about this therapy
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-[#0B0F19]">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  style={{ color: primaryColor }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
