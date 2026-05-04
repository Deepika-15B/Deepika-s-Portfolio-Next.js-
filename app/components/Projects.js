"use client";

import { FaBrain, FaCarCrash, FaGithub } from "react-icons/fa";
import { FaBook, FaBus } from "react-icons/fa6";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Interactive Digital Hearing Analyzer",
      description:
        "A smart system that analyzes hearing ability using digital signals and provides insights for better diagnosis.",
      icon: <FaBrain />,
      image: "/projects/hearing.jpg",
      github: "https://github.com/Deepika-15B/HolisticHealthAnalyzer.git",
    },
    {
      title: "Road Accident Analysis",
      description:
        "Analyzes accident data to identify patterns, causes, and helps improve road safety using data analytics.",
      icon: <FaCarCrash />,
      image: "/projects/powerbi.jpg",
      github: "https://github.com/Deepika-15B/RoadAccidentAnalysis.git",
    },
    {
      title: "Smart Traffic Solutions",
      description:
        "Smart Traffic Solution ensures safe, efficient navigation with traffic analysis, route optimization, vehicle checks, and toll management.",
      icon: <FaBus />,
      image: "/projects/map.jpg",
      github: "https://github.com/Deepika-15B/SmartTrafficSolutions.git",
    },
    {
      title: "Learning Management System (SkillUp)",
      description:
        "A full-stack learning management system designed to facilitate online education and skill development.",
      icon: <FaBook />,
      image: "/projects/skillup.jpg",
      github: "https://github.com/Deepika-15B/LearningManagementSystem.git",
    },
  ];

  return (
    <section
      id="projects"
      className="section relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

      {/* Title */}
      <div className="container-app relative">
        <div className="text-center mb-14">
          <p className="chip inline-flex">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">
            Projects that{" "}
            <span className="gradient-text">tell a story</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A few things I’ve built recently—focused on usability, clarity, and clean
            implementation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card card-hover overflow-hidden">
              {/* Image */}
              <div className="relative group h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-slate-950/0 opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="chip bg-white/70 border-slate-200/70 text-slate-800">
                    {project.title}
                  </span>
                  <span className="h-10 w-10 rounded-xl bg-white/75 border border-slate-200/70 grid place-items-center text-purple-700">
                    {project.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-muted text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary px-4 py-2 text-sm"
                  >
                    <FaGithub /> Code
                  </a>
                  <a href="#contact" className="text-sm font-medium gradient-text">
                    Let’s build one →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}