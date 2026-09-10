import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Database,
  Heart,
  Search,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Search,
    title: "Book Discovery",
    description:
      "Users can search and explore books using dynamically fetched book data.",
  },
  {
    icon: BookOpen,
    title: "Book Details",
    description:
      "Users can view important information about books before deciding what to read.",
  },
  {
    icon: Heart,
    title: "Save Books",
    description:
      "Users can save books they like and keep them available for later.",
  },
  {
    icon: Database,
    title: "API Integration",
    description:
      "Book information is loaded dynamically through an external API.",
  },
  {
    icon: ShoppingBag,
    title: "Personal Library",
    description:
      "Users can maintain a personal list of books they are interested in.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "The interface adapts to desktop, tablet and mobile screens.",
  },
];

const technologies = [
  {
    name: "React.js",
    description:
      "Used to build the application interface using reusable components.",
  },
  {
    name: "JavaScript",
    description:
      "Used for application logic, interactions and data handling.",
  },
  {
    name: "API",
    description:
      "Used to fetch book information dynamically instead of hardcoding data.",
  },
  {
    name: "CSS",
    description:
      "Used to create the visual design, layouts and responsive interface.",
  },
  {
    name: "React Router",
    description:
      "Used to navigate between different pages of the application.",
  },
  {
    name: "LocalStorage",
    description:
      "Used to persist selected books in the browser.",
  },
];

const workflow = [
  ["01", "Discover", "User searches or browses available books."],
  ["02", "API", "The application requests book information."],
  ["03", "Explore", "Book results and details are displayed."],
  ["04", "Save", "User saves books they want to keep."],
  ["05", "Library", "Saved books remain available for later."],
];

const BookstoreCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0f1115] text-white">

      {/* BACK */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <button
          onClick={() => navigate("/projects")}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-gray-500 transition-colors hover:text-green-400"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to Projects
        </button>
      </section>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-green-400">
                03 / Case Study
              </span>

              <span className="h-px w-10 bg-[#303640]" />

              <span className="font-mono text-xs text-gray-600">
                React Application
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Read
              <span className="text-green-400"> & Relax.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              A modern book discovery web application that helps users search,
              explore and save books they are interested in reading.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React.js",
                "JavaScript",
                "API",
                "CSS",
                "React Router",
                "LocalStorage",
              ].map((tech) => (
                <span
                  key={tech}
                  className="border border-[#303640] bg-[#15181e] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://readandrelax.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-300"
            >
              Live Project
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden border border-[#282d36] bg-[#15181e]"
          >
            <img
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=1400&q=85"
              alt="Books on a shelf"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="border border-green-400/20 bg-[#0f1115]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-green-400 backdrop-blur">
                Book Discovery Platform
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SIMPLE EXPLANATION */}
      <section className="border-y border-[#282d36] bg-[#12151a]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                The Idea
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                In simple words.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-gray-400">
                Read & Relax is a book discovery platform where users can
                search for books and explore information about them.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                Instead of keeping a fixed list of books inside the code,
                the application gets book information through an API and
                displays the results dynamically.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                Users can also save books they like so they can easily find
                them again later.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
            User Flow
          </span>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            How Read & Relax works.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {workflow.map(([number, title, description]) => (
            <motion.div
              key={number}
              whileHover={{ y: -5 }}
              className="relative border border-[#282d36] bg-[#12151a] p-6"
            >
              <span className="font-mono text-xs text-green-400">
                {number}
              </span>

              <h3 className="mt-8 text-lg font-semibold">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {description}
              </p>

              {number !== "05" && (
                <ArrowRight
                  size={16}
                  className="absolute right-4 top-6 hidden text-gray-700 md:block"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden border border-[#282d36]">

          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1800&q=85"
            alt="Open book"
            className="h-[420px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/95 via-[#0f1115]/60 to-transparent" />

          <div className="absolute inset-0 flex items-center px-7 sm:px-12">
            <div className="max-w-xl">

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                Core Concept
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Discover.
                <br />
                Explore.
                <br />
                Read.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                A simple interface designed to make finding and exploring
                books easier.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            What users can do.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-[#282d36] bg-[#282d36] md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group bg-[#12151a] p-7 transition-colors duration-300 hover:bg-[#15191f]"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-[#303640] text-green-400 transition-colors group-hover:border-green-400/40">
                  <Icon size={19} />
                </div>

                <h3 className="mt-7 text-lg font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* API */}
      <section className="border-y border-[#282d36] bg-[#12151a]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                API Integration
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Dynamic book data.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500">
                The application uses an external API to retrieve book
                information. When a user searches for a book, the application
                requests the data and displays the returned results.
              </p>
            </div>

            <div className="border border-[#282d36] bg-[#0f1115]">

              <div className="border-b border-[#282d36] px-5 py-4">
                <span className="font-mono text-xs text-gray-400">
                  API REQUEST FLOW
                </span>
              </div>

              <div className="space-y-4 p-6 font-mono text-xs">

                <div className="text-gray-600">
                  // user searches for a book
                </div>

                <div className="text-gray-300">
                  SEARCH → API REQUEST
                </div>

                <div className="text-gray-300">
                  API → BOOK DATA
                </div>

                <div className="text-green-400">
                  RESPONSE → REACT STATE
                </div>

                <div className="text-gray-300">
                  STATE → UI
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* LOCAL STORAGE */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Saved Books
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Keep interesting books for later.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              Selected books can be stored locally in the browser. This gives
              users a simple personal reading list without requiring a
              separate backend database.
            </p>

          </div>

          <div className="border border-[#282d36] bg-[#12151a] p-6">

            <div className="mb-4 flex items-center justify-between border-b border-[#282d36] pb-4">
              <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                My Library
              </span>

              <span className="font-mono text-[10px] text-green-400">
                04 BOOKS
              </span>
            </div>

            {[
              "The Alchemist",
              "Atomic Habits",
              "The Psychology of Money",
              "Ikigai",
            ].map((book, index) => (
              <div
                key={book}
                className="mb-2 flex items-center justify-between border border-[#282d36] bg-[#15181e] px-4 py-3"
              >
                <span className="text-sm text-gray-300">
                  {book}
                </span>

                <span className="font-mono text-[9px] text-gray-600">
                  0{index + 1}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-y border-[#282d36] bg-[#12151a]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Technology Stack
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Technologies used.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                whileHover={{ y: -5 }}
                className="border border-[#282d36] bg-[#0f1115] p-6"
              >
                <span className="font-mono text-[10px] text-green-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {tech.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {tech.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTRIBUTION */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              My Contribution
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              What I worked on.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Built the React application structure",
              "Created reusable components",
              "Integrated book API",
              "Implemented book search",
              "Created book detail views",
              "Implemented saved books functionality",
              "Used LocalStorage for persistence",
              "Designed responsive UI",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-[#282d36] bg-[#12151a] p-5"
              >
                <span className="font-mono text-xs text-green-400">
                  0{index + 1}
                </span>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* RESULT */}
      <section className="border-y border-[#282d36] bg-[#12151a]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="border border-green-400/20 bg-[#0f1115] p-8 sm:p-12">

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Result
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-5xl">
              A practical project for learning API-driven React development.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500">
              Read & Relax helped me understand how a frontend application
              consumes external APIs, manages application data, handles user
              interactions and persists selected information in the browser.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="border-t border-[#282d36]">

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">

          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">

            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-600">
                Explore More
              </span>

              <h2 className="mt-3 text-3xl font-semibold">
                Collection Maker
              </h2>
            </div>

            <button
              onClick={() => navigate("/case-study/collectionmaker")}
              className="group inline-flex items-center gap-3 border border-[#303640] px-5 py-3 text-sm text-gray-300 transition-all hover:border-green-400 hover:text-green-400"
            >
              Next Case Study
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default BookstoreCaseStudy;
