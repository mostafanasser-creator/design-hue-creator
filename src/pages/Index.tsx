import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroAlternate from "@/components/HeroAlternate";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stages from "@/components/Stages";
import SubmissionRequirements from "@/components/SubmissionRequirements";
import JudgingCriteria from "@/components/JudgingCriteria";
import EventDay from "@/components/EventDay";
import Prizes from "@/components/Prizes";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Teens World Cup 2025 | Global Youth Tech Freestyle Innovation Challenge</title>
        <meta 
          name="description" 
          content="Join Teens World Cup 2025 - the freestyle global innovation challenge for ages 8-18. Create tech projects solving UN SDGs and win a fully-funded trip to USA!" 
        />
        <meta name="keywords" content="teens world cup, youth, competition, tech, innovation, SDG, sustainable development, coding, robotics, AI, freestyle" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroAlternate />
          <Hero />
          <About />
          <Stages />
          <SubmissionRequirements />
          <JudgingCriteria />
          <EventDay />
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
