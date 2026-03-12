import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PopularTreatments from "@/components/PopularTreatments";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustedPartnerSection from "@/components/TrustedPartnerSection";
import DoctorsSection from "@/components/DoctorsSection";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <PopularTreatments />
      <BeforeAfterSlider />
      <WhyChooseUs />
      <TrustedPartnerSection />
      <DoctorsSection />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
