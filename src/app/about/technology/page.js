import Image from "next/image";

export const metadata = {
  title: 'Advanced Technology | AyuMed Clinic',
  description: 'Explore our state-of-the-art equipment for precise diagnosis and effective treatments.',
};

export default function TechnologyPage() {
  const machines = [
    { name: "Laser Hair Removal", image: "/images/machines/laser.jpg", desc: "FDA-approved diode laser" },
    { name: "Hydrafacial MD", image: "/images/machines/hydrafacial.jpg", desc: "Advanced vortex technology" },
    { name: "PRP Equipment", image: "/images/machines/prp.jpg", desc: "Medical-grade centrifuge" },
    { name: "Skin Analysis", image: "/images/machines/analyzer.jpg", desc: "Digital diagnosis system" }
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block px-4 py-2 rounded-full bg-[#00A651]/10 text-[#00A651] text-sm font-semibold mb-4">
          Technology
        </span>
        <h1 className="text-3xl font-bold text-[#0B0F19] mb-4">
          Advanced Technology
        </h1>
        <p className="text-gray-600 mb-8">
          State-of-the-art equipment for precise diagnosis and effective treatments
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {machines.map((machine, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md border border-gray-100"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[#F7FAFC]">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="font-bold text-[#0B0F19] mb-1">{machine.name}</h3>
              <p className="text-sm text-gray-500">{machine.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
