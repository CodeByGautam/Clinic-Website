export const metadata = {
  title: "MNRF Treatment | Healthfusion Multispeciality Clinic",
  description: "Microneedling RF (MNRF) treatment for skin tightening, scar reduction, and collagen stimulation.",
};

export default function MnrftreatmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">MNRF Treatment</h1>
            <p className="text-lg text-gray-600 mb-8">Microneedling with Radio Frequency for advanced skin rejuvenation and tightening</p>
            <button className="px-8 py-4 bg-[#0077C8] text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">Book Consultation</button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">What is MNRF?</h2>
              <p className="text-gray-600 mb-4">Microneedling Radio Frequency (MNRF) is an advanced cosmetic procedure that combines traditional microneedling with radiofrequency energy. This dual-action treatment creates controlled micro-injuries while delivering heat energy deep into the skin.</p>
              <p className="text-gray-600">The result is enhanced collagen production, skin tightening, and improvement in various skin concerns including scars, wrinkles, and enlarged pores.</p>
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

      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">Treatment Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{title: "Skin Tightening", desc: "RF energy stimulates collagen for firmer skin", icon: "🧬"}, {title: "Scar Reduction", desc: "Effective for acne and surgical scars", icon: "🩹"}, {title: "Wrinkle Reduction", desc: "Smooths fine lines and deep wrinkles", icon: "✨"}, {title: "Pore Minimization", desc: "Reduces enlarged pores significantly", icon: "🔍"}, {title: "Collagen Boost", desc: "Stimulates natural collagen production", icon: "💪"}, {title: "Minimal Downtime", desc: "Quick recovery with lasting results", icon: "⚡"}].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">Treatment Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[{step: "01", title: "Numbing", desc: "Topical anesthesia for comfort"}, {step: "02", title: "Microneedling", desc: "Controlled micro-injuries created"}, {step: "03", title: "RF Delivery", desc: "Heat energy delivered to deep layers"}, {step: "04", title: "Recovery", desc: "Post-care instructions provided"}].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A651] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Transform Your Skin Today</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Book your MNRF treatment consultation</p>
          <button className="px-8 py-4 bg-white text-[#0077C8] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">Book Your Appointment</button>
        </div>
      </section>
    </main>
  );
}
