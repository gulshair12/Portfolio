import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  type: 'full-time' | 'contract';
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Frontend Engineer',
    company: 'Rigel AI',
    location: 'Lahore, Pakistan',
    period: '2025 — Present',
    type: 'full-time',
    highlights: [
      'Leading frontend development across multiple SaaS applications using React.js, Next.js, and TypeScript with ownership of architecture and implementation workflows.',

      'Built scalable frontend systems focused on reusable component architecture, complex state management, authentication workflows, and performance optimization.',

      'Collaborated closely with product, backend, and design teams while leveraging AI-assisted development workflows to accelerate delivery and maintain engineering quality.',
    ],

  },

  {
    id: 2,
    role: 'Frontend Engineer',
    company: 'Createex Inc.',
    location: 'Lahore, Pakistan',
    period: '2023 — 2025',
    type: 'full-time',
    highlights: [
      'Developed and maintained scalable React-based CMS platforms and business applications used by thousands of daily users.',

      'Built reusable frontend systems, integrated REST APIs, and implemented responsive user interfaces focused on maintainability and performance.',

      'Worked independently across frontend implementation workflows while collaborating with cross-functional teams to deliver production-ready features.',
    ],

  },

  {
    id: 3,
    role: 'Frontend Developer Intern → Junior Frontend Developer',
    company: 'Enigmatix (Pvt) Ltd',
    location: 'Bahawalpur, Pakistan',
    period: '2022 — 2023',
    type: 'full-time',

    highlights: [
      'Completed a frontend development internship focused on React.js, React Native, responsive web applications, and collaborative engineering workflows.',

      'Implemented UI components, resolved cross-browser issues, and contributed to frontend feature delivery across multiple production projects.',

      'Gained hands-on experience with debugging practices, frontend architecture fundamentals, and team-oriented development environments.',
    ],
  },
];


const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Professional Experience</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6">
            Building <span className="text-gradient">Production Frontend Systems</span>
          </h2>
          <p className="text-lg text-portfolio-muted max-w-4xl mx-auto">
            Experience building scalable frontend applications, SaaS platforms, workflow-driven systems, and modern web interfaces across collaborative product environments
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-4 sm:left-8 top-0 bottom-0 w-px origin-top"
            style={{
              background: 'linear-gradient(to bottom, #6366F1, #22D3EE, #6366F1)',
            }}
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-portfolio-bg border-2 border-portfolio-indigo"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    delay: 0.5 + index * 0.2,
                    duration: 0.4,
                    ease: [0.68, -0.55, 0.265, 1.55] as const
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-portfolio-indigo"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Content Card */}
                <div className="card-surface group hover:border-portfolio-indigo/40 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-portfolio-text group-hover:text-gradient transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-portfolio-muted">
                        <Briefcase className="w-4 h-4 text-portfolio-indigo" />
                        <span className="font-medium text-portfolio-text">{exp.company}</span>
                        <span className="text-portfolio-indigo">•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-portfolio-indigo/10 text-sm text-portfolio-indigo">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 + i * 0.1, duration: 0.4 }}
                        className="flex items-start gap-3 text-portfolio-muted"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-cyan mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16 grid grid-cols-3 gap-6"
        >
          {[
            { value: '4+', label: 'Years' },
            { value: '3', label: 'Companies' },
            { value: '10+', label: 'Projects' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-portfolio-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
