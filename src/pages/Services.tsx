import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Globe, Smartphone, Palette, Search, Rocket } from 'lucide-react';
import { SEO } from '../components/SEO';

const services = [
  {
    title: "Web Development",
    description: "Custom, responsive websites built with modern frameworks like React and Next.js.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that ensures your product is both beautiful and easy to use.",
    icon: Palette,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    title: "Mobile Optimization",
    description: "Ensuring your website looks and performs perfectly on all devices and screen sizes.",
    icon: Smartphone,
    color: "bg-green-500/10 text-green-500"
  },
  {
    title: "Backend Systems",
    description: "Robust server-side logic and database management to power your applications.",
    icon: Code2,
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    title: "SEO Strategy",
    description: "Optimizing your site structure and content to rank higher in search results.",
    icon: Search,
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    title: "Performance Tuning",
    description: "Deep optimization to ensure your site loads instantly and runs smoothly.",
    icon: Rocket,
    color: "bg-red-500/10 text-red-500"
  }
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      <SEO 
        title="Services" 
        description="Explore our specialized digital services including web development, UI/UX design, mobile optimization, and SEO strategy."
        keywords="web development, UI/UX design, mobile optimization, SEO strategy, digital services"
      />
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-6xl font-bold tracking-tighter mb-6"
        >
          Specialized <span className="text-primary italic">Services</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          I offer a comprehensive range of development and design services 
          to help you build a powerful digital presence.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <Card className="h-full border-border bg-card/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group glass">
              <CardHeader>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-32 space-y-16">
        <div className="text-center space-y-4">
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">
            Frequently Asked <span className="text-primary italic">Questions</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with Nexaura.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {[
            { q: "How long does a typical project take?", a: "Most projects take between 4 to 8 weeks, depending on complexity and scope. We'll provide a detailed timeline during the discovery phase." },
            { q: "Do you offer ongoing maintenance?", a: "Yes, we offer various maintenance packages to ensure your site stays secure, updated, and performing at its best." },
            { q: "Can you work with existing codebases?", a: "Absolutely. We can audit, optimize, and build upon your existing infrastructure while ensuring best practices." },
            { q: "What is your pricing structure?", a: "We offer both project-based and value-based pricing. Every project is unique, so we provide custom quotes after our initial consultation." }
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border-primary/5 hover:border-primary/20 transition-all group"
            >
              <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{faq.q}</h4>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
