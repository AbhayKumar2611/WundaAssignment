import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button.jsx";
import ThemeContext from "../../contexts/ThemeContext.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDark ? "bg-black" : "bg-white"
      } shadow-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-200`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity"
            >
              <span
                className={`${isDark ? "text-white" : "text-gray-900"}`}
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Task
              </span>
              <span className="text-blue-600">Flow</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? "text-blue-400 bg-blue-900/20 border-b-2 border-blue-400"
                      : "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                    : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                        isDark ? "text-white" : "text-gray-900"
                      } hover:bg-gray-100 dark:hover:bg-gray-800`
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? "text-blue-400 bg-blue-900/20 border-b-2 border-blue-400"
                      : "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                    : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                        isDark ? "text-white" : "text-gray-900"
                      } hover:bg-gray-100 dark:hover:bg-gray-800`
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? "text-blue-400 bg-blue-900/20 border-b-2 border-blue-400"
                      : "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                    : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                        isDark ? "text-white" : "text-gray-900"
                      } hover:bg-gray-100 dark:hover:bg-gray-800`
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? "text-blue-400 bg-blue-900/20 border-b-2 border-blue-400"
                      : "text-blue-600 bg-blue-50 border-b-2 border-blue-600"
                    : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                        isDark ? "text-white" : "text-gray-900"
                      } hover:bg-gray-100 dark:hover:bg-gray-800`
                }`
              }
            >
              Contact
            </NavLink>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? "🌞" : "🌙"}
            </button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? "🌞" : "🌙"}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/features"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-blue-400 bg-blue-900/20 border-l-4 border-blue-400"
                        : "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                          isDark ? "text-white" : "text-gray-900"
                        } hover:bg-gray-100 dark:hover:bg-gray-800`
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-blue-400 bg-blue-900/20 border-l-4 border-blue-400"
                        : "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                          isDark ? "text-white" : "text-gray-900"
                        } hover:bg-gray-100 dark:hover:bg-gray-800`
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-blue-400 bg-blue-900/20 border-l-4 border-blue-400"
                        : "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                          isDark ? "text-white" : "text-gray-900"
                        } hover:bg-gray-100 dark:hover:bg-gray-800`
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? "text-blue-400 bg-blue-900/20 border-l-4 border-blue-400"
                        : "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : `${isDark ? "text-gray-300" : "text-gray-600"} hover:${
                          isDark ? "text-white" : "text-gray-900"
                        } hover:bg-gray-100 dark:hover:bg-gray-800`
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
              <Button size="sm" className="self-start">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
