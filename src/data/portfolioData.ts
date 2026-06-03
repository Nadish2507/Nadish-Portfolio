import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Nadish R",
  tagline: "Full Stack Developer | AI & ML Enthusiast | MERN Stack Developer | Problem Solver",
  about: "I am a passionate Full Stack Developer and AI/ML enthusiast currently pursuing my B.E. at Sri Eshwar College of Engineering. I enjoy building scalable web applications, intelligent systems, and solving complex problems using modern technologies. My interests include Full Stack Development, Machine Learning, Cloud Computing, and Data Structures & Algorithms.",
  education: [
    {
      institution: "Sri Eshwar College of Engineering",
      degree: "B.E. (Bachelor of Engineering)",
      period: "2024 - 2028",
      score: "CGPA: 7.23"
    },
    {
      institution: "RR International School",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2023 - 2024",
      score: "74.8%"
    },
    {
      institution: "RR International School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2021 - 2022",
      score: "84.6%"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Java", level: 75 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "ReactJS", level: 88 },
        { name: "NextJS", level: 80 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Redux", level: 82 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "NodeJS", level: 85 },
        { name: "ExpressJS", level: 87 },
        { name: "Spring Boot", level: 70 },
        { name: "FastAPI", level: 75 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 80 },
        { name: "MySQL", level: 82 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        { name: "Postman", level: 85 },
        { name: "GitHub Actions", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "Render", level: 80 }
      ]
    },
    {
      category: "Core Concepts",
      skills: [
        { name: "Data Structures & Algorithms", level: 85 },
        { name: "OOPs", level: 88 },
        { name: "DBMS", level: 82 }
      ]
    }
  ],
  projects: [
    {
      id: "automated-attendance-system",
      title: "Automated Attendance System For Rural Schools",
      techStack: ["Python", "OpenCV", "FaceNet", "YOLOv8", "FastAPI", "React", "MySQL"],
      description: "Designed and developed an intelligent attendance management system utilizing YOLOv8 for real-time face detection and FaceNet embeddings for accurate identity recognition. Built backend services for attendance processing, user enrollment, and attendance analytics. Developed an interactive dashboard for attendance monitoring and report generation.",
      features: [
        "Real-time Face Detection",
        "Face Recognition & Embedding Extraction",
        "Attendance Analytics & Trends",
        "Report Generation (Excel/PDF)",
        "Admin Management Dashboard"
      ],
      githubUrl: "https://github.com/Nadish250/automated-attendance",
      liveUrl: "#"
    },
    {
      id: "hospital-management-system",
      title: "Hospital Management System",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Redux"],
      description: "Developed a comprehensive hospital management system supporting role-based access for administrators, doctors, and patients. Implemented appointment booking, patient records, doctor scheduling, and administrative management features with JWT authentication.",
      features: [
        "Appointment Management & Booking",
        "Doctor Scheduling & Timeslots",
        "Patient Health Records Portal",
        "Secure JWT Authentication",
        "Role-Based Access Control (Admin/Doctor/Patient)"
      ],
      githubUrl: "https://github.com/Nadish250/hospital-management",
      liveUrl: "#"
    },
    {
      id: "student-collaboration-system",
      title: "Student Collaboration System",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "JWT"],
      description: "Built a collaborative platform for students to form teams, assign tasks, track progress, communicate in real time, and share documents for academic projects.",
      features: [
        "Team Formation & Invites",
        "Real-Time Chat & Discussion Rooms",
        "Task Management & Kanban Board",
        "Project Progress Tracking",
        "Document & File Sharing"
      ],
      githubUrl: "https://github.com/Nadish250/student-collaboration",
      liveUrl: "#"
    }
  ],
  achievements: [
    {
      title: "Finalist in Gamathon-25",
      organization: "Sri Eshwar College of Engineering",
      year: "2025",
      description: "Competed and reached the final round in the campus game-building Hackathon (Gamathon-25), demonstrating rapid design and programming capability."
    }
  ],
  certifications: [
    {
      title: "Big Cloud Computing",
      issuer: "NPTEL",
      link: "#"
    },
    {
      title: "Advanced Data Structures and Algorithms Using C/C++",
      issuer: "Udemy",
      link: "#"
    },
    {
      title: "Design Thinking",
      issuer: "NPTEL",
      link: "#"
    }
  ],
  codingProfiles: [
    {
      platform: "LeetCode",
      metrics: "50+ Problems Solved",
      url: "https://leetcode.com/u/Nadish_R/"
    },
    {
      platform: "SkillRack",
      metrics: "600+ Problems Solved",
      url: "https://www.skillrack.com/profile/nadishr"
    }
  ],
    socials: {
     github: "https://github.com/Nadish2507",
     linkedin: "https://www.linkedin.com/in/nadish-r-454a57381?utm_source=share_via&utm_content=profile&utm_medium=member_android",
     email: "mailto:nadishr25@gmail.com",
     leetcode: "https://leetcode.com/u/Nadish_R/",
     skillrack: "https://www.skillrack.com/profile/nadishr"
   }
};
