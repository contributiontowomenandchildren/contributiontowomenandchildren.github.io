"use client";

import Home from "./pages/home/page";
import About from "./pages/about/page";
import Contact from "./pages/contact/page";
import Projects from "./pages/projects/page";
import ScrollProgress from "./components/scroll-progress/scroll-progress";

const HomePage = () => {
  return (
    <>
      <ScrollProgress />
      <Home id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
};

export default HomePage;
