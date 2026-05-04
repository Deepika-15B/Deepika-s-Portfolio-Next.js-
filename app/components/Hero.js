"use client";

import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-28 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          
          {/* Tag */}
          <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
              B.Tech IT Student
            </span>
            <span className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full">
              Frontend Developer
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight text-gray-900">
            Building clean and modern{" "}
            <span className="text-blue-600">web experiences</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Hi, I’m <span className="font-semibold text-gray-900">Deepika</span>.  
            I design and develop responsive web applications with a focus on
            simplicity, performance, and great user experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
            
            <a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border px-6 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white border rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-sm">
            
            {/* Profile Info */}
            <div className="text-center">
              <div className="h-16 w-16 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
                D
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Deepika
              </h3>

              <p className="text-sm text-gray-500">
                Frontend Developer
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6 grid grid-cols-4 gap-4 justify-items-center">
              
              <a
                href="https://www.linkedin.com/in/deepika0510"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-lg border text-blue-600 hover:bg-blue-50 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/Deepika-15B"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-lg border text-gray-800 hover:bg-gray-100 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://leetcode.com/u/deepika_0510/"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-lg border text-amber-500 hover:bg-amber-50 transition"
              >
                <SiLeetcode size={20} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-lg border text-green-600 hover:bg-green-50 transition"
              >
                <FaFileAlt size={20} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}