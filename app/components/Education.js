export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Education & Certifications
          </h2>
          <p className="mt-4 text-gray-600">
            My academic background and certifications.
          </p>
        </div>

        {/* EDUCATION */}
        <div className="max-w-3xl mx-auto space-y-6 mb-16">

          {/* Card 1 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  B.Tech Information Technology
                </h3>
                <p className="text-gray-600 text-sm">
                  Kongu Engineering College
                </p>
              </div>
              <span className="text-sm text-gray-500">
                2023 - 2027
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-700 font-medium">
              CGPA: 8.52
            </p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Higher Secondary Education
                </h3>
                <p className="text-gray-600 text-sm">
                  Kalaimagal Kalvi Nilayam
                </p>
              </div>
              <span className="text-sm text-gray-500">
                2021 - 2023
              </span>
            </div>

            <p className="mt-3 text-sm text-gray-700 font-medium">
              Percentage: 92.5%
            </p>
          </div>

        </div>

        {/* CERTIFICATIONS */}
        <div className="grid md:grid-cols-3 gap-6">

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">
              MongoDB Associate Developer
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              MongoDB University
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">
              Database Management Systems
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Infosys Springboard
            </p>
          </div>

          <div className="border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900">
              Mobile App Development
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              ThingQbator
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}