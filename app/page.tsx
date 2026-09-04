import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProofSection from "./components/sections/ProofSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import FeatureGridSection from "./components/sections/FeatureGridSection";
import RefusalSection from "./components/sections/RefusalSection";
import ShoppingSection from "./components/sections/ShoppingSection";
import PrivacySection from "./components/sections/PrivacySection";
import PricingSection from "./components/sections/PricingSection";
import FaqSection from "./components/sections/FaqSection";
import BottomCtaSection from "./components/sections/BottomCtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#221d19] selection:bg-[#f0e4d8] selection:text-[#98421a]">
      <Navbar />
      <main>
        <HeroSection />
        <ProofSection />
        <HowItWorksSection />
        <FeatureGridSection />
        <RefusalSection />
        <ShoppingSection />
        <PrivacySection />
        <PricingSection />
        <FaqSection />
        <BottomCtaSection />
      </main>
      <Footer />
    </div>
  );
}
