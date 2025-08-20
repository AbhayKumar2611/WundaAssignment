import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../../contexts/ThemeContext.jsx";

function Footer() {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer
      className={`${
        isDark ? "bg-black border-t border-gray-800" : "bg-gray-900"
      } text-white px-10 font-sans`}
    >
      <div className="section py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="text-3xl font-semibold text-[--color-primary]">
          TaskFlow
        </div>
        <div className="flex items-center gap-10 text-lg font-normal">
          <NavLink
            to="#"
            className="text-gray-300 hover:text-[--color-primary] transition-colors"
          >
            Privacy Policy
          </NavLink>
          <NavLink
            to="#"
            className="text-gray-300 hover:text-[--color-primary] transition-colors"
          >
            Terms
          </NavLink>
          <NavLink
            to="#"
            className="text-gray-300 hover:text-[--color-primary] transition-colors"
          >
            Support
          </NavLink>
        </div>
      </div>
      <div className="section pb-6 text-md font-semibold text-gray-300">
        © 2025 TaskFlow, <span className="font-normal text-md">Inc.</span>
      </div>
    </footer>
  );
}

export default Footer;
