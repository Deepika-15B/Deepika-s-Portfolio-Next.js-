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
    <section
      id="contact"
      className="section relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="container-app relative">
        <div className="text-center mb-14">
          <p className="chip inline-flex">Say hello</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">
            Contact{" "}
            <span className="gradient-text">Me</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Have an idea, opportunity, or feedback? I’m happy to chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
        
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              Let’s Connect
            </h3>

            <p className="text-muted">
              I’m always excited to discuss new opportunities, collaborate on projects,
              or just have a chat about technology.
            </p>

            <div className="space-y-4 text-slate-700">
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-purple-700" />
                <span className="text-muted">baladeepika0510@gmail.com</span>
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-700" />
                <span className="text-muted">+91 9489385754</span>
              </p>

              <p className="flex items-center gap-3">
                <FaLinkedin className="text-purple-700" />
                <span className="text-muted">linkedin.com/in/deepika0510</span>
              </p>

              <p className="flex items-center gap-3">
                <FaGithub className="text-purple-700" />
                <span className="text-muted">github.com/Deepika-15B</span>
              </p>
            </div>

            <div className="card p-6">
              <p className="text-sm text-muted">Quick note</p>
              <p className="mt-2 text-slate-900 font-medium">
                I reply fastest on email and LinkedIn.
              </p>
              <div className="mt-4 flex gap-3 flex-wrap">
                <a className="btn-secondary px-4 py-2 text-sm" href="#projects">
                  See work
                </a>
                <a className="btn-primary px-4 py-2 text-sm" href="#top">
                  Back to top
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form onSubmit={handleSubmit} className="card shadow-xl p-8 space-y-6 relative">
            {/* Success Message */}
            {success && (
              <div className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm">
                Message sent successfully!
              </div>
            )}

            {/* Name */}
            <div className="relative">
              <input
                name="name"
                type="text"
                required
                className="peer w-full border border-slate-300/80 rounded-xl p-3 pt-5 bg-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <label className="absolute left-3 top-2 text-slate-500 text-sm transition-all 
                peer-focus:text-purple-700 peer-focus:top-1 peer-focus:text-xs
                peer-valid:top-1 peer-valid:text-xs">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                name="email"
                type="email"
                required
                className="peer w-full border border-slate-300/80 rounded-xl p-3 pt-5 bg-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <label className="absolute left-3 top-2 text-slate-500 text-sm transition-all 
                peer-focus:text-purple-700 peer-focus:top-1 peer-focus:text-xs
                peer-valid:top-1 peer-valid:text-xs">
                Your Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows="4"
                required
                className="peer w-full border border-slate-300/80 rounded-xl p-3 pt-5 bg-white/40 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <label className="absolute left-3 top-2 text-slate-500 text-sm transition-all 
                peer-focus:text-purple-700 peer-focus:top-1 peer-focus:text-xs
                peer-valid:top-1 peer-valid:text-xs">
                Your Message
              </label>
            </div>

            {/* Button */}
            <button type="submit" disabled={loading} className="w-full btn-primary">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}