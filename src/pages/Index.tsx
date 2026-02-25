import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Foundation";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Founder />
      <Services />
      <Values />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
