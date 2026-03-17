"use client";

import { Clock } from "lucide-react";

export default function TreatmentProcess({ 
  steps = [],
  primaryColor = "#00A651",
  secondaryColor = "#0077C8"
}) {
  return (
    <section className="py-20 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: `${secondaryColor}15`, color: secondaryColor }}
          >
            <Clock className="w-4 h-4" />
            Step by Step
          </span>
          <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
            Treatment Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures safe and effective therapy
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: index % 2 === 0 ? primaryColor : secondaryColor }}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-200 mt-4" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <h3 className="text-xl font-bold text-[#0B0F19] mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
