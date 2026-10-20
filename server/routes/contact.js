const express = require("express");
const nodemailer = require("nodemailer");
const Message = require("../models/Message");

const router = express.Router();

// Optional email notification: only active when SMTP settings are present in .env
async function notify({ name, email, message }) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, NOTIFY_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  await transporter.sendMail({
    from: SMTP_USER,
    to: NOTIFY_EMAIL || SMTP_USER,
    replyTo: email,
    subject: `New portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });
}

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email and message are required." });
  }
  try {
    const saved = await Message.create({ name, email, message });
    notify(saved).catch((e) => console.error("Email notification failed:", e.message));
    res.status(201).json({ message: "Thanks! Your message has been sent." });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ message: Object.values(err.errors)[0].message });
    }
    console.error(err);
    res.status(500).json({ message: "Something went wrong. Please try again later." });
  }
});

module.exports = router;
