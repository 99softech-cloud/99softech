import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Careers = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedJob, setSelectedJob] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    mobile: "",
    message: "",
  });

  const BASE_URL = "https://api.myvastuastro.com";

  // ✅ Fetch Available Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      setLoadingJobs(true);
      try {
        const res = await axios.get(`${BASE_URL}/job/softech/available`);
        setJobs(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  // ✅ File Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) setSelectedFile(e.target.files[0]);
  };

  // ✅ Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Submit Application
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("position", selectedJob || formData.position);
      data.append("mobile", formData.mobile);
      if (selectedFile) data.append("file", selectedFile);

      const res = await axios.post(`${BASE_URL}/job/softech`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200 || res.status === 201 || res.data?.status === "success") {
        setShowConfirmation(true);
        setFormData({ name: "", email: "", position: "", mobile: "", message: "" });
        setSelectedFile(null);
      }
    } catch (err) {
      console.error("Error submitting:", err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20 space-y-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-4">
          Join Our <span className="text-gray-800">Team</span>
        </h2>
        <p className="text-lg text-gray-600">
          Explore exciting opportunities at 99softech LLP.
        </p>
      </div>

      {/* Job Openings */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {loadingJobs ? (
          <div className="col-span-4 text-center text-gray-500">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="col-span-4 text-center text-gray-500">No jobs available currently.</div>
        ) : (
          jobs.map((job) => (
            <motion.div
              key={job._id}
              className={`p-6 rounded-2xl shadow-lg flex flex-col cursor-pointer ${
                selectedJob === job.title ? "border-2 border-blue-600" : "border border-gray-100"
              }`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedJob(job.title)}
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
          ))
        )}
      </div>

      {/* Application Form */}
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">Apply Now</h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full border p-3 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full border p-3 rounded" />
          <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile" required className="w-full border p-3 rounded" />
          <input name="position" value={selectedJob || formData.position} onChange={handleChange} placeholder="Position" required className="w-full border p-3 rounded" />
          <div>
            <label className="block mb-2 font-medium">Upload Resume/CV</label>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
          </div>
          <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            {submitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>

        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-lg" initial={{ scale: 0.5 }} animate={{ scale: 1 }}>
              <h4 className="text-xl font-bold text-blue-700 mb-4">Application Submitted!</h4>
              <p className="text-gray-600 mb-6">Thank you for applying. We’ll get back to you soon.</p>
              <button onClick={() => setShowConfirmation(false)} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Careers;
