import { profile } from "../data.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner footer-contact-only">
        <a className="footer-social" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open Pavani's GitHub profile">GitHub ↗</a>
        <a className="footer-social" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Open Pavani's LinkedIn profile">LinkedIn ↗</a>
        <a className="footer-social" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
}
