const Contact = () => (
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
      <form className="space-y-4 bg-white p-8 rounded-2xl shadow-md" onSubmit={(e) => e.preventDefault()}>
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
        <textarea
          placeholder="Your Message"
          rows={5}
          required
          className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* 📍 Contact Info & Map */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Contact Details</h3>
          <p className="text-gray-600 mb-2">📍 99softech LLP, Pune, India</p>
          <p className="text-gray-600 mb-2">📞 +91 99999 99999</p>
          <p className="text-gray-600 mb-2">✉️ contact@99softech.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
          </div>
        </div>

        <iframe
          className="w-full h-64 rounded-2xl shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.793720347812!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630cf3a9a55%3A0x9cb302d5ddc1b66!2sIndia!5e0!3m2!1sen!2sin!4v1684000000000"
          allowFullScreen
          loading="lazy"
          title="99softech Location"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Contact;
