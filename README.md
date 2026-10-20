# Vankayala Pavani | MERN Portfolio

A full-stack personal portfolio built with the MERN stack: React (Vite) frontend, Node.js + Express REST API, and MongoDB (Mongoose) for storing contact-form messages.

**Live site:** `https://YOUR-SITE.vercel.app` _(replace after deploying)_
**API:** `https://YOUR-API.onrender.com` _(replace after deploying)_

## Features

- Hero with typewriter effect, animated gradient background and **Download CV** button
- About section with photo, location and status
- Skills grouped by Frontend / Backend & Database / Tools, with animated bars, progress rings and hover tooltips
- Projects as interactive cards with tech badges, GitHub + demo links, tech filter and sort
- Resume download in **PDF** and **Word (.docx)**, served by Express routes
- Animated vertical timeline for education and experience
- Certifications and hackathon/achievements
- Contact form saved to MongoDB, with optional Nodemailer email notification
- Dark / light mode toggle (remembered in localStorage), fully responsive, React Router, Framer Motion animations

## Structure

```
client/   React + Vite frontend (edit content in src/data.js)
server/   Express API, Mongoose model, resume files
```

## API

| Method | Route               | Purpose                          |
| ------ | ------------------- | -------------------------------- |
| POST   | `/api/contact`      | Save a contact message (MongoDB) |
| GET    | `/api/resume/pdf`   | Download resume as PDF           |
| GET    | `/api/resume/docx`  | Download resume as Word          |
| GET    | `/api/health`       | Health check                     |

## Run locally

Requirements: Node.js 18+, a MongoDB database (free MongoDB Atlas cluster works).

```bash
# 1. Backend
cd server
npm install
cp .env.example .env      # then fill in MONGODB_URI
npm run dev               # http://localhost:5000

# 2. Frontend (new terminal)
cd client
npm install
cp .env.example .env      # VITE_API_URL=http://localhost:5000
npm run dev               # http://localhost:5173
```

## Environment variables

`server/.env` (never committed):

| Variable      | Description                                           |
| ------------- | ----------------------------------------------------- |
| `MONGODB_URI` | MongoDB connection string                             |
| `CLIENT_URL`  | Allowed frontend origin(s), comma separated (CORS)    |
| `PORT`        | Server port (default 5000)                            |
| `SMTP_*`, `NOTIFY_EMAIL` | Optional, enables email notifications      |

`client/.env`: `VITE_API_URL` is the base URL of the deployed backend.

## Deployment

**Backend (Render):** New Web Service → root directory `server`, build `npm install`, start `npm start`. Add `MONGODB_URI` and `CLIENT_URL` (your Vercel URL) as environment variables. In MongoDB Atlas, allow network access from `0.0.0.0/0`.

**Frontend (Vercel/Netlify):** root directory `client`, build `npm run build`, output `dist`. Set `VITE_API_URL` to the Render URL. SPA rewrites are already configured (`vercel.json`, `public/_redirects`).

## Customising

All text content (bio, skills, projects, certificates, links) is in `client/src/data.js`. Add a profile photo at `client/public/profile.jpg`. Replace the resume files in `server/files/` (keep the same names).
