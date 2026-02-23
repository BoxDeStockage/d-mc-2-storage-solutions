import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VolumeCalculator from "@/components/VolumeCalculator";
import PricingSection from "@/components/PricingSection";
import QuoteForm from "@/components/QuoteForm";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <VolumeCalculator />
      <PricingSection />
      <QuoteForm />
      <SecuritySection />
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
