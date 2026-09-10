
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Brain,
  Database,
  Map,
  Server,
  ShieldAlert,
  UserRound,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const features = [
  {
    icon: Map,
    title: "Risk Map",
    description:
      "Shows landslide risk zones on a map using simple colors: green for low risk, orange for medium risk and red for high risk.",
  },
  {
    icon: Brain,
    title: "AI Risk Prediction",
    description:
      "The machine-learning model analyzes environmental and terrain features to estimate the risk level of a location.",
  },
  {
    icon: AlertTriangle,
    title: "Early Warning",
    description:
      "Risk information and alerts help users become aware of potentially dangerous conditions.",
  },
  {
    icon: UserRound,
    title: "Citizen Reports",
    description:
      "Citizens can report landslides, damaged roads and other problems with location and description details.",
  },
];

const technologies = [
  {
    name: "React.js",
    description:
      "Used to build the frontend, dashboards, maps and user interface.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Used to create the responsive dark-themed interface.",
  },
  {
    name: "Redux Toolkit",
    description:
      "Used to manage frontend application state.",
  },
  {
    name: "Node.js",
    description:
      "Runs the main backend server.",
  },
  {
    name: "Express.js",
    description:
      "Handles REST APIs, requests, authentication and application logic.",
  },
  {
    name: "MongoDB",
    description:
      "Stores users, reports, risk zones and other application data.",
  },
  {
    name: "JWT",
    description:
      "Used for secure user authentication and protected routes.",
  },
  {
    name: "Python",
    description:
      "Used for the machine-learning prediction service.",
  },
  {
    name: "Flask",
    description:
      "Provides the API endpoint for the ML prediction service.",
  },
];

const workflow = [
  ["01", "Location", "User selects or provides a location."],
  ["02", "Backend", "Frontend sends latitude and longitude to the backend."],
  ["03", "Data", "Backend collects the required risk-related features."],
  ["04", "AI / ML", "The Flask ML service predicts the risk level."],
  ["05", "Result", "Backend returns the result and the frontend displays it."],
];

const architecture = [
  {
    number: "01",
    title: "React Frontend",
    description:
      "Handles dashboards, maps, reports, authentication and user interactions.",
  },
  {
    number: "02",
    title: "Node + Express",
    description:
      "Receives requests, manages application logic and communicates with services.",
  },
  {
    number: "03",
    title: "External Data",
    description:
      "Backend collects weather, terrain and other required environmental information.",
  },
  {
    number: "04",
    title: "Python ML",
    description:
      "Flask receives prepared features and returns landslide and flood predictions.",
  },
  {
    number: "05",
    title: "MongoDB",
    description:
      "Stores users, reports, risk zones and other important application data.",
  },
];

