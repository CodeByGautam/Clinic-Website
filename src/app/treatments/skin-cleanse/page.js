export const metadata = {
  title: "Skin Cleanse Treatment | Healthfusion Multispeciality Clinic",
  description: "Purify and rejuvenate your skin with our deep cleansing treatments at Healthfusion Multispeciality Clinic. Professional skincare solutions for radiant, healthy skin.",
};

export default function SkinCleanseTreatmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A651]/5 to-[#0077C8]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0B0F19] mb-6">
              Skin Cleanse Treatment
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Purify and rejuvenate your skin with our deep cleansing treatments
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
                Understanding Skin Cleanse Treatment
              </h2>
              <p className="text-gray-600 mb-4">
                Our Skin Cleanse Treatment is a comprehensive facial therapy designed to deeply 
                purify your skin, removing impurities, excess oil, and dead skin cells. This 
                professional treatment leaves your skin feeling refreshed, revitalized, and glowing.
              </p>
              <p className="text-gray-600">
                Using advanced techniques and premium skincare products, our estheticians provide 
                a customized cleanse that addresses your specific skin concerns and type.
              </p>
            </div>
            <div className="bg-[#F7FAFC] rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p>Skin Cleanse Treatment Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Features */}
      <section className="py-20 bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0B0F19] text-center mb-12">
            What's Included in Your Treatment
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Pore Cleansing",
                description: "Thorough removal of impurities and excess oil from deep within pores.",
                icon: "🫧"
              },
              {
                title: "Gentle Exfoliation",
                description: "Removal of dead skin cells to reveal brighter, smoother skin.",
                icon: "✨"
              },
              {
                title: "Customized Approach",
                description: "Tailored to your specific skin type and concerns.",
                icon: "🎯"
              },
              {
                title: "Hydration Boost",
                description: "Restores moisture balance for soft, supple skin.",
                icon: "💧"
              },
              {
                title: "Professional Extraction",
                description: "Safe and effective removal of blackheads and impurities.",
                icon: "🔬"
              },
              {
                title: "Expert Guidance",
                description: "Personalized skincare advice from experienced estheticians.",
                icon: "👩‍⚕️"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0B0F19] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-[#00A651]/10 to-[#0077C8]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#0B0F19] mb-4">
                  Benefits of Skin Cleanse Treatment
                </h3>
                <ul className="space-y-3">
                  {[
                    "Immediate improvement in skin texture and appearance",
                    "Reduced pore size and clearer complexion",
                    "Enhanced product absorption",
                    "Prevention of future breakouts",
                    "Relaxing and rejuvenating experience"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#00A651] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-[#0B0F19] mb-4">
                Why Choose Our Skin Cleanse?
              </h2>
              <p className="text-gray-600 mb-4">
                Our Skin Cleanse Treatment goes beyond basic cleansing. We use medical-grade 
                products and advanced techniques to ensure optimal results for your skin.
              </p>
              <p className="text-gray-600 mb-6">
                Each treatment is performed by our certified estheticians who have extensive 
                experience in various skin types and conditions. We ensure your comfort while 
                delivering exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#00A651] text-white rounded-full font-semibold hover:bg-[#0077C8] transition-all duration-300">
                  Book Now
                </button>
                <button className="px-6 py-3 border-2 border-[#00A651] text-[#00A651] rounded-full font-semibold hover:bg-[#00A651] hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A651] to-[#0077C8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Refreshed, Radiant Skin?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your Skin Cleanse Treatment today and experience the difference 
            professional skincare can make.
          </p>
          <button className="px-8 py-4 bg-white text-[#00A651] rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Book Your Treatment
          </button>
        </div>
      </section>
    </main>
  );
}
