import React, { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/static/Pricing.jsx";
import About from "./pages/static/About.jsx";
import Contact from "./pages/static/Contact.jsx";
import NotFound from "./pages/static/NotFound.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

function App() {
  const appShellClassName = useMemo(
    () =>
      "min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200",
    []
  );

  return (
    <ThemeProvider>
      <div className={appShellClassName}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/features"
              element={<Home initialSection="features" />}
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/get-started"
              element={<Home initialSection="hero" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
