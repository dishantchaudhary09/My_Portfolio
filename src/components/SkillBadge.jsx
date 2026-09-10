import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const SkillBadge = ({ skill, index = 0 }) => {
  const name = skill.name || skill.title;
  const icon = skill.icon || skill.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      whileHover={{
        y: -2,
      }}
      className="group flex items-center gap-4 border border-[#282d36] bg-[#171a21] p-4 transition-colors duration-200 hover:border-[#3a414d]"
    >
      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#303641] transition-colors group-hover:border-green-400/30">
        {name === "Git & GitHub" ? (
          <div className="flex items-center gap-0.5">
            <img
              src="https://skillicons.dev/icons?i=git"
              alt="Git"
              className="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
            />

            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              className="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </div>
        ) : icon ? (
          <img
            src={icon}
            alt={name}
            className="h-6 w-6 object-contain transition-transform duration-200 group-hover:scale-110"
          />
        ) : (
          <Code2 size={18} className="text-green-400" />
        )}
      </div>

      {/* Content */}
      <div className="min-w-0">
        <h3 className="truncate text-sm font-medium text-gray-200 transition-colors group-hover:text-white">
          {name}
        </h3>

        {(skill.category || skill.level) && (
          <p className="mt-1 text-xs text-gray-600">
            {skill.category || skill.level}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SkillBadge;