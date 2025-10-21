import { motion } from "framer-motion";

const About = () => {
  const sections = [
    {
      title: "Our Mission",
      content:
        "To empower businesses with innovative, scalable, and intelligent digital solutions that drive measurable success.",
    },
    {
      title: "Our Vision",
      content:
        "To become a global leader in full-stack, cloud, and AI-driven software solutions — transforming ideas into impactful realities.",
    },
    {
      title: "Our Values",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Integrity & Transparency</li>
          <li>Continuous Innovation</li>
          <li>Commitment to Client Success</li>
          <li>Excellence in Every Line of Code</li>
        </ul>
      ),
    },
    {
      title: "Our Team",
      content:
        "We’re a multidisciplinary team of engineers, designers, and visionaries — united by a shared passion for crafting technology that matters.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          About <span className="text-gray-800">99softech</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are a full-stack software development company delivering scalable,
          high-performance, and human-centered digital solutions across the globe.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              {section.title}
            </h2>
            <div className="text-gray-700 leading-relaxed text-base">
              {section.content}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
