import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
} from 'lucide-react';

const Contact = () => {
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


  const socialLinks = [
    { icon: Github, href: 'https://github.com/gulshair12', label: 'GitHub', color: 'hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gulshair12/', label: 'LinkedIn', color: 'hover:text-blue-400' }
    // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-400' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 80% 20%, rgba(99, 102, 241, 0.1), transparent),
              radial-gradient(ellipse 50% 30% at 20% 80%, rgba(34, 211, 238, 0.08), transparent)
            `,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{
            background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
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
            Contact
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-text mb-6"
          >
            Let's <span className="text-gradient">Work Together</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-portfolio-muted max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities?
            I'd love to hear from you. Let's build something amazing.
          </motion.p>
        </motion.div>

        {/* Contact content - centered single column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          {/* Contact methods - card layout */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl border border-portfolio-indigo/20 bg-portfolio-surface/50 backdrop-blur-sm p-6 sm:p-8 mb-8"
          >
            <div className="grid sm:grid-cols-1 gap-6">
              <a
                href="mailto:mgulshair088@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-portfolio-indigo/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-portfolio-indigo/10 flex items-center justify-center shrink-0 group-hover:bg-portfolio-indigo/20 transition-colors">
                  <Mail className="w-5 h-5 text-portfolio-indigo" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-portfolio-muted mb-0.5">Email</p>
                  <p className="text-portfolio-text group-hover:text-portfolio-indigo transition-colors truncate">
                    mgulshair088@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/923200775896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#25D366]/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-portfolio-muted mb-0.5">WhatsApp</p>
                  <p className="text-portfolio-text group-hover:text-[#25D366] transition-colors">
                    +92 320 0775896
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-portfolio-cyan/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-portfolio-cyan" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-portfolio-muted mb-0.5">Location</p>
                  <p className="text-portfolio-text">Lahore, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social + availability row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <p className="text-sm text-portfolio-muted">Connect:</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 rounded-xl bg-portfolio-surface border border-portfolio-indigo/20 flex items-center justify-center text-portfolio-muted ${social.color} hover:border-portfolio-indigo/50 transition-colors`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl glass">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-portfolio-text text-sm sm:text-base">
                  Available for freelance work
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
