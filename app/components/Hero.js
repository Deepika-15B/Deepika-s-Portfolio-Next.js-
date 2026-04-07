import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 text-gray-900 px-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium">
            🎓 B.Tech IT Student
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Hello, I'm <span className="text-purple-700">Deepika</span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-600">
            Frontend Developer
          </h2>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Passionate about technology and innovation. Currently pursuing 
            B.Tech in IT with strong skills in web development and building 
            modern, user-friendly applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <a href="#projects" className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300">
              🚀 View Projects
            </a>

            <a href="#contact" className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 hover:shadow-lg transition duration-300">
              ✉️ Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT SIDE - ICONS */}
        <div className="flex justify-center gap-6 flex-wrap">

          <a href="https://www.linkedin.com/in/deepika0510" target="_blank">
            <div className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition duration-300">
              <FaLinkedin size={24} />
            </div>
          </a>

          <a href="https://github.com/Deepika-15B" target="_blank">
            <div className="w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition duration-300">
              <FaGithub size={24} />
            </div>
          </a>

       
          <a href="https://leetcode.com/u/deepika_0510/" target="_blank">
            <div className="w-14 h-14 bg-yellow-400 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition duration-300">
              <SiLeetcode size={24} />
            </div>
          </a>

          <a href="/resume.pdf" target="_blank">
            <div className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition duration-300">
              <FaFileAlt size={24} />
            </div>
          </a>

        </div>

      </div>

    </section>
  );
}