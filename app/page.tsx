import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import WhySection from "@/components/WhySection";
import PricingTiers from "@/components/PricingTiers";
import AboutPitch from "@/components/AboutPitch";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PortfolioShowcase />
        <WhySection />
        <PricingTiers />
        <AboutPitch />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
