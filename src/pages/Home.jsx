import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0f1115] px-5 pt-16 sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[450px] w-[450px] rounded-full bg-green-400/[0.025] blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 border border-[#282d36] bg-[#111419]/60 px-3 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-green-400" />
              </span>

              <span className="text-xs text-gray-500">
                Available for opportunities
              </span>
            </div>

            {/* Intro */}
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Dishant
              <br />

              <span className="text-gray-400">
                Chaudhary.
              </span>
            </h1>

            {/* Role */}
            <h2 className="mt-6 text-xl font-medium text-gray-300 sm:text-2xl">
              Full-Stack Developer
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              I build modern web applications with React, Node.js and
              MongoDB, while continuously improving my skills through
              real-world projects.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-medium text-[#0f1115] transition-all duration-300 hover:bg-gray-200"
              >
                View Projects

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[#343a46] px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-green-400/40 hover:text-green-400"
              >
                Let's Talk
              </Link>
            </div>

            {/* Social */}
            <div className="mt-9 flex items-center gap-5">
              <a
                href="https://github.com/dishantchaudhary09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <FaGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/dishant-chaudhary09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
              >
                <FaLinkedin size={19} />
              </a>

              <span className="h-px w-10 bg-[#282d36]" />

              <span className="text-xs text-gray-600">
                React · Node.js · MongoDB
              </span>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE
              AESTHETIC PHOTO + JSON WINDOW
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative hidden min-h-[560px] lg:block"
          >
            {/* Top label */}
            <div className="absolute right-2 top-0 flex items-center gap-3">
              <span className="h-px w-8 bg-[#282d36]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-700">
                01 / PROFILE
              </span>
            </div>

            {/* =================================================
                SOFT GREEN GLOW BEHIND PHOTO
            ================================================= */}
            <div className="absolute left-[-35px] top-[90px] h-[400px] w-[300px] rounded-full bg-green-400/[0.035] blur-[90px]" />

            {/* =================================================
                VERTICAL TEXT
            ================================================= */}
            <div className="absolute -left-8 top-[220px] z-30 hidden -rotate-90 lg:block">
              <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-gray-700">
                DISHANT CHAUDHARY
              </span>
            </div>

            {/* =================================================
                JSON WINDOW
            ================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="absolute right-0 top-16 z-10 w-[330px] border border-[#282d36] bg-[#14171d]/95 shadow-[0_25px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-[#282d36] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#343a46]" />
                  <span className="h-2 w-2 rounded-full bg-[#343a46]" />
                  <span className="h-2 w-2 rounded-full bg-[#343a46]" />
                </div>

                <span className="font-mono text-[10px] text-gray-600">
                  developer.js
                </span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-xs leading-6">
                <p>
                  <span className="text-gray-600">01</span>{" "}
                  <span className="text-gray-500">const</span>{" "}
                  <span className="text-gray-300">developer</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-green-400">
                    {"{"}
                  </span>
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">name:</span>{" "}
                  <span className="text-gray-300">
                    "Dishant Chaudhary"
                  </span>
                  <span className="text-gray-500">,</span>
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">role:</span>{" "}
                  <span className="text-gray-300">
                    "Full-Stack Developer"
                  </span>
                  <span className="text-gray-500">,</span>
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">stack:</span>{" "}
                  <span className="text-green-400">
                    [
                  </span>
                </p>

                <p className="pl-12 text-gray-400">
                  "React",
                  <br />
                  "Node.js",
                  <br />
                  "Express",
                  <br />
                  "MongoDB"
                </p>

                <p className="pl-6">
                  <span className="text-green-400">
                    ]
                  </span>

                  <span className="text-gray-500">
                    ,
                  </span>
                </p>

                <p className="pl-6">
                  <span className="text-gray-500">
                    learning:
                  </span>{" "}

                  <span className="text-gray-300">
                    true
                  </span>
                </p>

                <p>
                  <span className="text-green-400">
                    {"}"}
                  </span>

                  <span className="text-gray-500">
                    ;
                  </span>
                </p>
              </div>
            </motion.div>

            {/* =================================================
                PROFILE PHOTO
            ================================================= */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-2 top-[105px] z-20"
            >
              {/* Outer artistic frame */}
              <div className="absolute -inset-5 border border-[#282d36]/70" />

              {/* Offset frame */}
              <div className="absolute -bottom-3 -right-3 -top-3 left-3 border border-green-400/10" />

              {/* Top-left accent */}
              <div className="absolute -left-5 -top-5 z-30 h-20 w-20 border-l border-t border-green-400/60" />

              {/* Bottom-right accent */}
              <div className="absolute -bottom-5 -right-5 z-30 h-20 w-20 border-b border-r border-green-400/60" />

              {/* Image */}
              <div className="group relative h-[455px] w-[310px] overflow-hidden rounded-[2px] border border-[#343a46] bg-[#171a21] shadow-[20px_25px_70px_rgba(0,0,0,0.45)]">
                <img
                  src="/images/profile.jpg.jpeg"
                  alt="Dishant Chaudhary"
                  className="h-full w-full object-cover object-top grayscale-[20%] contrast-[1.03] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                />

                {/* Cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#0b0d10]/90" />

                {/* Green atmospheric overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-400/[0.06] via-transparent to-transparent opacity-70" />

                {/* Subtle grain */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.045] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%22.7%22/%3E%3C/svg%3E')]" />

                {/* Photo top label */}
                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.7)]" />

                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-400">
                      Developer
                    </span>
                  </div>
                </div>

                {/* Photo bottom information */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-3 h-px w-full bg-white/10" />

                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-gray-500">
                        Based in India
                      </p>

                      <p className="mt-1 text-lg font-medium tracking-tight text-white">
                        Dishant Chaudhary
                      </p>
                    </div>

                    <span className="font-mono text-[9px] text-gray-600">
                      01
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING STATUS
            ================================================= */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[75px] right-[-5px] z-40 border border-[#282d36] bg-[#171a21]/95 px-4 py-3 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="block h-2 w-2 rounded-full bg-green-400" />

                  <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-40" />
                </div>

                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-gray-600">
                    Status
                  </p>

                  <p className="mt-0.5 text-xs text-gray-300">
                    Building & Learning
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom tech text */}
            <div className="absolute bottom-4 left-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-gray-700">
                React · Node.js · Express · MongoDB
              </p>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}
        <Link
          to="/about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:flex"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="group flex flex-col items-center gap-2 text-gray-600 transition-colors hover:text-gray-300"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Scroll
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={15} />
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Home;