import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Skin Treatment Machines Gallery | Advanced Dermatology Equipment",
  description: "Explore our advanced skin treatment machines including Hydrafacial systems, microdermabrasion devices, microneedling equipment, and skin analysis technology.",
};

export default function SkinTreatmentMachinesPage() {
  const galleryImages = [
    {
      src: "/images/machines/skin-treatment/hydrafacial.jpg",
      title: "Hydrafacial MD System",
      caption: "Vortex-fusion technology",
      description: "Medical-grade Hydrafacial MD system with vortex-fusion technology for deep cleansing, extraction, and hydration."
    },
    {
      src: "/images/machines/skin-treatment/microdermabrasion.jpg",
      title: "Diamond Microdermabrasion",
      caption: "Crystal-free exfoliation",
      description: "Advanced diamond tip microdermabrasion system for gentle yet effective skin exfoliation and rejuvenation."
    },
    {
      src: "/images/machines/skin-treatment/microneedling.jpg",
      title: "Microneedling Device",
      caption: "Dermapen technology",
      description: "Professional microneedling device with adjustable needle depth for collagen induction and scar treatment."
    },
    {
      src: "/images/machines/skin-treatment/oxygeneo.jpg",
      title: "Oxygeneo System",
      caption: "3-in-1 super facial",
      description: "Advanced Oxygeneo platform combining exfoliation, infusion, and oxygenation for comprehensive facial rejuvenation."
    },
    {
      src: "/images/machines/skin-treatment/dermalogica.jpg",
      title: "Skin Analysis System",
      caption: "Digital skin diagnosis",
      description: "Professional skin analysis device with UV photography for detailed assessment of surface and subsurface skin conditions."
    },
    {
      src: "/images/machines/skin-treatment/cryotherapy.jpg",
      title: "Cryotherapy Unit",
      caption: "Cold therapy system",
      description: "Localized cryotherapy device for reducing inflammation, tightening pores, and enhancing skin metabolism."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Skin Treatment Machines"
        subtitle="Advanced technology for superior results"
        description="Our clinic features the latest skin treatment technology for deep cleansing, exfoliation, rejuvenation, and comprehensive skin analysis."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Technology Meets Skincare</h2>
            <p className="text-gray-600 leading-relaxed">
              Our skin treatment machines represent the latest advancements in dermatological technology. 
              From the multi-step Hydrafacial system to advanced microneedling devices, each machine is 
              carefully selected for proven effectiveness and safety. We regularly upgrade our equipment 
              to ensure our patients receive the most advanced treatments available in modern skincare.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
