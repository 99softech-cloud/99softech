import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20"> {/* Offset for fixed Navbar */}
      {/* 🌟 Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Empowering Innovation with <span className="text-yellow-300">99softech LLP</span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            We craft high-quality software, web, and mobile solutions that scale with your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Get in Touch
            </button>
            <button
              onClick={() => navigate("/services")}
              className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* 💼 About Preview */}
      <section className="py-20 px-8 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            99softech LLP is a full-stack software development company that delivers secure,
            scalable, and smart digital products. Our mission is to help startups and enterprises
            transform ideas into technology-driven success stories.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* 🧠 Services Section */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          Our Core Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Web Development",
              desc: "Responsive and scalable websites using React, Node.js, and modern cloud stacks.",
            },
            {
              title: "Mobile App Development",
              desc: "Cross-platform apps using React Native & Flutter to reach your customers everywhere.",
            },
            {
              title: "Cloud Solutions",
              desc: "Secure and cost-effective cloud infrastructure using AWS, GCP, and Azure.",
            },
            {
              title: "AI & ML Solutions",
              desc: "Build intelligent systems with data-driven insights using Python and TensorFlow.",
            },
            {
              title: "Enterprise Software",
              desc: "Custom ERP, CRM, and business automation tools to streamline operations.",
            },
            {
              title: "Consulting & Integration",
              desc: "Get expert advice and seamless integration across your digital ecosystem.",
            },
          ].map((srv) => (
            <div
              key={srv.title}
              className="p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition bg-white text-left"
            >
              <h3 className="text-xl font-semibold mb-3 text-blue-700">{srv.title}</h3>
              <p className="text-gray-600">{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⚙️ Tech Stack */}
      <section className="bg-gray-100 py-20 px-8 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Technology Stack</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {[
            "React, Redux",
            "Node.js, Express",
            "Spring Boot",
            "MongoDB",
            "AWS",
            "Docker",
            "Kubernetes",
            "TypeScript",
            "Python",
            "Mobile (React Native, Flutter, Swift, Kotlin)",
          ].map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 bg-white rounded-full shadow-sm hover:shadow-md border border-gray-200 text-gray-700 font-medium hover:bg-blue-50 transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* 🗣️ Testimonials */}
      <section className="py-20 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Amit Verma",
              role: "CTO, RetailCo",
              feedback:
                "99softech built a robust retail management system that scaled perfectly with our growth. Amazing tech expertise!",
            },
            {
              name: "Priya Sharma",
              role: "Founder, EduGrow",
              feedback:
                "Their team helped us launch our edtech platform faster than we imagined — smooth, agile, and reliable.",
            },
            {
              name: "John Doe",
              role: "CEO, FinCloud",
              feedback:
                "Professionalism and technical brilliance — 99softech is our long-term tech partner now.",
            },
          ].map((client) => (
            <div
              key={client.name}
              className="p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg bg-gray-50"
            >
              <p className="text-gray-700 italic mb-4">“{client.feedback}”</p>
              <h4 className="font-semibold text-blue-700">{client.name}</h4>
              <p className="text-sm text-gray-500">{client.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Final CTA */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h2 className="text-4xl font-bold mb-4">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your next project or digital transformation journey.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Home;
