import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0f1115] px-5 pt-16 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 border border-[#282d36] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

              <span className="text-xs text-gray-500">
                Available for opportunities
              </span>
            </div>

            {/* Intro */}
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-500">
              Hello, I'm
            </p>

            <h1 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Dishant
              <br />
              <span className="text-gray-400">Chaudhary.</span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-gray-300 sm:text-2xl">
              Full-Stack Developer
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              I build modern web applications with React, Node.js and MongoDB,
              while continuously improving my skills through real-world
              projects.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-medium text-[#0f1115] transition-all duration-200 hover:bg-gray-200"
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#343a46] px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-green-400/40 hover:text-green-400"
              >
                Let's Talk
              </a>
            </div>

            {/* Social */}
            <div className="mt-9 flex items-center gap-5">
              <a
                href="https://github.com/dishantchaudhary09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-white"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/dishant-chaudhary09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>

              <span className="h-px w-10 bg-[#282d36]" />

              <span className="text-xs text-gray-600">
                React · Node.js · MongoDB
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative ml-auto max-w-md">
              {/* Code window */}
              <div className="border border-[#282d36] bg-[#14171d]">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-[#282d36] px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#343a46]" />
                    <span className="h-2 w-2 rounded-full bg-[#343a46]" />
                    <span className="h-2 w-2 rounded-full bg-[#343a46]" />
                  </div>

                  <span className="text-[11px] text-gray-600">
                    developer.js
                  </span>
                </div>

                {/* Code */}
                <div className="p-6 font-mono text-sm leading-7">
                  <p>
                    <span className="text-gray-600">01</span>{" "}
                    <span className="text-gray-500">const</span>{" "}
                    <span className="text-gray-300">developer</span>{" "}
                    <span className="text-gray-500">=</span>{" "}
                    <span className="text-green-400">{"{"}</span>
                  </p>

                  <p className="pl-7">
                    <span className="text-gray-500">name:</span>{" "}
                    <span className="text-gray-300">"Dishant Chaudhary"</span>
                    <span className="text-gray-500">,</span>
                  </p>

                  <p className="pl-7">
                    <span className="text-gray-500">role:</span>{" "}
                    <span className="text-gray-300">
                      "Full-Stack Developer"
                    </span>
                    <span className="text-gray-500">,</span>
                  </p>

                  <p className="pl-7">
                    <span className="text-gray-500">stack:</span>{" "}
                    <span className="text-green-400">[</span>
                  </p>

                  <p className="pl-14 text-gray-400">"React", "Node.js",</p>

                  <p className="pl-14 text-gray-400">"Express", "MongoDB"</p>

                  <p className="pl-7">
                    <span className="text-green-400">]</span>
                    <span className="text-gray-500">,</span>
                  </p>

                  <p className="pl-7">
                    <span className="text-gray-500">learning:</span>{" "}
                    <span className="text-gray-300">true</span>
                  </p>

                  <p>
                    <span className="text-green-400">{"}"}</span>
                    <span className="text-gray-500">;</span>
                  </p>
                </div>
              </div>

              {/* Small detail */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                <span>Based in India</span>

                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Building & learning
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 transition-colors hover:text-gray-300 sm:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>

          <ArrowDown size={15} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
