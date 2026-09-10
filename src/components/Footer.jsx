
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#282d36] bg-[#0f1115] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright */}
        <div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dishant Chaudhary
          </p>

          <p className="mt-1 text-xs text-gray-600">
            Built with React & Tailwind CSS.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:dishant1499@gmail.com"
            className="text-gray-500 transition-colors hover:text-white"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>

          <a
            href="https://github.com/dishantchaudhary09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/dishant-chaudhary09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 transition-colors hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <button
            onClick={scrollToTop}
            className="ml-2 flex h-9 w-9 items-center justify-center border border-[#303641] text-gray-500 transition-colors hover:border-green-400/40 hover:text-green-400"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
