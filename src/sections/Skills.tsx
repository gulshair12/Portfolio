import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  Database,
  TestTube,
  Blocks,
  Cloud,
  GitBranch,
  Wrench,
  Sparkles,
} from "lucide-react";

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Redux Toolkit",
      "TanStack Query",
    ],
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Palette,
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "Material UI",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Accessibility (WCAG)",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "REST APIs",
      "Authentication",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "SQL",
      "Supabase",
      "Data Modeling",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: TestTube,
    title: "Testing & Quality",
    skills: [
      "Jest",
      "Vitest",
      "React Testing Library",
      "Playwright",
      "ESLint",
      "Prettier",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Blocks,
    title: "Architecture & Performance",
    skills: [
      "SSR / CSR / SSG",
      "Code Splitting",
      "Lazy Loading",
      "Webpack",
      "Performance Optimization",
    ],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: ["CI/CD", "GitHub Actions", "Docker", "AWS", "Vercel", "Netlify"],
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: GitBranch,
    title: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Trello", "ClickUp"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    icon: Wrench,
    title: "Tools & AI",
    skills: ["VS Code", "Cursor", "Claude Code", "Postman", "Figma"],
    color: "from-amber-500 to-orange-500",
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

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
      y: 40,
      scale: 0.95,
    },
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
    <section ref={sectionRef} id="skills" className="relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-1/3 left-[5%] w-96 h-96 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-[10%] w-64 h-64 rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #22D3EE 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="section-label mb-4 block"
          >
            Skills & Technologies
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            The tools I use to{" "}
            <span className="text-gradient">build products</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-3xl mx-auto"
          >
            A focused set of technologies I use to build modern web
            applications, from frontend interfaces to backend services and data.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
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
                transition: { duration: 0.3 },
              }}
              className="group relative"
            >
              <div className="card-surface h-full p-6 relative overflow-hidden">
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl bg-gradient-to-br ${category.color}`}
                  style={{ padding: "1px" }}
                >
                  <div className="w-full h-full rounded-xl bg-portfolio-surface" />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-portfolio-text mb-4 group-hover:text-gradient transition-colors">
                    {category.title}
                  </h3>

                  {/* Skills */}
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
              <strong className="text-gradient">
                4+ Years Building Web Applications
              </strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
