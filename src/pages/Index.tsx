import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stages from "@/components/Stages";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Teens World Cup | Global Tech Competition for Young Innovators</title>
        <meta 
          name="description" 
          content="Join Teens World Cup - the international tech competition empowering kids aged 6-16 to create innovative solutions for the UN Sustainable Development Goals." 
        />
        <meta name="keywords" content="teens, youth, competition, tech, innovation, SDG, sustainable development, coding, kids" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stages />
          <Prizes />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
