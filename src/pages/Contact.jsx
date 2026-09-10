import { motion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen border-t border-[#282d36] bg-[#0f1115] px-5 py-24 text-white sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-green-400">
            Contact
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Let's build something
            <span className="text-green-400"> meaningful.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
            Have a project idea, internship opportunity, or just want to
            connect? Feel free to reach out. I'm always open to interesting
            conversations and opportunities.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN CONTACT AREA
        ====================================================== */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-[#282d36] bg-[#12151a] p-7 sm:p-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-green-400">
              Get in touch
            </p>

            <h2 className="mt-5 text-2xl font-semibold text-white">
              Let's start a conversation.
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Whether it's a development opportunity, collaboration or
              project discussion, you can reach me through any of the
              platforms below.
            </p>

            {/* =================================================
                EMAIL
            ================================================== */}
            <a
              href="mailto:dishant1499@gmail.com"
              className="group mt-8 flex items-center gap-4 border-t border-[#282d36] pt-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#303641] text-green-400 transition-all duration-300 group-hover:border-green-400/40 group-hover:bg-green-400/5">
                <Mail size={17} />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                  Email
                </p>

                <p className="mt-1 text-sm text-gray-300 transition-colors group-hover:text-green-400">
                  dishant1499@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={15}
                className="ml-auto text-gray-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-green-400"
              />
            </a>

            {/* =================================================
                LOCATION
            ================================================== */}
            <div className="mt-6 flex items-center gap-4 border-t border-[#282d36] pt-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#303641] text-green-400">
                <MapPin size={17} />
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                  Based in
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Lucknow, India
                </p>
              </div>
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}
            <div className="mt-8 border-t border-[#282d36] pt-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-gray-600">
                Social
              </p>

              <div className="mt-4 flex gap-3">

                {/* GITHUB */}
                <a
                  href="https://github.com/dishantchaudhary09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center border border-[#303641] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-green-400/5 hover:text-green-400"
                >
                  <FaGithub size={18} />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/dishant-chaudhary09"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center border border-[#303641] text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40 hover:bg-green-400/5 hover:text-green-400"
                >
                  <FaLinkedin size={18} />
                </a>

              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-[#282d36] bg-[#12151a] p-7 sm:p-8"
          >
            <div className="mb-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-green-400">
                Send a message
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white">
                Tell me about your idea.
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Fill out the form and I'll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              action="https://formsubmit.co/dishant1499@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* =================================================
                  FORMSUBMIT CONFIG
              ================================================== */}
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              <input
                type="hidden"
                name="_next"
                value="https://your-portfolio-url.com/contact"
              />

              {/* =================================================
                  NAME
              ================================================== */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-600"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border border-[#303641] bg-[#0f1115] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-green-400/50 focus:bg-[#111419]"
                />
              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-600"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-[#303641] bg-[#0f1115] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-green-400/50 focus:bg-[#111419]"
                />
              </div>

              {/* =================================================
                  SUBJECT
              ================================================== */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-600"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  placeholder="Project / Internship / Collaboration"
                  className="w-full border border-[#303641] bg-[#0f1115] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-green-400/50 focus:bg-[#111419]"
                />
              </div>

              {/* =================================================
                  MESSAGE
              ================================================== */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-wider text-gray-600"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none border border-[#303641] bg-[#0f1115] px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-gray-700 focus:border-green-400/50 focus:bg-[#111419]"
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================== */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-green-400 px-5 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-300"
              >
                Send Message

                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border border-[#282d36] bg-[#12151a] p-6 transition-colors duration-300 hover:border-green-400/20 sm:p-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-green-400">
                Available for opportunities
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Open to internships, freelance projects and collaborations.
              </p>
            </div>

            <a
              href="mailto:dishant1499@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-green-400"
            >
              Email me

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

          </div>
        </motion.div>

        {/* =====================================================
            FOOTER MESSAGE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-700">
            Have an idea? Let's make it real.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
