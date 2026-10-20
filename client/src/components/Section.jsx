import { motion } from "framer-motion";

// Wraps a page section with a scroll-triggered slide-up / fade-in entrance
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
        {children}
      </motion.div>
    </section>
  );
}
