import Image from "next/image";

export const metadata = {
  title: 'Clinic Tour | AyuMed Clinic',
  description: 'Take a virtual tour of our modern Ayurveda and Dermatology clinic facilities.',
};

export default function ClinicTourPage() {
  const clinicImages = [
    { src: "/clinic1.jpg", title: "Reception Area", alt: "Premium reception" },
    { src: "/clinic2.jpg", title: "Treatment Room", alt: "Modern treatment room" },
    { src: "/clinic4.jpg", title: "Consultation Room", alt: "Private consultation" },
    { src: "/clinic3.jpg", title: "Ayurveda Therapy", alt: "Traditional therapy room" }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#0077C8]/10 text-[#0077C8] text-sm font-semibold mb-4">
          Virtual Tour
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          Explore Our Clinics
        </h1>
        <p className="text-gray-600 mb-8">
          Take a glimpse of our modern facilities and healing environment
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {clinicImages.map((img, index) => (
            <div 
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold">{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
