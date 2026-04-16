import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <Link to="/" className="group block">
          <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.1 } },
              hover: { transition: { staggerChildren: 0.05 } }
            }}
            className="flex items-center gap-1 overflow-visible"
          >
            <div className="flex">
              {"Nexaura".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { opacity: 0, y: -40, rotateX: -90 },
                    animate: { 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                      transition: { type: "spring", bounce: 0.6 }
                    },
                    hover: {
                      y: -12,
                      rotateZ: [0, 15, -15, 0],
                      scale: 1.3,
                      transition: { duration: 0.4 }
                    }
                  }}
                  className="font-logo text-3xl font-bold tracking-tighter inline-block text-foreground group-hover:text-primary transition-colors duration-300"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            
            <motion.div
              variants={{
                initial: { scale: 0, rotateZ: 0 },
                animate: { 
                  scale: [1, 1.8, 1],
                  rotateZ: [0, 180, 360],
                  borderRadius: ["50%", "20%", "50%"],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                },
                hover: {
                  scale: 2.5,
                  rotateZ: 720,
                  borderRadius: "10%",
                  transition: { duration: 0.6, ease: "easeOut" }
                }
              }}
              className="w-3 h-3 bg-primary ml-2 shadow-[0_0_15px_rgba(var(--primary),0.8)]"
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="h-px bg-primary mt-0.5"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          <Link to="/consultation" className="relative block group">
            <div className="absolute -inset-0.5 rounded-full bg-primary/50 blur opacity-70 animate-pulse group-hover:opacity-100 transition-opacity" />
            <Button size="sm" className="relative rounded-full px-6 font-bold shadow-lg hover:scale-105 transition-transform">
              Book Consultation
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Link to="/consultation" className="relative block group">
            <div className="absolute -inset-0.5 rounded-full bg-primary/50 blur opacity-70 animate-pulse group-hover:opacity-100 transition-opacity" />
            <Button size="xs" className="relative rounded-full px-4 font-bold">
              Book
            </Button>
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-24 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "text-2xl font-bold tracking-tight transition-colors hover:text-primary",
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link to="/consultation" className="relative block group">
                  <div className="absolute -inset-1 rounded-full bg-primary/50 blur-md opacity-70 animate-pulse group-hover:opacity-100 transition-opacity" />
                  <Button size="lg" className="relative rounded-full px-8 font-bold text-lg hover:scale-105 transition-transform">
                    Book Consultation
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
