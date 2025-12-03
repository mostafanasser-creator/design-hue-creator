import { Helmet } from "react-helmet-async";
import { Calendar, Users, Globe, CheckCircle, Lightbulb, Clock, Award, FileText, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timelinePhases = [
  {
    title: "Registration & Team Formation",
    duration: "2 weeks",
    description: "Register your team and complete your profile. Connect with mentors and start planning your innovative solution.",
    activities: [
      "Complete team registration form",
      "Upload team member profiles",
      "Select your SDG focus area",
      "Connect with assigned mentor"
    ],
    tips: [
      "Choose diverse team skills",
      "Read all competition rules",
      "Set up communication channels",
      "Plan regular team meetings"
    ]
  },
  {
    title: "Ideation & Research",
    duration: "3 weeks",
    description: "Develop your innovative idea and conduct thorough research on your chosen SDG challenge.",
    activities: [
      "Brainstorm solution concepts",
      "Research existing solutions",
      "Define target audience",
      "Create initial project outline"
    ],
    tips: [
      "Think outside the box",
      "Interview potential users",
      "Study successful case studies",
      "Document your research process"
    ]
  },
  {
    title: "Prototype Development",
    duration: "4 weeks",
    description: "Build your minimum viable product or prototype. Focus on core functionality and user experience.",
    activities: [
      "Design user interface mockups",
      "Develop core features",
      "Test with sample users",
      "Iterate based on feedback"
    ],
    tips: [
      "Start simple and iterate",
      "Focus on user experience",
      "Test early and often",
      "Document your development process"
    ]
  },
  {
    title: "Project Submission",
    duration: "1 week",
    description: "Submit your final project with complete documentation, demo video, and presentation materials.",
    activities: [
      "Prepare project documentation",
      "Create demo video (max 5 minutes)",
      "Write executive summary",
      "Submit through online portal"
    ],
    tips: [
      "Follow submission guidelines exactly",
      "Test all links and files",
      "Submit before the deadline",
      "Keep backup copies of everything"
    ]
  },
  {
    title: "Judging & Evaluation",
    duration: "2 weeks",
    description: "Expert judges evaluate all submissions based on innovation, impact, feasibility, and presentation quality.",
    activities: [
      "Initial screening by expert panel",
      "Detailed evaluation of top projects",
      "Live presentation for finalists",
      "Final scoring and ranking"
    ],
    tips: [
      "Be available for judge questions",
      "Prepare for potential interviews",
      "Practice your elevator pitch",
      "Stay positive and confident"
    ]
  },
  {
    title: "Results & Awards",
    duration: "1 week",
    description: "Winners announced at the virtual awards ceremony. All participants receive certificates and feedback.",
    activities: [
      "Virtual awards ceremony",
      "Winner announcements",
      "Prize distribution",
      "Alumni network invitation"
    ],
    tips: [
      "Celebrate your achievements",
      "Network with other participants",
      "Plan next steps for your project",
      "Stay connected with the community"
    ]
  }
];

const prizes = [
  { place: "Grand Prize", amount: "Trip to Silicon Valley + $5,000", description: "All-expenses-paid trip + cash prize + mentorship" },
  { place: "2nd Place", amount: "$3,000", description: "Cash prize + premium resources access" },
  { place: "3rd Place", amount: "$2,000", description: "Cash prize + certificate of excellence" },
  { place: "Category Winners", amount: "$500 each", description: "Best in each SDG category" }
];

const rules = [
  "Participants must be between 8-18 years old",
  "Teams can have 1-3 members",
  "All work must be original and created during the competition period",
  "Projects must address at least one UN Sustainable Development Goal",
  "Submissions must include working prototype, video demo, and pitch deck",
  "All team members must be registered before the deadline",
  "Use of AI tools is permitted but must be disclosed",
  "Plagiarism or cheating results in immediate disqualification"
];

const Journey = () => {
  return (
    <>
      <Helmet>
        <title>Your Innovation Journey | Teens World Cup 2025</title>
        <meta name="description" content="Follow the complete competition timeline from registration to awards. Understand the rules, prizes, and judging criteria." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-twc-orange-light via-background to-twc-blue-light">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Your Innovation Journey
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Follow the complete competition timeline from registration to awards. Understand the rules, prizes, and judging criteria to maximize your success in the Teens World Cup.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <Calendar className="h-5 w-5 text-twc-orange" />
                <span className="font-semibold">12 Weeks Total</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <Users className="h-5 w-5 text-twc-green" />
                <span className="font-semibold">1-3 Team Members</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border">
                <Globe className="h-5 w-5 text-twc-blue" />
                <span className="font-semibold">Global Competition</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="timeline" className="w-full">
              <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent mb-12">
                <TabsTrigger value="timeline" className="data-[state=active]:bg-twc-orange data-[state=active]:text-white px-6 py-3 rounded-full">
                  <Clock className="h-4 w-4 mr-2" />
                  Competition Timeline
                </TabsTrigger>
                <TabsTrigger value="prizes" className="data-[state=active]:bg-twc-green data-[state=active]:text-white px-6 py-3 rounded-full">
                  <Award className="h-4 w-4 mr-2" />
                  Prizes & Awards
                </TabsTrigger>
                <TabsTrigger value="rules" className="data-[state=active]:bg-twc-blue data-[state=active]:text-white px-6 py-3 rounded-full">
                  <FileText className="h-4 w-4 mr-2" />
                  Rules & Guidelines
                </TabsTrigger>
              </TabsList>

              {/* Timeline Tab */}
              <TabsContent value="timeline">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-4">Competition Timeline</h2>
                  <p className="text-center text-muted-foreground mb-12">
                    Follow each phase of the competition journey. Each stage builds upon the previous one, leading you from initial idea to final presentation.
                  </p>
                  
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-twc-orange via-twc-green to-twc-blue hidden md:block" />
                    
                    {timelinePhases.map((phase, index) => (
                      <div key={index} className="relative mb-8 md:pl-20">
                        {/* Timeline dot */}
                        <div className="absolute left-6 w-5 h-5 rounded-full bg-twc-orange border-4 border-background hidden md:block" style={{ top: '1.5rem' }} />
                        
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow">
                          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <h3 className="text-xl font-bold text-foreground">{phase.title}</h3>
                            <span className="bg-twc-orange-light text-twc-orange px-3 py-1 rounded-full text-sm font-semibold">
                              {phase.duration}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-6">{phase.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold text-twc-green mb-3">
                                <CheckCircle className="h-4 w-4" />
                                Key Activities
                              </h4>
                              <ul className="space-y-2">
                                {phase.activities.map((activity, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-twc-green">→</span>
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="flex items-center gap-2 font-semibold text-twc-yellow mb-3">
                                <Lightbulb className="h-4 w-4" />
                                Pro Tips
                              </h4>
                              <ul className="space-y-2">
                                {phase.tips.map((tip, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="text-twc-yellow">✦</span>
                                    {tip}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Prizes Tab */}
              <TabsContent value="prizes">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-4">Prizes & Awards</h2>
                  <p className="text-center text-muted-foreground mb-12">
                    Compete for amazing prizes including the grand prize trip to Silicon Valley!
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {prizes.map((prize, index) => (
                      <div 
                        key={index} 
                        className={`rounded-2xl p-6 border ${index === 0 ? 'bg-gradient-to-br from-twc-orange-light to-twc-yellow-light border-twc-orange' : 'bg-card border-border'}`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Award className={`h-8 w-8 ${index === 0 ? 'text-twc-orange' : 'text-twc-green'}`} />
                          <h3 className="text-xl font-bold">{prize.place}</h3>
                        </div>
                        <p className="text-2xl font-bold text-primary mb-2">{prize.amount}</p>
                        <p className="text-muted-foreground">{prize.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 bg-twc-green-light rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">All Participants Receive</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                      {["Certificate of Participation", "Feedback from Judges", "Access to Alumni Network", "Learning Resources"].map((item, i) => (
                        <span key={i} className="bg-white px-4 py-2 rounded-full text-sm font-semibold">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Rules Tab */}
              <TabsContent value="rules">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-4">Rules & Guidelines</h2>
                  <p className="text-center text-muted-foreground mb-12">
                    Please read and understand all rules before registering for the competition.
                  </p>
                  
                  <div className="bg-card rounded-2xl border border-border p-8">
                    <ul className="space-y-4">
                      {rules.map((rule, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-8 h-8 rounded-full bg-twc-blue-light text-twc-blue flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          <span className="text-foreground pt-1">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 bg-twc-orange-light rounded-2xl p-6 flex items-start gap-4">
                    <HelpCircle className="h-6 w-6 text-twc-orange flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Need Clarification?</h4>
                      <p className="text-muted-foreground text-sm">
                        If you have questions about any rules, please contact our support team before registering.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-twc-orange via-twc-green to-twc-blue">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Take the first step towards transforming your ideas into world-changing solutions.
            </p>
            <Link to="/register">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Register Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Journey;