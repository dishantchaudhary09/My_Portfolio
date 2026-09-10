import { useEffect, useState } from "react";

const MouseSpotlight = () => {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      style={{
        background: `radial-gradient(
          500px circle at ${position.x}px ${position.y}px,
          rgba(74, 222, 128, 0.035),
          transparent 70%
        )`,
      }}
    />
  );
};

export default MouseSpotlight;
