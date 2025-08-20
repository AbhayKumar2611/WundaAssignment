import React, { useEffect, useRef } from "react";
import Hero from "./Hero.jsx";
import Features from "./Features.jsx";
import Testimonials from "./Testimonials.jsx";

export default function Home({ initialSection }) {
  const featuresRef = useRef(null);

  useEffect(() => {
    if (initialSection === "features" && featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [initialSection]);

  return (
    <>
      <Hero />
      <div ref={featuresRef}>
        {/* <div> */}
        <Features />
      </div>
      <Testimonials />
    </>
  );
}
