import Image from "next/image";
import { CheckCircle2, Star } from "lucide-react";

export const metadata = {
  title: 'Our Story | AyuMed Clinic',
  description: 'Discover the journey of AyuMed Clinic - bridging traditional Ayurvedic healing with modern dermatology science.',
};

export default function OurStoryPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#0077C8]/10 text-[#0077C8] text-sm font-semibold mb-4">
          Our Story
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-6">
          Welcome to AyuMed Skin & Hair Clinic
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00A651] to-[#0077C8] rounded-full mb-8" />
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Founded with the vision to bridge traditional Ayurvedic healing with modern dermatology 
              science, our clinic provides a holistic approach to skin and hair care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe that true skin health comes from treating the root cause, not just the symptoms. 
              With thousands of satisfied patients and years of clinical expertise, we provide treatments 
              that are safe, effective and personalized.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our journey began with a simple mission: to make authentic Ayurvedic treatments and 
              advanced dermatology accessible to everyone seeking holistic skin and hair care solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-40 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/clinic/treatment-modern.jpg"
                alt="Modern Treatment Room"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <div className="relative h-40 rounded-xl overflow-hidden shadow-lg mt-4">
              <Image
                src="/images/clinic/healing-env.jpg"
                alt="Healing Environment"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 bg-[#F7FAFC] px-4 py-3 rounded-xl">
            <div className="w-10 h-10 bg-[#00A651]/10 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-[#00A651]" />
            </div>
            <div>
              <p className="font-bold text-[#0B0F19]">1000+</p>
              <p className="text-sm text-gray-500">Happy Patients</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#F7FAFC] px-4 py-3 rounded-xl">
            <div className="w-10 h-10 bg-[#0077C8]/10 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-[#0077C8]" />
            </div>
            <div>
              <p className="font-bold text-[#0B0F19]">15+ Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
