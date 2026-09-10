import { ArrowUpRight } from "lucide-react";

const Button = ({
  children,
  href,
  variant = "primary",
  icon = true,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-200";

  const variants = {
    primary: "bg-white text-[#0f1115] hover:bg-gray-200",

    secondary:
      "border border-[#343a46] text-gray-300 hover:border-green-400/40 hover:text-green-400",

    ghost: "text-gray-400 hover:text-white",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <a href={href} className={styles}>
      {children}

      {icon && <ArrowUpRight size={16} />}
    </a>
  );
};

export default Button;
