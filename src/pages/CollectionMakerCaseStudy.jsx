
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Database,
  Film,
  HardDrive,
  Layers,
  Search,
  Server,
  Smartphone,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Search,
    title: "Movie Discovery",
    description:
      "Users can search and browse movies using data fetched from an external movie API.",
  },
  {
    icon: Layers,
    title: "Create Collections",
    description:
      "Users can create their own movie collection and organize the movies they like.",
  },
  {
    icon: Film,
    title: "Add & Remove",
    description:
      "Movies can be easily added to a collection or removed whenever the user wants.",
  },
  {
    icon: HardDrive,
    title: "Local Storage",
    description:
      "Collections are saved in browser LocalStorage so the data remains available after refreshing the page.",
  },
  {
    icon: Database,
    title: "Redux State Management",
    description:
      "Redux Toolkit manages movie and collection state across different parts of the application.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI",
    description:
      "The interface is designed to work smoothly on desktop, tablet and mobile screens.",
  },
];

const technologies = [
  {
    name: "React",
    description: "Used to build reusable UI components and application pages.",
  },
  {
    name: "Tailwind CSS",
    description: "Used for responsive layouts and modern UI styling.",
  },
  {
    name: "Redux Toolkit",
    description: "Used for centralized application state management.",
  },
  {
    name: "REST API",
    description: "Used to fetch movie information dynamically.",
  },
  {
    name: "LocalStorage",
    description: "Used to persist user-created collections in the browser.",
  },
  {
    name: "JavaScript",
    description: "Used for application logic, API handling and interactions.",
  },
];

const architecture = [
  {
    step: "01",
    title: "React Frontend",
    text: "User searches for movies and interacts with the collection interface.",
  },
  {
    step: "02",
    title: "API Request",
    text: "The application sends requests to the movie API to retrieve movie data.",
  },
  {
    step: "03",
    title: "Redux Store",
    text: "Movie and collection state is managed through Redux Toolkit.",
  },
  {
    step: "04",
    title: "LocalStorage",
    text: "Collection data is stored locally in the user's browser.",
  },
  {
    step: "05",
    title: "UI Update",
    text: "React automatically updates the interface whenever the collection changes.",
  },
];

