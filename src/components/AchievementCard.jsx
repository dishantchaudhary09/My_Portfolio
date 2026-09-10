import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Medal,
  Trophy,
} from "lucide-react";

const AchievementCard = ({ item, index = 0 }) => {
  const getIcon = () => {
    if (item.type === "Achievement") {
      return <Trophy size={20} />;
    }

    if (item.tag === "React") {
      return <Medal size={20} />;
    }

    return <Award size={20} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden border border-[#282d36] bg-[#12151a] transition-all duration-300 hover:border-green-400/30 hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden bg-[#0f1115]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-black/20 to-transparent" />

        <span className="absolute right-4 top-4 font-mono text-[10px] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* CERTIFICATE */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 border border-white/20 bg-[#0f1115]/90 px-4 py-2.5 text-xs font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:text-black"
          >
            View Certificate
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {/* CONTENT */}
      <div className="relative p-6 sm:p-7">
        {/* ICON */}
        <div className="flex h-11 w-11 items-center justify-center border border-[#303640] bg-[#15181e] text-green-400 transition-all duration-300 group-hover:border-green-400/30 group-hover:bg-green-400/[0.05]">
          {getIcon()}
        </div>

        {/* TYPE + TAG */}
        <div className="mt-6 flex items-center gap-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-green-400">
            {item.type}
          </span>

          <span className="h-px w-8 bg-[#343b46]" />

          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-gray-600">
            {item.tag}
          </span>
        </div>

        {/* TITLE */}
        <h3 className="mt-4 text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-green-400">
          {item.title}
        </h3>

        {/* ORGANIZATION + YEAR */}
        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            {item.organization}
          </p>

          <span className="shrink-0 font-mono text-xs text-gray-600">
            {item.year}
          </span>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-5 text-sm leading-7 text-gray-500">
          {item.description}
        </p>

        {/* HOVER LINE */}
        <div className="absolute bottom-0 left-0 h-px w-0 bg-green-400 transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

export default AchievementCard;