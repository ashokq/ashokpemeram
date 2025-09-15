import jobPortalImage from "@/assets/project-job-portal.jpg";
import kanbanImage from "@/assets/project-kanban.jpg";
import agencyImage from "@/assets/project-agency.jpg";
import studentAppImage from "@/assets/project-student-app.jpg";
import ecommerceApiImage from "@/assets/project-ecommerce-api.jpg";
import portfolioTemplateImage from "@/assets/project-portfolio-template.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Frontend" | "Backend" | "Full-Stack" | "WordPress" | "Personal";
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Synxa Job Portal",
    description: "A comprehensive full-stack job portal with admin panel, content management, analytics, and lead generation. Features secure authentication and role-based access control.",
    category: "Full-Stack",
    image: jobPortalImage,
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "RESTful APIs"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Project Management System (Kanban Board)",
    description: "Complete MERN stack project and task management system with user authentication, project creation, task assignment, status tracking, and intuitive dashboard.",
    category: "Full-Stack",
    image: kanbanImage,
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Socket.io"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "64 Frames – Company Landing Website",
    description: "Sleek portfolio website for a creative agency with performance optimization, clean animations, and SEO best practices. Built with modern web technologies.",
    category: "Frontend",
    image: agencyImage,
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "SEO Optimization"],
    liveUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Student Database Management App",
    description: "Real-time mobile application for managing student data and academic records with Firebase integration and push notifications.",
    category: "Personal",
    image: studentAppImage,
    techStack: ["Flutter", "Firebase", "Push Notifications", "Real-time Database"],
    githubUrl: "#",
  },
  {
    id: "5",
    title: "E-Commerce Backend API",
    description: "Scalable REST API for e-commerce platform with user management, product catalog, order processing, and payment integration.",
    category: "Backend",
    image: ecommerceApiImage,
    techStack: ["Node.js", "Express.js", "MongoDB", "Stripe API", "JWT"],
    githubUrl: "#",
  },
  {
    id: "6",
    title: "Portfolio Website Template",
    description: "Modern, responsive portfolio website template with dark/light mode, animations, and optimized performance.",
    category: "Frontend",
    image: portfolioTemplateImage,
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
    liveUrl: "#",
  },
];