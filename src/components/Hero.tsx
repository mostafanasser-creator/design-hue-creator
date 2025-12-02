import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Lightbulb, Globe, Rocket, Play } from "lucide-react";
import twcLogo from "@/assets/twc-logo.png";

const Hero = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set deadline to 60 days from now for demo
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 60);

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const countdownItems = [
    { value: countdown.days, label: "Days" },
    { value: countdown.hours, label: "Hours" },
    { value: countdown.minutes, label: "Minutes" },
    { value: countdown.seconds, label: "Seconds" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-twc-orange/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-twc-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-twc-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-twc-yellow/10 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Lightbulb className="absolute top-32 left-[15%] w-8 h-8 text-twc-yellow animate-float opacity-60" style={{ animationDelay: "0s" }} />
        <Globe className="absolute top-48 right-[20%] w-10 h-10 text-twc-blue animate-float opacity-60" style={{ animationDelay: "0.5s" }} />
        <Rocket className="absolute bottom-48 left-[20%] w-8 h-8 text-twc-orange animate-float opacity-60" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 animate-scale-in">
            <img
              src={twcLogo}
              alt="Teens World Cup"
              className="h-24 md:h-32 w-auto mx-auto animate-bounce-soft"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-twc-green-light text-twc-green rounded-full text-sm font-semibold mb-6 animate-slide-up">
            <Globe className="w-4 h-4" />
            Global Tech Competition for Young Innovators
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Welcome to </span>
            <span className="text-gradient-hero">Teens World Cup</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Empowering kids aged 6-16 to innovate for the Sustainable Development Goals. 
            Build projects that change the world!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/register">
              <Button variant="hero" size="xl">
                Register Your Team
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="gap-2">
              <Play className="w-5 h-5" />
              Watch Video
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Registration Closes In
            </p>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              {countdownItems.map((item, index) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-black text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 ${
                      index === 0
                        ? "bg-twc-orange"
                        : index === 1
                        ? "bg-twc-green"
                        : index === 2
                        ? "bg-twc-blue"
                        : "bg-twc-yellow text-foreground"
                    }`}
                  >
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-muted-foreground mt-2">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
