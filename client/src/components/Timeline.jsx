import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { timeline } from "../data.js";

export default function Timeline() {
  return (
    <Section id="experience" title="Education & Experience">
      <div className="timeline">
        {timeline.map((t, i) => (
          <motion.div
            key={t.title}
            className={`tl-item ${i % 2 ? "right" : "left"}`}
            initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="tl-dot" />
            <div className="card">
              <span className="year">{t.period}</span>
              <h3>{t.title}</h3>
              <p className="muted">{t.place}</p>
              <p>{t.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
