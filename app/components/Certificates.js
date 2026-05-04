"use client";

import { useState } from "react";
import Image from "next/image";

export default function Certificates() {
  const certificates = [
    "/cert1.jpg",
    "/cert2.jpg",
    "/cert3.jpg",
  ];

  const [index, setIndex] = useState(0);

  // Next slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % certificates.length);
  };

  // Previous slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  return (
    <section className="section relative">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="container-app relative">
        <div className="text-center mb-10">
          <p className="chip inline-flex">Highlights</p>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 tracking-tight">
            Certificate{" "}
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Swipe through a few learning milestones and course achievements.
          </p>
        </div>

      <div className="max-w-5xl mx-auto relative">

        {/* Image */}
        <div className="relative w-full h-[420px] sm:h-[520px] md:h-[640px] overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
          <Image
            key={certificates[index]}
            src={certificates[index]}
            alt="certificate"
            fill
            sizes="(max-width: 1024px) 100vw, 900px"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 btn-secondary h-11 w-11 p-0 rounded-full shadow-md"
          aria-label="Previous certificate"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 btn-secondary h-11 w-11 p-0 rounded-full shadow-md"
          aria-label="Next certificate"
        >
          ▶
        </button>

      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted">
        {certificates.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to certificate ${i + 1}`}
            onClick={() => setIndex(i)}
            className={[
              "h-2.5 w-2.5 rounded-full transition",
              i === index ? "bg-slate-900" : "bg-slate-300 hover:bg-slate-400",
            ].join(" ")}
          />
        ))}
      </div>

      </div>
    </section>
  );
}