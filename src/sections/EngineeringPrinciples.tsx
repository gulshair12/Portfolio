import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Layers,
  Zap,
  LayoutGrid,
  Accessibility,
  Sparkles,
  Package,
  Rocket,
  Code2,
  TrendingUp,
  Workflow,
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
    title: 'Scalable Frontend Architecture',
    description:
      'Designing modular frontend systems that remain maintainable as products, teams, and business requirements grow.',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Zap,
    title: 'Performance-First Development',
    description:
      'Improving rendering efficiency, load performance, and runtime responsiveness through modern frontend optimization techniques.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: LayoutGrid,
    title: 'Reusable Design Systems',
    description:
      'Building reusable UI systems and component patterns that improve consistency, scalability, and development speed.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Accessibility,
    title: 'Accessibility & Responsive UX',
    description: 'Inclusive interfaces that work seamlessly across devices, screen sizes, and user needs.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Assisted Development Workflows',
    description:
      'Leveraging AI-assisted workflows to accelerate development, debugging, and delivery while maintaining engineering quality.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Package,
    title: 'Maintainable Component Libraries',
    description:
      'Developing maintainable component libraries with reusable patterns, clear abstractions, and scalable structure.',
    color: 'from-purple-500 to-fuchsia-500',
  },
  {
    icon: Rocket,
    title: 'Production-Ready Frontend Systems',
    description: 'Shipping reliable, tested features that hold up under real-world traffic and user expectations.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Code2,
    title: 'Developer Experience & Code Quality',
    description: 'Clean abstractions, strong typing, and workflows that keep teams productive and confident.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Core Web Vitals Optimization',
    description: 'Search-friendly, fast-loading experiences that meet modern performance benchmarks.',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    icon: Workflow,
    title: 'Complex Form & State Management',
    description:
      'Managing complex application state, multi-step workflows, validations, and async data flows in large-scale applications.',
    color: 'from-violet-500 to-purple-500',
  },
];

const EngineeringPrinciples = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="principles"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[5%] w-80 h-80 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-[10%] w-64 h-64 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="section-label mb-4 block">
            How I Engineer
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            Engineering <span className="text-gradient">Principles</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-4xl mx-auto"
          >
            The engineering standards I follow when building scalable frontend systems from architecture and performance optimization to production delivery and long-term maintainability.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="card-surface h-full p-5 relative overflow-hidden">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-br ${principle.color}`}
                  style={{ padding: '1px' }}
                >
                  <div className="w-full h-full rounded-xl bg-portfolio-surface" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${principle.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <principle.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-mono text-portfolio-muted/60 tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-portfolio-text mb-2 leading-snug group-hover:text-gradient transition-colors">
                    {principle.title}
                  </h3>

                  <p className="text-xs text-portfolio-muted leading-relaxed flex-1">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass max-w-4xl">
            <Rocket className="w-5 h-5 text-portfolio-cyan shrink-0" />
            <span className="text-sm sm:text-base text-portfolio-text">
              Built for teams that need frontend ownership, scalable systems, and product-focused engineering.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
