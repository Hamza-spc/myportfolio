import splashAnimation from "../assets/lottie/splashAnimation";

export const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

export const illustration = {
  animated: true
};

export const socialMediaLinks = {
  github: "https://github.com/Hamza-spc",
  linkedin: "https://www.linkedin.com/in/hamza-simou-88977a25b/",
  gmail: "hamza.2simou@gmail.com",
  display: true
};

export const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

export const openSource = {
  showGithubProfile: "true",
  display: true
};

export const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

export const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false
};

export const podcastSection = {
  display: false,
  podcast: []
};

export const twitterDetails = {
  userName: "",
  display: false
};

export const isHireable = true;

export const softwareSkills = [
  {skillName: "Java", deviconClassname: "devicon-java-plain colored"},
  {skillName: "Python", deviconClassname: "devicon-python-plain colored"},
  {
    skillName: "JavaScript",
    deviconClassname: "devicon-javascript-plain colored"
  },
  {
    skillName: "TypeScript",
    deviconClassname: "devicon-typescript-plain colored"
  },
  {skillName: "Spring", deviconClassname: "devicon-spring-plain colored"},
  {skillName: "Angular", deviconClassname: "devicon-angularjs-plain colored"},
  {skillName: "React", deviconClassname: "devicon-react-original colored"},
  {skillName: "Node.js", deviconClassname: "devicon-nodejs-plain colored"},
  {skillName: "Docker", deviconClassname: "devicon-docker-plain colored"},
  {
    skillName: "Kubernetes",
    deviconClassname: "devicon-kubernetes-plain colored"
  },
  {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"},
  {
    skillName: "PostgreSQL",
    deviconClassname: "devicon-postgresql-plain colored"
  },
  {skillName: "Git", deviconClassname: "devicon-git-plain colored"},
  {skillName: "Linux", deviconClassname: "devicon-linux-plain colored"}
];

export const technicalSkillCategories = [
  {
    nameKey: "languages",
    skills: ["Java (17/21)", "Python", "JavaScript", "TypeScript"]
  },
  {
    nameKey: "backend",
    skills: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "REST APIs",
      "Microservices",
      "Node.js (Express.js)"
    ]
  },
  {
    nameKey: "frontend",
    skills: ["Angular 21", "Flutter", "React", "Next.js"]
  },
  {
    nameKey: "databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL Server"]
  },
  {
    nameKey: "devops",
    skills: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "GitHub Actions",
      "CI/CD",
      "Linux"
    ]
  },
  {
    nameKey: "security",
    skills: ["Keycloak", "OAuth2", "JWT"]
  },
  {
    nameKey: "tools",
    skills: ["Git", "GitHub", "GitLab", "Maven", "Jira", "Nexus"]
  },
  {
    nameKey: "concepts",
    skills: ["Agile/Scrum", "UML", "OOP", "Design Patterns"]
  }
];

export const assets = {
  profileImage: require("../assets/images/myphoto.png"),
  emsiLogo: require("../assets/images/emsi-logo.png"),
  parkingoAward: require("../assets/images/parkingo-award.jpeg"),
  amanusLogo: require("../assets/images/amanus-logo.webp"),
  sofitelLogo: require("../assets/images/sofitel-logo.png"),
  eurekaLogo: require("../assets/images/eureka_logo.jpeg")
};

export const projectLinks = {
  kickpro: {
    demo: "https://kick-pro.vercel.app",
    github: "https://github.com/Hamza-spc/KickPro"
  },
  parkingo: {github: "https://github.com/Hamza-spc/smart-parking"},
  archlytics: {github: "https://github.com/Hamza-spc/Archlytics"},
  odoo: {github: "https://github.com/Hamza-spc/odoo-restaurant"},
  scanTrack: {github: "https://github.com/Hamza-spc/receipt_management"},
  eduVerify: {
    github: "https://github.com/Hamza-spc/EduVerify-SchoolSystem-MobileApp"
  }
};
