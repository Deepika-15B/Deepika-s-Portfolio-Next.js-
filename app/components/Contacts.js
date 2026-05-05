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
    <section id="contact" className="py-20 px-4 sm:px-6 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="container-app relative">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="chip inline-flex">Say hello</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4">
            Contact Me
          </h2>
          <p className="mt-4 text-muted">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-gray-900">
              Get in touch
            </h3>

            <p className="text-muted">
              I am open to discussing new projects, ideas, or opportunities.
            </p>

            <div className="space-y-3 text-gray-700 break-words">
              <a className="flex items-center gap-3 hover:underline" href="mailto:baladeepika0510@gmail.com">
                <FaEnvelope /> <span className="text-muted">baladeepika0510@gmail.com</span>
              </a>
              <a className="flex items-center gap-3 hover:underline" href="tel:+919489385754">
                <FaPhoneAlt /> <span className="text-muted">+91 9489385754</span>
              </a>
              <a className="flex items-center gap-3 hover:underline" href="https://www.linkedin.com/in/deepika0510" target="_blank" rel="noreferrer">
                <FaLinkedin /> <span className="text-muted">linkedin.com/in/deepika0510</span>
              </a>
              <a className="flex items-center gap-3 hover:underline" href="https://github.com/Deepika-15B" target="_blank" rel="noreferrer">
                <FaGithub /> <span className="text-muted">github.com/Deepika-15B</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form
            onSubmit={handleSubmit}
            className="card shadow-xl p-6 sm:p-8 space-y-4"
          >
            {success && (
              <p className="text-emerald-700 text-sm">
                Message sent successfully!
              </p>
            )}

            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-slate-300/80 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/40"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-slate-300/80 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/40"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border border-slate-300/80 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/40"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}