import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiCode } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-4">

        {/* Logo / Name */}
        <div className="flex items-center gap-2 text-lg font-semibold text-yellow-400">
          <FiCode />
          <span>Deepika</span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-gray-300 max-w-md">
          Passionate IT student building the future with code and innovation.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-3">
          <a
            href="https://github.com/Deepika-15B"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/deepika0510"
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}