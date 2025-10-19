import { useState } from "react";
import { motion } from "framer-motion";

const Careers = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedJob, setSelectedJob] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const jobs = [
    { title: "Full Stack Developer", desc: "Work on React, Node.js, Spring Boot projects." },
    { title: "Mobile App Developer", desc: "Develop cross-platform apps using React Native & Flutter." },
    { title: "UI/UX Designer", desc: "Design intuitive interfaces and user experiences." },
    { title: "AI/ML Engineer", desc: "Build intelligent systems and predictive models." },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    // TODO: API integration here
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          Join Our <span className="text-gray-800">Team</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore exciting career opportunities and internships at 99softech LLP. We're looking for talented, passionate, and innovative minds.
        </p>
      </div>

      {/* Job Openings */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            className={`p-6 rounded-2xl shadow-lg flex flex-col cursor-pointer transition-all ${
              selectedJob === job.title ? "border-2 border-blue-600" : "border border-gray-100"
            } hover:shadow-2xl`}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => {
              setSelectedJob(job.title);
              window.scrollTo({ top: 1000, behavior: "smooth" });
            }}
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{job.title}</h3>
            <p className="text-gray-600 flex-1">{job.desc}</p>
            <button
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold"
              onClick={() => setSelectedJob(job.title)}
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Application Form */}
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">Apply Now</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Position Applying For"
            value={selectedJob}
            onChange={(e) => setSelectedJob(e.target.value)}
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Why should we hire you?"
            rows={4}
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <div>
            <label className="block mb-2 font-medium text-gray-700">Upload Resume/CV</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full"
            />
            {selectedFile && <p className="mt-2 text-sm text-gray-500">Selected File: {selectedFile.name}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
          >
            Submit Application
          </button>
        </form>

        {/* Confirmation Modal */}
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              className="bg-white rounded-xl p-8 max-w-sm text-center shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h4 className="text-xl font-bold text-blue-700 mb-4">Application Submitted!</h4>
              <p className="text-gray-600 mb-6">Thank you for applying. We will review your application and get back to you soon.</p>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                onClick={() => setShowConfirmation(false)}
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Internship Section */}
      <motion.div
        className="max-w-3xl mx-auto bg-gray-50 p-6 mt-16 rounded-2xl shadow-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-blue-700 mb-4">Internships</h3>
        <p className="text-gray-600">
          We offer internship programs for students and freshers. Gain hands-on experience and mentorship while working on real projects.
        </p>
        <ul className="list-disc pl-6 mt-3 text-gray-600">
          <li>Software Development Intern</li>
          <li>UI/UX Design Intern</li>
          <li>AI/ML Research Intern</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Careers;
