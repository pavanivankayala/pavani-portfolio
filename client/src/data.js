// All portfolio content lives here. Edit this file to update the site.
// To show links on a project card, add github: "..." and/or live: "..." to it.

export const profile = {
  name: "Vankayala Pavani",
  roles: [
    "CSE (AI & ML) Student",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Aspiring MERN Stack Developer",
  ],
  tagline:
    "I build data-driven solutions with Python and machine learning, and I'm growing into a full-stack developer.",
  bio: [
    "I'm a third-year B.Tech student in Computer Science Engineering (AI & ML) at JK Lakshmipat University, Jaipur, with a CGPA of 8.03.",
    "I enjoy turning data into useful tools: from health risk prediction models to an elder-care app. I'm now learning the MERN stack to take my ideas from notebooks to full web applications.",
  ],
  location: "Jaipur, Rajasthan, India",
  status: "Student (3rd year, graduating 2028)",
  lookingFor: "Python / software internship",
  // Put your photo at client/public/profile.jpg to replace the initials avatar
  photo: "/profile.jpg",
  email: "pavanivankayala169@gmail.com",
  phone: "+91 78421 14595",
  github: "https://github.com/pavanivankayala",
  linkedin: "https://www.linkedin.com/in/vankayalapavani/?isSelfProfile=true",
};

// level = proficiency percentage shown on the bar / ring
export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 80 },
      { name: "CSS", level: 75 },
      { name: "React.js", level: 40 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 70 },
      { name: "Node.js / Express", level: 40 },
      { name: "MongoDB", level: 40 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Scikit-learn", level: 75 },
      { name: "Pandas / NumPy", level: 80 },
      { name: "Matplotlib", level: 75 },
      { name: "Git & GitHub", level: 70 },
      { name: "C / DSA", level: 70 },
    ],
  },
];

export const projects = [
  {
    name: "AI-Based Active Motion Detection",
    year: "2026",
    description:
      "Machine learning model that detects and classifies active motion patterns in biological systems from vitals/sensor data, with preprocessing, feature engineering and model evaluation.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "Health Risk Prediction",
    year: "Feb 2026",
    description:
      "Supervised ML system that classifies patients into Low Risk and High Risk categories from health indicators.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    name: "ElderCare AI",
    year: "Jan 2026",
    description:
      "App that predicts whether an elderly user's health is at risk from daily vitals, built to support elder care.",
    tech: ["HTML", "CSS", "Supabase"],
  },
  {
    name: "Password Generator",
    year: "Nov 2025",
    description:
      "Configurable generator that creates secure passwords from combinations of letters, numbers and symbols.",
    tech: ["Python"],
  },
];

export const timeline = [
  {
    period: "2024 - 2028",
    title: "B.Tech, Computer Science Engineering (AI & ML)",
    place: "JK Lakshmipat University, Jaipur",
    detail: "Currently in 2nd year. CGPA: 8.03.",
  },
  {
    period: "Jun - Jul 2026",
    title: "Summer Intern, LUSIP 2026",
    place: "LNM Institute of Information Technology (LNMIIT)",
    detail:
      "8-week undergraduate summer internship. Worked on 'Using AI to Detect Active Motion in Biological Systems' under Dr. Ashok Garai.",
  },
  {
    period: "May - Jul 2025",
    title: "Intern, IndicWiki Indigenous Language Development",
    place: "IIIT Hyderabad",
    detail: "Internship programme from 12 May to 14 July 2025 on indigenous language development.",
  },
  {
    period: "2026",
    title: "Smart India Hackathon",
    place: "Participant",
    detail: "Worked in a team to build a solution to a real-world problem statement.",
  },
];

// image: certificate picture in client/public/certs. link: verification / credential URL.
export const certificates = [
  {
    title: "Introduction to Data Science in Python",
    issuer: "Coursera (University of Michigan)",
    date: "Jan 2025",
    image: "/certs/coursera-ds-python.png",
    link: "https://coursera.org/verify/7DHIEP7R4VAX",
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    issuer: "GeeksforGeeks",
    date: "Jun 2025",
    image: "/certs/gfg-genai.png",
    link: "https://media.geeksforgeeks.org/courses/certificates/df1f5609759f4f9b13e5ec2371f5edb9.pdf",
  },
  {
    title: "Database Management System, Part 1",
    issuer: "Infosys Springboard",
    date: "Nov 2025",
    image: "/certs/infosys-dbms.png",
    link: "https://verify.onwingspan.com",
  },
  {
    title: "MLOps for Generative AI",
    issuer: "Google Skills",
    date: "Jun 2026",
    image: "/certs/google-mlops-genai.png",
    link: "https://www.skills.google/public_profiles/392b40fe-11ec-4159-b980-45fc3a4a2cf6/badges/25212122",
  },
  {
    title: "MLOps with Vertex AI: Model Evaluation",
    issuer: "Google Skills",
    date: "2026",
    image: "/certs/google-vertex-model-evaluation.png",
    link: "https://www.skills.google/public_profiles/392b40fe-11ec-4159-b980-45fc3a4a2cf6/badges/25215071",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jun 2026",
    image: "/certs/ibm-ai-fundamentals.png",
    link: "https://www.credly.com/badges/18ede6f1-e6ca-48ba-b380-b3c47fca197b/public_url",
  },
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    image: "/certs/redhat-system-administration.png",
    link: "https://www.credly.com/badges/d8ffe37b-1f16-4903-a270-cb4e8769efa1/public_url",
  },
];

export const achievements = [
  {
    title: "LUSIP 2026 Summer Internship",
    detail: "Completed 8 weeks at LNMIIT (1 Jun - 27 Jul 2026) on AI-based active motion detection.",
    image: "/certs/lusip-2026.png",
  },
  {
    title: "IndicWiki Internship, IIIT Hyderabad",
    detail: "Completed the internship programme, 12 May - 14 Jul 2025.",
    image: "/certs/indicwiki-internship.png",
  },
  { title: "Smart India Hackathon", detail: "Participant" },
  { title: "Academic performance", detail: "CGPA 8.03 in B.Tech CSE (AI & ML)" },
];
