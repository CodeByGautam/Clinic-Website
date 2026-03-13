export const metadata = {
  title: "Organic Peels Treatment | Healthfusion Multispeciality Clinic",
  description: "Natural, chemical-free organic peels for gentle skin rejuvenation and renewal at Healthfusion Clinic.",
};

export default function OrganicPeelsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
              Organic Peels
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Natural, chemical-free exfoliation using organic ingredients for gentle skin renewal
            </p>
            <button className="px-8 py-4 bg-[#0077C8] text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300">
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
                What are Organic Peels?
              </h2>
              <p className="text-gray-600 mb-4">
                Organic peels are natural exfoliation treatments that use fruit enzymes, plant extracts, and natural acids to remove dead skin cells and reveal fresh, radiant skin underneath. Unlike chemical peels, organic peels are gentle and free from harsh synthetic chemicals.
              </p>
              <p className="text-gray-600">
                These peels harness the power of nature using ingredients like papaya, pineapple, pumpkin, and various botanical extracts to gently dissolve dead skin cells, promote cell turnover, and improve overall skin texture and tone.
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
            Benefits of Organic Peels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "100% Natural",
                description: "Free from synthetic chemicals and harsh ingredients",
                icon: "🌿"
              },
              {
                title: "Gentle Exfoliation",
                description: "Removes dead skin cells without irritation or redness",
                icon: "🍃"
              },
              {
                title: "Brightens Skin",
                description: "Reveals a brighter, more radiant complexion",
                icon: "✨"
              },
              {
                title: "Unclogs Pores",
                description: "Deep cleanses and minimizes pore appearance",
                icon: "🧽"
              },
              {
                title: "Anti-Ageing",
                description: "Reduces fine lines and promotes youthful skin",
                icon: "🌸"
              },
              {
                title: "Safe for All",
                description: "Suitable for sensitive and all skin types",
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
            Treatment Steps
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Skin analysis to select the right organic peel" },
              { step: "02", title: "Cleansing", desc: "Deep cleanse to prepare skin for treatment" },
              { step: "03", title: "Peel Application", desc: "Application of organic peel solution" },
              { step: "04", title: "Nourishment", desc: "Hydration with natural serums" }
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
                q: "What ingredients are used in organic peels?",
                a: "We use natural ingredients like papaya enzymes, pineapple extracts, pumpkin enzymes, lactic acid from milk, and various botanical extracts."
              },
              {
                q: "Is there any downtime after organic peel?",
                a: "No, organic peels typically have no downtime. You may experience slight tingling during treatment but can resume normal activities immediately."
              },
              {
                q: "How often should I get an organic peel?",
                a: "We recommend getting organic peels every 2-4 weeks for optimal results and maintenance."
              },
              {
                q: "Can pregnant women get organic peels?",
                a: "Yes, organic peels are generally safe for pregnant women as they are chemical-free and use natural ingredients."
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
            Experience Natural Skin Renewal
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Book your Organic Peel treatment and discover the power of natural skincare
          </p>
          <button className="px-8 py-4 bg-white text-[#0077C8] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Book Your Appointment
          </button>
        </div>
      </section>
    </main>
  );
}
