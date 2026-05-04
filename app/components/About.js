import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="pointer-events-none absolute inset-x-0 -mt-24 h-24 bg-gradient-to-b from-transparent to-white/40" />

      {/* Container */}
      <div className="container-app grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl font-semibold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="text-muted mb-8 leading-relaxed">
            I’m a passionate B.Tech Information Technology student who loves
            building modern web applications. I enjoy solving problems and
            exploring new technologies.
          </p>

          {/* Info Cards */}
          <div className="space-y-4">

            <div className="card card-hover p-5">
              <h3 className="font-semibold text-lg text-slate-900">🎓 Education</h3>
              <p className="text-muted">B.Tech in Information Technology</p>
            </div>

            <div className="card card-hover p-5">
              <h3 className="font-semibold text-lg text-slate-900">📍 Location</h3>
              <p className="text-muted">Erode, Tamil Nadu</p>
            </div>

            <div className="card card-hover p-5">
              <h3 className="font-semibold text-lg text-slate-900">💻 Experience</h3>
              <p className="text-muted">2+ years of programming experience</p>
            </div>

          </div>

          {/* Interests */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="chip">Database Management Systems</span>
            <span className="chip">Object-Oriented Programming</span>
            <span className="chip">App Development</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">

          <div className="relative">

            {/* Soft Glow */}
            <div className="absolute -inset-8 rounded-full bg-purple-300 blur-2xl opacity-30" />
            <div className="absolute -inset-10 rounded-full bg-blue-300 blur-2xl opacity-20" />

            {/* Image */}
            <Image
              src="/profile.jpg"
              alt="Deepika"
              width={256}
              height={256}
              className="w-64 h-64 rounded-full object-cover border border-slate-200 shadow-xl relative"
              priority={false}
            />

          </div>

        </div>

      </div>

    </section>
  );
}