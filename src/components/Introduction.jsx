import { useState } from "react";
import introductionImg from "../assets/introduction.jpg";

export default function Introduction() {
  const items = [
    {
      id: "vision",
      title: "Our Vision",
      text: "To be the first choice for quality in implementation and innovation of ideas in all interior and exterior decorations and finishes.",
    },
    {
      id: "mission",
      title: "Our Mission",
      text: "To achieve uniqueness in all that we do, adding elements of nature in order to humanize the spaces we create, balancing form, function and aesthetics.",
    },
    {
      id: "work",
      title: "Our Work",
      text: "All Novo work is undertaken under one brand in order to ensure quality in materials and implementation. We pride ourselves in offering inevitable ideas and solutions which create harmony and coherence between each stage of the project. We employ familiar materials but use them innovatively.",
    },
  ];

  return (
    <div
      id="about"
      className="bg-slate-600 text-white font-sans pb-10 md:pb-20"
    >
      {/* Top Section */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
        {/* Left Column */}
        <div className="px-4 sm:px-8 md:pl-14 pt-10 pb-6 flex flex-col">
          <h2 className="text-2xl sm:text-4xl font-bold mb-4">Intrduction</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-10 md:mb-40 max-w-xs">
            We are living in a time of rapid urban growth with increasingly busy
            and fast lifestyles characterized by movement and commotion so much
            so that the need to humanize architecture has never been more
            important.
          </p>

          {/* Accordion Items */}
          <div className="flex flex-col">
            {items.map((item) => (
              <div key={item.id}>
                <hr className="border-white" />
                <div className="py-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <span className="text-lg sm:text-2xl font-semibold">
                      {item.title}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gray-400 bg-white text-black flex items-center justify-center text-base sm:text-xl flex-shrink-0">
                      →
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mt-3 max-w-xs">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
            <hr className="border-white" />
          </div>
        </div>

        {/* Right Column — image */}
        <div className="relative mt-6 md:mt-20 px-4 sm:px-0">
          {/* <div className="absolute top-0 left-0 right-0 h-4 md:h-6 bg-amber-500 z-10" /> */}
          <img
            src={introductionImg}
            alt="Interior Architecture"
            className="w-full object-cover"
            style={{ height: "600px", maxWidth: "600px" }}
          />
        </div>
      </div>

      {/* Our Success row */}
      <div className="px-4 sm:px-8 py-3 flex items-center justify-between">
        <span className="text-base sm:text-xl text-white">Our Success</span>
        <span className="text-base sm:text-xl text-white">01/03</span>
      </div>
      <div className="px-4 sm:px-8">
        <hr className="border-white" />
      </div>

      {/* Bottom paragraph + Next button */}
      <div className="px-4 sm:px-8 py-8 flex flex-col md:grid md:grid-cols-12 gap-4 items-end">
        <div className="md:col-span-10">
          <p className="text-base sm:text-xl md:text-2xl w-2/3 text-gray-200 leading-relaxed">
            We are living in a time of rapid urban growth with increasingly busy
            and fast lifestyles characterized by movement and commotion – so
            much so that the need to humanize architecture has never been more
            important. This means reconsidering the form and functions of our
            buildings and the materials we use, a prevalent trend in our
            industry which, more and more, seeks to provide an environment that
            understands people's needs and shield them from the noise and bustle
            of the city streets. This encapsulates the Novo Design & Build
            approach. It begins with our name, one which promises authentic
            human feelings, taking us back to a time of serenity and
            spaciousness and looking ahead to 'smart', modern solutions.
          </p>
        </div>

        {/* Next button */}
        <div className="md:col-span-2 flex justify-start md:justify-end mt-4 md:mt-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full border border-amber-400 flex items-center justify-center cursor-pointer hover:border-amber-500 hover:text-amber-400 transition-all">
            <span className="text-base sm:text-xl font-medium">Next</span>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="px-4 sm:px-8">
        <hr className="border-white" />
      </div>
      <div className="py-4" />
    </div>
  );
}
