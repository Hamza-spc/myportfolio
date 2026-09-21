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
  title: "Bonjour, je suis Hamza",
  subTitle: emoji(
    "Étudiant en dernière année d'ingénierie logicielle à l'EMSI Marrakech, axé backend, DevOps et CI/CD — avec une expérience concrète sur des systèmes full-stack et IA en production. En recherche d'un stage PFE pour 2027."
  ),
  profileImage: assets.profileImage,
  resumeLink: true,
  displayGreeting: true
};

const skillsSection = {
  title: "Ce que je fais",
  subTitle:
    "INGÉNIEUR LOGICIEL ORIENTÉ BACKEND AVEC UNE FORTE EXPÉRIENCE DEVOPS & FULL-STACK",
  skills: [
    emoji(
      "⚡ Concevoir et développer des API REST scalables et des backends microservices avec Spring Boot, Spring Security et Node.js"
    ),
    emoji(
      "⚡ Déployer des systèmes en production avec Docker, Kubernetes, Jenkins, GitHub Actions, AWS et CI/CD"
    ),
    emoji(
      "⚡ Développer des applications full-stack et mobiles avec Angular, Flutter, React, Next.js et des intégrations IA"
    )
  ],
  softwareSkills,
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "EMSI — École Marocaine des Sciences de l'Ingénieur",
      logo: assets.emsiLogo,
      subHeader: "Diplôme d'Ingénieur d'État — Génie Logiciel (Bac+5)",
      duration: "Octobre 2022 - Octobre 2027",
      desc: "Étudiant en dernière année spécialisé en backend, DevOps, CI/CD et systèmes full-stack scalables.",
      descBullets: [
        "Domaines : Développement Backend, DevOps, CI/CD et conception de systèmes distribués",
        "Lauréat : 1er Prix EMSIstes INNOV'26 (projet Parkingo)"
      ]
    }
  ]
};

const parkingoAwardSection = {
  display: true,
  title: emoji("1er Prix — EMSIstes INNOV'26 🏆"),
  subtitle: "PARKINGO — PLATEFORME INTELLIGENTE DE GESTION DE PARKING",
  description:
    "1er prix au concours d'innovation EMSIstes INNOV'26 à Marrakech pour Parkingo — une plateforme full-stack de parking intelligent avec Spring Boot, Flutter, Next.js, MySQL, Gemini AI, Mapbox, OCR de plaques et jumeau 3D du parking.",
  image: assets.parkingoAward,
  imageAlt: "Prix Parkingo — 1er place EMSIstes INNOV'26",
  footerLink: [
    {name: "Voir le projet", url: projectLinks.parkingo.github}
  ]
};

const technicalSkillsSection = {
  display: true,
  title: "Compétences",
  subtitle: "TECHNOLOGIES, OUTILS ET CONCEPTS QUE J'UTILISE",
  primaryFocus: "Développement Backend, DevOps, CI/CD",
  categories: technicalSkillCategories.map(category => ({
    name: ui.fr.technicalCategoryNames[category.nameKey],
    skills: category.skills
  }))
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Stagiaire Ingénieur Logiciel — Systèmes ERP (Odoo 17)",
      company: "AMANUS – Solutions Métiers & Transformation Digitale",
      companyBanner: "AMANUS",
      companyTagline: "Agence digitale & Odoo",
      companylogo: assets.amanusLogo,
      date: "Juin 2026 – Septembre 2026",
      desc: "Stage sur site axé sur des modules Odoo 17 ERP pour la restauration (Ventes, Stock, Achats).",
      descBullets: [
        "Contribution au développement de modules Odoo 17 en Python pour les workflows ERP restaurant",
        "Création et modification de plus de 10 vues XML et ajout de champs personnalisés via l'ORM Odoo",
        "Correction d'environ 20 tickets et tests des fonctionnalités dans un environnement Docker",
        "Collaboration avec une équipe de 5 développeurs via Git et GitHub"
      ]
    },
    {
      role: "Stagiaire Ingénieur Logiciel",
      company: "Sofitel Marrakech",
      companylogo: assets.sofitelLogo,
      date: "Juillet 2025 – Août 2025",
      desc: "Conception de Hotel Asset Recovery, une plateforme d'objets trouvés qui a digitalisé le process papier de l'hôtel et réduit la recherche d'un objet de ~15–20 minutes à moins d'une minute.",
      descBullets: [
        "Backend Spring Boot modulaire (Spring Modulith) avec événements Kafka, sécurité Keycloak OAuth2/OIDC et stockage photos MinIO",
        "Moteur de matching IA hybride (vision Ollama + embeddings texte, pgvector) combinant signaux visuels, sémantiques et de localisation",
        "Stack : Java 21, Spring Boot 4, Spring Security, Spring Data JPA, Angular 21, PostgreSQL, Docker Compose, Prometheus, Grafana, Tempo"
      ]
    },
    {
      role: "Stagiaire Développeur Logiciel",
      company: "Eureka Digital",
      companylogo: assets.eurekaLogo,
      date: "Juillet 2024 – Août 2024",
      desc: "Développement et maintenance d'applications web avec Python et Laravel en environnement Agile.",
      descBullets: [
        "APIs RESTful et services backend orientés performance et scalabilité",
        "Conception, optimisation et intégration de bases de données",
        "Collaboration en sprints Agile pour livrer des fonctionnalités prêtes pour la production"
      ]
    }
  ]
};

