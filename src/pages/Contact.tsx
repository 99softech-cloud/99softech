import React, { useState } from "react";

const BASE_URL = "https://api.myvastuastro.com"; // Replace with your deployed Node.js API URL

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAlert(null);
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form[0] as HTMLInputElement).value,
      email: (form[1] as HTMLInputElement).value,
      mobile: (form[2] as HTMLInputElement).value,
      message: (form[3] as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch(`${BASE_URL}/contact/softech`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setAlert({ type: "success", message: "Message sent successfully!" });
        form.reset();
      } else {
        setAlert({ type: "error", message: data.error || "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setAlert({ type: "error", message: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 max-w-6xl mx-auto space-y-12">
      {/* ✉️ Contact Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          We'd love to hear from you! Whether you have a question, project idea, or just want to say hello, reach out.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-10">
        {/* 📝 Contact Form */}
        <form className="space-y-4 bg-white p-8 rounded-2xl shadow-md" onSubmit={handleSubmit}>
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
            type="number"
            placeholder="Mobile Number"
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            required
            className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* ✅ Show loading or button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* ✅ Alert messages */}
          {alert && (
            <p
              className={`mt-3 text-center font-medium ${alert.type === "success" ? "text-green-600" : "text-red-600"
                }`}
            >
              {alert.message}
            </p>
          )}
        </form>

        {/* 📍 Contact Info & Map */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Contact Details</h3>
            <p className="text-gray-600 mb-2">📍 99softech LLP, Greater Noida, India</p>
            <p className="text-gray-600 mb-2">📞 +91 78179 76567</p>
            <p className="text-gray-600 mb-2">✉️ 99softech@gmail.com</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/in/softech-llp-4b1071390/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Twitter
              </a>
              <a href="#"  target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                Facebook
              </a>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.8835560107605!2d77.60138157564803!3d28.392584794936145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf28e7196019%3A0x5daece92d19dc50f!2sDalelgarh%2C%20Uttar%20Pradesh%20203202!5e0!3m2!1sen!2sin!4v1760896414515!5m2!1sen!2sin"
            className="w-full h-64 rounded-2xl shadow-md"
            allowFullScreen
            loading="lazy"
            title="99softech Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
