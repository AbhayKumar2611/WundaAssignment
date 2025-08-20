import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext.jsx";

export default function TestimonialCard({ avatarUrl, name, quote }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`rounded-lg shadow-sm hover:shadow-md transition-shadow border ${
        isDark ? "border-gray-800" : "border-gray-200"
      } ${isDark ? "bg-black" : "bg-white"} p-6 flex gap-4 items-start`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <img
        src={avatarUrl}
        alt={name}
        className="h-15 w-15 rounded-full object-cover"
      />
      <div>
        <p
          className={`text-gray-700 text-lg leading-relaxed ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {quote}
        </p>
        <div
          className={`mt-3 text-xl font-semibold ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
