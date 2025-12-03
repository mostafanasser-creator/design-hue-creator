import { Target, Users, Lightbulb, Globe, Cpu, Bot, Code, Wrench } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "SDG Focused",
    description: "Projects addressing United Nations Sustainable Development Goals with business potential",
    color: "twc-orange",
  },
  {
    icon: Users,
    title: "Ages 8-18",
    description: "Individuals or teams (up to 3 members) from any school or academy worldwide",
    color: "twc-green",
  },
  {
    icon: Lightbulb,
    title: "Freestyle Innovation",
    description: "No categories, no age divisions, no restrictions — pure innovation freestyle",
    color: "twc-blue",
  },
  {
    icon: Globe,
    title: "Open Internationally",
    description: "Participants from any country can join and compete globally",
    color: "twc-yellow",
  },
];

const projectTypes = [
  { icon: Bot, label: "Robotics" },
  { icon: Cpu, label: "IoT" },
  { icon: Code, label: "AI & Software" },
  { icon: Wrench, label: "Hardware" },
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
            Teens World Cup is a freestyle global innovation challenge where youth (8–18 years) 
            create ANY technology project that solves a problem related to the United Nations 
            Sustainable Development Goals (SDGs).
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* What You Can Build */}
        <div className="bg-card rounded-3xl p-8 shadow-card mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            What Can Participants Build?
          </h3>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Participants may develop any project related to SDGs with business potential. 
            This includes robotics, IoT, AI, software, websites, or any creative tech prototype.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {projectTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={type.label}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold ${
                    index === 0
                      ? "bg-twc-orange-light text-twc-orange"
                      : index === 1
                      ? "bg-twc-green-light text-twc-green"
                      : index === 2
                      ? "bg-twc-blue-light text-twc-blue"
                      : "bg-twc-yellow-light text-twc-yellow"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {type.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Can Join */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "8-18", label: "Age Range" },
            { value: "1-3", label: "Team Members" },
            { value: "Any", label: "School/Academy" },
            { value: "Global", label: "International" },
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
