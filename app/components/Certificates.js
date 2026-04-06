"use client";

import { useState } from "react";

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
    <section className="bg-gradient-to-b from-gray-50 via-white to-purple-50 text-gray-900 py-20 px-6">

      <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
        Certificate Gallery
      </h2>

      <div className="max-w-5xl mx-auto relative">

        {/* Image */}
        <img
          src={certificates[index]}
          alt="certificate"
          className="w-full h-[600px] md:h-[700px] object-cover rounded-2xl border border-gray-200 shadow-md"
        />

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full shadow-md hover:bg-purple-100 transition"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full shadow-md hover:bg-purple-100 transition"
        >
          ▶
        </button>

      </div>

    </section>
  );
}