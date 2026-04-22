import houseImg from "../assets/house1.jpg";
import horseImg from "../assets/horse.jpg";

export default function ArchitectureHero() {
  return (
    <div className="min-h-screen bg-[#f4f4f2] font-sans pt-16 md:pt-20 relative overflow-hidden">
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
      <div className="relative z-10 px-4 sm:px-8 pt-6 pb-20 flex flex-col md:grid md:grid-cols-2 gap-0 items-start">
        {/* Left Column */}
        <div className="flex flex-col w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight px-4 sm:px-8 lg:ml-40 mb-6 md:mb-10 md:pb-24 text-gray-800">
            Our{" "}
            <span className="text-amber-600 font-serif">Implicit Belief</span>{" "}
            in
            <br />
            Architecture's Dynamism
          </h1>

          {/* Main Image */}
          <div className="relative w-full md:w-4/5 md:ml-auto px-4 sm:px-0 md:ml-[200px] lg:ml-[350px] ">
            <div className="absolute -top-3 -right-2 md:-right-6 w-full h-full border-4 md:border-[10px] border-[#C28C42] z-0" />
            <div className="absolute -bottom-3 -left-3 w-8 md:w-12 h-20 md:h-32 border-4 md:border-[10px] border-[#C28C42] z-0" />
            <img
              src={houseImg}
              alt="Modern Architecture"
              className="relative z-10 w-full object-cover shadow-xl"
              style={{ height: "400px" }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col px-4 sm:px-8 md:pl-8 pt-10 md:pt-2 md:ml-[100px] lg:ml-[300px] w-full">
          <p className="text-sm md:text-[17px] text-black leading-relaxed mb-3 max-w-xs">
            Decorations and finishes of ideas in all <br />
            interior and exterior implementation.
          </p>
          <p className="text-amber-600 font-semibold text-sm md:text-[24px] leading-snug mb-5 max-w-xs">
            To achieve uniqueness in <br /> all that we do, adding <br />{" "}
            elements of nature
          </p>

          {/* Horse image */}
          <div className="w-32 h-32 md:w-44 md:h-44 overflow-hidden shadow-md mb-8 relative">
            <div className="absolute top-0 w-full h-full border-t-[10px] border-[#C28C42] z-0" />
            <img
              src={horseImg}
              alt="Decorative Sculpture"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom description */}
          <div className="md:mt-auto md:pt-32">
            <p className="text-xs md:text-[15px] text-gray-500 leading-relaxed max-w-xs">
              Our architectural team excels at creating visually appealing and
              function-driven spaces. We specialize in residential, commercial,
              and industrial architectural design, tailoring our designs to meet
              the unique needs of each client.
            </p>
          </div>
        </div>
      </div>

      {/* Rotating badge */}
      <div className="absolute bottom-8 left-4 md:left-8 z-10">
        <div className="relative w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
          <svg viewBox="0 0 64 64" className="absolute inset-0 w-full h-full">
            <defs>
              <path
                id="circle"
                d="M 32,32 m -20,0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0"
              />
            </defs>
            <text fill="#4b5563" fontSize="5" letterSpacing="1.8">
              <textPath href="#circle">
                A R C H I T E C T U R E • D E S I G N •
              </textPath>
            </text>
          </svg>
          <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center z-10">
            <div
              className="w-0 h-0 ml-0.5 md:ml-1"
              style={{
                borderTop: "5px solid transparent",
                borderBottom: "5px solid transparent",
                borderLeft: "9px solid white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-6 left-8 right-8 h-0.5 bg-gray-400" />
    </div>
  );
}
