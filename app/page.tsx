import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NarrativeScroll from "@/components/NarrativeScroll";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Campaigns from "@/components/Campaigns";
import Brands from "@/components/Brands";
import Goals from "@/components/Goals";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NarrativeScroll />
      <Services />
      <Gallery />
      <Campaigns />
      <Brands />
      <Goals />
      <WhyUs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
