import { useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data.js";
import { resumeUrl } from "../api.js";

export default function About() {
  const [photoOk, setPhotoOk] = useState(true);
  const initials = profile.name.split(" ").map((w) => w[0]).join("");
  return (
    <Section id="about" title="About Me">
      <div className="about-grid">
        <div className="avatar">
          {photoOk ? (
            <img src={profile.photo} alt={`${profile.name} profile`} onError={() => setPhotoOk(false)} />
          ) : (
            <span aria-label="Profile initials">{initials}</span>
          )}
        </div>
        <div>
          {profile.bio.map((p) => (
            <p key={p} className="lead">{p}</p>
          ))}
          <ul className="facts">
            <li><strong>Location</strong>{profile.location}</li>
            <li><strong>Status</strong>{profile.status}</li>
            <li><strong>Looking for</strong>{profile.lookingFor}</li>
            <li><strong>Email</strong><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
          <div className="btn-row">
            <a className="btn btn-primary" href={resumeUrl("pdf")}>⬇ Resume (PDF)</a>
            <a className="btn btn-ghost" href={resumeUrl("docx")}>⬇ Resume (Word)</a>
          </div>
        </div>
      </div>
    </Section>
  );
}
