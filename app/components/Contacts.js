"use client";

import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-purple-50 to-gray-50 py-24 px-6 md:px-12"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-14">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Get in Touch
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
              https://www.linkedin.com/in/deepika0510
            </p>

            <p className="flex items-center gap-3">
              <FaGithub className="text-purple-600" />
              https://github.com/Deepika-15B
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <form className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}