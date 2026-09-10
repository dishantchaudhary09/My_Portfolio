import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Sparkles,
  Trophy,
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import AchievementCard from "../components/AchievementCard";

import achievements from "../data/achievement";

const Achievements = () => {
  const achievementCount = achievements.filter(
    (item) => item.type === "Achievement"
  ).length;

  const certificationCount = achievements.filter(
    (item) =>
      item.type === "Certification" || item.type === "Workshop"
  ).length;

  return (
    <main className="min-h-screen overflow-hidden bg-[#0f1115] text-white">

      {/* =====================================================
          HERO / HEADER
      ====================================================== */}
      <section className="relative px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-28 lg:pt-40">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-[100px] h-[400px] w-[400px] rounded-full bg-green-400/[0.04] blur-[120px]" />

        <div className="pointer-events-none absolute right-[-150px] top-[200px] h-[350px] w-[350px] rounded-full bg-green-400/[0.025] blur-[100px]" />

        {/* Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">

          {/* Small label */}
          <ScrollReveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-green-400" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-green-400">
                05 / Achievements
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <SectionHeading
              eyebrow="Milestones"
              title="Milestones that mark the journey."
              description="A collection of achievements, certifications and learning milestones that reflect my growth as a developer."
            />
          </ScrollReveal>

          {/* Stats */}
          <div className="mt-12 grid gap-px border border-[#282d36] bg-[#282d36] sm:grid-cols-2 lg:max-w-2xl">

            {/* Achievement Count */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#12151a] p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Achievements
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-white">
                    {achievementCount}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center border border-[#303640] bg-[#15181e] text-green-400">
                  <Trophy size={20} />
                </div>
              </div>
            </motion.div>

            {/* Certificate Count */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#12151a] p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Certificates
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-white">
                    {certificationCount}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center border border-[#303640] bg-[#15181e] text-green-400">
                  <Award size={20} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          ACHIEVEMENTS / CERTIFICATIONS
      ====================================================== */}
      <section className="relative px-6 pb-24 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Section intro */}
          <ScrollReveal>
            <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#282d36] pb-6 sm:flex-row sm:items-end">

              <div>
                <div className="mb-3 flex items-center gap-2">
                  <Sparkles
                    size={15}
                    className="text-green-400"
                  />

                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-green-400">
                    Recognition & Learning
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Achievements & Certifications
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
                  Milestones from hackathons, workshops and professional
                  learning experiences that have contributed to my development
                  journey.
                </p>
              </div>

              {/* Count */}
              <div className="shrink-0 font-mono text-xs text-gray-600">
                {String(achievements.length).padStart(2, "0")} ITEMS
              </div>

            </div>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-2">
            {achievements.map((item, index) => (
              <AchievementCard
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="relative border-t border-[#282d36] px-6 py-24 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <div className="relative overflow-hidden border border-[#282d36] bg-[#12151a] p-8 sm:p-12 lg:p-16">

              {/* Background glow */}
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-green-400/[0.035] blur-[100px]" />

              <div className="relative">

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-green-400" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-green-400">
                    Continuous Growth
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                  More milestones ahead.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500">
                  Every project, certification and challenge adds another
                  layer to my development journey. There is always something
                  new to learn and build.
                </p>

                {/* CTA */}
                <div className="mt-8">
                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-3 border border-green-400/30 bg-green-400/[0.05] px-5 py-3 text-sm font-medium text-green-400 transition-all duration-300 hover:bg-green-400 hover:text-black"
                  >
                    Let's connect

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* =====================================================
          FOOTER NAVIGATION
      ====================================================== */}
      <section className="border-t border-[#282d36] px-6 py-8 sm:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          <a
            href="/education"
            className="group flex items-center gap-3 text-xs text-gray-600 transition-colors hover:text-green-400"
          >
            <ArrowDown
              size={14}
              className="rotate-90 transition-transform duration-300 group-hover:-translate-x-1"
            />

            Previous — Education
          </a>

          <a
            href="/contact"
            className="group flex items-center gap-3 text-xs text-gray-600 transition-colors hover:text-green-400"
          >
            Next — Contact

            <ArrowDown
              size={14}
              className="-rotate-90 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>
      </section>

    </main>
  );
};

export default Achievements;