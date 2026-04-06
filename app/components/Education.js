export default function Education() {
  return (
    <section id="education" className="bg-gradient-to-b from-purple-50 via-white to-gray-50 text-gray-900 py-20 px-6">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
        Education & Certifications
      </h2>

      {/* EDUCATION TIMELINE */}
      <div className="max-w-5xl mx-auto mb-16">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition mb-6">
          <h3 className="text-xl font-semibold text-gray-800">🎓 B.Tech IT</h3>
          <p className="text-gray-600">Kongu Engineering College</p>
          <p className="text-purple-600 font-medium">2023 - 2027</p>
          <p className="text-green-600 font-semibold">
            CGPA: 8.52 (till 5th semester)
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-800">🏫 Higher Secondary</h3>
          <p className="text-gray-600">Kalaimagal Kalvi Nilayam</p>
          <p className="text-purple-600 font-medium">2021 - 2023</p>
          <p className="text-green-600 font-semibold">
            Percentage: 92.5%
          </p>
        </div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">MongoDB Associate Developer</h3>
          <p className="text-gray-500">MongoDB University</p>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 text-sm rounded-full mt-3 inline-block">
            Database
          </span>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Database Management Systems</h3>
          <p className="text-gray-500">Infosys Springboard</p>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 text-sm rounded-full mt-3 inline-block">
            DBMS
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800">Mobile App Development</h3>
          <p className="text-gray-500">ThingQbator</p>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 text-sm rounded-full mt-3 inline-block">
            App
          </span>
        </div>

      </div>

    </section>
  );
}