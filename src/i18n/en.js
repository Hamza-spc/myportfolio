import emoji from "react-easy-emoji";
import {
  assets,
  blogSection,
  illustration,
  isHireable,
  openSource,
  podcastSection,
  projectLinks,
  socialMediaLinks,
  softwareSkills,
  splashScreen,
  talkSection,
  techStack,
  technicalSkillCategories,
  twitterDetails
} from "./shared";
import {ui} from "./ui";

const greeting = {
  username: "Hamza Simou",
  title: "Hi, I'm Hamza",
  subTitle: emoji(
    "Final-year Software Engineering student at EMSI Marrakech, focused on backend, DevOps, and CI/CD — with hands-on experience building production full-stack and AI-powered systems. Seeking a PFE internship for 2027."
  ),
  profileImage: assets.profileImage,
  resumeLink: true,
  displayGreeting: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "BACKEND-FOCUSED SOFTWARE ENGINEER WITH STRONG DEVOPS & FULL-STACK EXPERIENCE",
  skills: [
    emoji(
      "⚡ Design and build scalable REST APIs and microservice backends with Spring Boot, Spring Security, and Node.js"
    ),
    emoji(
      "⚡ Ship production systems with Docker, Kubernetes, Jenkins, GitHub Actions, AWS, and CI/CD"
    ),
    emoji(
      "⚡ Develop full-stack and mobile applications with Angular, Flutter, React, Next.js, and AI integrations"
    )
  ],
  softwareSkills,
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "EMSI — Ecole Marocaine des Sciences de l'ingénieur",
      logo: assets.emsiLogo,
      subHeader: "State Engineering Diploma — Software Engineering (Bac+5)",
      duration: "October 2022 - October 2027",
      desc: "Final-year Software Engineering student specializing in backend, DevOps, CI/CD, and scalable full-stack systems.",
      descBullets: [
        "Focus areas: Backend Development, DevOps, CI/CD, and distributed system design",
        "Competition winner: 1st Prize at EMSIstes INNOV'26 (Parkingo project)"
      ]
    }
  ]
};

const parkingoAwardSection = {
  display: true,
  title: emoji("1st Place — EMSIstes INNOV'26 🏆"),
  subtitle: "PARKINGO — SMART PARKING MANAGEMENT PLATFORM",
  description:
    "Won 1st prize at the EMSIstes INNOV'26 innovation competition in Marrakech for Parkingo — a full-stack smart parking platform built with Spring Boot, Flutter, Next.js, MySQL, Gemini AI, Mapbox, license-plate OCR, and a 3D parking twin.",
  image: assets.parkingoAward,
  imageAlt: "Parkingo 1st Place Award — EMSIstes INNOV'26",
  footerLink: [{name: "View Project", url: projectLinks.parkingo.github}]
};

