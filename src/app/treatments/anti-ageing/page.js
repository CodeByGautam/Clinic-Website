export const metadata = {
  title: "Anti-Ageing Treatment | Healthfusion Multispeciality Clinic",
  description: "Advanced anti-ageing treatments at Healthfusion Multispeciality Clinic. Reduce wrinkles, fine lines, and restore youthful skin.",
};

export default function AntiAgeingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
              Anti-Ageing Treatment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Turn back the clock with our advanced anti-ageing treatments. 
              Rejuvenate your skin and restore your youthful glow.
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
            <div className="order-2 md:order-1 bg-[#F7FAFC] rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Treatment Image Placeholder</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
                Reverse Signs of Ageing
              </h2>
              <p className="text-gray-600 mb-4">
                As we age, our skin loses collagen and elasticity, leading to 
                wrinkles, fine lines, and sagging. Our anti-ageing treatments 
                are designed to stimulate collagen production and restore skin vitality.
              </p>
              <p className="text-gray-600">
                We combine cutting-edge technology with proven techniques to deliver 
                natural-looking, long-lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">
            Our Anti-Ageing Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Botox & Fillers",
                description: "Smooth wrinkles and restore volume with our expert injectable treatments.",
              },
              {
                title: "Laser Resurfacing",
                description: "Stimulate collagen and improve skin texture with advanced laser technology.",
              },
              {
                title: "PRP Therapy",
                description: "Harness your body's natural healing power for skin rejuvenation.",
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
