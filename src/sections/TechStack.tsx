import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TechCategory {
  title: string;
  items: { name: string; icon?: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'TS' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'HTML5', icon: 'H5' },
      { name: 'CSS3', icon: 'C3' },

    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: 'Re' },
      { name: 'Next.js', icon: 'Nx' },
      { name: 'Redux-Toolkit', icon: 'Rt' },
      { name: 'Zustand', icon: 'Zu' },
      { name: 'Tanstack Query', icon: 'Tq' },
    ],
  },
  {
    title: 'Styling & UI',
    items: [
      { name: 'Tailwind CSS', icon: 'Tw' },
      { name: 'Styled Components', icon: 'Sc' },
      { name: 'Framer Motion', icon: 'Fm' },
      { name: 'GSAP', icon: 'Gs' },
      { name: 'shadcn/ui', icon: 'Sh' },
      { name: 'Material UI', icon: 'Mu' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git', icon: 'Gi' },
      { name: 'GitHub', icon: 'Gh' },
      { name: 'GitLab', icon: 'Gl' },
      { name: 'Vercel', icon: 'Ve' },
    ],
  },
];

const TechStack = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="techstack"
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
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span variants={itemVariants} className="section-label mb-4 block">
            Toolkit
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            Tech <span className="text-gradient">Stack</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-2xl mx-auto"
          >
            The technologies and tools I use to bring ideas to life.
            Always learning, always evolving.
          </motion.p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="card-surface p-6"
            >
              <h3 className="text-lg font-semibold text-portfolio-text mb-4 pb-3 border-b border-portfolio-indigo/20">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    custom={itemIndex}
                    variants={techItemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    className="group"
                  >
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-portfolio-bg border border-portfolio-indigo/10 hover:border-portfolio-indigo/40 transition-colors">
                      {item.icon && (
                        <span className="w-6 h-6 rounded bg-gradient-to-br from-portfolio-indigo/20 to-portfolio-cyan/20 flex items-center justify-center text-[10px] font-bold text-portfolio-indigo">
                          {item.icon}
                        </span>
                      )}
                      <span className="text-sm text-portfolio-muted group-hover:text-portfolio-text transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-semibold text-portfolio-text mb-8">
            Daily Drivers
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', level: 'Expert' },
              { name: 'TypeScript', level: 'Expert' },
              { name: 'Next.js', level: 'Expert' },
              { name: 'Tailwind CSS', level: 'Expert' },
              { name: 'Material UI', level: 'Expert' },
              { name: 'Redux-Toolkit', level: 'Expert' },

            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-3 rounded-xl glass flex items-center gap-3"
              >
                <span className="font-medium text-portfolio-text">{tech.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${tech.level === 'Expert'
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-blue-500/20 text-blue-400'
                  }`}>
                  {tech.level}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
