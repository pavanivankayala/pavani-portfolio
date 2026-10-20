import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { skillGroups } from "../data.js";

const levelLabel = (n) => (n >= 80 ? "Advanced" : n >= 60 ? "Intermediate" : "Learning");

function Ring({ level }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  return (
    <svg className="ring" viewBox="0 0 44 44" aria-hidden="true">
      <circle cx="22" cy="22" r={r} className="ring-bg" />
      <motion.circle
        cx="22"
        cy="22"
        r={r}
        className="ring-fg"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c * (1 - level / 100) }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Hover over a skill to see my proficiency level.">
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div key={g.title} className="card skill-group">
            <h3>{g.title}</h3>
            {g.skills.map((s) => (
              <div key={s.name} className="skill" tabIndex={0}>
                <div className="skill-head">
                  <Ring level={s.level} />
                  <span className="skill-name">{s.name}</span>
                  <span className="skill-pct">{s.level}%</span>
                </div>
                <div className="bar">
                  <motion.div
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <span className="tooltip" role="tooltip">
                  {s.name}: {levelLabel(s.level)} ({s.level}%)
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Section>
  );
}
