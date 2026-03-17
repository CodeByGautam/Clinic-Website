import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Facial Treatment Machines Gallery | Advanced Facial Equipment",
  description: "Explore our advanced facial treatment machines including LED therapy systems, high-frequency devices, galvanic machines, and ultrasonic skin scrubbers.",
};

export default function FacialMachinesPage() {
  const galleryImages = [
    {
      src: "/images/machines/facial-machines/led-system.jpg",
      title: "LED Light Therapy System",
      caption: "Multi-wavelength phototherapy",
      description: "Professional LED system with red, blue, and near-infrared wavelengths for acne treatment, anti-aging, and skin healing."
    },
    {
      src: "/images/machines/facial-machines/high-frequency.jpg",
      title: "High-Frequency Device",
      caption: "Ozone therapy system",
      description: "High-frequency facial machine using thermal current and ozone for acne treatment, pore tightening, and improved circulation."
    },
    {
      src: "/images/machines/facial-machines/galvanic.jpg",
      title: "Galvanic Facial System",
      caption: "Iontophoresis technology",
      description: "Advanced galvanic machine for deep product penetration, deep cleansing, and enhanced skincare product absorption."
    },
    {
      src: "/images/machines/facial-machines/ultrasonic.jpg",
      title: "Ultrasonic Scrubber",
      caption: "Skin spatula technology",
      description: "Ultrasonic skin scrubber using high-frequency vibrations for gentle exfoliation, blackhead removal, and deep pore cleansing."
    },
    {
      src: "/images/machines/facial-machines/hydro-dermabrasion.jpg",
      title: "Hydro-Dermabrasion",
      caption: "Water-based exfoliation",
      description: "Advanced hydro-dermabrasion system combining water, oxygen, and exfoliation for gentle yet effective skin resurfacing."
    },
    {
      src: "/images/machines/facial-machines/cryo-facial.jpg",
      title: "Cryo Facial Device",
      caption: "Cold therapy system",
      description: "Localized cryotherapy device for facial treatments to reduce puffiness, tighten skin, and enhance product absorption."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Facial Treatment Machines"
        subtitle="Professional equipment for premium facials"
        description="Our clinic features professional-grade facial machines for LED therapy, deep cleansing, product infusion, and advanced facial rejuvenation treatments."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Professional Facial Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              Our facial treatment machines combine multiple technologies for comprehensive skincare 
              solutions. From LED light therapy and high-frequency treatments to ultrasonic cleansing 
              and galvanic infusion, each device is selected for proven effectiveness. These machines 
              enable our aestheticians to deliver medical-grade facial treatments that address multiple 
              skin concerns simultaneously for optimal results.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
