import { motion } from "framer-motion";

const Portfolio = () => {
 const projects = [
  {
    name: "Smart Retail System",
    desc: "AI-powered retail management solution with inventory optimization and sales analytics.",
    tech: ["React", "Node.js", "Python", "AI/ML"],
    image: "/images/retail-system.png",
  },
  {
    name: "Cloud CRM",
    desc: "Customer relationship management system hosted on AWS with secure, scalable architecture.",
    tech: ["React", "AWS", "Node.js", "MongoDB"],
    image: "/images/cloud-crm.png",
  },
  {
    name: "E-commerce Platform",
    desc: "Scalable shopping solution with integrated payment gateway and real-time analytics.",
    tech: ["React", "Node.js", "Stripe API", "MongoDB"],
    image: "/images/ecommerce-platform.png",
  },
  {
    name: "Health Tracker App",
    desc: "Mobile app for tracking fitness, nutrition, and wellness metrics.",
    tech: ["React Native", "Firebase", "Redux"],
    image: "/images/health-tracker.png",
  },
  {
    name: "Enterprise ERP",
    desc: "Custom ERP solution for manufacturing and logistics businesses.",
    tech: ["Spring Boot", "React", "PostgreSQL"],
    image: "/images/erp-system.png",
  },
  {
    name: "AI Chatbot",
    desc: "Intelligent chatbot for customer support using NLP and machine learning.",
    tech: ["Python", "TensorFlow", "Dialogflow"],
    image: "/images/ai-chatbot.png",
  },
  // ✅ Java Spring Projects
  {
    name: "Bank Loan Management System",
    desc: "Spring Boot-based system to automate loan processing, approvals, and customer tracking.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    image: "/images/bank-loan-system.png",
  },
  {
    name: "Inventory Management System",
    desc: "Robust inventory tracking application with REST APIs and reporting dashboard.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
    image: "/images/inventory-system.png",
  },
  {
    name: "Employee Management Portal",
    desc: "Spring Boot + React application for HR and employee management, attendance, and payroll.",
    tech: ["Java", "Spring Boot", "React", "MySQL"],
    image: "/images/employee-portal.png",
  },
  {
    name: "Online Banking Platform",
    desc: "Secure online banking solution with transaction management, account dashboard, and notifications.",
    tech: ["Java", "Spring Boot", "Angular", "Oracle DB"],
    image: "/images/online-banking.png",
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
