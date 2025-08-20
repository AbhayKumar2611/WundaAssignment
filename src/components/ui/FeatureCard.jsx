import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext.jsx";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  accent = "primary",
  className = "",
}) {
  const iconBgColor = accent === "secondary" ? "bg-purple-600" : "bg-blue-600";

  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        isDark ? "bg-black" : "bg-white"
      }  ${isDark ? "border-gray-800" : "border-gray-200"}`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mb-4`}
        >
          {Icon ? (
            <Icon className="w-6 h-6 text-white" />
          ) : (
            <span className="text-white text-xs">No Icon</span>
          )}
        </div>
        <h3
          className={`text-2xl font-normal ${
            isDark ? "text-white" : "text-gray-900"
          } mb-2`}
        >
          {title}
        </h3>
      </div>

      <p
        className={` text-md font-normal ${
          isDark ? "text-white" : "text-black-200"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
