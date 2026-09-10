import { ArrowUpRight, BriefcaseBusiness, Code2 } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import experience from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="border-t border-[#282d36] bg-[#0f1115] px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Experience"
          title="My development journey."
          description="A collection of real-world projects, hands-on development and continuous learning."
        />

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 hidden h-full w-px bg-[#282d36] md:block" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <ScrollReveal
                key={item.id || index}
                delay={index * 0.1}
                y={25}
              >
                <article className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 hidden h-4 w-4 rounded-full border-2 border-green-400 bg-[#0f1115] md:block" />

                  <div className="group overflow-hidden border border-[#282d36] bg-[#15181e] transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
                    <div className="grid lg:grid-cols-[300px_1fr]">
                      {/* Image */}
                      <div className="relative min-h-[220px] overflow-hidden border-b border-[#282d36] lg:border-b-0 lg:border-r">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.role || "Development experience"}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#111419]">
                            <div className="text-center">
                              <Code2
                                size={42}
                                strokeWidth={1}
                                className="mx-auto text-green-400/70"
                              />

                              <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                                Full Stack
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent opacity-80" />

                        {/* Year */}
                        <div className="absolute bottom-4 left-4">
                          <span className="border border-green-400/30 bg-[#0f1115]/90 px-3 py-1.5 font-mono text-xs text-green-400">
                            {item.duration || item.date}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 sm:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <div className="mb-3 flex items-center gap-2">
                              <BriefcaseBusiness
                                size={15}
                                className="text-green-400"
                              />

                              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
                                {item.company || "Development"}
                              </span>
                            </div>

                            <h3 className="text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-green-400">
                              {item.role || item.title}
                            </h3>
                          </div>

                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`View ${item.role || item.title}`}
                              className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#303641] text-gray-400 transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black"
                            >
                              <ArrowUpRight size={17} />
                            </a>
                          )}
                        </div>

                        {item.description && (
                          <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                            {item.description}
                          </p>
                        )}

                        {/* Technologies */}
                        {item.technologies?.length > 0 && (
                          <div className="mt-7">
                            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-gray-600">
                              Technologies
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, techIndex) => (
                                <span
                                  key={`${tech}-${techIndex}`}
                                  className="border border-[#303641] bg-[#111419] px-3 py-1.5 text-xs text-gray-400 transition-colors duration-200 hover:border-green-400/40 hover:text-green-400"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-green-400"
                          >
                            View project
                            <ArrowUpRight size={15} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;