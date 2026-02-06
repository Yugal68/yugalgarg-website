import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollManager from "@/components/ScrollManager";
import Feedback from "@/components/Feedback";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <ScrollManager />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
      <Feedback />
    </main>
  );
}
