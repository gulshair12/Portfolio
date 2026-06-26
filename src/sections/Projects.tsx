import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Shay Better Coaching',
    description:
      'Built a production-scale coaching SaaS platform supporting multi-role workflows, payments, scheduling systems, complex onboarding flows, and large-scale form management with scalable frontend architecture.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Redux Toolkit',
      'Material UI',
      'Stripe',
      'Prisma',
      'PostgreSQL'
    ],
    image: '/shay.jpg',
    link: 'https://portal.shayyourlovediva.com',
  },

  {
    id: 2,
    title: 'Service Estimate',
    description:
      'Developed a workflow-driven plumbing service platform featuring dynamic estimate generation, booking systems, CMS management, React Flow automation workflows, and scalable multi-step frontend systems.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Redux Toolkit',
      'React Flow',
      'Firebase',
      'Vapi'
    ],
    image: '/service.png',
    link: 'https://www.service-estimate.com',
  },

  {
    id: 3,
    title: 'PERMITDESK',
    description:
      'Contributed to a permit management platform streamlining construction permit workflows, approval systems, and administrative operations across multiple US municipalities.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Node.js',
      'Material UI',
      'Redux Toolkit',
      'PostgreSQL',
      'OpenAI'
    ],
    image: '/permit.jpg',
    link: 'https://www.permitdesk.com',
  },

  {
    id: 4,
    title: 'M. Azam Electronics',
    description:
      'Designed and developed a modern electronics platform with CMS-driven product management, SEO-focused architecture, inquiry systems, and performance-optimized frontend experiences.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn/ui',
      'Framer Motion',
      'Supabase'
    ],
    image: '/azam.webp',
    link: 'https://mazamelectronics.com',
  },

  {
    id: 5,
    title: 'Sleek Assured Removal',
    description:
      'Built a responsive relocation services platform with quote management workflows, conversion-focused landing pages, and scalable frontend integrations.',
    techStack: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js'
    ],
    image: '/Sleek_Logo.svg',
    link: 'https://charming-meringue-a79e97.netlify.app',
  },

  {
    id: 6,
    title: 'Inves Learning Ltd',
    description:
      'Developed an e-learning platform supporting course management, enrollment workflows, and responsive educational user experiences for online learners.',
    techStack: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js'
    ],
    image: '/invest.svg',
    link: 'https://investlearningltd.com/',
  },

  {
    id: 7,
    title: 'IQ Test',
    description:
      'Created an online assessment platform with dynamic testing workflows, instant score generation, and responsive multi-user assessment experiences.',
    techStack: [
      'React.js',
      'JavaScript',
      'Tailwind CSS',
      'Node.js'
    ],
    image: '/iq.png',
    link: 'https://sensational-palmier-cacff9.netlify.app/',
  },

  {
    id: 8,
    title: 'Premier Consulting',
    description:
      'Built a business consulting platform focused on service presentation, lead generation workflows, and responsive frontend user experiences.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Sass'
    ],
    image: '/premier.jpeg',
    link: 'https://aquamarine-marzipan-62a0c5.netlify.app/',
  },

  {
    id: 9,
    title: 'Mind Changer',
    description:
      'Developed a business setup and document services platform for UAE-based operations with responsive frontend interfaces and conversion-focused workflows.',
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Sass'
    ],
    image: '/mind.png',
    link: 'https://mindchanger.netlify.app/',
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className="group block rounded-xl border border-portfolio-indigo/20 bg-portfolio-surface/30 p-5 sm:p-6 text-left transition-all duration-300 hover:border-portfolio-indigo/40 hover:shadow-lg hover:shadow-portfolio-indigo/5 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-indigo/50"
    >
      {/* Icon + Title row */}
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-portfolio-indigo/10 bg-white p-1.5">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="min-w-0 flex-1 text-lg font-bold text-portfolio-text transition-colors group-hover:text-portfolio-indigo sm:text-xl">
          {project.title}
        </h3>
      </div>

      {/* Short description – 1–2 lines */}
      <p className="mb-4 line-clamp-2 text-sm text-portfolio-muted leading-relaxed">
        {project.description}
      </p>

      {/* Tech stack – compact chips */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-portfolio-indigo/15 bg-portfolio-indigo/5 px-2 py-0.5 text-xs font-medium text-portfolio-muted"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 5 && (
          <span className="rounded-md px-2 py-0.5 text-xs text-portfolio-muted">
            +{project.techStack.length - 5}
          </span>
        )}
      </div>

      {/* CTA hint */}
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-portfolio-indigo opacity-0 transition-opacity group-hover:opacity-100">
        View project
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </motion.a>
  );
};


const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 block">Production Work</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-portfolio-text mb-6 tracking-tight">
            <span className="text-gradient">Selected</span> Frontend Systems
          </h2>
          <p className="text-lg text-portfolio-muted max-w-4xl mx-auto">
            A selection of production applications focused on scalable frontend architecture, workflow-driven systems, SaaS platforms, and performance-oriented user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/gulshair12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
          >
            Visit My GitHub
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
