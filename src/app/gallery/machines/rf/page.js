import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "RF & MNRF Machines Gallery | Radiofrequency Technology",
  description: "Explore our advanced RF and MNRF machines including radiofrequency skin tightening devices, microneedling RF systems, and combination therapy equipment.",
};

export default function RFMachinesPage() {
  const galleryImages = [
    {
      src: "/images/machines/rf/mnrf-device.jpg",
      title: "MNRF System",
      caption: "Microneedling RF technology",
      description: "Advanced Microneedling Radiofrequency (MNRF) device combining fractional microneedles with RF energy for scar treatment and skin tightening."
    },
    {
      src: "/images/machines/rf/fractional-rf.jpg",
      title: "Fractional RF System",
      caption: "Matrix RF technology",
      description: "Fractional RF system delivering radiofrequency energy through multiple pins for collagen remodeling and skin rejuvenation."
    },
    {
      src: "/images/machines/rf/monopolar-rf.jpg",
      title: "Monopolar RF Device",
      caption: "Deep tissue heating",
      description: "Monopolar radiofrequency device for deep dermal heating, skin tightening, and cellulite reduction treatments."
    },
    {
      src: "/images/machines/rf/bipolar-rf.jpg",
      title: "Bipolar RF System",
      caption: "Targeted skin tightening",
      description: "Bipolar RF technology for precise, targeted skin tightening with controlled energy delivery to specific tissue depths."
    },
    {
      src: "/images/machines/rf/rf-combination.jpg",
      title: "Multi-RF Platform",
      caption: "Combination therapy system",
      description: "Versatile multi-RF platform combining multiple radiofrequency modalities for comprehensive face and body contouring."
    },
    {
      src: "/images/machines/rf/cryo-rf.jpg",
      title: "Cryo-RF System",
      caption: "Thermal contrast therapy",
      description: "Advanced cryo-RF system combining cooling and radiofrequency for enhanced comfort and superior skin tightening results."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="RF & MNRF Machines"
        subtitle="Advanced radiofrequency technology"
        description="Our clinic features cutting-edge RF and MNRF devices for non-surgical skin tightening, scar revision, and advanced skin rejuvenation treatments."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Radiofrequency Excellence</h2>
            <p className="text-gray-600 leading-relaxed">
              Our RF and MNRF machines represent the latest in non-invasive skin tightening technology. 
              From Microneedling RF systems that combine collagen induction with radiofrequency energy, 
              to advanced fractional and monopolar devices, we offer comprehensive solutions for skin 
              laxity, scars, and aging. These technologies stimulate natural collagen production for 
              long-lasting, natural-looking results without surgery.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
