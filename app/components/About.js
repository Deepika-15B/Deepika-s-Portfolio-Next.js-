export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-gray-50 to-purple-50 text-gray-900 py-20 px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl font-bold mb-6 text-purple-700">
            About Me
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I'm a passionate B.Tech Information Technology student who loves
            building modern web applications. I enjoy solving problems and
            exploring new technologies.
          </p>

          {/* Info Cards */}
          <div className="space-y-4">

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-800">🎓 Education</h3>
              <p className="text-gray-500">B.Tech in Information Technology</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-800">📍 Location</h3>
              <p className="text-gray-500">Erode, Tamil Nadu</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg text-gray-800">💻 Experience</h3>
              <p className="text-gray-500">2+ years of programming experience</p>
            </div>

          </div>

          {/* Interests */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              Database Management Systems
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              Object-Oriented Programming
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              App Development
            </span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-purple-300 blur-2xl opacity-40"></div>

            {/* Image */}
            <img
              src="/profile.jpg"
              alt="Deepika"
              className="w-64 h-64 rounded-full object-cover border-4 border-purple-400 shadow-md relative"
            />

          </div>

        </div>

      </div>

    </section>
  );
}