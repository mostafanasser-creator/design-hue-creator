import { Plane, Award, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  "Develop real-world problem-solving skills",
  "Build strong engineering and entrepreneurship foundations",
  "Gain exposure to technology professionals",
  "Certificate for all participants",
  "Chance to represent their country globally",
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
            Grand Prize
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Win an <span className="text-gradient-warm">Incredible Prize</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            At the end of the event, only ONE winner is selected — the project with the 
            highest innovation, impact, and startup potential!
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
              🏆 Fully-Funded Trip to USA
            </h3>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
              Attend an International Technology & Innovation Conference
            </p>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              The winner will receive a fully-funded trip to the United States to attend 
              a major technology conference, meet industry leaders, and showcase their project!
            </p>
            <Link to="/register">
              <Button variant="secondary" size="xl">
                Register Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Benefits for All Participants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    index % 4 === 0
                      ? "bg-twc-orange-light"
                      : index % 4 === 1
                      ? "bg-twc-green-light"
                      : index % 4 === 2
                      ? "bg-twc-blue-light"
                      : "bg-twc-yellow-light"
                  }`}
                >
                  <CheckCircle
                    className={`w-5 h-5 ${
                      index % 4 === 0
                        ? "text-twc-orange"
                        : index % 4 === 1
                        ? "text-twc-green"
                        : index % 4 === 2
                        ? "text-twc-blue"
                        : "text-twc-yellow"
                    }`}
                  />
                </div>
                <span className="font-medium text-foreground">{benefit}</span>
              </div>
            ))}
            {/* Certificate Card */}
            <div className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-card md:col-span-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-twc-orange-light">
                <Award className="w-5 h-5 text-twc-orange" />
              </div>
              <span className="font-medium text-foreground">
                International recognition certificate for all participants
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
