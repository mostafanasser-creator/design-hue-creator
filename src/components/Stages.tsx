import { Megaphone, ClipboardCheck, Clock, Trophy } from "lucide-react";

const stages = [
  {
    icon: Megaphone,
    title: "Official Announcement",
    date: "February 2025",
    description: "Competition officially announced to the public",
    color: "twc-orange",
  },
  {
    icon: ClipboardCheck,
    title: "Early Registration",
    date: "February → May 2025",
    description: "Form your team and submit your project idea early",
    color: "twc-green",
  },
  {
    icon: Clock,
    title: "Late Registration",
    date: "June → July 2025",
    description: "Last chance to register and join the competition",
    color: "twc-blue",
  },
  {
    icon: Trophy,
    title: "Main Competition Event",
    date: "September 2025",
    description: "Present your project and compete for the grand prize",
    color: "twc-yellow",
  },
];

const Stages = () => {
  return (
    <section id="stages" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-green-light text-twc-green rounded-full text-sm font-bold mb-4">
            Timeline 2025
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Your Path to <span className="text-gradient-fun">Victory</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Follow the competition timeline from announcement to the main event
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2" />

          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={stage.title}
                className={`relative flex items-center mb-8 md:mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div
                    className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${
                      isEven ? "md:ml-auto" : ""
                    } max-w-md`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                        stage.color === "twc-orange"
                          ? "bg-twc-orange-light text-twc-orange"
                          : stage.color === "twc-green"
                          ? "bg-twc-green-light text-twc-green"
                          : stage.color === "twc-blue"
                          ? "bg-twc-blue-light text-twc-blue"
                          : "bg-twc-yellow-light text-twc-yellow"
                      }`}
                    >
                      {stage.date}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{stage.title}</h3>
                    <p className="text-muted-foreground">{stage.description}</p>
                  </div>
                </div>

                {/* Icon in center */}
                <div
                  className={`hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full items-center justify-center z-10 ${
                    stage.color === "twc-orange"
                      ? "bg-twc-orange"
                      : stage.color === "twc-green"
                      ? "bg-twc-green"
                      : stage.color === "twc-blue"
                      ? "bg-twc-blue"
                      : "bg-twc-yellow"
                  }`}
                >
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Mobile icon */}
                <div
                  className={`md:hidden mr-4 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                    stage.color === "twc-orange"
                      ? "bg-twc-orange"
                      : stage.color === "twc-green"
                      ? "bg-twc-green"
                      : stage.color === "twc-blue"
                      ? "bg-twc-blue"
                      : "bg-twc-yellow"
                  }`}
                >
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stages;
