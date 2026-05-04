export default function Education() {
  return (
    <section id="education" className="section relative">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      {/* Title */}
      <div className="container-app relative">
        <div className="text-center mb-12">
          <p className="chip inline-flex">Background</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">
            Education &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Where I learned, what I’m exploring, and the milestones I’m proud of.
          </p>
        </div>

      {/* EDUCATION TIMELINE */}
      <div className="max-w-5xl mx-auto mb-16">

        {/* Card 1 */}
        <div className="card card-hover p-6 mb-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">🎓 B.Tech IT</h3>
              <p className="text-muted">Kongu Engineering College</p>
            </div>
            <span className="chip text-xs px-2 py-1">2023 - 2027</span>
          </div>
          <p className="mt-3 text-emerald-700 font-semibold">
            CGPA: 8.52 <span className="text-muted font-normal">(till 5th semester)</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="card card-hover p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">🏫 Higher Secondary</h3>
              <p className="text-muted">Kalaimagal Kalvi Nilayam</p>
            </div>
            <span className="chip text-xs px-2 py-1">2021 - 2023</span>
          </div>
          <p className="mt-3 text-emerald-700 font-semibold">
            Percentage: 92.5%
          </p>
        </div>

      </div>

      {/* CERTIFICATIONS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="card card-hover p-6">
          <h3 className="text-lg font-semibold text-slate-900">MongoDB Associate Developer</h3>
          <p className="text-muted">MongoDB University</p>
          <span className="chip mt-4">Database</span>
        </div>

        {/* Card 2 */}
        <div className="card card-hover p-6">
          <h3 className="text-lg font-semibold text-slate-900">Database Management Systems</h3>
          <p className="text-muted">Infosys Springboard</p>
          <span className="chip mt-4">DBMS</span>
        </div>

        {/* Card 3 */}
        <div className="card card-hover p-6">
          <h3 className="text-lg font-semibold text-slate-900">Mobile App Development</h3>
          <p className="text-muted">ThingQbator</p>
          <span className="chip mt-4">App</span>
        </div>

      </div>

      </div>
    </section>
  );
}