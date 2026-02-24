import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Inventory from "@/components/sections/Inventory";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Location from "@/components/sections/Location";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Inventory />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
