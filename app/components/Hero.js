"use client";

import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" />

      {/* 🔥 Background Blobs */}
      <div className="floaty absolute w-[22rem] h-[22rem] bg-purple-500/20 blur-3xl top-10 left-10 rounded-full" />
      <div className="floaty2 absolute w-[24rem] h-[24rem] bg-blue-500/20 blur-3xl -bottom-10 right-0 rounded-full" />

      <div className="container-app w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          {/* Tag */}
          <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
            <span className="chip">B.Tech IT Student</span>
            <span className="chip">Frontend Developer</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-semibold mt-6 leading-[1.05] tracking-tight">
            Designing delightful{" "}
            <span className="gradient-text">web experiences</span> with Next.js
          </h1>

          {/* Description */}
          <p className="mt-6 text-muted leading-relaxed max-w-xl mx-auto md:mx-0">
            Hi, I’m <span className="font-semibold text-slate-900">Deepika</span>. I
            build modern, responsive interfaces with clean UI, smooth interactions,
            and performance in mind.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">

            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <div className="card card-hover p-6 md:p-8 w-full max-w-md">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-muted"></p>
                <p className="text-lg font-semibold text-slate-900">
                 
                </p>
              </div>
              <div className="h-12 w-12 rounded-2xl bg-white/70 border border-slate-200/80 shadow-sm grid place-items-center">
                
              </div>
            </div>

            <div className="mt-8 grid grid-cols-4 gap-4">
              <a
                href="https://www.linkedin.com/in/deepika0510"
                target="_blank"
                rel="noreferrer"
                className="glass h-14 w-14 flex items-center justify-center text-blue-600 hover-lift"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>

              <a
                href="https://github.com/Deepika-15B"
                target="_blank"
                rel="noreferrer"
                className="glass h-14 w-14 flex items-center justify-center text-slate-900 hover-lift"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>

              <a
                href="https://leetcode.com/u/deepika_0510/"
                target="_blank"
                rel="noreferrer"
                className="glass h-14 w-14 flex items-center justify-center text-amber-500 hover-lift"
                aria-label="LeetCode"
              >
                <SiLeetcode size={24} />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="glass h-14 w-14 flex items-center justify-center text-emerald-600 hover-lift"
                aria-label="Resume"
              >
                <FaFileAlt size={24} />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}