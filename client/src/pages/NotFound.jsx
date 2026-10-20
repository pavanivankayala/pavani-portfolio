import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "70vh", textAlign: "center" }}>
      <div className="container">
        <h1 style={{ fontSize: "5rem" }}>404</h1>
        <p className="lead">This page doesn't exist.</p>
        <Link className="btn btn-primary" to="/">Back to home</Link>
      </div>
    </section>
  );
}
