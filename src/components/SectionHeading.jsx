import ScrollReveal from "./ScrollReveal";

const SectionHeading = ({ label, title, description, align = "left" }) => {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <ScrollReveal className={alignment}>
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-green-400">
        {label}
      </p>

      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-500">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
};

export default SectionHeading;
