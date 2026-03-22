import GalleryHero from "@/components/GalleryHero";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Ayurveda Consultation Sessions Gallery | Expert Consultations",
  description: "View our Ayurvedic consultation sessions where experienced doctors conduct Nadi Parikshan, Prakriti analysis, and personalized treatment planning.",
};

export default function AyurvedaConsultationPage() {
  const galleryImages = [
    {
      src: "/images/ayurveda/consultation/nadi-parikshan.jpg",
      title: "Nadi Parikshan",
      caption: "Pulse diagnosis examination",
      description: "Expert Ayurvedic doctor performing Nadi Parikshan (pulse diagnosis) to assess the patient's dosha balance and health condition."
    },
    {
      src: "/images/ayurveda/consultation/prakriti-analysis.jpg",
      title: "Prakriti Analysis",
      caption: "Body constitution assessment",
      description: "Detailed Prakriti Parikshan session to determine the patient's unique body constitution and个性化 treatment approach."
    },
    {
      src: "/images/ayurveda/consultation/doctor-patient.jpg",
      title: "Doctor Consultation",
      caption: "One-on-one consultation",
      description: "Personalized consultation session where our experienced Ayurvedic doctors discuss health concerns and treatment options."
    },
    // {
    //   src: "/images/ayurveda/consultation/tongue-diagnosis.jpg",
    //   title: "Tongue Examination",
    //   caption: "Jihva Pariksha",
    //   description: "Traditional tongue diagnosis to assess digestive health and identify doshic imbalances in the body."
    // },
    // {
    //   src: "/images/ayurveda/consultation/treatment-planning.jpg",
    //   title: "Treatment Planning",
    //   caption: "Personalized protocol design",
    //   description: "Doctors creating customized treatment plans based on comprehensive diagnosis and individual health goals."
    // },
    // {
    //   src: "/images/ayurveda/consultation/follow-up.jpg",
    //   title: "Follow-up Session",
    //   caption: "Progress monitoring",
    //   description: "Regular follow-up consultations to monitor treatment progress and make necessary adjustments to the therapy protocol."
    // }
  ];

  return (
    <main className="min-h-screen bg-white">
      <GalleryHero
        title="Ayurveda Consultation Sessions"
        subtitle="Expert diagnosis and personalized care"
        description="Our consultation sessions combine ancient diagnostic techniques like Nadi Parikshan with modern understanding to provide accurate assessments and personalized treatment plans."
      />

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#0B0F19] mb-4">Comprehensive Ayurvedic Diagnosis</h2>
            <p className="text-gray-600 leading-relaxed">
              Our consultation sessions are the foundation of effective Ayurvedic treatment. Using traditional 
              diagnostic methods like Nadi Parikshan (pulse diagnosis), Jihva Pariksha (tongue examination), 
              and Prakriti analysis, our experienced doctors gain deep insights into your health condition. 
              This comprehensive assessment allows us to create personalized treatment plans that address 
              the root cause of health issues rather than just symptoms.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </main>
  );
}
