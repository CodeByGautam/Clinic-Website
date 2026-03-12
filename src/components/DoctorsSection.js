"use client";

import Image from "next/image";

export default function DoctorsSection() {
  const doctors = [
    {
      name: "Dr. Ajay Devershi",
      specialization: "MBBS, DNB (General Surgery) - General Surgeon, Laparoscopic Surgeon",
      experience: "12 years",
      image: "/dr.ajay.webp",
      rating: 4.9,
    },
    {
      name: "Dr. Shruti Jadhav Devershi",
      specialization: "MBBS, DDVL — Specializes in Dermatology, Costmetology, Trichology",
      experience: "10 years",
      image: "/Dr.Shruti.jpg",
      rating: 4.9,
    },
    {
      name: "Dr. Shubhi Rao",
      specialization: "BAMS, M.D. — Specialized in Ayurveda",
      experience: "15 years",
      image: "/shubhi.jpg",
      rating: 4.5,
    }, 
    
    {
      name: "Dr. Vikram Singh",
      specialization: "Laser Specialist",
      experience: "14 years",
      image: "/doctor4.jpg",
      rating: 4.8,
    },
  ];

  return (
    <section id="clinics" className="py-24 bg-[#F7FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#00A651]/10 text-[#00A651] rounded-full text-sm font-semibold mb-4">
            Our Experts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experienced dermatologists and specialists dedicated to your skin and hair health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-[#0B0F19]">{doctor.rating}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0B0F19] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-[#00A651] font-medium mb-2">
                  {doctor.specialization}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {doctor.experience} experience
                </p>
                <button className="w-full py-3 bg-[#0B0F19] text-white rounded-full font-semibold hover:bg-[#00A651] transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-[#0B0F19] text-[#0B0F19] rounded-full font-semibold hover:bg-[#0B0F19] hover:text-white transition-all duration-300">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
}
