import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Target, Users, Lightbulb, Globe, Rocket, Award, Heart, 
  Calendar, CheckCircle, ArrowRight, ChevronDown, Sparkles,
  Cpu, Bot, Code, Wrench, GraduationCap, Handshake, Star,
  MessageCircle, Building2, Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sdgGoals = [
  { number: 1, title: "No Poverty", color: "#E5243B" },
  { number: 4, title: "Quality Education", color: "#C5192D" },
  { number: 6, title: "Clean Water", color: "#26BDE2" },
  { number: 7, title: "Clean Energy", color: "#FCC30B" },
  { number: 11, title: "Sustainable Cities", color: "#FD9D24" },
  { number: 13, title: "Climate Action", color: "#3F7E44" },
];

const howItWorks = [
  {
    step: 1,
    title: "Register Your Team",
    description: "Sign up individually or form a team of up to 3 members (ages 8-18). No restrictions on school or country!",
    icon: Users,
    color: "twc-orange",
  },
  {
    step: 2,
    title: "Build Your Project",
    description: "Create any tech solution—robotics, AI, IoT, software—that addresses an SDG with real business potential.",
    icon: Cpu,
    color: "twc-blue",
  },
  {
    step: 3,
    title: "Submit & Present",
    description: "Upload your project summary, prototype, 2-5 min video demo, and pitch deck by the deadline.",
    icon: Rocket,
    color: "twc-green",
  },
  {
    step: 4,
    title: "Compete & Win",
    description: "Present to global judges, compete with innovators worldwide, and win amazing prizes!",
    icon: Trophy,
    color: "twc-yellow",
  },
];

const impactStats = [
  { value: "50+", label: "Countries", icon: Globe },
  { value: "1,000+", label: "Young Innovators", icon: Users },
  { value: "17", label: "SDGs Addressed", icon: Target },
  { value: "$50K+", label: "In Prizes", icon: Award },
];

const mentors = [
  {
    name: "Industry Experts",
    role: "Tech Leaders & Entrepreneurs",
    description: "Guidance from successful tech founders and industry professionals.",
    icon: Building2,
  },
  {
    name: "Academic Advisors",
    role: "Educators & Researchers",
    description: "Support from professors and researchers in STEM fields.",
    icon: GraduationCap,
  },
  {
    name: "SDG Specialists",
    role: "Sustainability Champions",
    description: "Insights from experts working on global sustainability goals.",
    icon: Heart,
  },
];

const timeline = [
  { date: "January 2025", event: "Registration Opens", status: "active" },
  { date: "March 2025", event: "Project Submission Deadline", status: "upcoming" },
  { date: "April 2025", event: "Judging & Shortlisting", status: "upcoming" },
  { date: "May 2025", event: "Finals & Awards Ceremony", status: "upcoming" },
];

const partners = [
  { name: "Tech Partner 1", category: "Technology" },
  { name: "Education Partner", category: "Education" },
  { name: "NGO Partner", category: "Non-Profit" },
  { name: "Corporate Sponsor", category: "Business" },
];

const testimonials = [
  {
    quote: "Teens World Cup gave me the platform to turn my idea into reality. I never thought a 14-year-old could compete globally!",
    author: "Maria S.",
    age: 14,
    country: "Brazil",
    project: "Water Purification System",
  },
  {
    quote: "The mentorship and feedback we received was incredible. Our team learned more in 3 months than a whole year of school!",
    author: "Ahmed K.",
    age: 16,
    country: "Egypt",
    project: "Solar-Powered Irrigation",
  },
  {
    quote: "I was shy about presenting, but TWC helped me find my voice. Now I want to become an entrepreneur!",
    author: "Yuki T.",
    age: 12,
    country: "Japan",
    project: "AI Recycling Assistant",
  },
];

