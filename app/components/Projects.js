"use client";

import { FaBrain, FaCarCrash } from "react-icons/fa";
import { FaBook, FaBus } from "react-icons/fa6";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      className="bg-gradient-to-b from-gray-50 via-purple-50 to-white py-24 px-6 md:px-12"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-14">
        Projects
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm bg-gray-800 text-white px-3 py-2 rounded-lg hover:bg-black transition"
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