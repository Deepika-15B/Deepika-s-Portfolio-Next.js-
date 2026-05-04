"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

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
        setSuccess(true);
        e.target.reset();
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Contact Me
          </h2>
          <p className="mt-4 text-gray-600">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-gray-900">
              Get in touch
            </h3>

            <p className="text-gray-600">
              I am open to discussing new projects, ideas, or opportunities.
            </p>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-3">
                <FaEnvelope /> baladeepika0510@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt /> +91 9489385754
              </p>
              <p className="flex items-center gap-3">
                <FaLinkedin /> linkedin.com/in/deepika0510
              </p>
              <p className="flex items-center gap-3">
                <FaGithub /> github.com/Deepika-15B
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            onSubmit={handleSubmit}
            className="border rounded-xl p-6 space-y-4 shadow-sm"
          >
            {success && (
              <p className="text-green-600 text-sm">
                Message sent successfully!
              </p>
            )}

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}