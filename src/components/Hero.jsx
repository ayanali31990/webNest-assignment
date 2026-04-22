import { useState, useEffect } from "react";
import houseImg from "../assets/house1.jpg";
import horseImg from "../assets/horse.jpg";

export default function ArchitectureHero() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans relative overflow-hidden">
      {/* Background diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1={i * 80 - 200}
            y1="0"
            x2={i * 80 + 400}
            y2="100%"
            stroke="#8a9bb0"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Hero Content */}
      <div className="relative z-10 px-8 pt-6 pb-16 grid grid-cols-2 gap-0 items-start">
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight text-gray-800 mb-10">
            Our{" "}
            <span className="text-amber-600 italic font-serif">
              Implicit Belief
            </span>{" "}
            in
            <br />
            Architecture's Dynamism
          </h1>

          {/* Main Image with golden border accent */}
          <div className="relative w-4/5 ml-[200px]">
            {/* Gold border accent top-right */}
            <div className="absolute -top-3 -right-6 w-full h-full border-10 border-[#C28C42] z-0" />
            {/* Gold border accent bottom-left */}
            <div className="absolute -bottom-3 -left-3 w-12 h-32 border-10 border-[#C28C42] z-0" />
            <img
              src={houseImg}
              alt="Modern Architecture"
              className="relative z-10 w-full object-cover shadow-xl"
              style={{ height: "320px" }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col pl-8 pt-2 ml-[150px]">
          {/* Top text */}
          <p className="text-xs text-gray-500 leading-relaxed mb-3 max-w-xs">
            Decorations and finishes of ideas in all <br />
            interior and exterior implementation.
          </p>
          <p className="text-amber-600 font-semibold text-base leading-snug mb-5 max-w-xs">
            To achieve uniqueness in <br /> all that we do, adding <br />{" "}
            elements of nature
          </p>

          {/* Horse image thumbnail */}
          <div className="w-28 h-24 overflow-hidden shadow-md mb-8">
            <img
              src={horseImg}
              alt="Decorative Sculpture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom description text - pushed down */}
          <div className="mt-auto pt-32">
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Our architectural team excels at creating visually appealing and
              function-driven spaces. We specialize in residential, commercial,
              and industrial architectural design, tailoring our designs to meet
              the unique needs of each client.
            </p>
          </div>
        </div>
      </div>

      {/* Rotating badge bottom left */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="relative w-16 h-16 flex items-center justify-center">
          {/* Rotating text ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: "12s" }}
            viewBox="0 0 64 64"
          >
            <defs>
              <path
                id="circle"
                d="M 32,32 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
              />
            </defs>
            <text fill="#4b5563" fontSize="6.5" letterSpacing="2.2">
              <textPath href="#circle">
                A R C H I T E C T U R E • D E S I G N • B U I L D •{" "}
              </textPath>
            </text>
          </svg>
          {/* Play button center */}
          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center z-10">
            <div
              className="w-0 h-0 ml-0.5"
              style={{
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: "8px solid white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom horizontal line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300 mx-8" />
    </div>
  );
}
