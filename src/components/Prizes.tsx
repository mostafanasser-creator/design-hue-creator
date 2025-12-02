import { Plane, Award, Laptop, GraduationCap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const prizes = [
  {
    icon: Plane,
    title: "Trip to USA",
    description: "Fully funded trip to Startup Grind Global Conference",
    highlight: true,
  },
  {
    icon: Laptop,
    title: "Tech Equipment",
    description: "Latest laptops and gadgets for winning teams",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Scholarships",
    description: "Educational scholarships and mentorship programs",
    highlight: false,
  },
  {
    icon: Award,
    title: "Certificates",
    description: "International recognition certificates for all participants",
    highlight: false,
  },
];

const Prizes = () => {
  return (
    <section id="prizes" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-twc-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-twc-orange/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-yellow-light text-twc-yellow rounded-full text-sm font-bold mb-4">
            Amazing Rewards
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Win <span className="text-gradient-warm">Incredible Prizes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Top teams will receive amazing prizes including a fully funded trip to 
            the Startup Grind Global Conference in Silicon Valley, USA!
          </p>
        </div>

        {/* Grand Prize Highlight */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-gradient-hero rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Stars decoration */}
            <Star className="absolute top-6 left-6 w-6 h-6 text-primary-foreground/30 animate-pulse" />
            <Star className="absolute top-10 right-10 w-4 h-4 text-primary-foreground/20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <Star className="absolute bottom-8 left-1/4 w-5 h-5 text-primary-foreground/25 animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/20 rounded-full mb-6">
              <Plane className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-primary-foreground mb-4">
              🏆 Grand Prize
            </h3>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
              Fully Funded Trip to Startup Grind Global Conference
            </p>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              The winning team will travel to Silicon Valley, USA, to attend the world's 
              largest conference for startups, meet industry leaders, and showcase their project!
            </p>
            <Button variant="secondary" size="xl">
              Learn More
            </Button>
          </div>
        </div>

        {/* Other Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {prizes.slice(1).map((prize, index) => {
            const Icon = prize.icon;
            return (
              <div
                key={prize.title}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                    index === 0
                      ? "bg-twc-blue-light"
                      : index === 1
                      ? "bg-twc-green-light"
                      : "bg-twc-orange-light"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      index === 0
                        ? "text-twc-blue"
                        : index === 1
                        ? "text-twc-green"
                        : "text-twc-orange"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{prize.title}</h3>
                <p className="text-muted-foreground">{prize.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
