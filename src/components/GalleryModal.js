"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";

export default function GalleryModal({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrev 
}) {
  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="absolute left-6 z-10 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        disabled={currentIndex === images.length - 1}
        className="absolute right-6 z-10 p-3 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container */}
      <div className="max-w-5xl max-h-[80vh] w-full mx-6">
        <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden">
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        
        {/* Image Info */}
        <div className="mt-6 text-center text-white">
          <h3 className="text-xl font-semibold mb-2">{currentImage.title}</h3>
          <p className="text-white/70">{currentImage.description}</p>
          <p className="text-white/50 text-sm mt-2">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
}
