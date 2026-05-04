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
      className="section relative"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      {/* Title */}
      <div className="container-app relative">
        <div className="text-center mb-14">
          <p className="chip inline-flex">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">
            Skills &{" "}
            <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            A snapshot of what I use to design, build, and ship web projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card card-hover p-6">
              <div className="flex items-start justify-between gap-4">
                {/* Icon + Name */}
                <div className="flex items-center gap-3 text-xl">
                  <div className="text-purple-700 text-2xl">{skill.icon}</div>
                  <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                </div>
                <span className="chip text-xs px-2 py-1">{skill.level}%</span>
              </div>

              <div className="mt-6">
                <div className="w-full bg-slate-200/70 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background:
                        "linear-gradient(90deg, rgba(124,58,237,1), rgba(59,130,246,1))",
                    }}
                  />
                </div>
                <p className="mt-3 text-sm text-muted">
                  Comfort level: <span className="font-medium text-slate-900">{skill.level}%</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}