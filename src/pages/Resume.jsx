
import { Download, FileText, ArrowUpRight } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";

const Resume = () => {
  return (
    <section
      id="resume"
      className="border-t border-[#282d36] bg-[#0f1115] px-5 py-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Resume"
          title="A quick overview of my background."
          description="Education, skills, projects and experience in one place."
        />

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start justify-between gap-8 border border-[#282d36] bg-[#171a21] p-6 sm:p-8 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#303641] text-green-400">
                <FileText size={21} />
              </div>

              <div>
                <h3 className="text-xl font-medium text-white">
                  Dishant Chaudhary
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Full-Stack Developer · B.Tech CSE
                </p>

                <p className="mt-1 text-sm text-gray-600">
                  React · Node.js · Express · MongoDB
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#343a46] px-5 py-3 text-sm font-medium text-gray-300 transition-colors hover:border-green-400/40 hover:text-green-400"
              >
                View Resume
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-sm font-medium text-[#0f1115] transition-colors hover:bg-gray-200"
              >
                Download
                <Download size={16} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Resume;
