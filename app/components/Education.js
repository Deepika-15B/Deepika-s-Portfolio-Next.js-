export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
        Education & Certifications
      </h2>

      {/* EDUCATION TIMELINE */}
      <div className="max-w-5xl mx-auto mb-16">

        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 mb-6">
          <h3 className="text-xl font-semibold">🎓 B.Tech IT</h3>
          <p className="text-gray-300">Kongu Engineering College</p>
          <p className="text-purple-300">2023 - 2027</p>
          <p className="text-yellow-400 font-semibold">
            CGPA: 8.52 (till 5th semester)
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
          <h3 className="text-xl font-semibold">🏫 Higher Secondary</h3>
          <p className="text-gray-300">Kalaimagal Kalvi Nilayam</p>
          <p className="text-purple-300">2021 - 2023</p>
          <p className="text-yellow-400 font-semibold">
            Percentage: 92.5%
          </p>
        </div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-lg font-semibold">MongoDB Associate Developer</h3>
          <p className="text-gray-400">MongoDB University</p>
          <span className="bg-purple-600 px-3 py-1 text-sm rounded-full mt-3 inline-block">
            Database
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-lg font-semibold">Database Management Systems</h3>
          <p className="text-gray-400">Infosys Springboard</p>
          <span className="bg-purple-600 px-3 py-1 text-sm rounded-full mt-3 inline-block">
            DBMS
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
          <h3 className="text-lg font-semibold">Mobile App Development</h3>
          <p className="text-gray-400">ThingQbator</p>
          <span className="bg-purple-600 px-3 py-1 text-sm rounded-full mt-3 inline-block">
            App
          </span>
        </div>

      </div>

    </section>
  );
}