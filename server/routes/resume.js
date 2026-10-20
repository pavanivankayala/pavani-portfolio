const express = require("express");
const path = require("path");

const router = express.Router();
const dir = path.join(__dirname, "..", "files");

// GET /api/resume/pdf  -> downloads the PDF resume
router.get("/pdf", (_req, res) =>
  res.download(path.join(dir, "Pavani_Resume.pdf"), "Vankayala_Pavani_Resume.pdf")
);

// GET /api/resume/docx -> downloads the Word resume
router.get("/docx", (_req, res) =>
  res.download(path.join(dir, "Pavani_Resume.docx"), "Vankayala_Pavani_Resume.docx")
);

module.exports = router;
