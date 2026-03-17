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

export default function Home() {
  return (
    <>
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
    </>
  );
}
