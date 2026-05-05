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

    { name: "Spring Boot", level: 40, icon: <SiSpringboot /> },
    { name: "VS Code", level: 80, icon: <VscVscode /> },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-gray-600">
            Technologies I use to build applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="border rounded-xl p-5 shadow-sm">
              
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-xl text-gray-700">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm text-gray-500">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}