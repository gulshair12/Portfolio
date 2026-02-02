import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

const FloatingShape = ({
  className,
  delay = 0,
  duration = 10,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    className={`absolute rounded-full opacity-10 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 15, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.03,
        ease: [0.68, -0.55, 0.265, 1.55] as const,
      },
    }),
  };

  const name = "Muhammad Gulshair";
  const role = "Senior Frontend Engineer";

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, rgba(99, 102, 241, 0.15), transparent),
              radial-gradient(ellipse 60% 40% at 80% 60%, rgba(34, 211, 238, 0.1), transparent),
              radial-gradient(ellipse 50% 30% at 50% 80%, rgba(99, 102, 241, 0.08), transparent)
            `,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingShape
          className="w-32 h-32 bg-gradient-to-br from-portfolio-indigo to-portfolio-cyan top-[15%] left-[10%]"
          delay={0}
          duration={12}
        />
        <FloatingShape
          className="w-20 h-20 bg-portfolio-cyan top-[25%] right-[15%]"
          delay={1}
          duration={15}
        />
        <FloatingShape
          className="w-40 h-40 bg-portfolio-indigo bottom-[20%] left-[20%]"
          delay={2}
          duration={18}
        />
        <FloatingShape
          className="w-16 h-16 bg-gradient-to-tr from-portfolio-cyan to-portfolio-indigo bottom-[30%] right-[10%]"
          delay={0.5}
          duration={10}
        />
        <FloatingShape
          className="w-24 h-24 bg-portfolio-indigo top-[60%] left-[5%]"
          delay={1.5}
          duration={14}
        />
        <FloatingShape
          className="w-28 h-28 bg-portfolio-cyan top-[10%] right-[30%]"
          delay={2.5}
          duration={16}
        />

        {/* Additional small shapes */}
        <motion.div
          className="absolute w-3 h-3 bg-portfolio-indigo rounded-full top-[40%] left-[30%] opacity-20"
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-portfolio-cyan rounded-full top-[70%] right-[25%] opacity-20"
          animate={{ y: [0, -15, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-portfolio-indigo rounded-full bottom-[40%] left-[40%] opacity-15"
          animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        style={{ opacity, y, scale }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with character animation */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
            variants={itemVariants}
          >
            <span className="inline-flex flex-wrap justify-center">
              {name.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === ' ' ? 'mr-4' : 'text-gradient'}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Role with staggered animation */}
          <motion.div
            className="overflow-hidden mb-8"
            variants={itemVariants}
          >
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl font-medium text-portfolio-text"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <span className="inline-flex flex-wrap justify-center">
                {role.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + i * 0.02,
                      ease: [0.68, -0.55, 0.265, 1.55] as const,
                    }}
                    className={char === ' ' ? 'mr-2' : ''}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-portfolio-muted max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 1, ease: [0.4, 0, 0.2, 1] as const }}
          >
            Crafting pixel-perfect, high-performance web experiences with modern technologies.
            I architect scalable solutions that delight users and drive business impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <span className="text-xs text-portfolio-muted tracking-wider uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-portfolio-indigo" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
