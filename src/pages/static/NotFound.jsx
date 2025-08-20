import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ui/Button.jsx";
import ThemeContext from "../../contexts/ThemeContext.jsx";

export default function NotFound() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`section container-px py-[8vh] text-center ${
        isDark ? "bg-black" : "bg-white"
      }`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="text-8xl sm:text-9xl font-bold mb-6 text-gray-300 dark:text-gray-700">
          404
        </div>
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-6 transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Page Not Found
        </h1>
        <p
          className={`text-xl mb-8 leading-relaxed transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-600"
          }`}
        >
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Go Back Home
          </Link>
          <Link
            to="/contact"
            className="inline-block border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Support
          </Link>
        </div>

        <div
          className={`text-sm transition-colors duration-200 ${
            isDark ? "text-white" : "text-gray-500"
          }`}
        >
          <p className="mb-2">Need help? Try these links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/features"
              className="hover:underline transition-colors duration-200"
            >
              Features
            </Link>
            <Link
              to="/about"
              className="hover:underline transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/pricing"
              className="hover:underline transition-colors duration-200"
            >
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
