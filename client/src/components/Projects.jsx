import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section.jsx";
import { projects } from "../data.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("newest");

  const techs = useMemo(() => ["All", ...new Set(projects.flatMap((p) => p.tech))], []);
  const shown = useMemo(() => {
    const list = filter === "All" ? projects : projects.filter((p) => p.tech.includes(filter));
    return sort === "name" ? [...list].sort((a, b) => a.name.localeCompare(b.name)) : list;
  }, [filter, sort]);

  return (
    <Section id="projects" title="Projects" subtitle="Things I've built. Filter by technology or sort the list.">
      <div className="filters">
        <div className="chips" role="group" aria-label="Filter by technology">
          {techs.map((t) => (
            <button key={t} className={`chip ${filter === t ? "active" : ""}`} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
        <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort projects">
          <option value="newest">Newest first</option>
          <option value="name">Name (A-Z)</option>
        </select>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence>
          {shown.map((p) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -8 }}
              className="card project"
            >
              <div className="project-top">
                <h3>{p.name}</h3>
                <span className="year">{p.year}</span>
              </div>
              <p>{p.description}</p>
              <div className="badges">
                {p.tech.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
              {(p.github || p.live) && (
                <div className="btn-row">
                  {p.github && <a className="btn btn-sm btn-ghost" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
                  {p.live && <a className="btn btn-sm btn-primary" href={p.live} target="_blank" rel="noreferrer">Live demo</a>}
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
