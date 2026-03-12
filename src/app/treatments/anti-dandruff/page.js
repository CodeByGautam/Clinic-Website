export const metadata = {
  title: "Anti-Dandruff Treatment | Healthfusion Multispeciality Clinic",
  description: "Comprehensive dandruff treatment solutions for a healthy, flake-free scalp.",
};

export default function AntiDandruffPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">Anti-Dandruff Treatment</h1>
            <p className="text-lg text-gray-600 mb-8">Effective solutions for dandruff, itchy scalp, and flaking</p>
            <button className="px-8 py-4 bg-[#00A651] text-white rounded-full font-semibold hover:bg-[#0077C8] transition-all duration-300">Book Consultation</button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">Understanding Dandruff</h2>
              <p className="text-gray-600 mb-4">Dandruff is a common scalp condition causing flaking and itching. It can be caused by dry skin, fungal infections, seborrheic dermatitis, or product buildup. Our comprehensive treatment targets the root cause for long-lasting relief.</p>
              <p className="text-gray-600">We offer customized treatment plans including medicated shampoos, scalp treatments, and advanced therapies to eliminate dandruff and restore scalp health.</p>
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
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">Treatment Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{title: "Scalp Analysis", desc: "Identify root cause of dandruff", icon: "🔬"}, {title: "Medicated Therapy", desc: "Anti-fungal and keratolytic treatments", icon: "🧴"}, {title: "Deep Cleansing", desc: "Remove buildup and flakes", icon: "🧽"}, {title: "Hydration", desc: "Restore scalp moisture balance", icon: "💧"}, {title: "Laser Therapy", desc: "Reduce inflammation and itchiness", icon: "🔦"}, {title: "Maintenance Plan", desc: "Prevent recurrence long-term", icon: "📋"}].map((benefit, index) => (
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
            {[{step: "01", title: "Diagnosis", desc: "Scalp examination and analysis"}, {step: "02", title: "Treatment", desc: "Customized therapy application"}, {step: "03", title: "Home Care", desc: "Prescribed products for use"}, {step: "04", title: "Follow-up", desc: "Monitor progress and adjust"}].map((item, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-4">Get a Flake-Free Scalp</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Book your Anti-Dandruff consultation today</p>
          <button className="px-8 py-4 bg-white text-[#00A651] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">Book Your Appointment</button>
        </div>
      </section>
    </main>
  );
}
