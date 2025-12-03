import { Helmet } from "react-helmet-async";
import { Calendar, ArrowRight, Tag, Clock, Bell } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Registration Opens for Teens World Cup 2025!",
    excerpt: "We're excited to announce that registration for the Teens World Cup 2025 is now open. Join thousands of young innovators from around the world.",
    date: "December 1, 2024",
    category: "Announcement",
    featured: true,
    readTime: "3 min read"
  },
  {
    id: 2,
    title: "New Partnership with Silicon Valley Mentors",
    excerpt: "We've partnered with leading tech companies to provide mentorship opportunities for all participants. Get guidance from industry experts.",
    date: "November 28, 2024",
    category: "Partnership",
    featured: false,
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "2024 Winners Making Real-World Impact",
    excerpt: "Our 2024 winners have gone on to implement their solutions in their communities, impacting over 100,000 lives worldwide.",
    date: "November 20, 2024",
    category: "Success Story",
    featured: false,
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "New SDG Categories Added for 2025",
    excerpt: "This year we're expanding our focus areas to include Climate Action and Sustainable Cities. More opportunities to make an impact!",
    date: "November 15, 2024",
    category: "Update",
    featured: false,
    readTime: "2 min read"
  },
  {
    id: 5,
    title: "Workshop Series: Building Your First Prototype",
    excerpt: "Join our free online workshop series where industry experts guide you through the process of building your first working prototype.",
    date: "November 10, 2024",
    category: "Workshop",
    featured: false,
    readTime: "3 min read"
  },
  {
    id: 6,
    title: "Meet Our 2025 Judging Panel",
    excerpt: "We're proud to announce our distinguished panel of judges including tech leaders, educators, and social impact experts.",
    date: "November 5, 2024",
    category: "Announcement",
    featured: false,
    readTime: "4 min read"
  }
];

const upcomingEvents = [
  {
    title: "Registration Deadline",
    date: "March 15, 2025",
    description: "Last day to register your team"
  },
  {
    title: "Kickoff Webinar",
    date: "March 20, 2025",
    description: "Official competition kickoff event"
  },
  {
    title: "Mentor Matching",
    date: "March 25, 2025",
    description: "Get paired with your mentor"
  },
  {
    title: "Prototype Workshop",
    date: "April 5, 2025",
    description: "Learn how to build your MVP"
  }
];

const categoryColors: Record<string, string> = {
  "Announcement": "bg-twc-orange-light text-twc-orange",
  "Partnership": "bg-twc-green-light text-twc-green",
  "Success Story": "bg-twc-blue-light text-twc-blue",
  "Update": "bg-twc-yellow-light text-twc-yellow",
  "Workshop": "bg-purple-100 text-purple-600"
};

const News = () => {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <>
      <Helmet>
        <title>News & Updates | Teens World Cup 2025</title>
        <meta name="description" content="Stay updated with the latest news, announcements, and updates from the Teens World Cup competition." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-twc-blue-light via-background to-twc-green-light">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-twc-orange-light text-twc-orange px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Bell className="h-4 w-4" />
              Latest Updates
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              News & Updates
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay informed about the latest announcements, success stories, and important updates from the Teens World Cup competition.
            </p>
          </div>
        </section>

        {/* Featured News */}
        {featuredNews && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="bg-gradient-to-br from-twc-orange-light to-twc-yellow-light rounded-3xl overflow-hidden border border-twc-orange/20">
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${categoryColors[featuredNews.category]}`}>
                      {featuredNews.category}
                    </span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredNews.date}
                    </span>
                    <span className="text-muted-foreground text-sm flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 max-w-3xl">
                    {featuredNews.excerpt}
                  </p>
                  <Button variant="orange" className="group">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* News Grid & Sidebar */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* News Grid */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-8">Recent News</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {otherNews.map((item) => (
                    <article 
                      key={item.id}
                      className="bg-card rounded-2xl border border-border p-6 hover:shadow-card-hover transition-shadow cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category]}`}>
                          {item.category}
                        </span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {item.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                        <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="h-3 w-3" />
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Upcoming Events */}
                <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-twc-orange" />
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                        <div className="flex-shrink-0 w-12 h-12 bg-twc-orange-light rounded-lg flex flex-col items-center justify-center">
                          <span className="text-xs text-twc-orange font-semibold">
                            {event.date.split(" ")[0]}
                          </span>
                          <span className="text-xs text-twc-orange">
                            {event.date.split(" ")[1]?.replace(",", "")}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{event.title}</h4>
                          <p className="text-xs text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Tag className="h-5 w-5 text-twc-green" />
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(categoryColors).map((category) => (
                      <span 
                        key={category}
                        className={`px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:opacity-80 transition-opacity ${categoryColors[category]}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-twc-green-light to-twc-blue-light rounded-2xl p-6 text-center">
                  <h3 className="text-xl font-bold mb-3">Ready to Join?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Don't miss out on the opportunity to showcase your innovation.
                  </p>
                  <Link to="/register">
                    <Button variant="green" className="w-full">
                      Register Now
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <Bell className="h-12 w-12 text-twc-orange mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="orange">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default News;