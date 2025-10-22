import { motion } from "framer-motion";
import employeePortal from "../assets/employee_portal.png";
import myvastuastro from "../assets/myvastuastro.png";
import myvastuastrologer from "../assets/myvastuastrologer.png";
import vastudevayah from "../assets/vastudevayah.png";
import retails_system from "../assets/retails_system.png";
import cloud_crm from "../assets/cloud_crm.png";
import ecommerce from "../assets/ecommerce.png";
import health from "../assets/health.png";
import erp_system from "../assets/erp_system.png";
import ai_chatbot from "../assets/ai_chatbot.png";
import loan_system from "../assets/loan_system.png";
import inventory_system from "../assets/inventory_system.png";
import softech from "../assets/logo.png";


const Portfolio = () => {
 const projects = [
   {
    name: "MyVastuAstro",
    desc: "Vastu solution for companies with compass-based direction checks and expert query support.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: myvastuastro,
  },
  {
    name: "Employee Management Portal",
    desc: "Spring Boot + React application for HR and employee management, attendance, and payroll.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    image: employeePortal,
  },
  {
    name: "MyVastuAstrologer",
    desc: "Connect with professional astrologers, manage profiles, and earn through chat and call services.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: myvastuastrologer,
  },
  {
    name: "VastuDevayah",
    desc: "Vastu solution for companies with compass-based direction checks and expert query support.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: vastudevayah
  },
  {
    name: "Smart Retail System",
    desc: "AI-powered retail management solution with inventory optimization and sales analytics.",
    tech: ["React", "Node.js", "Python", "AI/ML"],
    image: retails_system
  },
  {
    name: "Cloud CRM",
    desc: "Customer relationship management system hosted on AWS with secure, scalable architecture.",
    tech: ["React", "AWS", "Node.js", "MongoDB"],
    image: cloud_crm
  },
  {
    name: "E-commerce Platform",
    desc: "Scalable shopping solution with integrated payment gateway and real-time analytics.",
    tech: ["React", "Node.js", "Stripe API", "MongoDB"],
    image: ecommerce
  },
  {
    name: "Health Tracker App",
    desc: "Mobile app for tracking fitness, nutrition, and wellness metrics.",
    tech: ["React Native", "Firebase", "Redux"],
    image: health
  },
  {
    name: "Enterprise ERP",
    desc: "Custom ERP solution for manufacturing and logistics businesses.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    image: erp_system
  },
  {
    name: "AI Chatbot",
    desc: "Intelligent chatbot for customer support using NLP and machine learning.",
    tech: ["Python", "TensorFlow", "Dialogflow"],
    image: ai_chatbot
  },
  // ✅ Java Spring Projects
  {
    name: "Loan Management System",
    desc: "Spring Boot-based system to automate loan processing, approvals, and customer tracking.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: loan_system
  },
  {
    name: "Inventory Management System",
    desc: "Robust inventory tracking application with REST APIs and reporting dashboard.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    image: inventory_system
  },
   {
    name: "99softech",
    desc: "Full-stack software company specializing in web, mobile, backend, and DevOps.",
    tech: ["Nodejs", "React", "MongoDB", "TailwindCSS"],
    image: softech
  },
  
];


  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          Our <span className="text-gray-800">Projects</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We build innovative solutions that empower businesses and transform ideas into reality.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4 text-sm flex-1">{project.desc}</p>
              
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
