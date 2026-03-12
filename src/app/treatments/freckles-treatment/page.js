export const metadata = {
  title: "Freckles Treatment | Healthfusion Multispeciality Clinic",
  description: "Effective freckles removal and reduction treatments at Healthfusion Clinic using advanced laser and light-based therapies.",
};

export default function FrecklesTreatmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">Freckles Treatment</h1>
            <p className="text-lg text-gray-600 mb-8">Safe and effective reduction of freckles for clear, even-toned skin</p>
            <button className="px-8 py-4 bg-[#00A651] text-white rounded-full font-semibold hover:bg-[#0077C8] transition-all duration-300">Book Consultation</button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">Understanding Freckles</h2>
              <p className="text-gray-600 mb-4">Freckles are small, concentrated spots of melanin that appear on sun-exposed skin. While harmless, many people seek treatment to reduce their appearance for a more even complexion.</p>
              <p className="text-gray-600">Our advanced treatments target excess melanin production and help fade freckles while preventing new ones from forming, giving you clearer, more radiant skin.</p>
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
            {[{title: "Laser Therapy", desc: "Targets melanin to fade freckles effectively", icon: "🔦"}, {title: "IPL Treatment", desc: "Broad spectrum light for even skin tone", icon: "💡"}, {title: "Chemical Peels", desc: "Exfoliates to reduce freckle appearance", icon: "🧪"}, {title: "Topical Creams", desc: "Medical-grade lightening agents", icon: "🧴"}, {title: "Sun Protection", desc: "Prevents new freckle formation", icon: "☀️"}, {title: "Combination Therapy", desc: "Multi-modal approach for best results", icon: "🎯"}].map((benefit, index) => (
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
            {[{step: "01", title: "Assessment", desc: "Skin analysis and treatment planning"}, {step: "02", title: "Preparation", desc: "Skin cleansing and numbing if needed"}, {step: "03", title: "Treatment", desc: "Laser or light-based therapy application"}, {step: "04", title: "Care", desc: "Post-treatment skincare guidance"}].map((item, index) => (
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
          <h2 className="text-3xl font-bold text-white mb-4">Get Clear, Even-Toned Skin</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Book your freckles treatment consultation today</p>
          <button className="px-8 py-4 bg-white text-[#00A651] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">Book Your Appointment</button>
        </div>
      </section>
    </main>
  );
}
