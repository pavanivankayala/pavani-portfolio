import { motion } from "framer-motion";
import Section from "./Section.jsx";
import { certificates, achievements } from "../data.js";

function Card({ c, icon, i }) {
  return (
    <motion.div
      className="card cert"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 3) * 0.08 }}
      whileHover={{ y: -6 }}
    >
      {c.image ? (
        <a href={c.image} target="_blank" rel="noreferrer" className="cert-img" aria-label={`View ${c.title} certificate image`}>
          <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />
        </a>
      ) : (
        <span className="cert-icon" aria-hidden="true">{icon}</span>
      )}
      <h3>{c.title}</h3>
      <p className="muted">{[c.issuer, c.date].filter(Boolean).join(" · ") || c.detail}</p>
      {c.issuer && c.detail && <p className="muted">{c.detail}</p>}
      {c.link && (
        <a className="link-text" href={c.link} target="_blank" rel="noreferrer">Verify credential →</a>
      )}
    </motion.div>
  );
}

export default function Certificates() {
  return (
    <Section id="certificates" title="Certifications & Achievements">
      <div className="cert-grid">
        {certificates.map((c, i) => (
          <Card key={c.title} c={c} icon="🎓" i={i} />
        ))}
      </div>
      <h3 className="sub-heading">Internships, Hackathons & Awards</h3>
      <div className="cert-grid">
        {achievements.map((a, i) => (
          <Card key={a.title} c={a} icon="🏆" i={i} />
        ))}
      </div>
    </Section>
  );
}
