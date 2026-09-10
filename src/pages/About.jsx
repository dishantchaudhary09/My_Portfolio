import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import SkillBadge from "../components/SkillBadge";
import skills from "../data/skill";

const About = () => {
  const featuredSkills = skills.slice(0, 6);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#282d36] bg-[#0f1115] px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-green-400/[0.035] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-purple-500/[0.025] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          label="About"
          title="A developer who enjoys building things that actually work."
          description="I'm focused on building modern web applications and continuously improving my development skills through real-world projects."
        />

        {/* Main About */}
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT - IMAGE COLLAGE */}
          <ScrollReveal x={-30}>
            <div className="relative mx-auto h-[480px] w-full max-w-lg">
              {/* Main image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="absolute left-0 top-8 h-[330px] w-[72%] overflow-hidden border border-[#303640] bg-[#15181e] p-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                  alt="Developer workspace"
                  className="h-full w-full object-cover opacity-75 transition duration-700 hover:scale-105 hover:opacity-100"
                />

                <div className="absolute inset-2 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="font-mono text-[10px] tracking-[0.3em] text-green-400">
                    01 / BUILD
                  </p>

                  <p className="mt-2 text-lg font-medium text-white">
                    Turning ideas into interfaces.
                  </p>
                </div>
              </motion.div>

              {/* Second image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="absolute right-0 top-0 h-[230px] w-[42%] overflow-hidden border border-[#303640] bg-[#15181e] p-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                  alt="Programming code"
                  className="h-full w-full object-cover opacity-70 transition duration-700 hover:scale-105 hover:opacity-100"
                />

                <div className="absolute bottom-5 left-5">
                  <Code2 size={18} className="text-green-400" />

                  <p className="mt-2 text-xs text-white">
                    Clean code.
                  </p>
                </div>
              </motion.div>

              {/* Third image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="absolute bottom-2 right-5 h-[205px] w-[47%] overflow-hidden border border-[#303640] bg-[#15181e] p-2"
              >
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
                  alt="Web development"
                  className="h-full w-full object-cover opacity-70 transition duration-700 hover:scale-105 hover:opacity-100"
                />

                <div className="absolute inset-x-5 bottom-5">
                  <p className="font-mono text-[10px] tracking-widest text-green-400">
                    02 / CREATE
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Interfaces with purpose.
                  </p>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-24 left-3 z-10 border border-[#343b46] bg-[#111419]/95 px-4 py-3 backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/10">
                    <Sparkles size={15} className="text-green-400" />
                  </span>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">
                      Currently
                    </p>

                    <p className="text-xs text-gray-200">
                      Learning & building
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Corner lines */}
              <span className="absolute left-0 top-0 h-10 w-10 border-l border-t border-green-400" />
              <span className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-green-400" />
            </div>
          </ScrollReveal>

          {/* RIGHT - TEXT */}
          <ScrollReveal x={30}>
            <div>
              <p className="text-lg leading-8 text-gray-300">
                I'm Dishant Chaudhary, a B.Tech Computer Science student and
                Full-Stack Developer interested in building practical and
                user-focused web applications.
              </p>

              <p className="mt-6 leading-7 text-gray-400">
                I primarily work with React, JavaScript, Node.js, Express and
                MongoDB. I enjoy working across both frontend and backend and
                understanding how different parts of an application work
                together.
              </p>

              <p className="mt-5 leading-7 text-gray-400">
                Currently, I'm focused on improving my development skills,
                building real-world projects and learning better approaches to
                software development.
              </p>

              {/* Feature cards */}
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="group border border-[#282d36] bg-[#12151a] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">
                  <Code2
                    size={20}
                    className="text-green-400 transition-transform group-hover:scale-110"
                  />

                  <h3 className="mt-4 text-sm font-medium text-white">
                    Frontend
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Modern responsive interfaces
                  </p>
                </div>

                <div className="group border border-[#282d36] bg-[#12151a] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">
                  <Server
                    size={20}
                    className="text-green-400 transition-transform group-hover:scale-110"
                  />

                  <h3 className="mt-4 text-sm font-medium text-white">
                    Backend
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    APIs & server applications
                  </p>
                </div>

                <div className="group border border-[#282d36] bg-[#12151a] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/30">
                  <Database
                    size={20}
                    className="text-green-400 transition-transform group-hover:scale-110"
                  />

                  <h3 className="mt-4 text-sm font-medium text-white">
                    Database
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-gray-600">
                    Structured application data
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* SKILLS */}
        <ScrollReveal delay={0.1}>
          <div className="mt-24 border-t border-[#282d36] pt-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                  Technologies
                </p>

                <p className="mt-2 text-lg font-medium text-white">
                  Tools I use to build things.
                </p>
              </div>

              {/* FIXED: Skills Route */}
              <Link
                to="/skills"
                className="group flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-green-400"
              >
                View all skills

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSkills.map((skill, index) => (
                <SkillBadge
                  key={skill.id || skill.name || index}
                  skill={skill}
                  index={index}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Mouse Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex justify-center"
        >
          {/* FIXED: Skills Route */}
          <Link
            to="/skills"
            className="group flex flex-col items-center gap-3"
          >
            <div className="flex h-12 w-7 justify-center rounded-full border border-[#3a414d] p-1.5 transition-colors group-hover:border-green-400">
              <motion.span
                animate={{ y: [0, 18, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-1 rounded-full bg-green-400"
              />
            </div>

            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-600 group-hover:text-gray-400">
              Scroll to explore
            </span>

            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown
                size={15}
                className="text-gray-600 group-hover:text-green-400"
              />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;