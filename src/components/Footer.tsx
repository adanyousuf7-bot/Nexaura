import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const sitemapLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Consultation', path: '/consultation' },
];

const legalLinks = [
  { name: 'Privacy Policy', path: '/' },
  { name: 'Terms of Service', path: '/' },
  { name: 'Cookie Policy', path: '/' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/adanyousuf7-bot' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/adan-yousuf-69319a3b4/' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <footer className="relative bg-background border-t border-border pt-20 pb-10 mt-20 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
        {/* Brand & Contact Info */}
        <div className="md:col-span-4 lg:col-span-4 space-y-6">
          <Link to="/" className="group inline-block">
            <span className="font-logo text-4xl font-bold tracking-tighter transition-colors group-hover:text-primary">
              Nexaura
            </span>
          </Link>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Crafting digital excellence and immersive web experiences that elevate your brand and drive results.
          </p>
          <div className="space-y-4 pt-2">
            <a href="mailto:adanyousuf7@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium font-mono text-sm">adanyousuf7@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-muted-foreground group cursor-default">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
              <span className="font-medium font-mono text-sm">+92 226-56532</span>
            </div>
          </div>
        </div>

        {/* Sitemap & Quick Links */}
        <div className="md:col-span-3 lg:col-span-2 space-y-6">
          <h4 className="text-xl font-bold text-foreground">Sitemap</h4>
          <ul className="space-y-4">
            {sitemapLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="group flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary" />
                  <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal & Social */}
        <div className="md:col-span-2 lg:col-span-2 space-y-6">
          <h4 className="text-xl font-bold text-foreground">Legal</h4>
          <ul className="space-y-4">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium inline-block relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary/50 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-8 lg:col-span-4 space-y-6">
          <h4 className="text-xl font-bold text-foreground">Stay Updated</h4>
          <p className="text-muted-foreground leading-relaxed">
            Subscribe to the newsletter for the latest insights on design, development, and tech trends.
          </p>
          <div className="relative mt-4">
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubscribe} 
                  className="flex gap-2"
                >
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-background/50 border-border h-12 focus-visible:ring-primary/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" disabled={isLoading} className="h-12 px-6 font-bold">
                    {isLoading ? "..." : "Subscribe"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3 h-12 px-4 rounded-md border border-primary/20 bg-primary/10 text-primary"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">Thanks for subscribing!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex gap-4 pt-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nexaura. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Designed & Developed by</span>
            <span className="font-bold text-foreground">Adan Yousuf</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