const LandslideCaseStudy = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#0f1115] text-white">
      {/* Back */}
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

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-green-400">
                01 / Case Study
              </span>

              <span className="h-px w-10 bg-[#303640]" />

              <span className="font-mono text-xs text-gray-600">
                Full Stack + AI
              </span>
            </div>

            <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              KAVACH
              <span className="text-green-400">.</span>
            </h1>

            <p className="mt-5 text-xl font-medium text-gray-300 sm:text-2xl">
              Landslide Risk Monitoring & Early Warning System
            </p>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              An AI-powered platform designed for the North Eastern Region of
              India to monitor landslide risk, predict risk levels and present
              important information in a simple way.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Python",
                "Machine Learning",
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
              href="https://kavach-landslide.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-green-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-green-300"
            >
              Live Project
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden border border-[#282d36] bg-[#15181e]"
          >
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85"
              alt="Mountain terrain"
              className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5">
              <span className="border border-green-400/20 bg-[#0f1115]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-green-400 backdrop-blur">
                AI + GIS Risk Monitoring
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Idea */}
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
                KAVACH helps users understand the landslide risk of a
                particular location.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                The user provides a location. The backend collects the
                required environmental and terrain information and sends the
                prepared features to a separate machine-learning service.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-400">
                The ML model predicts the risk level, and the result is
                returned to the frontend where it can be displayed on a map
                and dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              The Problem
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Why KAVACH?
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              Landslides can affect roads, homes, transportation and local
              communities. Understanding the risk of an area can require
              looking at multiple environmental factors.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-500">
              KAVACH brings this information into one platform and converts
              complex information into a simple risk result that users can
              understand.
            </p>
          </div>

          <div className="border border-[#282d36] bg-[#12151a] p-7">
            <div className="flex items-center gap-3">
              <ShieldAlert size={20} className="text-green-400" />

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                Goal
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Detect → Predict → Show → Alert
            </h3>

            <div className="mt-7 space-y-5">
              {[
                ["01", "Detect", "Collect useful risk-related information."],
                ["02", "Predict", "Use ML to estimate the risk."],
                ["03", "Show", "Display the result clearly."],
                ["04", "Alert", "Make important risk information visible."],
              ].map(([number, title, text]) => (
                <div key={number}>
                  <p className="font-mono text-[10px] text-green-400">
                    {number} / {title.toUpperCase()}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Map */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden border border-[#282d36]">
          <div
            className="relative h-[420px] w-full overflow-hidden"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 65%,
                  rgba(34,197,94,0.7) 0%,
                  rgba(34,197,94,0.25) 13%,
                  transparent 30%
                ),
                radial-gradient(circle at 55% 45%,
                  rgba(249,115,22,0.75) 0%,
                  rgba(249,115,22,0.25) 15%,
                  transparent 32%
                ),
                radial-gradient(circle at 78% 30%,
                  rgba(239,68,68,0.85) 0%,
                  rgba(239,68,68,0.25) 15%,
                  transparent 31%
                ),
                repeating-radial-gradient(
                  ellipse at 50% 50%,
                  transparent 0,
                  transparent 30px,
                  rgba(255,255,255,0.12) 31px,
                  transparent 32px
                )
              `,
              backgroundColor: "#101318",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-transparent" />

            <div className="absolute left-5 top-5">
              <span className="border border-green-400/20 bg-[#0f1115]/90 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-green-400 backdrop-blur">
                Topographic Risk Map
              </span>
            </div>

            <div className="absolute bottom-5 left-5">
              <h3 className="text-2xl font-semibold">
                Risk becomes easy to understand.
              </h3>

              <p className="mt-2 text-xs text-gray-400">
                Green = Low · Orange = Medium · Red = High
              </p>
            </div>

            <div className="absolute bottom-5 right-5 flex gap-4 border border-white/10 bg-[#0f1115]/90 px-4 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-gray-400">Low</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-orange-400" />
                <span className="text-[10px] text-gray-400">Medium</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="text-[10px] text-gray-400">High</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#282d36] bg-[#12151a] p-6">
            <h3 className="text-lg font-medium">Risk Visualization</h3>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-gray-500">
              Instead of showing complicated environmental numbers, KAVACH
              presents risk levels visually so users can understand the
              situation quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
            User Flow
          </span>

          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            How KAVACH works.
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

              <h3 className="mt-8 text-lg font-semibold">{title}</h3>

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

      {/* Features */}
      <section className="border-y border-[#282d36] bg-[#12151a]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Features
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              What users can do.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-[#282d36] bg-[#282d36] md:grid-cols-2">
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
        </div>
      </section>

      {/* Architecture */}
      <section className="border-b border-[#282d36] bg-[#12151a]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
                Architecture
              </span>

              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                How the technology works together.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-500">
                KAVACH separates the frontend, backend, database and ML
                service so every part has a clear responsibility.
              </p>
            </div>

            <div className="border border-[#282d36] bg-[#0f1115]">
              {architecture.map((item, index) => (
                <div
                  key={item.number}
                  className={`p-6 ${
                    index !== architecture.length - 1
                      ? "border-b border-[#282d36]"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xs text-green-400">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="mt-2 text-sm leading-6 text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI / ML */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className="relative min-h-[420px] overflow-hidden border border-[#282d36] bg-[#111318]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-[#0f1115]/75" />

            <div className="relative flex min-h-[420px] flex-col items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center border border-green-400/30 bg-[#0f1115]/80">
                <Brain size={34} className="text-green-400" />
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-green-400">
                Python / Flask / Machine Learning
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              AI / Machine Learning
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Where does AI come in?
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              The machine-learning model is responsible for estimating the
              risk of a location. The backend prepares the required features
              and sends them to a separate Flask service.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-500">
              The ML service processes the features and returns a prediction
              which the backend can use to create the final risk response.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "Rainfall",
                "Temperature",
                "Humidity",
                "Wind Speed",
                "Slope",
                "Soil",
                "Vegetation",
                "Earthquake Activity",
                "Water Proximity",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[#303640] bg-[#15181e] px-3 py-2 text-xs text-gray-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
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
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-xl font-semibold">{tech.name}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              My Contribution
            </span>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              What I worked on.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              I worked mainly across the full-stack implementation, backend
              APIs and integration of the machine-learning service.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "React frontend development",
              "Node.js & Express backend",
              "REST API development",
              "JWT authentication",
              "MongoDB integration",
              "ML service integration",
              "Risk prediction flow",
              "Weather API integration",
              "Citizen & Admin features",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-[#282d36] bg-[#12151a] p-5"
              >
                <span className="font-mono text-xs text-green-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="border-y border-[#282d36] bg-[#12151a]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="border border-green-400/20 bg-[#0f1115] p-8 sm:p-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-green-400">
              Result
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold sm:text-5xl">
              Turning complex environmental data into a simple risk result.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-500">
              KAVACH brings frontend mapping, backend services, environmental
              data and machine learning together into one platform.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-8 text-gray-500">
              The goal is simple: help citizens and authorities understand
              potential landslide risk more easily and make better-informed
              decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-[10px] text-green-400">FRONTEND</p>
            <p className="mt-2 text-sm text-gray-300">
              React.js + Tailwind CSS
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-green-400">BACKEND</p>
            <p className="mt-2 text-sm text-gray-300">
              Node.js + Express.js
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-green-400">DATABASE</p>
            <p className="mt-2 text-sm text-gray-300">MongoDB</p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-green-400">AI / ML</p>
            <p className="mt-2 text-sm text-gray-300">
              Python + Flask + ML
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

            <Link
              to="/case-study/collectionmaker"
              className="group inline-flex items-center gap-3 border border-[#303640] px-5 py-3 text-sm text-gray-300 transition-all hover:border-green-400 hover:text-green-400"
            >
              Next Case Study

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandslideCaseStudy;
