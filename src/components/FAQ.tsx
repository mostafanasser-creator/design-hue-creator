import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in Teens World Cup?",
    answer:
      "The competition is open to youth aged 8 to 18 years old from anywhere in the world. You can participate as an individual or in teams of up to 3 members. Any school or academy can participate, and it's open internationally.",
  },
  {
    question: "What kind of projects can we submit?",
    answer:
      "Participants may develop ANY project related to the UN Sustainable Development Goals (SDGs) with business potential. This includes robotics, IoT, AI, software, websites, hardware, or any creative tech prototype. There are no categories or restrictions — it's a pure freestyle competition!",
  },
  {
    question: "What are the submission requirements?",
    answer:
      "You need to submit: 1) Project Summary Document, 2) Working Prototype/Demo, 3) Video Demonstration (2-5 minutes), and 4) Pitch Deck (8-10 slides).",
  },
  {
    question: "How are projects judged?",
    answer:
      "Projects are evaluated on: Innovation (25%), SDG Impact (25%), Technical Execution (25%), Business Potential (15%), and Presentation (10%).",
  },
  {
    question: "What is the timeline for 2025?",
    answer:
      "February: Official Announcement. February → May: Early Registration. June → July: Late Registration. September: Main Competition Event.",
  },
  {
    question: "What happens on the event day?",
    answer:
      "Morning: Registration, opening ceremony, project setup. Midday: Project evaluations. Afternoon: Finalist pitches. Evening: Winner announcement and awards ceremony.",
  },
  {
    question: "What is the grand prize?",
    answer:
      "One fully-funded trip to the United States to attend an international technology and innovation conference. Only ONE winner is selected — the project with the highest innovation, impact, and startup potential.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Registration details will be announced during the official announcement in February 2025. Stay tuned for more information!",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-twc-orange-light text-twc-orange rounded-full text-sm font-bold mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Frequently Asked <span className="text-gradient-hero">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to the most common questions about Teens World Cup
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-none shadow-card data-[state=open]:shadow-card-hover transition-shadow"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-5">
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-primary-foreground shrink-0 ${
                        index % 4 === 0
                          ? "bg-twc-orange"
                          : index % 4 === 1
                          ? "bg-twc-green"
                          : index % 4 === 2
                          ? "bg-twc-blue"
                          : "bg-twc-yellow text-foreground"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-11">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
