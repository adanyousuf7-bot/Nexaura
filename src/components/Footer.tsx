import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Consultation', path: '/consultation' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/adanyousuf7-bot' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/adan-yousuf-69319a3b4/' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="group">
            <span className="font-logo text-3xl font-bold tracking-tighter transition-colors group-hover:text-primary">
              Nexaura
            </span>
          </Link>
          <p className="text-sm text-muted-foreground font-medium">
            Crafting digital excellence.
          </p>
          <div className="flex items-center gap-4 mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">
          All rights reserved. Design by Adan Yousuf
        </div>
      </div>
    </footer>
  );
}
