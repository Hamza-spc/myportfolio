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
    "Étudiant en dernière année d'ingénierie logicielle à l'EMSI Marrakech, spécialisé dans la conception de systèmes full-stack scalables et d'applications IA — des apps mobiles aux architectures backend distribuées."
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
      "⚡ Concevoir et développer des API REST scalables et des backends microservices avec Spring Boot, Node.js et FastAPI"
    ),
    emoji(
      "⚡ Déployer des systèmes en production avec Docker, pipelines CI/CD, AWS et tests automatisés"
    ),
    emoji(
      "⚡ Développer des applications full-stack et mobiles avec React, Next.js, Flutter et des intégrations IA"
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
      subHeader:
        "Diplôme d'Ingénieur d'État en Développement Digital et Systèmes d'Information (Bac+5)",
      duration: "Octobre 2022 - Octobre 2027",
      desc: "Étudiant en dernière année spécialisé en développement full-stack, systèmes distribués et applications IA.",
      descBullets: [
        "Domaines : Développement Backend, DevOps, CI/CD et conception de systèmes scalables",
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
    "1er prix au concours d'innovation EMSIstes INNOV'26 à Marrakech pour Parkingo — une plateforme full-stack de parking intelligent avec Spring Boot, Flutter, Next.js, Gemini AI, WebRTC, visualisation 3D Three.js et reconnaissance de plaques OCR/ALPR.",
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
      role: "Stagiaire Ingénieur Logiciel — Full-Stack & Odoo ERP",
      company: "AMANUS - Agence digitale & Odoo",
      companylogo: assets.amanusLogo,
      desc: "Deux livrables principaux : KickPro (plateforme IA de talents football) et un module Odoo 17 ERP sur mesure pour la gestion de restaurant.",
      descBullets: [
        "KickPro : backend Spring Boot 3 (127+ endpoints REST), app Flutter multi-rôles, Kafka, Gemini AI, déploiement AWS",
        "Restaurant Menu : module Odoo 17 intégré Ventes/Stock/Achats, rapports PDF QWeb, API JSON",
        "DevOps : Docker Compose, CI/CD GitHub Actions, PostgreSQL, Redis"
      ]
    },
    {
      role: "Stagiaire Ingénieur Logiciel",
      company: "Sofitel Marrakech",
      companylogo: assets.sofitelLogo,
      desc: "Conception d'une application web Lost & Found full-stack pour digitaliser la gestion des objets trouvés et améliorer l'efficacité opérationnelle.",
      descBullets: [
        "Frontend React.js responsive et API REST Node.js/Express scalables avec MongoDB",
        "Similarité d'images TensorFlow.js pour le rapprochement IA des objets",
        "RBAC JWT, cache (~30% de gain de performance API), rate limiting et reverse proxy Nginx",
        "Conteneurisation Docker ; tests avec Jest et Supertest"
      ]
    },
    {
      role: "Stagiaire Développeur Logiciel",
      company: "Eureka Digital",
      companylogo: assets.eurekaLogo,
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
        "Plateforme full-stack reliant joueurs marocains, scouts et agents. Spring Boot 3 (127+ endpoints), app Flutter (46 écrans), notifications Kafka, Coach IA Gemini, déploiement AWS.",
      footerLink: [
        {name: "Démo en ligne", url: projectLinks.kickpro.demo},
        {name: "GitHub", url: projectLinks.kickpro.github}
      ]
    },
    {
      projectName: "Parkingo — Plateforme de Parking Intelligent 🏆",
      projectDesc:
        "1er Prix — EMSIstes INNOV'26. API Spring Boot, app mobile Flutter, dashboards Next.js, assistant Gemini AI, chat WebRTC, visualisation 3D Three.js, module OCR/ALPR.",
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
      title: "Software Engineering: Software Design and Project Management",
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
    "Ouvert aux stages, collaborations et opportunités backend/DevOps. Échangeons !",
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
