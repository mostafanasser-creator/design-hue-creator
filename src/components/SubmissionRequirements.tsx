import { FileText, Monitor, Video, Presentation } from "lucide-react";

const requirements = [
  {
    icon: FileText,
    number: "01",
    title: "Project Summary Document",
    description: "A comprehensive document explaining your project, its goals, and how it addresses SDGs",
    color: "twc-orange",
  },
  {
    icon: Monitor,
    number: "02",
    title: "Working Prototype / Demo",
    description: "A functional demonstration of your technology solution",
    color: "twc-green",
  },
  {
    icon: Video,
    number: "03",
    title: "Video Demonstration",
    description: "A 2-5 minute video showcasing your project and its features",
    color: "twc-blue",
  },
  {
    icon: Presentation,
    number: "04",
    title: "Pitch Deck",
    description: "An 8-10 slide presentation covering your project and business potential",
    color: "twc-yellow",
  },
];

const SubmissionRequirements = () => {
  return (
    <section id="requirements" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-orange-light text-twc-orange rounded-full text-sm font-bold mb-4">
            What You Need
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Submission <span className="text-gradient-fun">Requirements</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Make sure you have all these materials ready for your submission
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.title}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      req.color === "twc-orange"
                        ? "bg-twc-orange"
                        : req.color === "twc-green"
                        ? "bg-twc-green"
                        : req.color === "twc-blue"
                        ? "bg-twc-blue"
                        : "bg-twc-yellow"
                    }`}
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-sm font-black ${
                          req.color === "twc-orange"
                            ? "text-twc-orange"
                            : req.color === "twc-green"
                            ? "text-twc-green"
                            : req.color === "twc-blue"
                            ? "text-twc-blue"
                            : "text-twc-yellow"
                        }`}
                      >
                        {req.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{req.title}</h3>
                    <p className="text-muted-foreground text-sm">{req.description}</p>
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

export default SubmissionRequirements;
