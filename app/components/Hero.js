import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-white to-blue-100 text-gray-900">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <span className="bg-purple-200 text-purple-800 px-4 py-1 rounded-full text-sm">
            🎓 B.Tech IT Student
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Hello, I'm <span className="text-purple-600">Deepika</span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-700">
            Frontend Developer
          </h2>

          <p className="mt-6 text-gray-600">
            Passionate about technology and innovation. Currently pursuing 
            B.Tech in IT with strong skills in web and frontend development.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              🚀 View Projects
            </a>

            <a href="#contact" className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              ✉️ Contact Me
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - ICONS */}
        <div className="flex justify-center gap-6 flex-wrap">

          <a href="https://www.linkedin.com/in/deepika0510" target="_blank">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-md">
              <FaLinkedin size={24} />
            </div>
          </a>

          <a href="https://github.com/Deepika-15B" target="_blank">
            <div className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-md">
              <FaGithub size={24} />
            </div>
          </a>

          <a href="mailto:deepikab.23it@kongu.edu">
            <div className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-md">
              <FaEnvelope size={24} />
            </div>
          </a>

          <a href="https://leetcode.com/u/deepika_0510/" target="_blank">
            <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-md">
              <SiLeetcode size={24} />
            </div>
          </a>

          <a href="/resume.pdf" target="_blank">
            <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition shadow-md">
              <FaFileAlt size={24} />
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}