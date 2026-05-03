"use client";

import { FaBrain, FaCarCrash, FaGithub } from "react-icons/fa";
import { FaBook, FaBus } from "react-icons/fa6";

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
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 via-purple-50 to-white"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-14 gradient-text">
        Projects
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass overflow-hidden shadow-sm hover-lift transition duration-300"
          >
            {/* Image with Overlay */}
            <div className="relative group h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white text-sm">
                  View Details
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-purple-600 text-xl">
                  {project.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition hover-lift"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}