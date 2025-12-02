import { Target, Users, Lightbulb, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "SDG Focused",
    description: "Projects addressing United Nations Sustainable Development Goals",
    color: "twc-orange",
  },
  {
    icon: Users,
    title: "Ages 6-16",
    description: "Open to young innovators from around the world",
    color: "twc-green",
  },
  {
    icon: Lightbulb,
    title: "Tech Innovation",
    description: "Cutting-edge solutions using technology and creativity",
    color: "twc-blue",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Building solutions that can change communities worldwide",
    color: "twc-yellow",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-blue-light text-twc-blue rounded-full text-sm font-bold mb-4">
            About The Competition
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            What is <span className="text-gradient-hero">Teens World Cup</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Teens World Cup is an international tech competition that empowers young minds 
            to create innovative solutions for real-world challenges aligned with the 
            UN Sustainable Development Goals.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    feature.color === "twc-orange"
                      ? "bg-twc-orange-light"
                      : feature.color === "twc-green"
                      ? "bg-twc-green-light"
                      : feature.color === "twc-blue"
                      ? "bg-twc-blue-light"
                      : "bg-twc-yellow-light"
                  }`}
                >
                  <Icon
                    className={`w-7 h-7 ${
                      feature.color === "twc-orange"
                        ? "text-twc-orange"
                        : feature.color === "twc-green"
                        ? "text-twc-green"
                        : feature.color === "twc-blue"
                        ? "text-twc-blue"
                        : "text-twc-yellow"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "50+", label: "Countries" },
            { value: "1000+", label: "Participants" },
            { value: "200+", label: "Projects" },
            { value: "$50K", label: "In Prizes" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card shadow-card"
            >
              <div
                className={`text-3xl md:text-4xl font-black mb-1 ${
                  index === 0
                    ? "text-twc-orange"
                    : index === 1
                    ? "text-twc-green"
                    : index === 2
                    ? "text-twc-blue"
                    : "text-twc-yellow"
                }`}
              >
                {stat.value}
              </div>
              <div className="text-muted-foreground font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
