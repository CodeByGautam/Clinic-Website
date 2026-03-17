import TreatmentFAQ from "@/components/TreatmentFAQ";

export const metadata = {
  title: 'FAQ | AyuMed Clinic',
  description: 'Find answers to common questions about our treatments and services at AyuMed Clinic.',
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What makes AyuMed different from other clinics?",
      answer: "AyuMed combines traditional Ayurvedic healing with modern dermatology treatments, offering a holistic approach to skin and hair care. Our dual-clinic concept ensures you get the best of both worlds."
    },
    {
      question: "Do you use natural ingredients in your treatments?",
      answer: "Yes, we prioritize natural and herbal ingredients in our Ayurvedic treatments while using clinically proven modern dermatology procedures. All our treatments are safe and FDA-approved."
    },
    {
      question: "How long does a typical consultation take?",
      answer: "Initial consultations usually take 30-45 minutes. Our doctors take time to understand your concerns, examine your condition, and recommend personalized treatment plans."
    },
    {
      question: "Are your treatments suitable for all skin types?",
      answer: "Yes, we offer customized treatments for all skin types and conditions. Our doctors carefully analyze your skin type before recommending any treatment."
    },
    {
      question: "What is Panchakarma therapy?",
      answer: "Panchakarma is a traditional Ayurvedic detoxification therapy that includes five main procedures to cleanse the body of toxins and restore balance."
    },
    {
      question: "Do you offer payment plans or EMI options?",
      answer: "Yes, we offer flexible payment options and EMI plans for major treatments. Our staff can help you choose the best payment option for your treatment."
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] text-sm font-semibold mb-4">
          FAQs
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mb-8">
          Find answers to common questions about our treatments and services
        </p>

        <TreatmentFAQ faqs={faqs} />
      </div>
    </div>
  );
}
