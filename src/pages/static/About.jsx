import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext.jsx";

export default function About() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`section container-px py-[8vh] text-center ${
        isDark ? "bg-black" : "bg-white"
      }`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h1
          className={`text-4xl sm:text-5xl font-bold ${
            isDark ? "text-white" : "text-gray-900"
          } mb-6`}
        >
          About TaskFlow
        </h1>
        <p
          className={`text-xl text-gray-600 ${
            isDark ? "text-white" : "text-gray-600"
          } mb-8 leading-relaxed`}
        >
          We build delightful productivity tools that help teams collaborate,
          track progress, and achieve their goals efficiently.
        </p>
        <div
          className={`bg-blue-600 text-white px-6 py-3 rounded-lg inline-block text-lg font-medium mb-4 ${
            isDark ? "bg-blue-600" : "bg-blue-600"
          }`}
        >
          Our Mission
        </div>
        <p
          className={`text-lg text-gray-700 leading-relaxed ${
            isDark ? "text-white" : "text-gray-600"
          }`}
        >
          To empower teams worldwide with intuitive tools that make work more
          enjoyable and productive, fostering collaboration and success.
        </p>
      </div>
    </div>
  );
}