const bigProjects = {
  title: "Projets phares",
  subtitle:
    "SYSTÈMES FULL-STACK, PLATEFORMES IA ET BACKENDS DE NIVEAU PRODUCTION QUE J'AI CONÇUS",
  projects: [
    {
      projectName: "KickPro — Plateforme IA de Découverte de Talents Football",
      projectDesc:
        "Plateforme Flutter + Spring Boot (46 écrans, 127 APIs REST sécurisées, JWT/RBAC) reliant joueurs marocains et recruteurs. Verrouillage pessimiste pour les réservations, Kafka, chat WebSocket, coach IA Gemini, Docker/AWS (EC2/RDS), 32 tests JUnit.",
      footerLink: [
        {name: "Démo en ligne", url: projectLinks.kickpro.demo},
        {name: "GitHub", url: projectLinks.kickpro.github}
      ]
    },
    {
      projectName: "Parkingo — Plateforme de Parking Intelligent 🏆",
      projectDesc:
        "1er Prix — EMSIstes INNOV'26. Parking intelligent de bout en bout (Spring Boot, Next.js, Flutter, MySQL) avec JWT, paiements wallet, réservation conversationnelle Gemini, OCR de plaques, QR, cartes Mapbox et jumeau 3D.",
      footerLink: [{name: "GitHub", url: projectLinks.parkingo.github}]
    },
    {
      projectName: "Archlytics — Analyse d'Architecture Java",
      projectDesc:
        "CLI assistée par IA + GitHub Action pour codebases Java. Graphes de dépendances, détection de violations architecturales, scores de santé, diagrammes Mermaid, analyse de PR.",
      footerLink: [{name: "GitHub", url: projectLinks.archlytics.github}]
    },
    {
      projectName: "Restaurant Menu — Module Odoo 17 ERP",
      projectDesc:
        "Module Odoo sur mesure pour PME restauration : gestion de menu, intégration Ventes/Stock/Achats, assistant produits en masse, rapports PDF QWeb, API JSON, cron jobs et accès par rôles.",
      footerLink: [{name: "GitHub", url: projectLinks.odoo.github}]
    },
    {
      projectName: "Scan&Track — Gestion de Reçus par IA",
      projectDesc:
        "Suivi de dépenses full-stack avec pipeline OCR Tesseract, auto-catégorisation, backend FastAPI, frontend React 18 + TypeScript et tableau de bord Chart.js.",
      footerLink: [{name: "GitHub", url: projectLinks.scanTrack.github}]
    },
    {
      projectName: "EduVerify — Vérification de Documents Académiques",
      projectDesc:
        "App mobile Flutter + API Laravel pour l'inscription étudiante et la vérification de documents avec extraction OCR, pipeline multi-étapes et tableau de bord administratif.",
      footerLink: [{name: "GitHub", url: projectLinks.eduVerify.github}]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Licences & Certifications 🏆"),
  subtitle: "CERTIFICATIONS PROFESSIONNELLES ET APPRENTISSAGE CONTINU",
  achievementsCards: [
    {
      title: "IELTS Niveau C1",
      issuer: "IELTS Official",
      date: "Déc. 2024",
      skills: "Niveau CECR : C1 — Maîtrise avancée de l'anglais",
      featured: true
    },
    {
      title: "Agile Project Management",
      issuer: "Google",
      date: "Mars 2026",
      featured: true
    },
    {
      title: "Introduction to Machine Learning",
      issuer: "Duke University",
      date: "Nov. 2025",
      featured: true
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "Oct. 2025",
      featured: true
    },
    {
      title: "Software Design & Project Management",
      issuer: "The Hong Kong University of Science and Technology",
      date: "Avr. 2025",
      skills: "UML, Design Patterns",
      featured: true
    },
    {
      title: "Ensure Ethics in Your Daily Workplace Contributions",
      issuer: "CrossKnowledge",
      date: "Mai 2026"
    },
    {
      title: "Accept Varied Cultural Approaches to Work",
      issuer: "CrossKnowledge",
      date: "Mai 2026"
    },
    {
      title: "Introduction to Big Data",
      issuer:
        "University of California, San Diego — Rady School of Management",
      date: "Mars 2026"
    },
    {
      title: "Introduction to NoSQL Databases",
      issuer: "IBM",
      date: "Oct. 2025"
    },
    {
      title: "Using Python to Access Web Data",
      issuer: "University of Michigan",
      date: "Avr. 2025",
      skills: "Python"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "The Johns Hopkins University",
      date: "Avr. 2024",
      skills: "HTML, CSS, JavaScript"
    },
    {
      title: "Introduction à la programmation orientée objet (en C++)",
      issuer: "École Polytechnique Fédérale de Lausanne (EPFL)",
      date: "Déc. 2024",
      skills: "Structures de données, Algorithmes, POO"
    },
    {
      title: "Networking Basics",
      issuer: "Cisco",
      date: "Déc. 2024"
    },
    {
      title: "Basics of Cisco Networking",
      issuer: "LearnQuest",
      date: "Déc. 2024",
      skills: "Réseaux Cisco"
    },
    {
      title: "Interactivity with JavaScript",
      issuer: "University of Michigan",
      date: "Nov. 2024",
      skills: "JavaScript"
    },
    {
      title: "The Unix Workbench",
      issuer: "The Johns Hopkins University",
      date: "Nov. 2024"
    },
    {
      title: "The Arduino Platform and C Programming",
      issuer: "UC Irvine",
      date: "Mars 2024",
      skills: "Arduino, C"
    }
  ],
  display: true
};

const resumeSection = {
  title: "CV",
  subtitle: "N'hésitez pas à télécharger mon CV",
  display: true
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle:
    "Ouvert aux stages PFE 2027, collaborations et opportunités backend/DevOps. Échangeons !",
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
