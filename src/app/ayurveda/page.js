import Image from "next/image";
import CategorySection from "@/components/CategorySection";
import ConsultationBanner from "@/components/ConsultationBanner";
import { treatments } from "@/data/treatments";

export const metadata = {
  title: "Ayurveda Treatments | AyuMed Clinic",
  description:
    "Explore authentic Ayurveda treatments including diagnosis, detox therapies, and restorative Panchakarma programs.",
};

export default function AyurvedaPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Ayurved_detox.jpeg"
            alt="Ayurveda Treatments"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E]/85 via-[#0B3D2E]/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm text-white/90 text-sm font-semibold">
              Natural Healing
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ayurveda Treatments
            </h1>
            <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
              Personalized Ayurveda care designed around your body constitution. Explore diagnosis, detox therapies, and classic treatments to restore balance.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-white/90 text-sm">
              <span className="rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm">
                15+ Years Experience
              </span>
              <span className="rounded-full bg-white/10 border border-white/15 px-4 py-2 backdrop-blur-sm">
                10+ Clinics
              </span>
            </div>
          </div>
        </div>
      </section>

      <CategorySection
        title="Explore Ayurveda"
        subtitle="Tap a treatment to see details, benefits, and how we guide your care."
        items={treatments.ayurveda}
        theme="ayurveda"
        defaultImage="/ayurveda-hair-scalp.jpg"
      />

      <ConsultationBanner theme="ayurveda" />
    </main>
  );
}
