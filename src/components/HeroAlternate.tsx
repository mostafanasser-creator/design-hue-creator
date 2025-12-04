import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket, Play, Globe, Trophy, Users, Lightbulb } from "lucide-react";

const rotatingContent = [
  {
    headline: "Technology + Creativity = Impact",
    subtext: "Build solutions that matter with cutting-edge technology",
  },
  {
    headline: "Your Ideas Can Change the World",
    subtext: "Join 10,000+ young innovators from 50+ countries solving global challenges",
  },
  {
    headline: "Dream Big, Build Bigger",
    subtext: "Turn your vision into reality with mentorship from industry leaders",
  },
  {
    headline: "Innovation Starts With You",
    subtext: "Create tech projects that address UN Sustainable Development Goals",
  },
  {
    headline: "Code Your Future Today",
    subtext: "Access premium resources and showcase innovations on the global stage",
  },
];

const stats = [
  { value: "10,000+", label: "Participants" },
  { value: "50+", label: "Countries" },
  { value: "2,500+", label: "Projects" },
];

const HeroAlternate = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingContent.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Floating Animated Squares */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side squares */}
        <div className="absolute top-20 -left-10 w-32 h-32 border-2 border-twc-orange/30 rounded-lg animate-float opacity-60" style={{ animationDelay: "0s", animationDuration: "6s" }} />
        <div className="absolute top-40 -left-5 w-20 h-20 bg-twc-orange/10 rounded-lg animate-float opacity-40" style={{ animationDelay: "1s", animationDuration: "7s" }} />
        <div className="absolute top-60 left-10 w-16 h-16 border border-twc-green/40 rounded-lg animate-float opacity-50" style={{ animationDelay: "2s", animationDuration: "5s" }} />
        <div className="absolute bottom-40 -left-8 w-24 h-24 bg-twc-blue/10 rounded-lg animate-float opacity-30" style={{ animationDelay: "0.5s", animationDuration: "8s" }} />
        <div className="absolute bottom-60 left-5 w-12 h-12 border-2 border-twc-yellow/30 rounded-lg animate-float opacity-50" style={{ animationDelay: "1.5s", animationDuration: "6s" }} />
        
        {/* Right side squares */}
        <div className="absolute top-32 -right-10 w-28 h-28 border-2 border-twc-blue/30 rounded-lg animate-float opacity-60" style={{ animationDelay: "0.5s", animationDuration: "7s" }} />
        <div className="absolute top-56 -right-5 w-16 h-16 bg-twc-green/10 rounded-lg animate-float opacity-40" style={{ animationDelay: "2s", animationDuration: "6s" }} />
        <div className="absolute bottom-32 right-10 w-20 h-20 border border-twc-orange/40 rounded-lg animate-float opacity-50" style={{ animationDelay: "1s", animationDuration: "8s" }} />
        <div className="absolute bottom-56 -right-8 w-14 h-14 bg-twc-yellow/10 rounded-lg animate-float opacity-30" style={{ animationDelay: "2.5s", animationDuration: "5s" }} />
      </div>

      {/* Floating Stat Cards - Right Side */}
      <div className="absolute right-4 md:right-12 lg:right-20 top-1/3 hidden md:flex flex-col gap-6 z-20">
        <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float border border-border/50" style={{ animationDelay: "0s" }}>
          <Globe className="w-8 h-8 text-twc-green mb-2" />
          <p className="font-bold text-foreground">Countries</p>
          <p className="text-sm text-muted-foreground">50+ Nations</p>
        </div>
        <div className="bg-background/80 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float border border-border/50 ml-12" style={{ animationDelay: "1s" }}>
          <Trophy className="w-8 h-8 text-twc-orange mb-2" />
          <p className="font-bold text-foreground">Global Winners</p>
          <p className="text-sm text-muted-foreground">150+ Champions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm text-foreground rounded-full text-sm font-semibold mb-8 border border-border/50">
            <Rocket className="w-4 h-4 text-twc-orange" />
            Global Innovation Platform
          </div>

          {/* Rotating Headline */}
          <div className="min-h-[180px] md:min-h-[220px] mb-6">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight transition-all duration-500 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="text-foreground">{rotatingContent[currentIndex].headline.split(" ").slice(0, -1).join(" ")} </span>
              <span className="text-twc-orange">{rotatingContent[currentIndex].headline.split(" ").slice(-1)}</span>
            </h1>
            <p 
              className={`text-lg md:text-xl text-muted-foreground mt-4 transition-all duration-500 delay-100 ${
                isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {rotatingContent[currentIndex].subtext}
            </p>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
            Learn from Silicon Valley mentors, access premium resources, and showcase your innovations on the global stage. Your next big idea starts here.
          </p>

          {/* Stats Row */}
          <div className="flex gap-8 md:gap-12 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-black text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link to="/register">
              <Button variant="hero" size="xl" className="gap-2">
                <Rocket className="w-5 h-5" />
                Start Your Journey
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="gap-2 bg-background/50 backdrop-blur-sm border-border/50">
              <Play className="w-5 h-5" />
              Watch Story
            </Button>
          </div>

          {/* Text rotation indicator */}
          <div className="flex gap-2 mt-10">
            {rotatingContent.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-8 bg-twc-orange" 
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroAlternate;
