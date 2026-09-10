import { motion } from "framer-motion";

const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 25,
  x = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
        x,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
