import statueImg from "../assets/statue.jpg";
import horsesImg from "../assets/horses.jpg";
import enterenceImg from "../assets/enterence.jpg";

export default function StepTowardsDream() {
  return (
    <div
      id="team"
      className="bg-[#f4f4f2] text-gray-800 font-sans pt-10 pb-20 md:pb-48"
    >
      {/* Top divider */}
      <div className="px-4 sm:px-10">
        <hr className="border-amber-500" />
      </div>

      {/* Stats Row */}
      <div className="px-4 sm:px-10 py-8 md:py-10 grid grid-cols-3 gap-2 sm:gap-4">
        {[
          { value: "12+", label: "Branches" },
          { value: "10K+", label: "Successful Projects" },
          { value: "2M", label: "Satisfied Client" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col text-center">
            <span className="text-4xl sm:text-6xl md:text-8xl font-bold text-slate-700 leading-none">
              {stat.value}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="px-4 sm:px-10">
        <hr className="border-amber-500" />
      </div>

      {/* Dream Home Section */}
      <div className="px-4 sm:px-10 pt-10 md:pt-14 pb-10">
        {/* Centered heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-slate-700 leading-snug mb-2">
            One step towards your
            <br />
            dream home
          </h2>
          <p className="text-sm text-gray-500">
            Challenging ourselves in every project
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="w-40 h-48 sm:w-52 sm:h-60 mb-6 overflow-hidden relative">
              <div className="absolute top-0 w-full h-full border-t-[10px] border-[#C28C42] z-0" />
              <img
                src={statueImg}
                alt="Classical Bust"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm sm:text-xl text-gray-500 leading-relaxed max-w-xs">
              We are also committed to bioengineering in order to produce a
              healthier and more sustainable environment in all our solutions,
              utilizing nature to create humane spaces that stand out from the
              visual monotony of the urban landscape.
            </p>
          </div>

          {/* Right Column — overlapping images */}
          <div className="relative" style={{ height: "420px" }}>
            {/* Horses image — top right with gold border */}
            <div
              className="absolute"
              style={{ top: 0, right: 0, width: "65%", zIndex: 1 }}
            >
              <div className="relative">
                <div className="absolute -top-3 -right-3 w-full h-full border-[10px] border-[#C28C42] z-0" />
                <img
                  src={horsesImg}
                  alt="Horse Statue"
                  className="relative z-10 w-full object-cover"
                  style={{ height: "260px" }}
                />
              </div>
            </div>

            {/* Entrance image — bottom left overlapping */}
            <div
              className="absolute"
              style={{ bottom: 0, left: 0, width: "62%", zIndex: 2 }}
            >
              <img
                src={enterenceImg}
                alt="Garden Entrance"
                className="w-full object-cover shadow-xl"
                style={{ height: "240px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
