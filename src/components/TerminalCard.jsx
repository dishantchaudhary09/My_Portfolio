import { motion } from "framer-motion";

const TerminalCard = () => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="relative ml-auto max-w-md"
    >
      <div className="border border-[#282d36] bg-[#14171d]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#282d36] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#343a46]" />
            <span className="h-2 w-2 rounded-full bg-[#343a46]" />
            <span className="h-2 w-2 rounded-full bg-[#343a46]" />
          </div>

          <span className="text-[11px] text-gray-600">developer.js</span>
        </div>

        {/* Code */}
        <div className="overflow-x-auto p-6 font-mono text-sm leading-7">
          <p>
            <span className="text-gray-600">01</span>{" "}
            <span className="text-gray-500">const</span>{" "}
            <span className="text-gray-300">developer</span>{" "}
            <span className="text-gray-500">=</span>{" "}
            <span className="text-green-400">{"{"}</span>
          </p>

          <p>
            <span className="text-gray-600">02</span>{" "}
            <span className="pl-2 text-gray-500">name:</span>{" "}
            <span className="text-gray-300">"Dishant Chaudhary"</span>
            <span className="text-gray-500">,</span>
          </p>

          <p>
            <span className="text-gray-600">03</span>{" "}
            <span className="pl-2 text-gray-500">role:</span>{" "}
            <span className="text-gray-300">"Full-Stack Developer"</span>
            <span className="text-gray-500">,</span>
          </p>

          <p>
            <span className="text-gray-600">04</span>{" "}
            <span className="pl-2 text-gray-500">stack:</span>{" "}
            <span className="text-green-400">[</span>
          </p>

          <p>
            <span className="text-gray-600">05</span>{" "}
            <span className="pl-8 text-gray-400">"React", "Node.js",</span>
          </p>

          <p>
            <span className="text-gray-600">06</span>{" "}
            <span className="pl-8 text-gray-400">"Express", "MongoDB"</span>
          </p>

          <p>
            <span className="text-gray-600">07</span>{" "}
            <span className="pl-2 text-green-400">]</span>
            <span className="text-gray-500">,</span>
          </p>

          <p>
            <span className="text-gray-600">08</span>{" "}
            <span className="pl-2 text-gray-500">learning:</span>{" "}
            <span className="text-gray-300">true</span>
          </p>

          <p>
            <span className="text-gray-600">09</span>{" "}
            <span className="text-green-400">{"}"}</span>
            <span className="text-gray-500">;</span>
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
        <span>Based in India</span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Building & learning
        </span>
      </div>
    </motion.div>
  );
};

export default TerminalCard;
