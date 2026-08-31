import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import OfferSection from "@/components/OfferSection";
import PresenceSection from "@/components/PresenceSection";
import AboutSection from "@/components/AboutSection";
import AccreditationsSection from "@/components/AccreditationsSection";
import CounterSection from "@/components/CounterSection";
import SafetySection from "@/components/SafetySection";
import CertificationsSection from "@/components/CertificationsSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <OfferSection />
        <PresenceSection />
        <AboutSection />
        <AccreditationsSection />
        <CounterSection />
        <SafetySection />
        <CertificationsSection />
        <ClientsSection />
      </main>
      <Footer />

      {/* Back to top - visual replica */}
      <a
        href="#"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 hidden h-10 w-10 items-center justify-center rounded-full bg-[#0c598f] text-white shadow-lg hover:bg-[#09406a] transition-colors lg:flex"
      >
        <svg width="14" height="14" viewBox="0 0 12 7" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 6L6 1L1 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}
