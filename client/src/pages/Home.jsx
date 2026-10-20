import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Timeline from "../components/Timeline.jsx";
import Certificates from "../components/Certificates.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  const { hash } = useLocation();

  // Smooth-scroll to a section when the URL has a hash like /#projects
 
useEffect(() => {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  const el = document.getElementById(hash.slice(1));

  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}, [hash]);


  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Certificates />
      <Contact />
    </>
  );
}
