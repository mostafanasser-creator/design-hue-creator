import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import twcLogo from "@/assets/twc-logo.png";

const footerLinks = {
  competition: [
    { name: "About", href: "#about" },
    { name: "Stages", href: "#stages" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
  ],
  resources: [
    { name: "Registration", href: "#" },
    { name: "Guidelines", href: "#" },
    { name: "Past Winners", href: "#" },
    { name: "Media Kit", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img src={twcLogo} alt="Teens World Cup" className="h-12 w-auto" />
              <span className="text-xl font-bold">Teens World Cup</span>
            </a>
            <p className="text-background/70 mb-6 max-w-sm">
              Empowering young innovators aged 6-16 to create tech solutions for 
              a sustainable future through the UN SDGs.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-twc-orange transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Competition</h3>
            <ul className="space-y-3">
              {footerLinks.competition.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-twc-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-twc-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-twc-orange transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Teens World Cup. All rights reserved.
          </p>
          <p className="text-background/60 text-sm">
            Made with ❤️ for young innovators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
