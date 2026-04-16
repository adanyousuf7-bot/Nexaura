import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles, Trophy, Quote, Search, Palette, Code2, Rocket } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { SEO } from '../components/SEO';

const testimonials = [
  {
    name: "Sarah Jenkins",
    title: "CEO at TechFlow",
    quote: "Nexaura transformed our digital presence. The attention to detail and technical expertise is truly unmatched.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Michael Chen",
    title: "Founder of Bloom",
    quote: "Working with Adan was a game-changer for our startup. Our conversion rates increased by 40% within a month.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Elena Rodriguez",
    title: "Marketing Director at Pulse",
    quote: "The most professional and creative developer I've ever worked with. The final product exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
  }
];

const processSteps = [
  {
    title: "Discovery",
    description: "We dive deep into your goals, audience, and market to define a clear path forward.",
    icon: Search,
    color: "text-blue-500"
  },
  {
    title: "Strategy",
    description: "Creating a detailed roadmap and wireframes that align with your business objectives.",
    icon: Palette,
    color: "text-purple-500"
  },
  {
    title: "Development",
    description: "Building your high-performance solution with clean, scalable, and modern code.",
    icon: Code2,
    color: "text-orange-500"
  },
  {
    title: "Launch",
    description: "Rigorous testing followed by a smooth deployment to ensure a perfect start.",
    icon: Rocket,
    color: "text-red-500"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-20">
      <SEO 
        title="Home" 
        description="Nexaura builds extraordinary digital experiences that capture attention. We specialize in high-performance web development and strategic design."
        keywords="web development, digital experiences, Nexaura, full-stack developer, UI/UX design"
      />
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-10 relative z-10"
        >
          <Reveal delay={0.2}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-glow">
              I build digital <br />
              <span className="text-primary italic">experiences</span> that <br />
              people actually <span className="underline decoration-primary/30 underline-offset-8">care</span> about.
            </h1>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Stop settling for average. Let's build something extraordinary 
              that captures attention and never lets go.
            </p>
          </Reveal>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-105 active:scale-95">
              <Link to="/contact">
                Work With Me <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="rounded-full px-10 h-16 text-lg font-bold glass transition-all hover:bg-primary/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Background Decorative Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full max-w-6xl aspect-square opacity-20 pointer-events-none"
        >
          <div className="absolute inset-0 bg-radial from-primary/20 to-transparent blur-3xl animate-pulse" />
        </motion.div>
      </section>

      {/* New Content Section: My Approach */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter">
                Why Choose <span className="text-primary italic">Nexaura</span>?
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I don't just write code; I solve problems. My approach combines 
                technical precision with creative strategy to ensure your project 
                stands out in a crowded digital world.
              </p>
            </Reveal>
            <ul className="space-y-4">
              {[
                { icon: CheckCircle2, text: "Strategic planning for every project" },
                { icon: Sparkles, text: "Cutting-edge design and technology" },
                { icon: Trophy, text: "Focus on conversion and user engagement" }
              ].map((item, i) => (
                <div key={i}>
                  <Reveal delay={0.5 + i * 0.1}>
                    <li className="flex items-center gap-3 text-lg font-medium">
                      <item.icon className="w-6 h-6 text-primary" />
                      {item.text}
                    </li>
                  </Reveal>
                </div>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <Reveal delay={0.2}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl glass border-primary/10 aspect-square flex flex-col justify-center items-center text-center"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">99%</h4>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Client Satisfaction</p>
                </motion.div>
              </Reveal>
              <Reveal delay={0.4}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-primary/5 border border-primary/10 aspect-square flex flex-col justify-center items-center text-center"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Support</p>
                </motion.div>
              </Reveal>
            </div>
            <div className="space-y-6 pt-12">
              <Reveal delay={0.3}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl bg-primary/5 border border-primary/10 aspect-square flex flex-col justify-center items-center text-center"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">100+</h4>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Success Stories</p>
                </motion.div>
              </Reveal>
              <Reveal delay={0.5}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl glass border-primary/10 aspect-square flex flex-col justify-center items-center text-center"
                >
                  <h4 className="text-4xl font-bold text-primary mb-2">Fast</h4>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60">Delivery</p>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-4 mb-20">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter">
              The <span className="text-primary italic">Process</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to bringing your vision to life, from initial concept to final launch.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div key={i}>
              <Reveal delay={0.2 + i * 0.1}>
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-3xl glass border-primary/5 relative group h-full"
                >
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                    {i + 1}
                  </div>
                  <step.icon className={`w-12 h-12 mb-6 ${step.color}`} />
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 w-full overflow-hidden">
        <div className="text-center space-y-4 mb-16">
          <Reveal>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter">
              What My <span className="text-primary italic">Clients Say</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it. Here's what some of my amazing clients have to say about working with Nexaura.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          <motion.div 
            drag="x"
            dragConstraints={{ left: -400, right: 0 }}
            className="flex gap-8 cursor-grab active:cursor-grabbing"
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className="min-w-[350px] md:min-w-[450px]">
                <Reveal delay={0.2 + i * 0.1}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="p-8 rounded-3xl glass border-primary/5 hover:border-primary/20 transition-all duration-500 group relative h-full select-none"
                  >
                    <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    
                    <div className="space-y-6 relative z-10">
                      <p className="text-lg leading-relaxed italic text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-8 gap-2">
            <div className="w-8 h-1 rounded-full bg-primary" />
            <div className="w-2 h-1 rounded-full bg-primary/20" />
            <div className="w-2 h-1 rounded-full bg-primary/20" />
          </div>
        </div>
      </section>
    </div>
  );
}


