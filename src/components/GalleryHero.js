"use client";

import { ImageIcon } from "lucide-react";

export default function GalleryHero({ 
  title, 
  subtitle, 
  description,
  primaryColor = "#00A651",
  secondaryColor = "#0077C8"
}) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#F7FAFC] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
          >
            <ImageIcon className="w-4 h-4" />
            Clinic Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            {subtitle}
          </p>
          {description && (
            <p className="text-gray-500 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20" 
        style={{ backgroundColor: primaryColor }}
      />
      <div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20" 
        style={{ backgroundColor: secondaryColor }}
      />
    </section>
  );
}
