import { useState } from "react";
import introductionImg from "../assets/introduction.jpg";

export default function Introduction() {
  const [openItem, setOpenItem] = useState("vision");

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
    <div className="bg-slate-600 text-white font-sans">
      {/* Top Section: Left text + Right image */}
      <div className="grid grid-cols-2 gap-0">
        {/* Left Column */}
        <div className="px-8 pt-10 pb-6 flex flex-col">
          <h2 className="text-xl font-bold mb-4">Intrduction</h2>
          <p className="text-xs text-gray-300 leading-relaxed mb-10 max-w-xs">
            We are living in a time of rapid urban growth with increasingly busy
            and fast lifestyles characterized by movement and commotion — so
            much so that the need to humanize architecture has never been more
            important.
          </p>

          {/* Accordion Items */}
          <div className="flex flex-col">
            {items.map((item, idx) => (
              <div key={item.id}>
                {/* Divider */}
                <hr className="border-gray-500" />
                <div className="py-4">
                  {/* Title row */}
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setOpenItem(openItem === item.id ? null : item.id)
                    }
                  >
                    <span className="text-sm font-semibold">{item.title}</span>
                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-gray-300 text-xs flex-shrink-0">
                      {openItem === item.id ? "−" : "+"}
                    </div>
                  </div>
                  {/* Expandable text */}
                  {openItem === item.id && (
                    <p className="text-xs text-gray-300 leading-relaxed mt-3 max-w-xs">
                      {item.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
            <hr className="border-gray-500" />
          </div>
        </div>

        {/* Right Column — image with gold top border */}
        <div className="relative">
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-amber-500 z-10" />
          <img
            src={introductionImg}
            alt="Interior Architecture"
            className="w-full object-cover"
            style={{ height: "100%", minHeight: "420px" }}
          />
        </div>
      </div>

      {/* Divider row with label and page number */}
      <div className="px-8 py-3 flex items-center justify-between">
        <span className="text-xs text-gray-400">Our Success</span>
        <span className="text-xs text-gray-400">01/05</span>
      </div>
      <div className="px-8">
        <hr className="border-gray-500" />
      </div>

      {/* Bottom large paragraph + Next button */}
      <div className="px-8 py-8 grid grid-cols-12 gap-4 items-end">
        <div className="col-span-10">
          <p className="text-sm text-gray-200 leading-relaxed">
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
        <div className="col-span-2 flex justify-end">
          <div className="w-16 h-16 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer hover:border-amber-500 hover:text-amber-400 transition-all">
            <span className="text-xs font-medium">Next</span>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="px-8">
        <hr className="border-gray-500" />
      </div>
      <div className="py-4" />
    </div>
  );
}
