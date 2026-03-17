import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Dermatology Clinic Interior Gallery | Modern Facilities",
  description: "Explore our modern dermatology clinic interior featuring state-of-the-art facilities, comfortable treatment spaces, and advanced skincare technology.",
};

export default function DermatologyClinicPage() {
  const galleryImages = [
    {
      src: "/images/derma/clinic/reception.jpg",
      title: "Clinic Reception",
      caption: "Modern welcoming area",
      description: "Our contemporary reception area designed for patient comfort with modern aesthetics and efficient check-in facilities."
    },
    {
      src: "/images/derma/clinic/waiting-lounge.jpg",
      title: "Patient Lounge",
      caption: "Comfortable waiting area",
      description: "Spacious and comfortable waiting lounge with modern amenities for a relaxing pre-treatment experience."
    },
    {
      src: "/images/derma/clinic/consultation-suite.jpg",
      title: "Consultation Suite",
      caption: "Private examination rooms",
      description: "Modern consultation suites equipped with advanced diagnostic tools for comprehensive skin analysis."
    },
    {
      src: "/images/derma/clinic/sterilization-area.jpg",
      title: "Sterilization Area",
      caption: "Medical-grade hygiene standards",
      description: "Dedicated sterilization zone maintaining the highest medical hygiene standards for all equipment and tools."
    },
    {
      src: "/images/derma/clinic/product-display.jpg",
      title: "Skincare Product Center",
      caption: "Premium skincare products",
      description: "Curated selection of medical-grade skincare products and prescribed treatments available at our clinic."
    },
    {
      src: "/images/derma/clinic/pharmacy.jpg",
      title: "In-house Pharmacy",
      caption: "Convenient medication access",
      description: "Fully stocked pharmacy providing prescribed medications and post-treatment care products for patient convenience."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Dermatology Clinic Interior"
        subtitle="Modern facilities with advanced technology"
        description="Our dermatology clinic combines modern aesthetics with cutting-edge technology to provide the best skincare treatments in a comfortable and professional environment."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Modern Healing Environment</h2>
            <p className="text-gray-600 leading-relaxed">
              Our dermatology clinic interior reflects the perfect blend of modern medical aesthetics and 
              patient comfort. Every space is designed with hygiene, functionality, and patient experience 
              in mind. From our advanced consultation suites to our state-of-the-art treatment rooms, 
              we maintain the highest standards of medical excellence while ensuring a welcoming atmosphere 
              for all our patients.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
