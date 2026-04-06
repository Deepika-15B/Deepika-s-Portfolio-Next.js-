export default function About() {
  return (
    <section id="about" className="bg-gray-50 text-gray-900 py-20 px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl font-bold mb-6 text-purple-400">
            About Me
          </h2>

          <p className="text-gray-300 mb-6">
            I'm a passionate B.Tech Information Technology student who loves
            building modern web applications. I enjoy solving problems and
            exploring new technologies.
          </p>

          {/* Info Cards */}
          <div className="space-y-4">

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-lg">🎓 Education</h3>
              <p className="text-gray-400">B.Tech in Information Technology</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-lg">📍 Location</h3>
              <p className="text-gray-400">Erode, Tamil Nadu</p>
            </div>

            <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
              <h3 className="font-semibold text-lg">💻 Experience</h3>
              <p className="text-gray-400">2+ years of programming experience</p>
            </div>

          </div>

          {/* Interests */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Database Management Systems</span>
            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Object-Oriented Programming</span>
            <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">App Development</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="relative">
            
            {/* Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-purple-600 blur-xl opacity-30"></div>

            {/* Image */}
            <img
              src="/profile.jpg"
              alt="Deepika"
              className="w-64 h-64 rounded-full object-cover border-4 border-purple-500 relative"
            />

          </div>

        </div>

      </div>

    </section>
  );
}