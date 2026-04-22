import statueImg from "../assets/statue.jpg";
import horsesImg from "../assets/horses.jpg";
import enterenceImg from "../assets/enterence.jpg";
export default function StepTowardsDream() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans">
      {/* Top divider */}
      <div className="px-10">
        <hr className="border-gray-300" />
      </div>

      {/* Stats Row */}
      <div className="px-10 py-10 grid grid-cols-3 gap-4">
        <div className="flex flex-col text-center">
          <span className="text-6xl font-bold text-slate-700 leading-none">
            12+
          </span>
          <span className="text-xs text-gray-500 mt-2">Branches</span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-6xl font-bold text-slate-700 leading-none">
            10K+
          </span>
          <span className="text-xs text-gray-500 mt-2">
            Successful Projects
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-6xl font-bold text-slate-700 leading-none">
            2M
          </span>
          <span className="text-xs text-gray-500 mt-2">Satisfied Client</span>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="px-10">
        <hr className="border-gray-300" />
      </div>

      {/* Dream Home Section */}
      <div className="px-10 pt-14 pb-10">
        {/* Centered heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-slate-700 leading-snug mb-2">
            One step towards your
            <br />
            dream home
          </h2>
          <p className="text-xs text-gray-500">
            Challenging ourselves in every project
          </p>
        </div>

        {/* Content: left bust image + text, right overlapping images */}
        <div className="grid grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Bust image */}
            <div className="w-32 h-36 mb-6 overflow-hidden relative">
              <div className="absolute top-0 w-full h-full border-t-[10px] border-[#C28C42] z-0" />{" "}
              <img
                src={statueImg}
                alt="Classical Bust"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description text */}
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              We are also committed to bioengineering in order to produce a
              healthier and more sustainable environment in all our solutions,
              utilizing nature to create humane spaces that stand out from the
              visual monotony of the urban landscape.
            </p>
          </div>

          {/* Right Column — overlapping images */}
          <div className="relative" style={{ height: "300px" }}>
            {/* Back image (horse statue) — top right, gold border */}
            <div
              className="absolute"
              style={{ top: 0, right: 0, width: "300px", zIndex: 1 }}
            >
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-full h-full border-10 border-[#C28C42] z-0" />
                <img
                  src={horsesImg}
                  alt="Horse Statue"
                  className="relative z-10 w-full object-cover"
                  style={{ height: "170px" }}
                />
              </div>
            </div>

            {/* Front image (garden/entrance) — bottom left, overlapping */}
            <div
              className="absolute"
              style={{
                bottom: 0,
                left: "20px",
                width: "300px",
                zIndex: 2,
              }}
            >
              <img
                src={enterenceImg}
                alt="Garden Entrance"
                className="w-full object-cover shadow-lg"
                style={{ height: "160px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