const CollectionMakerCaseStudy = () => {
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
                02 / Case Study
              </span>

              <span className="h-px w-10 bg-[#303640]" />

              <span className="font-mono text-xs text-gray-600">
                React Application
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Collection
              <span className="block text-green-400">Maker.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              A movie collection web application where users can discover
              movies through an API, create their own collections, and manage
              them directly from the browser.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React",
                "Tailwind CSS",
                "Redux Toolkit",
                "REST API",
                "LocalStorage",
                "JavaScript",
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
              href="https://collectionmaker.netlify.app/"
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
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85"
              alt="Cinema screen"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="border border-green-400/20 bg-[#0f1115]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-green-400 backdrop-blur">
                Movie Collection Platform
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
                Collection Maker is a simple movie management application.
                Instead of just browsing movies, users can create their own
                personal collection.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                Movie information comes from an external API. When a user
                clicks <span className="text-white">Add to Collection</span>,
                Redux updates the application state and the collection is
                stored in LocalStorage.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                This means the collection can remain available even after the
                browser is refreshed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
            User Flow
          </span>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            How Collection Maker works.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-5">

          {[
            ["01", "Search", "User searches for a movie."],
            ["02", "API", "Movie information is fetched."],
            ["03", "Add", "User adds a movie."],
            ["04", "Redux", "Redux updates the state."],
            ["05", "Save", "Collection is saved locally."],
          ].map(([number, title, description]) => (
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
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=85"
            alt="Movie theater"
            className="h-[400px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1115]/95 via-[#0f1115]/60 to-transparent" />

          <div className="absolute inset-0 flex items-center px-7 sm:px-12">

            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                Core Concept
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Browse it.
                <br />
                Build it.
                <br />
                Keep it.
              </h2>

              <p className="mt-5 leading-7 text-gray-400">
                Collection Maker turns a movie browsing experience into a
                personal collection management tool.
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

      {/* LOCAL STORAGE */}
      <section className="border-y border-[#282d36] bg-[#12151a]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                Data Persistence
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                LocalStorage keeps the collection alive.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500">
                The project does not require a separate database for personal
                collections. The selected movies are stored in the browser's
                LocalStorage.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex gap-4">
                  <div className="mt-1 text-green-400">
                    <Database size={18} />
                  </div>

                  <div>
                    <h3 className="font-medium text-white">
                      Add movie
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Movie is added to the Redux collection state.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-green-400">
                    <HardDrive size={18} />
                  </div>

                  <div>
                    <h3 className="font-medium text-white">
                      Save locally
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Collection data is persisted in LocalStorage.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 text-green-400">
                    <Trash2 size={18} />
                  </div>

                  <div>
                    <h3 className="font-medium text-white">
                      Remove movie
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Users can remove movies from their collection anytime.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* STORAGE VISUAL */}
            <div className="border border-[#282d36] bg-[#0f1115] p-6 sm:p-8">

              <div className="border border-[#282d36] bg-[#12151a]">

                <div className="flex items-center justify-between border-b border-[#282d36] px-5 py-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                    Browser Storage
                  </span>

                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="space-y-3 p-5">

                  {[
                    "Interstellar",
                    "Inception",
                    "The Dark Knight",
                    "Avengers",
                  ].map((movie, index) => (
                    <div
                      key={movie}
                      className="flex items-center justify-between border border-[#282d36] bg-[#15181e] px-4 py-3"
                    >
                      <span className="text-sm text-gray-300">
                        {movie}
                      </span>

                      <span className="font-mono text-[9px] text-gray-600">
                        movie_{index + 1}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
            Architecture
          </span>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            From API to browser.
          </h2>
        </div>

        <div className="relative">

          <div className="absolute left-6 top-8 hidden h-[calc(100%-64px)] w-px bg-[#282d36] md:block" />

          <div className="space-y-4">

            {architecture.map((item) => (
              <div
                key={item.step}
                className="relative grid gap-5 border border-[#282d36] bg-[#12151a] p-6 md:grid-cols-[70px_220px_1fr] md:items-center"
              >

                <span className="relative z-10 flex h-11 w-11 items-center justify-center border border-green-400/30 bg-[#0f1115] font-mono text-xs text-green-400">
                  {item.step}
                </span>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-500">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* API SECTION */}
      <section className="border-y border-[#282d36] bg-[#12151a]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                API Management
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Dynamic movie data instead of hardcoded content.
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-500">
                The application communicates with an external movie API to
                retrieve movie information. This keeps the application dynamic
                and allows users to search for different movies.
              </p>

            </div>

            <div className="border border-[#282d36] bg-[#0f1115]">

              <div className="flex items-center gap-3 border-b border-[#282d36] px-5 py-4">
                <Server size={17} className="text-green-400" />

                <span className="font-mono text-xs text-gray-400">
                  API REQUEST FLOW
                </span>
              </div>

              <div className="space-y-3 p-6 font-mono text-xs">

                <div className="text-gray-600">
                  // user searches movie
                </div>

                <div className="text-gray-300">
                  SEARCH → API REQUEST
                </div>

                <div className="text-gray-300">
                  API → MOVIE DATA
                </div>

                <div className="text-green-400">
                  RESPONSE → REDUX STORE
                </div>

                <div className="text-gray-300">
                  REDUX → REACT UI
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

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
              className="border border-[#282d36] bg-[#12151a] p-6"
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

      </section>

      {/* WHAT I BUILT */}
      <section className="border-y border-[#282d36] bg-[#12151a]">

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

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
                "Created reusable UI components",
                "Integrated movie API",
                "Managed application state using Redux Toolkit",
                "Implemented add/remove collection functionality",
                "Implemented LocalStorage persistence",
                "Designed responsive Tailwind UI",
                "Handled API loading and application states",
              ].map((item, index) => (
                <div
                  key={item}
                  className="border border-[#282d36] bg-[#0f1115] p-5"
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

        </div>

      </section>

      {/* RESULT */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">

        <div className="border border-green-400/20 bg-[#12151a] p-8 sm:p-12">

          <div className="max-w-3xl">

            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Result
            </span>

            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              A practical React project focused on real application state.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              Collection Maker helped me understand how a real frontend
              application works with external APIs, centralized state,
              browser storage and reusable components instead of relying only
              on static UI.
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
                Next Project
              </span>

              <h2 className="mt-3 text-3xl font-semibold">
                Read & Relax
              </h2>

            </div>

            <button
              onClick={() => navigate("/projects")}
              className="group inline-flex items-center gap-3 border border-[#303640] px-5 py-3 text-sm text-gray-300 transition-all hover:border-green-400 hover:text-green-400"
            >
              Back to Projects
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

export default CollectionMakerCaseStudy;

