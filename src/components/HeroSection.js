"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#1a1f2e] to-[#0077C8] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00A651] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0077C8] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-[#00A651] rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">FDA Approved Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Advanced{" "}
              <span className="text-[#00A651]">Skin</span> &{" "}
              <span className="text-[#0077C8]">Hair</span>{" "}
              Treatment Clinic
            </h1>

            <p className="text-xl text-white/80 max-w-lg">
              Safe dermatology treatments by certified experts. Experience the best in skin and hair care with state-of-the-art technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#00A651] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0077C8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Appointment
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300">
                Free Consultation
              </button>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-lg">100k+</p>
                <p className="text-white/70 text-sm">Happy Patients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Area */}
          <div className="relative">
            {/* Main Doctor Image Placeholder */}
            <div className="relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A651]/20 to-[#0077C8]/20 rounded-3xl"></div>
                <div className="absolute inset-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-[#00A651]/20 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#00A651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Expert Dermatologists</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00A651]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#00A651]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0B0F19] font-bold">15+ Years</p>
                    <p className="text-gray-500 text-sm">Experience</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0077C8]/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#0077C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#0B0F19] font-bold">Safe &</p>
                    <p className="text-[#00A651] text-sm font-semibold">Effective</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute right-8 -top-4 bg-white rounded-2xl p-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A651] to-[#0077C8] border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{String.fromCharCode(65 + i)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="text-[#0B0F19] font-bold">50+</p>
                    <p className="text-gray-500 text-xs">Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F7FAFC] to-transparent"></div>
    </section>
  );
}
