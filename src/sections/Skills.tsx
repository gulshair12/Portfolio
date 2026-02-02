import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Palette,
  Database,
  Zap,
  Wrench,
  Layers,
  GitBranch,
  Globe,
  Cpu,
  Layout,
  Sparkles
} from 'lucide-react';

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Frontend Core',
    skills: ['React & Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Palette,
    title: 'Styling & UI',
    skills: ['Tailwind CSS', 'Styled Components (SCSS) ', 'Material UI', 'Shadcn/ui'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Database,
    title: 'State & Data',
    skills: ['Redux-toolkit & Zustand', 'Tanstack Query', 'REST APIs'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Performance',
    skills: ['Core Web Vitals', 'Lazy Loading', 'Code Splitting', 'Caching Strategies'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Wrench,
    title: 'Developer Experience',
    skills: ['Testing ', 'CI/CD Pipelines', 'Code Quality', 'Documentation'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Architecture',
    skills: ['Design Systems', 'Component Libraries', 'Micro-frontends', 'Module Federation'],
    color: 'from-purple-500 to-violet-500',
  },
];

const additionalTools = [
  { icon: GitBranch, name: 'Git, GitHub & Gitlab' },
  { icon: Globe, name: 'Web APIs' },
  { icon: Cpu, name: 'Build Tools' },
  { icon: Layout, name: 'Figma' },
  { icon: Sparkles, name: 'Animations' },
];

const Skills = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-[5%] w-96 h-96 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="section-label mb-4 block">
            Expertise
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-2xl mx-auto"
          >
            A comprehensive toolkit built over 3+ years of crafting digital experiences.
            From frontend fundamentals to advanced architectural patterns.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="card-surface h-full p-6 relative overflow-hidden">
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-br ${category.color}`}
                  style={{ padding: '1px' }}
                >
                  <div className="w-full h-full rounded-xl bg-portfolio-surface" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-portfolio-text mb-4 group-hover:text-gradient transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-portfolio-muted flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-indigo" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-portfolio-text mb-6"
          >
            Additional Tools & Technologies
          </motion.h3>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {additionalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-portfolio-muted hover:text-portfolio-text hover:border-portfolio-indigo/50 transition-colors"
              >
                <tool.icon className="w-4 h-4 text-portfolio-indigo" />
                {tool.name}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Sparkles className="w-5 h-5 text-portfolio-cyan" />
            <span className="text-portfolio-text">
              <strong className="text-gradient">3+ Years</strong> of continuous learning and growth
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
