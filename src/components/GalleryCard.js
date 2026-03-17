"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";

export default function GalleryCard({ 
  image, 
  index, 
  onClick,
  primaryColor = "#00A651"
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(index)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
            <p className="text-white/80 text-sm">{image.caption}</p>
          </div>
          
          {/* Zoom Icon */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            style={{ backgroundColor: primaryColor }}
          >
            <ZoomIn className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 bg-white">
        <h3 className="font-semibold text-[#0B0F19] mb-1 group-hover:text-[#0077C8] transition-colors">
          {image.title}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2">{image.description}</p>
      </div>
    </div>
  );
}
