import Image from "next/image";
import { Star } from "lucide-react";

export const metadata = {
  title: 'Patient Testimonials | AyuMed Clinic',
  description: 'Read what our patients say about their experience at AyuMed Clinic.',
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      text: "I had severe acne issues for years. The combination of Ayurvedic treatment and modern dermatology at AyuMed completely transformed my skin. Highly recommended!",
      rating: 5,
      image: "/images/testimonials/priya.jpg"
    },
    {
      id: 2,
      name: "Rahul Patel",
      text: "The Panchakarma therapy here is authentic and effective. The doctors are knowledgeable and the facilities are world-class. Best Ayurveda clinic in Pune!",
      rating: 5,
      image: "/images/testimonials/rahul.jpg"
    },
    {
      id: 3,
      name: "Anita Desai",
      text: "Dr. Shruti's approach to my hair fall problem was thorough and personalized. The PRP treatment worked wonders. Thank you AyuMed team!",
      rating: 5,
      image: "/images/testimonials/anita.jpg"
    }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#0077C8]/10 text-[#0077C8] text-sm font-semibold mb-4">
          Testimonials
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          What Our Patients Say
        </h1>
        <p className="text-gray-600 mb-8">
          Real stories from patients who transformed their skin health with us
        </p>

        <div className="space-y-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 mb-4 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              
              {/* Patient Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#0B0F19]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Patient</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