const technicalSkillsSection = {
  display: true,
  title: "Skills",
  subtitle: "TECHNOLOGIES, TOOLS, AND CONCEPTS I WORK WITH",
  primaryFocus: "Backend Development, DevOps, CI/CD",
  categories: technicalSkillCategories.map(category => ({
    name: ui.en.technicalCategoryNames[category.nameKey],
    skills: category.skills
  }))
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineering Intern — ERP Systems (Odoo 17)",
      company: "AMANUS – Solutions Métiers & Transformation Digitale",
      companyBanner: "AMANUS",
      companyTagline: "Digital Agency & Odoo",
      companylogo: assets.amanusLogo,
      date: "June 2026 – September 2026",
      desc: "On-site internship focused on custom Odoo 17 ERP modules for restaurant operations (Sales, Inventory, Procurement).",
      descBullets: [
        "Assisted in developing custom Odoo 17 modules in Python for restaurant ERP workflows",
        "Built and modified 10+ XML views and added custom fields to existing models using the Odoo ORM",
        "Fixed ~20 bug tickets and tested features in a Docker-based development environment",
        "Collaborated with a team of 5 developers using Git and GitHub"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Sofitel Marrakech",
      companylogo: assets.sofitelLogo,
      date: "July 2025 – August 2025",
      desc: "Designed and built Hotel Asset Recovery, a lost-and-found platform that digitized the hotel's paper process and cut item lookup from ~15–20 minutes to under a minute.",
      descBullets: [
        "Built a modular Spring Boot backend (Spring Modulith) with Kafka events, Keycloak OAuth2/OIDC, and MinIO photo storage",
        "Built a hybrid AI matching engine (Ollama vision + text embeddings, pgvector) combining visual, semantic, and location signals",
        "Stack: Java 21, Spring Boot 4, Spring Security, Spring Data JPA, Angular 21, PostgreSQL, Docker Compose, Prometheus, Grafana, Tempo"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Eureka Digital",
      companylogo: assets.eurekaLogo,
      date: "July 2024 – August 2024",
      desc: "Built and maintained web applications using Python and Laravel in an Agile environment.",
      descBullets: [
        "Developed RESTful APIs and backend services with a focus on performance and scalability",
        "Worked on database design, optimization, and integration",
        "Collaborated in Agile sprints to deliver production-ready features"
      ]
    }
  ]
};

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "FULL-STACK SYSTEMS, AI-POWERED PLATFORMS, AND PRODUCTION-GRADE BACKENDS I'VE BUILT",
  projects: [
    {
      projectName: "KickPro — AI Football Talent Discovery",
      projectDesc:
        "Full-stack Flutter + Spring Boot platform (46 screens, 127 secured REST APIs, JWT/RBAC) connecting Moroccan players with scouts. Pessimistic locking for stadium booking, Kafka notifications, WebSocket chat, Gemini AI coach, Docker/AWS (EC2/RDS), 32 JUnit tests.",
      footerLink: [
        {name: "Live Demo", url: projectLinks.kickpro.demo},
        {name: "GitHub", url: projectLinks.kickpro.github}
      ]
    },
    {
      projectName: "Parkingo — Smart Parking Platform 🏆",
      projectDesc:
        "1st Prize — EMSIstes INNOV'26. End-to-end smart parking (Spring Boot, Next.js, Flutter, MySQL) with JWT auth, wallet payments, Gemini conversational booking, license-plate OCR, QR validation, Mapbox maps, and a 3D parking twin.",
      footerLink: [{name: "GitHub", url: projectLinks.parkingo.github}]
    },
    {
      projectName: "Archlytics — Java Architecture Analysis",
      projectDesc:
        "AI-assisted CLI + GitHub Action for Java codebases. Dependency graph analysis, architectural violation detection, health scores, Mermaid diagrams, PR diff analysis, and drift tracking.",
      footerLink: [{name: "GitHub", url: projectLinks.archlytics.github}]
    },
    {
      projectName: "Restaurant Menu — Odoo 17 ERP Module",
      projectDesc:
        "Custom Odoo module for restaurant SMEs: menu management, Sales/Inventory/Purchase integration, bulk product wizard, QWeb PDF reports, JSON API, cron jobs, and role-based access.",
      footerLink: [{name: "GitHub", url: projectLinks.odoo.github}]
    },
    {
      projectName: "Scan&Track — AI Receipt Management",
      projectDesc:
        "Full-stack expense tracker with Tesseract OCR pipeline, auto-categorization, FastAPI backend, React 18 + TypeScript frontend, and Chart.js analytics dashboard.",
      footerLink: [{name: "GitHub", url: projectLinks.scanTrack.github}]
    },
    {
      projectName: "EduVerify — Academic Document Verification",
      projectDesc:
        "Flutter mobile app + Laravel API for student enrollment and document verification with OCR extraction, multi-stage pipeline, and institutional admin dashboard.",
      footerLink: [{name: "GitHub", url: projectLinks.eduVerify.github}]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Licenses & Certifications 🏆"),
  subtitle: "PROFESSIONAL CREDENTIALS AND CONTINUOUS LEARNING",
  achievementsCards: [
    {
      title: "IELTS C1 Level",
      issuer: "IELTS Official",
      date: "Dec 2024",
      skills: "CEFR Level: C1 — Advanced English proficiency",
      featured: true
    },
    {
      title: "Agile Project Management",
      issuer: "Google",
      date: "Mar 2026",
      featured: true
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Duke University",
      date: "Nov 2025",
      featured: true
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "Oct 2025",
      featured: true
    },
    {
      title: "Software Design & Project Management",
      issuer: "The Hong Kong University of Science and Technology",
      date: "Apr 2025",
      skills: "UML, Design Patterns",
      featured: true
    },
    {
      title: "Ensure Ethics in Your Daily Workplace Contributions",
      issuer: "CrossKnowledge",
      date: "May 2026"
    },
    {
      title: "Accept Varied Cultural Approaches to Work",
      issuer: "CrossKnowledge",
      date: "May 2026"
    },
    {
      title: "Introduction to Big Data",
      issuer:
        "University of California, San Diego — Rady School of Management",
      date: "Mar 2026"
    },
    {
      title: "Introduction to NoSQL Databases",
      issuer: "IBM",
      date: "Oct 2025"
    },
    {
      title: "Using Python to Access Web Data",
      issuer: "University of Michigan",
      date: "Apr 2025",
      skills: "Python"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "The Johns Hopkins University",
      date: "Apr 2024",
      skills: "HTML, CSS, JavaScript"
    },
    {
      title: "Introduction à la programmation orientée objet (en C++)",
      issuer: "École Polytechnique Fédérale de Lausanne (EPFL)",
      date: "Dec 2024",
      skills: "Data Structures, Algorithms, OOP"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      date: "Dec 2024"
    },
    {
      title: "Basics of Cisco Networking",
      issuer: "LearnQuest",
      date: "Dec 2024",
      skills: "Cisco Networking"
    },
    {
      title: "Interactivity with JavaScript",
      issuer: "University of Michigan",
      date: "Nov 2024",
      skills: "JavaScript"
    },
    {
      title: "The Unix Workbench",
      issuer: "The Johns Hopkins University",
      date: "Nov 2024"
    },
    {
      title: "The Arduino Platform and C Programming",
      issuer: "UC Irvine",
      date: "Mar 2024",
      skills: "Arduino, C"
    }
  ],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open to PFE internships for 2027, collaborations, and backend/DevOps opportunities. Let's connect!",
  number: "+212 616161578",
  email_address: "hamza.2simou@gmail.com"
};

export {
  greeting,
  socialMediaLinks,
  splashScreen,
  illustration,
  skillsSection,
  educationInfo,
  techStack,
  parkingoAwardSection,
  technicalSkillsSection,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