const faqs = [
  {
    question: "Who can participate in Teens World Cup?",
    answer: "Any young innovator aged 8-18 can participate! You can join as an individual or form a team of up to 3 members. There are no restrictions on school, academy, or country of origin.",
  },
  {
    question: "What kind of projects can I submit?",
    answer: "You can create ANY technology project that addresses one or more UN Sustainable Development Goals. This includes robotics, IoT devices, AI/ML applications, mobile apps, websites, hardware prototypes, and more. The key is that your project should have real-world impact and business potential.",
  },
  {
    question: "Is there a registration fee?",
    answer: "No! Teens World Cup is completely free to enter. We believe every young innovator should have the opportunity to participate regardless of financial background.",
  },
  {
    question: "Do I need to be a coding expert?",
    answer: "Not at all! While technical skills help, we value creativity, problem-solving, and impact. Many successful projects combine simple technology with innovative thinking. We also provide resources and mentorship to help you learn.",
  },
  {
    question: "How are projects judged?",
    answer: "Projects are evaluated on: Innovation & Creativity (25%), SDG Impact (25%), Technical Execution (25%), Business Potential (15%), and Presentation Quality (10%). Our diverse panel of judges includes tech experts, educators, and sustainability specialists.",
  },
  {
    question: "Can I get help from adults?",
    answer: "Yes, you can have adult mentors, teachers, or parents guide you. However, the core work—ideation, design, building, and presentation—must be done by the youth participants themselves.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Teens World Cup | Global Youth Innovation Challenge for SDGs</title>
        <meta 
          name="description" 
          content="Discover Teens World Cup, a global freestyle innovation challenge where youth aged 8-18 create technology projects addressing UN Sustainable Development Goals. Join innovators worldwide!" 
        />
        <meta name="keywords" content="youth innovation, SDG challenge, teen entrepreneurs, STEM competition, global hackathon, sustainable development" />
      </Helmet>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-muted/50 via-background to-twc-blue-light">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-twc-orange/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-twc-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-twc-green/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-twc-orange-light text-twc-orange rounded-full text-sm font-bold mb-6 animate-bounce-soft">
                <Sparkles className="w-4 h-4" />
                About The Competition
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight">
                Empowering Youth to{" "}
                <span className="text-gradient-hero">Change the World</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Teens World Cup is a global freestyle innovation challenge where young minds aged 8-18 
                create technology solutions that tackle real-world problems aligned with the 
                UN Sustainable Development Goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    Register Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="#become-mentor">
                  <Button variant="outline" size="lg" className="text-lg px-8">
                    Become a Mentor
                    <Heart className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex justify-center mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-twc-green-light text-twc-green rounded-full text-sm font-bold mb-4">
                  Our Mission
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground mb-6">
                  Nurturing Tomorrow's{" "}
                  <span className="text-gradient-fun">Changemakers</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We believe every young person has the potential to create meaningful change. 
                  Teens World Cup provides the platform, resources, and global community for 
                  youth to transform their innovative ideas into impactful solutions.
                </p>
                <ul className="space-y-4">
                  {[
                    "Foster creativity and problem-solving skills",
                    "Connect young innovators across borders",
                    "Accelerate solutions for sustainable development",
                    "Build entrepreneurial mindsets early",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-twc-green flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-twc-orange-light via-twc-blue-light to-twc-green-light p-8 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {sdgGoals.map((sdg) => (
                      <div
                        key={sdg.number}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl flex flex-col items-center justify-center text-primary-foreground font-bold shadow-lg transition-transform hover:scale-110"
                        style={{ backgroundColor: sdg.color }}
                        title={sdg.title}
                      >
                        <span className="text-2xl md:text-3xl">{sdg.number}</span>
                        <span className="text-[10px] md:text-xs text-center px-1 opacity-90">SDG</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-twc-yellow rounded-2xl flex items-center justify-center shadow-glow-yellow animate-float">
                  <Lightbulb className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-twc-blue-light text-twc-blue rounded-full text-sm font-bold mb-4">
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Your Journey to{" "}
                <span className="text-gradient-hero">Innovation</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Four simple steps to showcase your ideas on the world stage
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.step}
                    className="relative bg-card rounded-3xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-black text-xl shadow-glow-orange">
                      {item.step}
                    </div>
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mt-4 transition-transform group-hover:scale-110 ${
                        item.color === "twc-orange"
                          ? "bg-twc-orange-light"
                          : item.color === "twc-blue"
                          ? "bg-twc-blue-light"
                          : item.color === "twc-green"
                          ? "bg-twc-green-light"
                          : "bg-twc-yellow-light"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          item.color === "twc-orange"
                            ? "text-twc-orange"
                            : item.color === "twc-blue"
                            ? "text-twc-blue"
                            : item.color === "twc-green"
                            ? "text-twc-green"
                            : "text-twc-yellow"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                    
                    {index < howItWorks.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-muted-foreground">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Highlights */}
        <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Our Global Impact
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Connecting young innovators across the globe to create solutions that matter
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <article
                    key={stat.label}
                    className="text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
                  >
                    <Icon className="w-10 h-10 mx-auto mb-4 opacity-90" />
                    <div className="text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base font-semibold opacity-90">{stat.label}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mentors & Judges */}
        <section id="become-mentor" className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-twc-yellow-light text-twc-yellow rounded-full text-sm font-bold mb-4">
                Mentors & Judges
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Guided by{" "}
                <span className="text-gradient-warm">Global Experts</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Our participants receive guidance from industry leaders, educators, and sustainability champions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {mentors.map((mentor, index) => {
                const Icon = mentor.icon;
                return (
                  <article
                    key={mentor.name}
                    className="bg-muted/50 rounded-3xl p-8 text-center hover:shadow-card transition-all duration-300"
                  >
                    <div
                      className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                        index === 0
                          ? "bg-twc-orange-light"
                          : index === 1
                          ? "bg-twc-blue-light"
                          : "bg-twc-green-light"
                      }`}
                    >
                      <Icon
                        className={`w-10 h-10 ${
                          index === 0
                            ? "text-twc-orange"
                            : index === 1
                            ? "text-twc-blue"
                            : "text-twc-green"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{mentor.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{mentor.role}</p>
                    <p className="text-muted-foreground">{mentor.description}</p>
                  </article>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Want to inspire the next generation of innovators?
              </p>
              <Button variant="orange" size="lg" className="text-lg">
                <Handshake className="mr-2 w-5 h-5" />
                Apply as Mentor or Judge
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-twc-orange-light text-twc-orange rounded-full text-sm font-bold mb-4">
                Key Dates
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Competition{" "}
                <span className="text-gradient-hero">Timeline</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2" />
                
                {timeline.map((item, index) => (
                  <article
                    key={item.event}
                    className={`relative flex items-center gap-6 mb-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                      <div className="bg-card rounded-2xl p-6 shadow-card inline-block">
                        <p className="text-sm font-bold text-primary mb-1">{item.date}</p>
                        <h3 className="text-lg font-bold text-foreground">{item.event}</h3>
                      </div>
                    </div>
                    
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center z-10 flex-shrink-0 ${
                        item.status === "active"
                          ? "bg-twc-green shadow-glow-green"
                          : "bg-muted"
                      }`}
                    >
                      <Calendar
                        className={`w-6 h-6 ${
                          item.status === "active" ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    
                    <div className="flex-1 md:hidden">
                      <div className="bg-card rounded-2xl p-4 shadow-card">
                        <p className="text-sm font-bold text-primary mb-1">{item.date}</p>
                        <h3 className="text-lg font-bold text-foreground">{item.event}</h3>
                      </div>
                    </div>
                    
                    <div className="flex-1 hidden md:block" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partners & Sponsors */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-twc-blue-light text-twc-blue rounded-full text-sm font-bold mb-4">
                Our Partners
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Supported by{" "}
                <span className="text-gradient-fun">Global Leaders</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Together with our partners, we're building a brighter future for young innovators
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {partners.map((partner, index) => (
                <article
                  key={partner.name}
                  className="bg-muted/50 rounded-2xl p-8 text-center hover:shadow-card transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-border rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="font-bold text-foreground">{partner.name}</p>
                  <p className="text-sm text-muted-foreground">{partner.category}</p>
                </article>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Interested in partnering with Teens World Cup?
              </p>
              <Button variant="outline" size="lg">
                <Handshake className="mr-2 w-5 h-5" />
                Become a Partner
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-twc-green-light text-twc-green rounded-full text-sm font-bold mb-4">
                Success Stories
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Hear from Our{" "}
                <span className="text-gradient-hero">Young Innovators</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <article
                  key={testimonial.author}
                  className="bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-twc-yellow text-twc-yellow" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">
                        {testimonial.author}, {testimonial.age}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.country} • {testimonial.project}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 bg-twc-yellow-light text-twc-yellow rounded-full text-sm font-bold mb-4">
                FAQs
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
                Got{" "}
                <span className="text-gradient-warm">Questions?</span>
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
                    className="bg-muted/50 rounded-2xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-left font-bold text-foreground hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Button variant="outline">
                <MessageCircle className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 md:py-28 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Ready to Change the World?
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of young innovators from around the globe. 
              Your idea could be the solution the world needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8"
                >
                  Register Now
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/journey">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  View Full Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
