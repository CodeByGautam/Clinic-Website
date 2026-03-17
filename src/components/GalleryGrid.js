"use client";

import { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryModal from "./GalleryModal";

export default function GalleryGrid({ 
  images = [],
  primaryColor = "#00A651"
}) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const handleNext = () => {
    if (selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <>
      <section className="py-16 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <GalleryCard
                key={index}
                image={image}
                index={index}
                onClick={handleImageClick}
                primaryColor={primaryColor}
              />
            ))}
          </div>

          {/* Empty State */}
          {images.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images to display</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <GalleryModal
        images={images}
        currentIndex={selectedIndex || 0}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </>
  );
}
