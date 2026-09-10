import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Education", path: "/education" },
    { name: "Resume", path: "/resume" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#282d36] bg-[#0f1115]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-xl font-semibold tracking-tight text-white"
        >
          Dishant<span className="text-green-400">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-5 text-sm transition-colors duration-200 ${
                  isActive ? "text-white" : "text-gray-500 hover:text-white"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-green-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 border border-[#343a46] px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:border-green-400/40 hover:text-green-400 md:inline-flex"
        >
          Let's Talk
          <ArrowUpRight size={15} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 transition-colors hover:text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#282d36] bg-[#0f1115] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={`border-b border-[#20242c] py-3.5 text-sm transition-colors ${
                    isActive
                      ? "text-green-400"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-4 mb-2 inline-flex w-fit items-center gap-2 border border-[#343a46] px-4 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:border-green-400/40 hover:text-green-400"
            >
              Let's Talk
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;