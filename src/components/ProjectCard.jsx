
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, index = 0 }) => {
  if (!project) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden border border-[#282d36] bg-[#12151a] transition-all duration-300 hover:border-green-400/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
    >
      {/* IMAGE */}
      <div className="relative h-64 overflow-hidden bg-[#0f1115]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent" />

        {/* Project Number */}
        <span className="absolute right-4 top-4 font-mono text-[10px] text-white/50">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Case Study Badge */}
        {project.caseStudyPath && (
          <div className="absolute left-4 top-4">
            <span className="border border-green-400/20 bg-[#0f1115]/85 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-green-400 backdrop-blur-sm">
              Case Study
            </span>
          </div>
        )}

        {/* View Case Study */}
        {project.caseStudyPath && (
          <Link
            to={project.caseStudyPath}
            className="absolute bottom-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <span className="flex items-center gap-2 border border-green-400/30 bg-[#0f1115]/90 px-3 py-2 text-xs text-green-400 backdrop-blur-sm">
              View Case Study
              <ArrowUpRight size={13} />
            </span>
          </Link>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative p-6 sm:p-7">
        {/* Meta */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-green-400">
            Project
          </span>

          <span className="h-px w-7 bg-[#343b46]" />

          <span className="font-mono text-[9px] text-gray-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-5 flex items-center gap-2 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-green-400">
          {project.title}

          {project.caseStudyPath && (
            <ArrowUpRight
              size={18}
              className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
            />
          )}
        </h3>

        {/* Description */}
        <p className="mt-3 min-h-[70px] text-sm leading-7 text-gray-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="border border-[#303640] bg-[#15181e] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:border-[#3b424d] group-hover:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-7 flex items-center justify-between border-t border-[#282d36] pt-5">
          {/* GitHub */}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-600 transition-colors hover:text-white"
            >
              <FaGithub size={15} />
              GitHub
            </a>
          ) : (
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray-700">
              Private / No Repo
            </span>
          )}

          {/* Live Project */}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group/live inline-flex items-center gap-2 border border-[#303640] px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-gray-400 transition-all duration-300 hover:border-green-400 hover:text-green-400"
            >
              Live Project

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5"
              />
            </a>
          )}
        </div>

        {/* Bottom Green Line */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.article>
  );
};

export default ProjectCard;
