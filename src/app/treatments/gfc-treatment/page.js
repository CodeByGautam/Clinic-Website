export const metadata = {
  title: "GFC Hair Treatment | Healthfusion Multispeciality Clinic",
  description: "Growth Factor Concentrate therapy for advanced hair regrowth and follicle stimulation.",
};

export default function GFCtreatmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">GFC Treatment</h1>
            <p className="text-lg text-gray-600 mb-8">Growth Factor Concentrate - Advanced therapy for hair regrowth</p>
            <button className="px-8 py-4 bg-[#00A651] text-white rounded-full font-semibold hover:bg-[#0077C8] transition-all duration-300">Book Consultation</button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">What is GFC Treatment?</h2>
              <p className="text-gray-600 mb-4">Growth Factor Concentrate (GFC) is an advanced hair restoration treatment that extracts high concentrations of growth factors from your own blood. It contains 7-10 times more growth factors than traditional PRP, making it highly effective for hair regrowth.</p>
              <p className="text-gray-600">GFC specifically targets hair follicles, activating dormant cells and stimulating new hair growth with faster and more visible results compared to conventional treatments.</p>
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
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">GFC vs PRP: Advantages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{title: "Higher Concentration", desc: "7-10x more growth factors than PRP", icon: "📊"}, {title: "Faster Results", desc: "Visible improvement in 2-3 months", icon: "⚡"}, {title: "Pure Growth Factors", desc: "No red blood cells, pure concentrate", icon: "🧪"}, {title: "Better Hair Density", desc: "Superior follicle stimulation", icon: "💪"}, {title: "Fewer Sessions", desc: "Achieve results with fewer treatments", icon: "📅"}, {title: "No Side Effects", desc: "Completely autologous and safe", icon: "🛡️"}].map((benefit, index) => (
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
            {[{step: "01", title: "Collection", desc: "Blood drawn in special tubes"}, {step: "02", title: "Processing", desc: "Advanced centrifugation for GFC"}, {step: "03", title: "Activation", desc: "Growth factors activated"}, {step: "04", title: "Injection", desc: "Delivered to scalp areas"}].map((item, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-4">Advanced Hair Regrowth</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Book your GFC Treatment today</p>
          <button className="px-8 py-4 bg-white text-[#00A651] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">Book Your Appointment</button>
        </div>
      </section>
    </main>
  );
}
