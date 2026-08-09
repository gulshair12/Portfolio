import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Shay — Coaching Platform",
    description:
      "A coaching platform for managing clients, subscriptions, scheduling, and day-to-day coaching workflows.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/shay.jpg",
    link: "https://portal.shayyourlovediva.com",
  },

  {
    id: 2,
    title: "Service Estimate — Automation Platform",
    description:
      "A service estimation and booking platform with visual workflows, automation, and content management.",
    techStack: ["Next.js", "TypeScript", "Node.js", "React Flow"],
    image: "/service.png",
    link: "https://www.service-estimate.com",
  },

  {
    id: 3,
    title: "PermitDesk — Permit Management",
    description:
      "A municipal permit platform that simplifies applications, document review, approvals, and administrative workflows.",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/permit.jpg",
    link: "https://www.permitdesk.com",
  },

  {
    id: 4,
    title: "M. Azam — Commerce Platform",
    description:
      "A modern commerce platform for managing products, customer inquiries, and online business content.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    image: "/azam.webp",
    link: "https://mazamelectronics.com",
  },

  {
    id: 5,
    title: "Sleek — Relocation Platform",
    description:
      "A relocation platform for generating quotes, capturing leads, and managing booking requests.",
    techStack: ["React.js", "JavaScript", "Node.js", "Express.js"],
    image: "/Sleek_Logo.svg",
    link: "https://charming-meringue-a79e97.netlify.app",
  },
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
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const ProjectCard = ({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) => {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      className={`
        group
        block
        rounded-xl
        border
        border-portfolio-indigo/20
        bg-portfolio-surface/30
        p-5
        sm:p-6
        text-left
        transition-all
        duration-300
        hover:border-portfolio-indigo/40
        hover:shadow-lg
        hover:shadow-portfolio-indigo/5
        hover:-translate-y-0.5
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-portfolio-indigo/50
        ${featured ? "md:p-7" : ""}
      `}
    >
      {/* Project Header */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`
            flex
            h-12
            w-20
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-lg
            border
            border-portfolio-indigo/10
            bg-white
            p-1.5
            ${featured ? "sm:h-14 sm:w-24" : ""}
          `}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <h3
          className={`
            min-w-0
            flex-1
            font-bold
            text-portfolio-text
            transition-colors
            group-hover:text-portfolio-indigo
            ${featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}
          `}
        >
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <p
        className={`
          mb-5
          text-sm
          leading-relaxed
          text-portfolio-muted
          ${featured ? "max-w-3xl sm:text-base" : ""}
        `}
      >
        {project.description}
      </p>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="
              rounded-md
              border
              border-portfolio-indigo/15
              bg-portfolio-indigo/5
              px-2
              py-0.5
              text-xs
              font-medium
              text-portfolio-muted
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <span
        className="
          mt-4
          inline-flex
          items-center
          gap-1
          text-xs
          font-medium
          text-portfolio-indigo
          opacity-0
          transition-opacity
          group-hover:opacity-100
        "
      >
        View project
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
    </motion.a>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="
            absolute
            right-0
            top-1/4
            h-[500px]
            w-[500px]
            rounded-full
            opacity-5
          "
          style={{
            background: "radial-gradient(circle, #6366F1 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="mb-12 text-center"
        >
          <span className="section-label mb-4 block">Selected Work</span>

          <h2
            className="
              mb-6
              text-4xl
              font-extrabold
              tracking-tight
              text-portfolio-text
              sm:text-5xl
              lg:text-6xl
            "
          >
            Projects I&apos;ve <span className="text-gradient">built</span>
          </h2>

          <p
            className="
              mx-auto
              max-w-3xl
              text-lg
              text-portfolio-muted
            "
          >
            A selection of products and applications I&apos;ve worked on across
            SaaS, automation, commerce, and business services.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-6"
        >
          <ProjectCard project={featuredProjects[0]} featured />
        </motion.div>

        {/* Other Selected Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="
            grid
            grid-cols-1
            gap-5
            sm:gap-6
            md:grid-cols-2
          "
        >
          {featuredProjects.slice(1).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* More Work */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-sm text-portfolio-muted">
            And more projects across education, business, and other product
            experiences.
          </p>

          <a
            href="https://github.com/gulshair12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group inline-flex items-center gap-2"
          >
            View More on GitHub
            <ArrowUpRight
              className="
                h-4
                w-4
                transition-transform
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
