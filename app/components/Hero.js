"use client";

import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* 🔥 Background Blobs */}
      <div className="absolute w-72 h-72 bg-purple-400 opacity-20 blur-3xl top-10 left-10 rounded-full"></div>
      <div className="absolute w-72 h-72 bg-blue-400 opacity-20 blur-3xl bottom-10 right-10 rounded-full"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          {/* Tag */}
          <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            🎓 B.Tech IT Student
          </span>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Hello, I'm{" "}
            <span className="gradient-text">Deepika</span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl mt-4 text-gray-600">
            Frontend Developer
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-500 leading-relaxed max-w-xl">
            Passionate about technology and innovation. Currently pursuing 
            B.Tech in IT with strong skills in building modern, scalable, 
            and user-friendly web applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white hover-lift glow"
            >
              🚀 View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            >
              ✉️ Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - ICONS (Glass Style) */}
        <div className="flex justify-center gap-6 flex-wrap">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/deepika0510"
            target="_blank"
          >
            <div className="glass w-16 h-16 flex items-center justify-center text-blue-600 hover-lift">
              <FaLinkedin size={26} />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Deepika-15B"
            target="_blank"
          >
            <div className="glass w-16 h-16 flex items-center justify-center text-gray-800 hover-lift">
              <FaGithub size={26} />
            </div>
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/deepika_0510/"
            target="_blank"
          >
            <div className="glass w-16 h-16 flex items-center justify-center text-yellow-500 hover-lift">
              <SiLeetcode size={26} />
            </div>
          </a>

          {/* Resume */}
          <a href="/resume.pdf" target="_blank">
            <div className="glass w-16 h-16 flex items-center justify-center text-green-600 hover-lift">
              <FaFileAlt size={26} />
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}