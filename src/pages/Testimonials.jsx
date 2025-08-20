import React, { useContext } from "react";
import TestimonialCard from "../components/ui/TestimonialCard.jsx";
import ThemeContext from "../contexts/ThemeContext.jsx";

export default function Testimonials() {
  const { isDark } = useContext(ThemeContext);

  const testimonials = [
    {
      name: "Jane Cooper",
      avatarUrl: "https://i.pravatar.cc/100?img=5",
      quote:
        "TaskFlow has revolutionized the way our team collaborates. It's easy to use and has significantly boosted our productivity.",
    },
    {
      name: "John Doe",
      avatarUrl: "https://i.pravatar.cc/100?img=15",
      quote:
        "With TaskFlow, keeping track of tasks and deadlines has never been easier. It's an indispensable tool for our team.",
    },
  ];

  return (
    <section
      className={`section py-16 px-[7vw] ${isDark ? "bg-black" : "bg-white"}`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <h2
        className={`text-3xl sm:text-3xl font-semibold text-center ${
          isDark ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        What Our Users Say
      </h2>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
