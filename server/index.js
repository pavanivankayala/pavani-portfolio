require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const contactRoutes = require("./routes/contact");
const resumeRoutes = require("./routes/resume");

const app = express();
const PORT = process.env.PORT || 5000;

// Allow the deployed frontend (and local dev) to call this API
const origins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((o) => o.trim());
app.use(cors({ origin: origins }));
app.use(express.json({ limit: "20kb" }));

app.get("/", (_req, res) => res.json({ status: "ok", service: "portfolio-api" }));
app.get("/api/health", (_req, res) =>
  res.json({ status: "ok", db: mongoose.connection.readyState === 1 })
);

app.use("/api/contact", contactRoutes);
app.use("/api/resume", resumeRoutes);

app.use((_req, res) => res.status(404).json({ message: "Route not found" }));

if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI is not set. Copy .env.example to .env and fill it in.");
}

mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
