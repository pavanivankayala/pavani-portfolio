import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data.js";
import { resumeUrl } from "../api.js";

// Typewriter effect: types a role, pauses, deletes, moves to the next
function useTypewriter(words, typeMs = 80, deleteMs = 40, pauseMs = 1500) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = pauseMs;
    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === "") {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(profile.roles);
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <motion.p
          className="hero-hi"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {profile.name}
        </motion.h1>
        <motion.h2
          className="hero-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>{role}</span>
          <span className="cursor">|</span>
        </motion.h2>
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {profile.tagline}
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <a className="btn btn-primary" href={resumeUrl("pdf")}>⬇ Download CV</a>
          <a className="btn btn-ghost" href="/#contact">Contact me</a>
        </motion.div>
      </div>
    </section>
  );
}
