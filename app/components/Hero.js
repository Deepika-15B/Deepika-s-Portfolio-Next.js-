export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white px-6">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <span className="bg-purple-600/30 px-4 py-1 rounded-full text-sm">
            🎓 B.Tech IT Student
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            Hello, I'm <span className="text-purple-400">Deepika</span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-300">
            Frontend Developer
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Passionate about technology and innovation. Currently pursuing 
            B.Tech in Information Technology with a strong foundation in 
            web development, frontend development, and app development.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a href="#projects" className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
              🚀 View Projects
            </a>

            <a href="#contact" className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black">
              ✉️ Contact Me
            </a>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center gap-6">

          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            in
          </div>

          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            ✉
          </div>

          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
            {"</>"}
          </div>

          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
            GH
          </div>

        </div>

      </div>

    </section>
  );
}