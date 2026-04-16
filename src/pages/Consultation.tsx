import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { CheckCircle2, Calendar, Clock, Video, ArrowRight, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';

const packages = [
  {
    id: 'discovery',
    name: 'Discovery Session',
    duration: '30 Mins',
    price: 'Free',
    description: 'Perfect for initial project discussions and exploring how we can work together.',
    features: [
      'Project scope analysis',
      'Technical feasibility check',
      'Initial roadmap discussion',
      'Q&A Session'
    ],
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    id: 'strategy',
    name: 'Strategy Deep-Dive',
    duration: '60 Mins',
    price: '$149',
    description: 'A comprehensive session to define your digital strategy and technical architecture.',
    features: [
      'Detailed architecture plan',
      'Tech stack recommendations',
      'Performance optimization tips',
      'Scalability strategy'
    ],
    color: 'bg-primary/10 text-primary',
    popular: true
  },
  {
    id: 'audit',
    name: 'Technical Audit',
    duration: '120 Mins',
    price: '$299',
    description: 'In-depth review of your existing codebase or complex project requirements.',
    features: [
      'Full code/logic review',
      'Security vulnerability check',
      'Infrastructure assessment',
      'Detailed report provided'
    ],
    color: 'bg-purple-500/10 text-purple-500'
  }
];

export default function Consultation() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-24">
      <SEO 
        title="Consultation" 
        description="Book a technical consultation with Nexaura. Get expert guidance on project scope, technical feasibility, and roadmaps."
        keywords="technical consultation, project planning, Nexaura consultation, hire developer, expert advice"
      />
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase"
        >
          <Sparkles className="w-4 h-4" />
          Expert Guidance
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl font-bold tracking-tighter"
        >
          Book a <span className="text-primary italic">Consultation</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground leading-relaxed"
        >
          Accelerate your project with expert technical advice. Select a package that fits your needs and let's start building.
        </motion.p>
      </div>

      {/* Packages Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <Card className={`h-full border-border bg-card/30 backdrop-blur-md transition-all duration-500 group relative overflow-hidden flex flex-col ${selectedPackage === pkg.id ? 'ring-2 ring-primary border-primary/50 scale-[1.02]' : 'hover:border-primary/30'}`}>
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                  Most Popular
                </div>
              )}
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.color}`}>
                  <Video className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                </div>
                <div className="text-4xl font-bold tracking-tight">
                  {pkg.price}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => setSelectedPackage(pkg.id)}
                  variant={selectedPackage === pkg.id ? "default" : "outline"}
                  className="w-full h-12 rounded-xl font-bold"
                >
                  {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Booking Form */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card border border-border p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20" />
              
              {!isSubmitted ? (
                <div className="space-y-10">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold tracking-tight">Complete Your Booking</h3>
                    <p className="text-muted-foreground">
                      You've selected the <span className="text-foreground font-bold">{packages.find(p => p.id === selectedPackage)?.name}</span>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                        <Input required placeholder="John Doe" className="h-14 rounded-2xl bg-background border-border" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                        <Input required type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-background border-border" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Preferred Date</label>
                        <div className="relative">
                          <Input required type="date" className="h-14 rounded-2xl bg-background border-border pl-12" />
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Preferred Time</label>
                        <div className="relative">
                          <Input required type="time" className="h-14 rounded-2xl bg-background border-border pl-12" />
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Project Details / Goals</label>
                      <Textarea required placeholder="Tell me a bit about what you'd like to discuss..." className="min-h-[120px] rounded-2xl bg-background border-border resize-none" />
                    </div>

                    <Button type="submit" disabled={isLoading} className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20">
                      {isLoading ? "Processing..." : "Confirm Appointment"}
                      {!isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                    </Button>
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-8"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-bold tracking-tight">Appointment Requested!</h3>
                    <p className="text-xl text-muted-foreground max-w-md mx-auto">
                      Thank you for booking. I'll review your request and send a calendar invitation shortly.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => { setIsSubmitted(false); setSelectedPackage(null); }} className="rounded-xl h-12 px-8">
                    Back to Packages
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
