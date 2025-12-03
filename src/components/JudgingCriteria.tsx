import { Lightbulb, Target, Wrench, TrendingUp, Presentation } from "lucide-react";

const criteria = [
  {
    icon: Lightbulb,
    title: "Innovation",
    percentage: 25,
    description: "Creativity and originality of the solution",
    color: "twc-orange",
  },
  {
    icon: Target,
    title: "SDG Impact",
    percentage: 25,
    description: "Alignment with UN Sustainable Development Goals",
    color: "twc-green",
  },
  {
    icon: Wrench,
    title: "Technical Execution",
    percentage: 25,
    description: "Quality of implementation and functionality",
    color: "twc-blue",
  },
  {
    icon: TrendingUp,
    title: "Business Potential",
    percentage: 15,
    description: "Viability as a startup or scalable solution",
    color: "twc-yellow",
  },
  {
    icon: Presentation,
    title: "Presentation",
    percentage: 10,
    description: "Quality of pitch and communication",
    color: "twc-orange",
  },
];

const JudgingCriteria = () => {
  return (
    <section id="judging" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-blue-light text-twc-blue rounded-full text-sm font-bold mb-4">
            Evaluation
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Judging <span className="text-gradient-hero">Criteria</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Projects are evaluated based on five key criteria totaling 100%
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criteria.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                    index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        item.color === "twc-orange"
                          ? "bg-twc-orange-light"
                          : item.color === "twc-green"
                          ? "bg-twc-green-light"
                          : item.color === "twc-blue"
                          ? "bg-twc-blue-light"
                          : "bg-twc-yellow-light"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          item.color === "twc-orange"
                            ? "text-twc-orange"
                            : item.color === "twc-green"
                            ? "text-twc-green"
                            : item.color === "twc-blue"
                            ? "text-twc-blue"
                            : "text-twc-yellow"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-2xl font-black ${
                        item.color === "twc-orange"
                          ? "text-twc-orange"
                          : item.color === "twc-green"
                          ? "text-twc-green"
                          : item.color === "twc-blue"
                          ? "text-twc-blue"
                          : "text-twc-yellow"
                      }`}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {/* Progress bar */}
                  <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        item.color === "twc-orange"
                          ? "bg-twc-orange"
                          : item.color === "twc-green"
                          ? "bg-twc-green"
                          : item.color === "twc-blue"
                          ? "bg-twc-blue"
                          : "bg-twc-yellow"
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JudgingCriteria;
