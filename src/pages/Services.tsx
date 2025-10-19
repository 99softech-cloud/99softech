import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Globe,
  Cloud,
  BrainCircuit,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-blue-600 w-10 h-10 mb-4" />,
      title: "Custom Software Development",
      description:
        "We design and develop scalable, secure, and high-performance software tailored to your business needs.",
    },
    {
      icon: <Smartphone className="text-blue-600 w-10 h-10 mb-4" />,
      title: "Mobile App Development",
      description:
        "Building user-friendly, high-performance mobile apps that drive engagement across Android and iOS platforms.",
    },
    {
      icon: <Globe className="text-blue-600 w-10 h-10 mb-4" />,
      title: "Web Development",
      description:
        "Modern, responsive, and high-performing web applications that align with your brand and goals.",
    },
    {
      icon: <Cloud className="text-blue-600 w-10 h-10 mb-4" />,
      title: "Cloud Solutions",
      description:
        "Empowering your business with secure, scalable cloud infrastructure and DevOps automation.",
    },
    {
      icon: <BrainCircuit className="text-blue-600 w-10 h-10 mb-4" />,
      title: "AI & Machine Learning",
      description:
        "Integrating intelligent systems to automate processes, analyze data, and enhance decision-making.",
    },
    {
      icon: <Users className="text-blue-600 w-10 h-10 mb-4" />,
      title: "Consulting Services",
      description:
        "Strategic technology consulting to optimize operations and accelerate your digital transformation journey.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          Our <span className="text-gray-800">Services</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We deliver full-stack solutions designed to scale your business, enhance performance, and drive innovation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col items-start text-left"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
