import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Zap, Users, Code2, Sparkles, ArrowRight } from "lucide-react";

interface Principle {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const principles: Principle[] = [
  {
    icon: Layers,
    title: "Build End to End",
    description:
      "I like understanding the whole picture from the interface and APIs to the data behind the product.",
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Code2,
    title: "Keep Things Simple",
    description:
      "I prefer clear solutions and maintainable code over unnecessary complexity.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Build for Real Users",
    description:
      "Good engineering should solve real problems and make products easier and more enjoyable to use.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Write for the Long Term",
    description:
      "I build reusable components and well-structured features that are easier to extend and maintain.",
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    icon: Zap,
    title: "Performance Matters",
    description:
      "I pay attention to speed, responsiveness, and the details that make applications feel better to use.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Use Better Tools",
    description:
      "I use modern development tools, including AI-assisted workflows, to move faster without compromising quality.",
    color: "from-cyan-500 to-blue-500",
  },
];

const EngineeringPrinciples = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

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
    hidden: {
      opacity: 0,
      y: 30,
    },
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
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.97,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.07,
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
      <motion.div
        className="absolute top-1/4 left-[5%] w-80 h-80 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-[10%] w-64 h-64 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.span
            variants={itemVariants}
            className="section-label mb-4 block"
          >
            How I Work
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            Simple, thoughtful{" "}
            <span className="text-gradient">engineering</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-3xl mx-auto"
          >
            I focus on building software that is useful, reliable, and easy to
            maintain without adding complexity where it isn&apos;t needed.
          </motion.p>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.3,
                },
              }}
              className="group relative"
            >
              <div className="card-surface h-full p-6 relative overflow-hidden">
                {/* Hover Border */}
                <div
                  className={`
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    rounded-xl
                    bg-gradient-to-br
                    ${principle.color}
                  `}
                  style={{
                    padding: "1px",
                  }}
                >
                  <div className="w-full h-full rounded-xl bg-portfolio-surface" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`
                      w-11
                      h-11
                      rounded-lg
                      bg-gradient-to-br
                      ${principle.color}
                      flex
                      items-center
                      justify-center
                      mb-5
                      group-hover:scale-110
                      transition-transform
                      duration-300
                    `}
                  >
                    <principle.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-portfolio-text
                      mb-2
                      group-hover:text-gradient
                      transition-colors
                    "
                  >
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-sm
                      text-portfolio-muted
                      leading-relaxed
                    "
                  >
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-14 text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm sm:text-base text-portfolio-muted">
            Always learning, improving, and looking for better ways to build.
            <ArrowRight className="w-4 h-4 text-portfolio-indigo" />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EngineeringPrinciples;
