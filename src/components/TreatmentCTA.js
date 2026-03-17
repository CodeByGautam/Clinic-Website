"use client";

import { Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function TreatmentCTA({ 
  title = "Start Your Ayurvedic Healing Journey",
  subtitle = "Book your consultation today and experience the benefits of authentic Ayurvedic therapy",
  primaryColor = "#00A651",
  secondaryColor = "#0077C8"
}) {
  return (
    <section id="book" className="py-20" style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0B0F19] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Book Appointment
          </Link>
          <a
            href="tel:+919270216369"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
