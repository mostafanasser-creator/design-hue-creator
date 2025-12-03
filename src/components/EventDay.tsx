import { Sun, ClipboardList, Users, Trophy } from "lucide-react";

const schedule = [
  {
    icon: Sun,
    time: "Morning",
    title: "Registration & Setup",
    activities: ["Registration", "Opening ceremony", "Project setup"],
    color: "twc-orange",
  },
  {
    icon: ClipboardList,
    time: "Midday",
    title: "Project Evaluations",
    activities: ["Judges visit each project", "Q&A sessions", "Technical demonstrations"],
    color: "twc-green",
  },
  {
    icon: Users,
    time: "Afternoon",
    title: "Finalist Pitches",
    activities: ["Top teams present", "Live demonstrations", "Final Q&A with judges"],
    color: "twc-blue",
  },
  {
    icon: Trophy,
    time: "Evening",
    title: "Awards Ceremony",
    activities: ["Winner announcement", "Awards ceremony", "Celebration"],
    color: "twc-yellow",
  },
];

const EventDay = () => {
  return (
    <section id="event-day" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-yellow-light text-twc-yellow rounded-full text-sm font-bold mb-4">
            September 2025
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Event Day <span className="text-gradient-warm">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Here's what to expect on the main competition day
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schedule.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.time}
                  className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      item.color === "twc-orange"
                        ? "bg-twc-orange"
                        : item.color === "twc-green"
                        ? "bg-twc-green"
                        : item.color === "twc-blue"
                        ? "bg-twc-blue"
                        : "bg-twc-yellow"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                      item.color === "twc-orange"
                        ? "bg-twc-orange-light text-twc-orange"
                        : item.color === "twc-green"
                        ? "bg-twc-green-light text-twc-green"
                        : item.color === "twc-blue"
                        ? "bg-twc-blue-light text-twc-blue"
                        : "bg-twc-yellow-light text-twc-yellow"
                    }`}
                  >
                    {item.time}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.activities.map((activity, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDay;
