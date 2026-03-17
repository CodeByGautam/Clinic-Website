import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Hair Treatment Machines Gallery | Advanced Hair Care Equipment",
  description: "Explore our advanced hair treatment machines including PRP systems, GFC technology, hair transplant equipment, and laser therapy devices for hair restoration.",
};

export default function HairTreatmentMachinesPage() {
  const galleryImages = [
    {
      src: "/images/machines/hair-treatment/prp-centrifuge.jpg",
      title: "PRP Centrifuge System",
      caption: "Platelet-rich plasma processing",
      description: "Medical-grade centrifuge system for processing Platelet-Rich Plasma (PRP) used in hair restoration and facial rejuvenation treatments."
    },
    {
      src: "/images/machines/hair-treatment/gfc-system.jpg",
      title: "GFC Technology",
      caption: "Growth factor concentrate",
      description: "Advanced GFC (Growth Factor Concentrate) system that extracts and concentrates growth factors for enhanced hair regrowth results."
    },
    {
      src: "/images/machines/hair-treatment/fue-system.jpg",
      title: "FUE Hair Transplant System",
      caption: "Follicular unit extraction",
      description: "Precision FUE hair transplant system with motorized punch for minimally invasive hair restoration procedures."
    },
    {
      src: "/images/machines/hair-treatment/laser-helmet.jpg",
      title: "Laser Hair Therapy Helmet",
      caption: "LLLT for hair regrowth",
      description: "Low-Level Laser Therapy (LLLT) helmet delivering 650nm laser light to stimulate hair follicles and promote regrowth."
    },
    {
      src: "/images/machines/hair-treatment/mesotherapy.jpg",
      title: "Mesotherapy Device",
      caption: "Nutrient infusion system",
      description: "Electronic mesotherapy gun for precise delivery of growth factors, vitamins, and nutrients directly to hair follicles."
    },
    {
      src: "/images/machines/hair-treatment/hair-analyzer.jpg",
      title: "Digital Hair Analyzer",
      caption: "Trichoscopy system",
      description: "Advanced digital hair and scalp analysis system with high-resolution imaging for accurate diagnosis of hair conditions."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Hair Treatment Machines"
        subtitle="Advanced technology for hair restoration"
        description="Our clinic features cutting-edge hair treatment equipment for PRP therapy, hair transplantation, laser regrowth, and comprehensive hair analysis."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Innovation in Hair Restoration</h2>
            <p className="text-gray-600 leading-relaxed">
              Our hair treatment machines represent the latest advancements in trichology and hair restoration 
              technology. From PRP and GFC systems to precision FUE transplant equipment and laser therapy 
              devices, we offer comprehensive solutions for hair loss. Each machine is operated by trained 
              specialists to ensure safe, effective treatments tailored to individual hair restoration needs.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
