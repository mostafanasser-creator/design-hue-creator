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
      "The competition is open to kids and young people aged 6 to 16 years old from anywhere in the world. Teams can have 2-5 members, and each team must have at least one adult mentor or guardian.",
  },
  {
    question: "What kind of projects can we submit?",
    answer:
      "Projects should address one or more of the United Nations Sustainable Development Goals (SDGs). They can be apps, websites, hardware projects, or any tech-based solution that solves a real-world problem.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No! Teens World Cup is completely free to participate. We believe every young innovator should have the opportunity to showcase their talents regardless of financial background.",
  },
  {
    question: "What support do participants receive?",
    answer:
      "All registered teams are paired with experienced mentors who guide them through the project development process. We also provide online workshops, resources, and a supportive community forum.",
  },
  {
    question: "How are projects judged?",
    answer:
      "Projects are evaluated on innovation, impact on SDGs, technical execution, presentation quality, and teamwork. Judges include tech professionals, educators, and sustainability experts.",
  },
  {
    question: "What languages are supported?",
    answer:
      "The competition currently supports English and Arabic. All materials, mentorship sessions, and submission forms are available in both languages.",
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
