import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Code2, Rocket } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const stats = [
    { icon: Code2, value: '3+', label: 'Years Experience' },
    { icon: Rocket, value: '10+', label: 'Projects Delivered' },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-px h-full opacity-20"
          style={{
            background: 'linear-gradient(to bottom, transparent, #6366F1, transparent)',
            transform: 'rotate(15deg)',
            transformOrigin: 'top center',
          }}
        />
        <motion.div
          className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="section-label mb-4 block">About Me</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text leading-tight">
                Building the{' '}
                <span className="text-gradient">Modern Web</span>
              </h2>
            </motion.div>

            <div className="space-y-6 text-portfolio-muted leading-relaxed">
              <motion.p variants={itemVariants} className="text-lg">
                I'm a <strong className="text-portfolio-text">Senior Frontend Engineer</strong> with 3+ years of experience
                crafting scalable, performant web applications. I specialize in React ecosystems,
                design systems, and creating delightful user experiences that leave lasting impressions.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg">
                My approach combines <strong className="text-portfolio-text">technical excellence</strong> with
                product thinking. I don't just write code—I solve problems, mentor teams, and architect
                solutions that stand the test of time. Every line I write considers maintainability,
                performance, and user impact.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                or sharing knowledge with the developer community. I believe in continuous learning and
                the power of collaborative innovation.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <a
                href="/Gulshair-Fontend.pdf"
                className="btn-secondary inline-flex items-center gap-2 group"
                download="Gulshair-Frontend-Resume.pdf"
              >
                <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Column - Visual & Stats */}
          <div className="space-y-8">
            {/* Abstract Visual */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(34, 211, 238, 0.3))',
                    padding: '2px',
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full rounded-2xl bg-portfolio-bg" />
                </motion.div>

                {/* Inner content */}
                <div className="absolute inset-4 rounded-xl glass flex items-center justify-center overflow-hidden">
                  {/* Code-like pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="p-6 font-mono text-xs text-portfolio-indigo space-y-2">
                      <div>{`const engineer = {`}</div>
                      <div className="pl-4">{`name: 'Muhammad Gulshair',`}</div>
                      <div className="pl-4">{`role: 'Senior Frontend Engineer',`}</div>
                      <div className="pl-4">{`passion: 'Building UI',`}</div>
                      <div className="pl-4">{`stack: ['React', 'TS'],`}</div>
                      <div>{`};`}</div>
                    </div>
                  </div>

                  {/* Center icon */}
                  <motion.div
                    className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-portfolio-indigo to-portfolio-cyan flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(99, 102, 241, 0.3)',
                        '0 0 40px rgba(99, 102, 241, 0.5)',
                        '0 0 20px rgba(99, 102, 241, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Code2 className="w-12 h-12 text-white" />
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-portfolio-surface border border-portfolio-indigo/30 flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-2xl font-bold text-gradient">TS</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-16 rounded-lg bg-portfolio-surface border border-portfolio-cyan/30 flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-2xl font-bold text-gradient ">React</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="card-surface p-4 text-center group"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <stat.icon className="w-6 h-6 text-portfolio-indigo mx-auto mb-2 transition-transform group-hover:scale-110" />
                  <div className="text-2xl sm:text-3xl font-bold text-portfolio-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-portfolio-muted">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
