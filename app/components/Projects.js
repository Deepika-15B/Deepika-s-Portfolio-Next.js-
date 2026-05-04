"use client";

import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Interactive Digital Hearing Analyzer",
      description:
        "A system that analyzes hearing ability using digital signals and provides useful insights.",
      image: "/projects/hearing.jpg",
      github: "https://github.com/Deepika-15B/HolisticHealthAnalyzer.git",
    },
    {
      title: "Road Accident Analysis",
      description:
        "Analyzes accident data to identify patterns and improve road safety using data analytics.",
      image: "/projects/powerbi.jpg",
      github: "https://github.com/Deepika-15B/RoadAccidentAnalysis.git",
    },
    {
      title: "Smart Traffic Solutions",
      description:
        "Provides efficient navigation using traffic analysis, route optimization, and vehicle checks.",
      image: "/projects/map.jpg",
      github: "https://github.com/Deepika-15B/SmartTrafficSolutions.git",
    },
    {
      title: "Learning Management System",
      description:
        "A web-based system designed to support online learning and skill development.",
      image: "/projects/skillup.jpg",
      github: "https://github.com/Deepika-15B/LearningManagementSystem.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Projects
          </h2>
          <p className="mt-4 text-gray-600">
            Some of the projects I have worked on.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow-sm">

              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {project.description}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:underline"
                >
                  <FaGithub />
                  View Code
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}