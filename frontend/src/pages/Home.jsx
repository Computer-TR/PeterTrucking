import React from "react";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Fleet from "../components/home/Fleet";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <main className="pt-20">
      {/* Fixed navbar offset */}
      <Hero />
      <Services />
      <About />
      <Fleet />
      <Contact />
    </main>
  );
};

export default Home;
