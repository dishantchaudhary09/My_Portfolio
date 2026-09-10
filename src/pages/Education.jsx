
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  School,
  Award,
  ChevronDown,
  Cpu,
  CircuitBoard,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const education = [
  {
    duration: "2023 — Present",
    icon: GraduationCap,
    degree: "B.Tech in Computer Science & Engineering",
    institute: "BN College of Engineering and Technology",
    affiliation: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    description:
      "Currently pursuing B.Tech in Computer Science and Engineering, focusing on full-stack development, software engineering, databases, machine learning and problem solving.",
    tags: ["B.Tech CSE", "8 CGPA", "5th Semester"],
  },
  {
    duration: "2022 — 2025",
    icon: Award,
    degree: "Diploma in Electrical Engineering",
    institute: "Government Polytechnic Basti",
    affiliation: "Board of Technical Education, Uttar Pradesh",
    description:
      "Completed Diploma in Electrical Engineering with practical exposure to electronics, electrical systems, circuits and engineering fundamentals.",
    tags: ["Diploma", "Electrical Engineering", "2025"],
    project: true,
  },
  {
    duration: "2021 — 2022",
    icon: School,
    degree: "12th — PCM",
    institute: "A.S.H.S and GRS Inter College, Basti",
    affiliation: "Uttar Pradesh Board",
    description:
      "Completed higher secondary education with Physics, Chemistry and Mathematics as core subjects.",
    tags: ["12th", "PCM", "UP Board"],
  },
  {
    duration: "2019 — 2020",
    icon: School,
    degree: "10th",
    institute: "Janata Siksha Niketa Inter College, Orwara Bazar, Basti",
    affiliation: "Uttar Pradesh Board",
    description:
      "Completed secondary education with a strong academic foundation in mathematics, science and core subjects.",
    tags: ["10th", "85%", "UP Board"],
  },
];

