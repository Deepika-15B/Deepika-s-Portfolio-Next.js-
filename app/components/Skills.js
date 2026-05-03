"use client";

import {
  FaPython,
  FaJava,
  FaCode,
  FaGithub,
  FaCss3Alt,
  FaChartBar
} from "react-icons/fa";

import {
  SiHtml5,
  SiMongodb,
  SiBootstrap,
  SiSpringboot
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const skills = [
    { name: "Python", level: 50, icon: <FaPython /> },
    { name: "Java", level: 80, icon: <FaJava /> },
    { name: "C Programming", level: 75, icon: <FaCode /> },

    { name: "HTML5", level: 80, icon: <SiHtml5 /> },
    { name: "CSS3", level: 80, icon: <FaCss3Alt /> },
    { name: "Bootstrap", level: 60, icon: <SiBootstrap /> },

    { name: "MongoDB", level: 70, icon: <SiMongodb /> },
    { name: "Power BI", level: 80, icon: <FaChartBar /> },
    { name: "GitHub", level: 85, icon: <FaGithub /> },

    { name: "Spring Boot", level: 60, icon: <SiSpringboot /> },
    { name: "VS Code", level: 80, icon: <VscVscode /> },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 bg-gradient-to-b from-white via-purple-50 to-gray-50"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-14 gradient-text">
        Skills & Technologies
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="glass p-6 shadow-sm hover-lift transition duration-300"
          >
            {/* Icon + Name */}
            <div className="flex items-center gap-3 mb-5 text-xl">
              <div className="text-purple-600 text-2xl">
                {skill.icon}
              </div>
              <h3 className="font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Percentage */}
            <p className="text-right text-sm text-gray-500 mt-2">
              {skill.level}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}