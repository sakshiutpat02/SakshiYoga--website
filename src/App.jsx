import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import BatchSection from "./components/BatchSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import WomensWellnessSection from "./components/WomensWellnessSection.jsx";
import FAQSection from "./components/FAQSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface font-body-md text-on-surface selection:bg-secondary-container selection:text-primary">
      <div className="grain-overlay" aria-hidden="true" />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BatchSection />
        <ServicesSection />
        <WomensWellnessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
