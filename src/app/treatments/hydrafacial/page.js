export const metadata = {
  title: "Hydrafacial Treatment | Healthfusion Multispeciality Clinic",
  description: "Experience the ultimate Hydrafacial treatment at Healthfusion. Deep cleansing, exfoliation, and hydration for glowing, radiant skin.",
};

export default function HydrafacialPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
              Hydrafacial Treatment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Deep cleanse, exfoliate, and hydrate your skin with our advanced Hydrafacial technology for an instant glow
            </p>
            <button className="px-8 py-4 bg-[#00A651] text-white rounded-full font-semibold hover:bg-[#0077C8] transition-all duration-300">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
                What is Hydrafacial?
              </h2>
              <p className="text-gray-600 mb-4">
                Hydrafacial is a revolutionary, non-invasive skin resurfacing treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously. This multi-step treatment removes dead skin cells and impurities while delivering nourishing serums to the skin.
              </p>
              <p className="text-gray-600">
                Suitable for all skin types, Hydrafacial delivers instant, noticeable results with no downtime or irritation. It is the perfect treatment for achieving that coveted healthy, glowing complexion.
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Cleansing",
                description: "Removes dirt, oil, and impurities from deep within pores",
                icon: "🧼"
              },
              {
                title: "Intense Hydration",
                description: "Delivers nourishing serums for plump, hydrated skin",
                icon: "💧"
              },
              {
                title: "Instant Glow",
                description: "Achieve radiant, glowing skin immediately after treatment",
                icon: "✨"
              },
              {
                title: "No Downtime",
                description: "Resume normal activities immediately after the session",
                icon: "⚡"
              },
              {
                title: "Anti-Ageing",
                description: "Reduces fine lines and improves skin texture",
                icon: "🌟"
              },
              {
                title: "All Skin Types",
                description: "Safe and effective for every skin type and concern",
                icon: "🛡️"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procedure Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">
            Treatment Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Cleansing", desc: "Deep cleansing to remove surface impurities" },
              { step: "02", title: "Exfoliation", desc: "Gentle exfoliation to remove dead skin cells" },
              { step: "03", title: "Extraction", desc: "Painless suction to clear congested pores" },
              { step: "04", title: "Hydration", desc: "Infusion of antioxidants and hyaluronic acid" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#00A651] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How long does a Hydrafacial treatment take?",
                a: "A typical Hydrafacial session takes about 30-45 minutes, making it perfect for a lunch-break treatment."
              },
              {
                q: "Is there any downtime after the treatment?",
                a: "No, Hydrafacial has zero downtime. You can immediately apply makeup and resume normal activities."
              },
              {
                q: "How often should I get a Hydrafacial?",
                a: "For optimal results, we recommend monthly treatments to maintain healthy, glowing skin."
              },
              {
                q: "Is Hydrafacial suitable for sensitive skin?",
                a: "Yes, Hydrafacial is gentle and can be customized for all skin types, including sensitive skin."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#0B0F19] mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Glowing Skin?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your Hydrafacial treatment today and experience the transformation
          </p>
          <button className="px-8 py-4 bg-white text-[#00A651] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Book Your Appointment
          </button>
        </div>
      </section>
    </main>
  );
}
