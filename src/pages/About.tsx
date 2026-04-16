import { motion } from 'motion/react';
import { Zap, Target, Heart, Award } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
      <SEO 
        title="About" 
        description="Learn more about Adan Yousuf and Nexaura. We are dedicated to crafting immersive, high-performance digital experiences."
        keywords="Adan Yousuf, Nexaura, about us, full-stack developer, digital excellence"
      />
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-72 h-72 md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl md:rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://i.pinimg.com/1200x/14/f3/6f/14f36f36bcf153f969711486e5e13147.jpg" 
              alt="Adan Yousuf" 
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-background border border-border p-5 rounded-3xl shadow-xl glass">
            <Zap className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </motion.div>

        <div className="flex-grow space-y-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter leading-tight mb-6">
              The Mind Behind <br />
              <span className="text-primary italic">Nexaura</span>.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
              I'm Adan Yousuf, a full-stack developer dedicated to crafting immersive, 
              high-performance digital experiences that blend aesthetics with functionality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Target, title: "Precision", text: "Every pixel and every line of code is intentional and optimized." },
          { icon: Heart, title: "Passion", text: "I love what I do, and it shows in the quality of my work." },
          { icon: Award, title: "Excellence", text: "Striving for the best in every project, no matter the size." }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-3xl glass border-primary/5 hover:border-primary/20 transition-colors"
          >
            <item.icon className="w-10 h-10 text-primary mb-6" />
            <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Tech Stack Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">
            My <span className="text-primary italic">Tech Stack</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I use a modern, high-performance stack to build scalable and maintainable applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { category: "Frontend", tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
            { category: "Backend", tools: ["Node.js", "Express", "PostgreSQL", "Firebase", "Supabase"] },
            { category: "Design", tools: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
            { category: "Tools", tools: ["Git", "Docker", "Vercel", "AWS", "Postman"] }
          ].map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass border-primary/5 space-y-6"
            >
              <h4 className="text-xl font-bold text-primary">{stack.category}</h4>
              <ul className="space-y-3">
                {stack.tools.map((tool, j) => (
                  <li key={j} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="font-heading text-3xl md:text-5xl font-bold tracking-tighter">
            My <span className="text-primary italic">Philosophy</span>
          </h3>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I believe that the web should be more than just a collection of pages. 
              It should be an experience, a journey that leaves a lasting impression. 
              At Nexaura, I focus on the intersection of design and technology.
            </p>
            <p>
              Every project I undertake is a commitment to excellence. From the 
              initial concept to the final deployment, I ensure that every detail 
              is polished and every interaction is meaningful.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div>
              <h4 className="text-4xl font-bold text-primary mb-1">50+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-primary mb-1">5+</h4>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Years Experience</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-2xl glass group">
            <img 
              src="https://i.pinimg.com/1200x/14/f3/6f/14f36f36bcf153f969711486e5e13147.jpg" 
              alt="Workspace" 
              className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}


