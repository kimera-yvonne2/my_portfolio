export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: "Full-Stack" | "Embedded Systems" | "Databases" | "AI/ML";
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  details: string;
}

export const personalData = {
  name: "Kimera Yvonne",
  title: "Computer Scientist & Software Engineer",
  tagline: "Building resilient full-stack applications, database architectures, and embedded firmware solutions.",
  location: "Kampala, Uganda",
  github: "https://github.com/kimera-yvonne2",
  linkedin: "https://linkedin.com/in/kimerayvonne", // Replace with your exact handle
  email: "yvonnekimera2@gmail.com",
  bio: "Undergraduate Computer Science student at Makerere University with hands-on expertise spanning modern web engineering (React, Next.js, Django REST Framework), database management (PostgreSQL, MySQL), and embedded systems firmware (ESP32, FreeRTOS, C/C++).",
};

export const manualProjects: ProjectItem[] = [
  {
    id: "insync-iles",
    title: "InSync-ILES",
    description: "Integrated Internship Logging & Evaluation System with role-based dashboards for students, academic coordinators, and supervisors.",
    tags: ["React", "Tailwind CSS", "Django REST Framework", "PostgreSQL"],
    githubUrl: "https://github.com/kimera-yvonne2/InSync-ILES",
    featured: true,
    category: "Full-Stack",
  },
  {
    id: "sales-management-system",
    title: "Desktop Sales Management System",
    description: "Desktop software suite featuring GUI report generation and automated inventory tracking backed by a relational MySQL database.",
    tags: ["Python", "Tkinter", "MySQL"],
    githubUrl: "https://github.com/kimera-yvonne2",
    featured: true,
    category: "Databases",
  },
  {
    id: "esp32-telemetry",
    title: "ESP32 IoT Telemetry System",
    description: "Real-time microcontroller monitoring firmware using FreeRTOS software timers and I2C LCD telemetry displays.",
    tags: ["ESP32", "FreeRTOS", "C/C++", "ESP-IDF"],
    githubUrl: "https://github.com/kimera-yvonne2",
    featured: true,
    category: "Embedded Systems",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 — Present",
    role: "Full-Stack & Embedded Software Engineer",
    organization: "Independent & Academic Projects",
    description: "Architecting web services using Django REST Framework, React/Next.js frontends, Neon cloud PostgreSQL databases, and ESP32 hardware firmware.",
    technologies: ["React", "Next.js", "Django", "PostgreSQL", "ESP32", "Git"],
  },
];

export const educationData: EducationItem[] = [
  {
    period: "Ongoing",
    degree: "B.Sc. in Computer Science / Software Engineering",
    institution: "Makerere University",
    details: "Coursework in Data Structures & Algorithms, Systems Analysis, Operating Systems, Computer Networks, Artificial Intelligence, and Database Systems.",
  },
];

export const terminalCommands: Record<string, string> = {
  help: "Available commands: bio, skills, projects, education, contact, clear",
  bio: personalData.bio,
  skills: "Languages: Python, JavaScript, TypeScript, C, SQL. Frameworks: Django REST Framework, Next.js, React, Tailwind CSS. Hardware: ESP32, FreeRTOS.",
  projects: "Featured: InSync-ILES, Desktop Sales Management System, ESP32 IoT Telemetry System. Check the Projects section for full live sync!",
  education: "Makerere University — B.Sc. Computer Science / Software Engineering.",
  contact: `Email: ${personalData.email} | GitHub: ${personalData.github}`,
};