const Education = () => {
  const [openProject, setOpenProject] = useState(false);

  return (
    <section
      id="education"
      className="border-t border-[#282d36] bg-[#0f1115] px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADING
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-green-400">
            Education
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            My academic journey
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            From electrical engineering and hands-on hardware projects to
            computer science and full-stack development.
          </p>
        </motion.div>

        {/* =====================================================
            EDUCATION TIMELINE
        ====================================================== */}
        <div className="mt-14">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="border-t border-[#282d36] py-8 last:border-b"
              >
                <div className="grid gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]">

                  {/* =================================================
                      DATE
                  ================================================== */}
                  <div className="font-mono text-xs uppercase tracking-wider text-gray-600">
                    {item.duration}
                  </div>

                  {/* =================================================
                      EDUCATION DETAILS
                  ================================================== */}
                  <div className="flex gap-4">

                    {/* ICON */}
                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.08,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#303641] text-green-400 transition-colors duration-300 hover:border-green-400/50 hover:bg-green-400/5"
                    >
                      <Icon size={19} />
                    </motion.div>

                    <div className="min-w-0 flex-1">

                      {/* DEGREE */}
                      <h3 className="text-lg font-medium text-white sm:text-xl">
                        {item.degree}
                      </h3>

                      {/* INSTITUTE */}
                      <p className="mt-1 text-sm text-gray-400">
                        {item.institute}
                      </p>

                      {/* AFFILIATION */}
                      <p className="mt-1 text-xs text-gray-600">
                        {item.affiliation}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                        {item.description}
                      </p>

                      {/* TAGS */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-[#303641] px-2.5 py-1 text-xs text-gray-500 transition-all duration-300 hover:border-green-400/30 hover:text-green-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* =================================================
                          QUADCOPTER PROJECT
                      ================================================== */}
                      {item.project && (
                        <div className="mt-8 overflow-hidden border border-[#282d36] bg-[#12151a] transition-all duration-300 hover:border-green-400/30">

                          {/* PROJECT HEADER */}
                          <button
                            type="button"
                            onClick={() =>
                              setOpenProject((prev) => !prev)
                            }
                            className="group flex w-full items-center justify-between gap-5 p-5 text-left"
                          >
                            <div className="flex items-center gap-4">

                              {/* PROJECT ICON */}
                              <motion.div
                                whileHover={{
                                  scale: 1.08,
                                  rotate: 4,
                                }}
                                className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#303641] text-green-400 transition-all duration-300 group-hover:border-green-400/40 group-hover:bg-green-400/5"
                              >
                                <Cpu size={20} />
                              </motion.div>

                              <div>
                                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-green-400">
                                  Featured Diploma Project
                                </p>

                                <h4 className="mt-1 text-base font-medium text-white">
                                  Quadcopter Drone
                                </h4>
                              </div>
                            </div>

                            {/* ARROW */}
                            <motion.div
                              animate={{
                                rotate: openProject ? 180 : 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="text-gray-500"
                            >
                              <ChevronDown size={18} />
                            </motion.div>
                          </button>

                          {/* =================================================
                              EXPANDABLE PROJECT CONTENT
                          ================================================== */}
                          <AnimatePresence initial={false}>
                            {openProject && (
                              <motion.div
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}
                              >
                                <div className="border-t border-[#282d36]">

                                  <div className="grid md:grid-cols-2">

                                    {/* =================================================
                                        DRONE IMAGE
                                    ================================================== */}
                                    <div className="group relative min-h-[280px] overflow-hidden bg-[#0c0e12]">

                                      <img
                                        src="https://miro.medium.com/1*R4VRDgKRKOV6ZHccD0GWzA.jpeg"
                                        alt="Quadcopter drone with flight controller - project reference"
                                        className="h-full min-h-[280px] w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                      />

                                      {/* IMAGE OVERLAY */}
                                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent" />

                                      {/* IMAGE LABEL */}
                                      <div className="absolute bottom-4 left-4">
                                        <span className="border border-white/10 bg-[#0f1115]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-green-400 backdrop-blur">
                                          Project Reference
                                        </span>
                                      </div>
                                    </div>

                                    {/* =================================================
                                        PROJECT DETAILS
                                    ================================================== */}
                                    <div className="p-6 sm:p-7">

                                      <p className="text-sm leading-7 text-gray-400">
                                        During my Diploma in Electrical
                                        Engineering, I designed and built a
                                        quadcopter drone using a dedicated
                                        flight controller.
                                      </p>

                                      <p className="mt-4 text-sm leading-7 text-gray-500">
                                        This project gave me hands-on
                                        experience with drone electronics,
                                        motor control, flight stabilization
                                        and integration of different hardware
                                        components.
                                      </p>

                                      {/* =================================================
                                          COMPONENT CARDS
                                      ================================================== */}
                                      <div className="mt-6 grid grid-cols-2 gap-3">

                                        {/* FLIGHT CONTROLLER */}
                                        <motion.div
                                          whileHover={{ y: -3 }}
                                          className="border border-[#282d36] p-4 transition-colors duration-300 hover:border-green-400/30"
                                        >
                                          <CircuitBoard
                                            size={17}
                                            className="text-green-400"
                                          />

                                          <p className="mt-3 text-xs text-gray-400">
                                            Flight Controller
                                          </p>

                                          <p className="mt-1 text-[10px] leading-5 text-gray-600">
                                            Used for flight stabilization and
                                            control.
                                          </p>
                                        </motion.div>

                                        {/* MOTOR CONTROL */}
                                        <motion.div
                                          whileHover={{ y: -3 }}
                                          className="border border-[#282d36] p-4 transition-colors duration-300 hover:border-green-400/30"
                                        >
                                          <Zap
                                            size={17}
                                            className="text-green-400"
                                          />

                                          <p className="mt-3 text-xs text-gray-400">
                                            Motor Control
                                          </p>

                                          <p className="mt-1 text-[10px] leading-5 text-gray-600">
                                            Controlled the motors required for
                                            drone movement.
                                          </p>
                                        </motion.div>

                                      </div>

                                      {/* TECHNOLOGY TAGS */}
                                      <div className="mt-6 flex flex-wrap gap-2">
                                        {[
                                          "Flight Controller",
                                          "Quadcopter",
                                          "Electronics",
                                          "Motor Control",
                                          "Hardware",
                                        ].map((tag) => (
                                          <span
                                            key={tag}
                                            className="border border-[#303641] px-2.5 py-1 text-[11px] text-gray-500 transition-colors hover:border-green-400/30 hover:text-green-400"
                                          >
                                            {tag}
                                          </span>
                                        ))}
                                      </div>

                                      {/* PROJECT TYPE */}
                                      <div className="mt-6 flex items-center gap-2 text-xs text-gray-600">
                                        <ArrowUpRight size={14} />

                                        Academic Engineering Project
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 border border-[#282d36] bg-[#12151a] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-green-400">
                From Hardware → Software
              </p>

              <p className="mt-2 text-sm text-gray-400">
                My engineering background shaped the way I approach
                problem-solving and building real-world systems.
              </p>
            </div>

            <div className="hidden h-10 w-px bg-[#282d36] sm:block" />

            <div className="font-mono text-xs text-gray-600">
              Electrical → Computer Science
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
