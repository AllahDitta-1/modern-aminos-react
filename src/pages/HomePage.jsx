import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

const heroEyebrow = "Login for the full experience.";
const heroTagline =
  "For laboratory research use only. Not for human consumption.";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f3fb]">
      <Header />
      <div className="pt-[76px]">
        <div className="bg-[#0b4f78] px-4 py-2 text-center text-xs font-semibold text-white">
          {heroEyebrow} - {heroTagline}
        </div>
      </div>
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
