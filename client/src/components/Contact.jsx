import { useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data.js";
import { sendMessage } from "../api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState({ status: "idle", text: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setState({ status: "loading", text: "" });
    try {
      const data = await sendMessage(form);
      setState({ status: "success", text: data.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setState({ status: "error", text: err.message });
    }
  }

  return (
    <Section id="contact" title="Get in Touch" subtitle="Have an internship or project in mind? Send me a message.">
      <div className="contact-grid">
        <div className="contact-info">
          <p><strong>Email</strong><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><strong>Phone</strong><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></p>
          <p><strong>Location</strong>{profile.location}</p>
          <p>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a> ·{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>

        <form className="card form" onSubmit={onSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={onChange} required maxLength={100} />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={onChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={onChange} required maxLength={2000} />
          </label>
          <button className="btn btn-primary" disabled={state.status === "loading"}>
            {state.status === "loading" ? "Sending..." : "Send message"}
          </button>
          {state.text && (
            <p className={`form-msg ${state.status}`} role="status">{state.text}</p>
          )}
        </form>
      </div>
    </Section>
  );
}
