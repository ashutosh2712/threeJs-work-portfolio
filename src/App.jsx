import React from "react";
import Navbar from "./section/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Project from "./section/Project";
import Additonal from "./section/Additonal";
import Contact from "./section/Contact";
import { ToastContainer } from "react-toastify";
import Footer from "./section/Footer";
import Experience from "./section/Experience";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Additonal />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  );
};

export default App;
