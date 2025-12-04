import project1 from "../assets/projects/portfolio.png";
import project2 from "../assets/projects/praahis-dine.png";

export const EXPERIENCES = [
  {
    year: "Aug 2025 – Oct 2025",
    role: "Software Engineer Intern",
    company: "Isree Research Software Development Labs Pvt. Ltd., Bangalore",
    description: `Designed RESTful Java APIs, improving uptime by 30% and supporting 10,000+ concurrent users. Enhanced SQL queries reducing response times by 25%. Deployed secure RBAC-based access control and delivered features 15% ahead of schedule using Agile pipelines.`,
    technologies: ["Java", "REST APIs", "SQL", "RBAC", "Agile"],
  },
  {
    year: "Mar 2025 – May 2025",
    role: "Machine Learning Intern",
    company: "Intrainz, Hyderabad",
    description: `Developed fraud detection models in Java + Scikit-learn, improving accuracy by 7% and reducing false positives by 15%. Automated preprocessing workflows cutting pipeline time by 25%.`,
    technologies: ["Java", "Scikit-learn", "Machine Learning", "Data Processing"],
  },
];

export const PROJECTS = [
  {
    title: "PRAAHIS – Multi-Tenant Restaurant Management SaaS",
    image: project2,
    link: "https://www.praahis.me",
    description: "Architected a multi-tenant SaaS with 300+ components, 5 user roles, JWT+RBAC authentication, RLS-secured PostgreSQL (25+ tables, 60+ SQL migrations), and real-time WebSocket order tracking. Achieved <100ms API latency for 95% of calls with 40% reduced DB load. Integrated Razorpay, PhonePe, Paytm payments. Developed 1,300+ Vitest unit tests and 6 Playwright E2E suites.",
    technologies: ["React 18", "PostgreSQL", "Supabase", "TanStack Query", "Zustand", "Deno Edge Functions", "Tailwind CSS"],
  },
  {
    title: "Personal Portfolio Website",
    image: project1,
    link: "https://prashanth-k-r.vercel.app",
    description: "Built a performant personal portfolio with scroll-triggered animations, typewriter effects, responsive layouts, and code-splitting for improved load times.",
    technologies: ["React 18", "Vite 6", "Tailwind CSS", "Framer Motion"],
  },
];

export const PUBLICATIONS = [
  {
    title: "Hybrid Machine Learning Algorithm for Thyroid Disease Classification Using AdaBoost and Q-Learning",
    conference: "2025 International Conference on Knowledge Engineering and Communication Systems (ICKECS)",
    publisher: "IEEE",
    location: "Chickballapur, India",
    date: "April 28-29, 2025",
    description: "Proposed a hybrid machine learning algorithm combining AdaBoost and Q-learning for thyroid disease classification, incorporating data preprocessing, feature selection, and dynamic classifier selection. The model effectively addresses challenges associated with imbalanced medical datasets, facilitating early and real-time diagnosis for women's thyroid health.",
    results: {
      accuracy: "99.41%",
      precision: "98.13%",
      recall: "98.13%",
      f1Score: "98.13%"
    },
    doi: "10.1109/ICKECS65700.2025.11034898",
    doiLink: "https://doi.org/10.1109/ICKECS65700.2025.11034898",
    technologies: ["AdaBoost", "Q-Learning", "Machine Learning", "Feature Selection", "Medical Diagnosis"]
  }
];

export const CONTACT = {
  address: "Tirupati, Andhra Pradesh",
  phoneNo: "+91 7799333794",
  email: "prashanthkr7799@gmail.com",
  linkedin: "https://linkedin.com/in/cprashanthkr",
  github: "https://github.com/prashanth-k-1",
  portfolio: "https://prashanth-k-r.vercel.app",
};
