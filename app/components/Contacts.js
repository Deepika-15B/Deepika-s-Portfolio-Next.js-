"use client";

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {

  // ✅ ADD THIS FUNCTION HERE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-purple-50 to-gray-50 py-24 px-6 md:px-12"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-14">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Let’s Connect
          </h3>

          <p className="text-gray-600">
            I'm always excited to discuss new opportunities, collaborate on projects, or just have a chat about technology and development.
          </p>

          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-purple-600" />
              baladeepika0510@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-purple-600" />
              +91 9489385754
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin className="text-purple-600" />
              linkedin.com/in/deepika0510
            </p>

            <p className="flex items-center gap-3">
              <FaGithub className="text-purple-600" />
              github.com/Deepika-15B
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        {/* ✅ CONNECT HANDLESUBMIT HERE */}
        <form
          onSubmit={handleSubmit}
          className="relative bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-xl space-y-6"
        >
          
          {/* Name */}
          <div className="relative">
            <input
              name="name"   // ✅ IMPORTANT
              type="text"
              required
              className="peer w-full border border-gray-300 rounded-lg p-3 pt-5 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-focus:text-purple-600 peer-focus:top-1 peer-focus:text-xs
              peer-valid:top-1 peer-valid:text-xs">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              name="email"   // ✅ IMPORTANT
              type="email"
              required
              className="peer w-full border border-gray-300 rounded-lg p-3 pt-5 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-focus:text-purple-600 peer-focus:top-1 peer-focus:text-xs
              peer-valid:top-1 peer-valid:text-xs">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"   // ✅ IMPORTANT
              rows="4"
              required
              className="peer w-full border border-gray-300 rounded-lg p-3 pt-5 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400"
            ></textarea>
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all 
              peer-focus:text-purple-600 peer-focus:top-1 peer-focus:text-xs
              peer-valid:top-1 peer-valid:text-xs">
              Your Message
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300 group"
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 bg-white opacity-10 group-hover:opacity-20 transition"></span>
          </button>
        </form>
      </div>
    </section>
  );
}