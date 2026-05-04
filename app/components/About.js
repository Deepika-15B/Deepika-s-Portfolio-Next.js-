import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Me
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I’m a B.Tech Information Technology student who enjoys building
            modern and responsive web applications. I like solving problems
            and learning new technologies to improve my skills.
          </p>

          {/* Info Cards */}
          <div className="mt-8 space-y-4">
            
            <div className="border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Education</h3>
              <p className="text-gray-600 text-sm mt-1">
                B.Tech in Information Technology
              </p>
            </div>

            <div className="border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Location</h3>
              <p className="text-gray-600 text-sm mt-1">
                Erode, Tamil Nadu
              </p>
            </div>

            <div className="border rounded-xl p-5 shadow-sm">
              <h3 className="font-semibold text-gray-900">Experience</h3>
              <p className="text-gray-600 text-sm mt-1">
                2+ years of programming experience
              </p>
            </div>

          </div>

          {/* Interests */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              DBMS
            </span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              OOP
            </span>
            <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
              App Development
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Deepika"
            width={250}
            height={250}
            className="rounded-full object-cover border shadow-md"
          />
        </div>

      </div>
    </section>
  );
}