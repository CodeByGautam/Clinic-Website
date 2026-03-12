export const metadata = {
  title: "Skin Resurfacing Treatment | Healthfusion Multispeciality Clinic",
  description: "Advanced skin resurfacing treatments at Healthfusion Multispeciality Clinic. Improve skin texture, reduce scars, and rejuvenate your skin.",
};

export default function SkinResurfacingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
              Skin Resurfacing Treatment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your skin texture with our advanced resurfacing treatments. 
              Smooth scars, reduce pores, and reveal fresh, youthful skin.
            </p>
            <button className="px-8 py-4 bg-[#00A651] text-white rounded-full font-semibold hover:bg-[#0077C8] transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
                Renew Your Skin Surface
              </h2>
              <p className="text-gray-600 mb-4">
                Skin resurfacing treatments remove damaged outer layers of skin 
                to reveal smoother, healthier skin underneath. Ideal for treating 
                acne scars, fine lines, sun damage, and uneven texture.
              </p>
              <p className="text-gray-600">
                Our dermatologists use state-of-the-art laser and energy-based 
                devices to deliver precise, effective results with minimal downtime.
              </p>
            </div>
            <div className="bg-[#F7FAFC] rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Treatment Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">
            Our Resurfacing Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fractional Laser",
                description: "Target deep scars and wrinkles with precision fractional laser technology.",
              },
              {
                title: "CO2 Laser",
                description: "Comprehensive skin renewal for significant texture improvement.",
              },
              {
                title: "Microneedling",
                description: "Stimulate collagen production naturally for smoother skin texture.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
