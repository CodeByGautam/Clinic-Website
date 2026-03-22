import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Laser Machines Gallery | Advanced Laser Technology",
  description: "Explore our state-of-the-art laser machines including diode lasers, CO2 fractional lasers, Q-switched lasers, and IPL systems for various dermatological treatments.",
};

export default function LaserMachinesPage() {
  const galleryImages = [
    {
      src: "/images/machines/laser/diode-laser.jpg",
      title: "Diode Laser System",
      caption: "810nm hair removal laser",
      description: "Advanced 810nm diode laser system for permanent hair reduction, suitable for all skin types with built-in cooling technology."
    },
    {
      src: "/images/machines/laser/co2-fractional.jpg",
      title: "Fractional CO2 Laser",
      caption: "Skin resurfacing technology",
      description: "UltraPulse fractional CO2 laser for advanced skin resurfacing, scar revision, and wrinkle reduction treatments."
    },
    {
      src: "/images/machines/laser/qswitched-ndyag.jpg",
      title: "Q-Switched Nd:YAG Laser",
      caption: "Tattoo & pigmentation laser",
      description: "High-powered Q-switched Nd:YAG laser for tattoo removal, pigmentation disorders, and carbon peel treatments."
    },
    // {
    //   src: "/images/machines/laser/ipl-system.jpg",
    //   title: "IPL System",
    //   caption: "Intense Pulsed Light technology",
    //   description: "Advanced IPL (Intense Pulsed Light) system for hair removal, skin rejuvenation, and vascular treatments."
    // },
    // {
    //   src: "/images/machines/laser/erbium-laser.jpg",
    //   title: "Erbium YAG Laser",
    //   caption: "Gentle skin resurfacing",
    //   description: "Erbium YAG laser for gentle skin resurfacing, mole removal, and precise ablative treatments with minimal downtime."
    // },
    // {
    //   src: "/images/machines/laser/picolaser.jpg",
    //   title: "PicoSure Laser",
    //   caption: "Picosecond technology",
    //   description: "Cutting-edge picosecond laser technology for faster tattoo removal, pigmentation treatment, and skin revitalization."
    // }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Laser Machines"
        subtitle="State-of-the-art laser technology"
        description="Our clinic is equipped with the latest FDA-approved laser systems operated by certified laser specialists for safe and effective treatments."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Cutting-Edge Laser Technology</h2>
            <p className="text-gray-600 leading-relaxed">
              We invest in the most advanced laser technology to deliver superior results for our patients. 
              Our comprehensive laser suite includes multiple wavelength systems for treating all skin types 
              and conditions. Each machine is regularly calibrated and maintained to ensure optimal performance 
              and safety. Our certified laser specialists are trained in the latest techniques to maximize 
              treatment effectiveness while ensuring patient comfort.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
