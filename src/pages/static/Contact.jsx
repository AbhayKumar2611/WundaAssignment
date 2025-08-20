import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext.jsx";

export default function Contact() {
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
          Get in Touch
        </h1>
        <p
          className={`text-xl mb-8 leading-relaxed transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-600"
          }`}
        >
          Have questions or need support? We'd love to hear from you.
        </p>
        <div className="bg-purple-600 text-white px-8 py-4 rounded-lg inline-block text-lg font-semibold mb-6">
          📧 support@taskflow.com
        </div>
        <p
          className={`text-lg leading-relaxed transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-700"
          }`}
        >
          Our team typically responds within 24 hours
        </p>
      </div>
    </div>
  );
}
