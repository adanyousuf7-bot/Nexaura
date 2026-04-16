import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send, CheckCircle2, Github, Linkedin, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const newErrors: Record<string, string> = {};
    if (!data.firstName) newErrors.firstName = "Required";
    if (!data.lastName) newErrors.lastName = "Required";
    if (!data.email) newErrors.email = "Required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email as string)) newErrors.email = "Invalid email";
    if (!data.message) newErrors.message = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/adanyousuf7@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const errorData = await response.json();
        setErrors({ form: errorData.errors?.[0]?.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setErrors({ form: "Network error. Please check your connection." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
      <SEO 
        title="Contact" 
        description="Get in touch with Nexaura. Have a project in mind or just want to say hi? We'd love to hear from you."
        keywords="contact Nexaura, hire developer, web development inquiry, project consultation"
      />
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6"
        >
          Let's <span className="text-primary italic">Connect</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          Have a project in mind or just want to say hi? I'd love to hear from you.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Email</h4>
                <p className="text-muted-foreground">adanyousuf7@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Phone</h4>
                <p className="text-muted-foreground">+92 226-56532</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">Location</h4>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
            <h4 className="text-xl font-bold mb-4">Working Hours</h4>
            <p className="text-muted-foreground">
              Monday, Friday: 9am - 6pm<br />
              Weekend: By appointment
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative bg-card border border-border p-8 md:p-10 rounded-3xl shadow-xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                    <Input name="firstName" placeholder="John" className={`h-12 rounded-xl border-border bg-background ${errors.firstName ? 'border-destructive' : ''}`} />
                    {errors.firstName && <p className="text-xs text-destructive font-bold">{errors.firstName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                    <Input name="lastName" placeholder="Doe" className={`h-12 rounded-xl border-border bg-background ${errors.lastName ? 'border-destructive' : ''}`} />
                    {errors.lastName && <p className="text-xs text-destructive font-bold">{errors.lastName}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                  <Input name="email" type="email" placeholder="john@example.com" className={`h-12 rounded-xl border-border bg-background ${errors.email ? 'border-destructive' : ''}`} />
                  {errors.email && <p className="text-xs text-destructive font-bold">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <Textarea name="message" placeholder="Tell me about your project..." className={`min-h-[150px] rounded-xl border-border bg-background resize-none ${errors.message ? 'border-destructive' : ''}`} />
                  {errors.message && <p className="text-xs text-destructive font-bold">{errors.message}</p>}
                </div>

                <AnimatePresence>
                  {errors.form && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-xl bg-destructive/10 text-destructive text-sm font-bold"
                    >
                      {errors.form}
                    </motion.div>
                  )}
                </AnimatePresence>

                <Button type="submit" disabled={isLoading} className="w-full h-14 rounded-xl text-lg font-bold group">
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
                </Button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Message Received!</h3>
                  <p className="text-muted-foreground">
                    Your message has been submitted. I'll get back to you as soon as possible.
                  </p>
                </div>
                <Button variant="outline" onClick={() => setIsSubmitted(false)} className="rounded-xl">
                  Send another message
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* What to Expect Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">
            What to <span className="text-primary italic">Expect</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I value your time and aim to provide a seamless communication experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Clock, title: "Quick Response", text: "I typically respond to all inquiries within 24 hours during business days." },
            { icon: MessageSquare, title: "Detailed Discussion", text: "We'll schedule a brief call to dive deep into your project requirements." },
            { icon: ShieldCheck, title: "Secure & Private", text: "Your project details and data are always kept strictly confidential." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl glass border-primary/5 text-center space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-2xl font-bold">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Links Section */}
      <section className="text-center space-y-12">
        <h3 className="font-heading text-3xl font-bold tracking-tighter">Follow My <span className="text-primary italic">Journey</span></h3>
        <div className="flex justify-center gap-6">
          {[
            { icon: Github, href: "https://github.com/adanyousuf7-bot", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/adan-yousuf-69319a3b4/", label: "LinkedIn" }
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-16 h-16 rounded-2xl glass border-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-7 h-7" />
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}

