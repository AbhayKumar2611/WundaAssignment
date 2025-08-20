import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext.jsx";

export default function Pricing() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`section container-px py-[8vh] text-center ${
        isDark ? "bg-black" : "bg-white"
      }`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-2xl mx-auto">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Pricing Plans
        </h1>
        <p
          className={`text-xl mb-8 leading-relaxed transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-600"
          }`}
        >
          Choose the perfect plan for your team's productivity needs
        </p>
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full inline-block text-lg font-semibold">
          Coming Soon
        </div>
        <p
          className={`mt-6 transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          We're working hard to bring you flexible pricing options
        </p>
      </div>
    </div>
  );
}
