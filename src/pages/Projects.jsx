
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/project.js";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden border-t border-[#282d36] bg-[#0f1115] px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-green-400/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-green-400/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <SectionHeading
          label="Projects"
          title="Things I've built."
          description="A selection of projects I've worked on while learning and building real-world applications."
        />

        {/* Project Meta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col gap-4 border-y border-[#282d36] py-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-600">
              Selected work
            </span>
          </div>

          <span className="font-mono text-[10px] text-gray-700">
            {String(projects.length).padStart(2, "0")} PROJECTS
          </span>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project?.id ?? index}
              delay={index * 0.08}
              y={25}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/achievements"
            className="group flex flex-col items-center gap-3"
            aria-label="Explore achievements"
          >
            <div className="flex h-11 w-7 justify-center rounded-full border border-[#343b46] p-1.5 transition-all duration-300 group-hover:border-green-400 group-hover:bg-green-400/[0.04]">
              <motion.span
                animate={{ y: [0, 15, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-1 rounded-full bg-green-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-700 transition-colors duration-300 group-hover:text-green-400">
                Explore achievements
              </span>

              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown
                  size={13}
                  className="text-gray-700 transition-colors duration-300 group-hover:text-green-400"
                />
              </motion.div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
