import { Stethoscope, Leaf, UserCheck } from "lucide-react";

export const metadata = {
  title: 'Our Approach | AyuMed Clinic',
  description: 'Learn about our unique approach combining expert diagnosis, natural healing, and personalized care.',
};

export default function OurApproachPage() {
  const approaches = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Expert Diagnosis",
      description: "Our dermatologists carefully analyze your skin condition before recommending the right treatment. We use advanced diagnostic tools to understand the root cause of your concerns.",
      color: "#0077C8"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural Healing",
      description: "We combine Ayurvedic remedies with safe dermatology treatments for holistic care. Our treatments use natural ingredients alongside modern medical solutions.",
      color: "#00A651"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Personalized Care",
      description: "Every treatment plan is customized based on your skin type, lifestyle and health condition. No two patients receive the same treatment.",
      color: "#0077C8"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#0077C8]/10 text-[#0077C8] text-sm font-semibold mb-4">
          Our Approach
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          How We Deliver Results
        </h1>
        <p className="text-gray-600 mb-8">
          Our unique methodology combines the best of traditional and modern medicine
        </p>

        <div className="space-y-6">
          {approaches.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex gap-6 items-start"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}15`, color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0B0F19] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
