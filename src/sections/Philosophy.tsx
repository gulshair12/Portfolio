import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Layers, 
  Accessibility, 
  Zap, 
  Code2, 
  Users, 
  Sparkles,
  Quote
} from 'lucide-react';

interface Principle {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const principles: Principle[] = [
  {
    icon: Layers,
    title: 'Clean Architecture',
    description: 'I believe in modular, maintainable code that scales with your team and product. Every component has a single responsibility.',
    color: 'text-blue-400',
  },
  {
    icon: Code2,
    title: 'Reusable Components',
    description: 'Building a design system is an investment in velocity. I create components that are flexible, documented, and easy to extend.',
    color: 'text-purple-400',
  },
  {
    icon: Accessibility,
    title: 'Accessibility First',
    description: 'The web is for everyone. I ensure WCAG compliance, keyboard navigation, and screen reader support from day one.',
    color: 'text-green-400',
  },
  {
    icon: Zap,
    title: 'Performance Mindset',
    description: 'Speed is a feature. I optimize for Core Web Vitals, lazy loading, and efficient rendering to deliver snappy experiences.',
    color: 'text-yellow-400',
  },
  {
    icon: Users,
    title: 'Developer Experience',
    description: 'Great code is readable code. I prioritize clear naming, comprehensive documentation, and intuitive APIs.',
    color: 'text-pink-400',
  },
  {
    icon: Sparkles,
    title: 'Delightful Details',
    description: 'Micro-interactions and polished animations transform good products into memorable experiences.',
    color: 'text-cyan-400',
  },
];

const Philosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 right-[5%] w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-20"
        >
          <Quote className="w-12 h-12 text-portfolio-indigo/30 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-medium text-portfolio-text leading-relaxed max-w-4xl mx-auto mb-6">
            "Design is not just what it looks like and feels like.{' '}
            <span className="text-gradient">Design is how it works.</span>"
          </blockquote>
          <cite className="text-portfolio-muted not-italic">
            — Steve Jobs
          </cite>
        </motion.div>

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="section-label mb-4 block">
            Philosophy
          </motion.span>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            Design & Engineering{' '}
            <span className="text-gradient">Principles</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-2xl mx-auto"
          >
            The guiding values that shape my approach to every project, 
            from architecture decisions to the final pixel.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {principles.map((principle) => (
            <motion.div
              key={principle.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="card-surface h-full p-6 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-portfolio-indigo/5 to-portfolio-cyan/5" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-portfolio-surface border border-portfolio-indigo/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <principle.icon className={`w-6 h-6 ${principle.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-portfolio-text mb-3 group-hover:text-gradient transition-colors">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-portfolio-muted leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16 text-center"
        >
          <p className="text-portfolio-muted mb-4">
            Want to see these principles in action?
          </p>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore My Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
