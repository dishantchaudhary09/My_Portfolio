import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import SkillBadge from "../components/SkillBadge";
import skills from "../data/skill.js";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden border-t border-[#282d36] bg-[#0f1115] px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-green-400/[0.035] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 top-[45%] h-96 w-96 rounded-full bg-purple-500/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-blue-500/[0.02] blur-3xl" />

      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <SectionHeading
          label="Skills"
          title="Tools I use to build things."
          description="A collection of technologies, frameworks and tools I work with while building modern web applications."
        />

        {/* Top Stats */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              index={1}
              icon={<Code2 size={18} />}
              number={skills.length}
              label="Technologies"
            />

            <StatCard
              index={2}
              icon={<Layers3 size={18} />}
              number="04+"
              label="Core Areas"
            />

            <StatCard
              index={3}
              icon={<Terminal size={18} />}
              number="24/7"
              label="Learning Mode"
            />

            <StatCard
              index={4}
              icon={<Sparkles size={18} />}
              number="∞"
              label="Curiosity"
            />
          </div>
        </ScrollReveal>

        {/* Section Intro */}
        <ScrollReveal delay={0.15}>
          <div className="mt-20 flex flex-col gap-5 border-t border-[#282d36] pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-green-400">
                01 / TECH STACK
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Technologies I work with
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                From frontend interfaces to backend APIs and databases, these
                are the technologies I use to turn ideas into working
                applications.
              </p>
            </div>

            <div className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-gray-700 sm:block">
              {String(skills.length).padStart(2, "0")} TOOLS
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <ScrollReveal
              key={skill.id || skill.name || skill.title || index}
              delay={index * 0.04}
              y={20}
            >
              <SkillBadge skill={skill} index={index} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Learning Section */}
        <ScrollReveal delay={0.15}>
          <div className="relative mt-24 overflow-hidden border border-[#282d36] bg-[#12151a] p-7 sm:p-10">
            {/* Decorative Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-green-400/[0.04] blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-green-400/20 bg-green-400/5">
                    <Wrench size={16} className="text-green-400" />
                  </span>

                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                    Always learning
                  </p>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                  The stack keeps evolving.
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  I'm continuously experimenting with new technologies,
                  improving existing skills and building projects to understand
                  how things work in the real world.
                </p>
              </div>

              {/* Explore Projects */}
              <Link
                to="/projects"
                className="group inline-flex w-fit items-center gap-2 border border-[#343b46] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-green-400/40 hover:bg-green-400/[0.04] hover:text-green-400"
              >
                Explore my work

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/projects"
            className="group flex flex-col items-center gap-3"
            aria-label="Explore projects"
          >
            {/* Mouse */}
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

            {/* Text */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gray-700 transition-colors duration-300 group-hover:text-green-400">
                Keep exploring
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

/* Stat Card */
const StatCard = ({ icon, number, label, index }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group border border-[#282d36] bg-[#12151a] p-5 transition-colors duration-300 hover:border-green-400/25"
    >
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center border border-[#303640] bg-[#15181e] text-green-400">
          {icon}
        </span>

        <span className="font-mono text-[10px] text-gray-700">
          0{index}
        </span>
      </div>

      <p className="mt-5 text-2xl font-semibold text-white">
        {number}
      </p>

      <p className="mt-1 text-xs uppercase tracking-widest text-gray-600">
        {label}
      </p>
    </motion.div>
  );
};

export default Skills;