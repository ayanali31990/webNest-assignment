import logo from "../assets/logo.png";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-gray-100 font-sans relative overflow-hidden"
    >
      {/* Background diagonal lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(10)].map((_, i) => (
          <line
            key={i}
            x1={i * 100 - 100}
            y1="0"
            x2={i * 100 + 500}
            y2="100%"
            stroke="#8a9bb0"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10 flex flex-col md:grid md:grid-cols-12 min-h-96 py-10 md:py-12">
        {/* Left Column — contact info */}
        <div className="md:col-span-3 px-6 sm:px-8 md:pl-14 flex flex-col mb-8 md:mb-0">
          <p className="text-lg sm:text-2xl font-semibold text-gray-700 mb-4 md:mb-5">
            Also get in touch
          </p>

          <div className="flex flex-col gap-1 text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
            <p>e: info@novo.sa</p>
            <p>t: +966 11 2111 090</p>
            <p>m: +966 575 77 8888</p>
          </div>

          <p className="text-sm sm:text-base text-gray-600 mb-1">novo-sa.com</p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 md:mb-8">
            4858 King Abdulaziz Road, Al Rabeeh, 7542, Riyadh 13315
            <br />
            Saudi Arabia
          </p>

          <div className="w-14 h-14 flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-[120px] sm:w-[160px] h-[50px] sm:h-[70px] object-contain"
            />
          </div>
        </div>

        {/* Vertical amber divider — hidden on mobile */}
        <div className="hidden md:flex md:col-span-1 justify-center">
          <div className="w-px bg-amber-500 h-full" />
        </div>

        {/* Horizontal divider on mobile */}
        <div className="md:hidden px-6 mb-8">
          <hr className="border-amber-500" />
        </div>

        {/* Right Column — form */}
        <div className="md:col-span-8 px-6 sm:px-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 mb-2">
            Register your inteest
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mb-6 md:mb-10 pt-2 md:pt-4">
            Construction commencing during 2023 earthworks. season.
          </p>

          {/* Form Fields */}
          <div className="flex flex-col gap-5 md:gap-6 max-w-lg pt-4 md:pt-8">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="e.g. Mohammed"
                className="w-full bg-transparent border-0 border-b border-amber-400 pb-2 text-base sm:text-xl text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-600 pt-4 md:pt-8"
              />
              <p
                className="text-gray-400 mt-1 tracking-widest uppercase"
                style={{ fontSize: "13px" }}
              >
                YOUR NAME
              </p>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="e.g. mohammed@gmail.com"
                className="w-full bg-transparent border-0 border-b border-amber-400 pb-2 text-base sm:text-xl text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-600 pt-4 md:pt-8"
              />
              <p
                className="text-gray-400 mt-1 tracking-widest uppercase"
                style={{ fontSize: "13px" }}
              >
                YOUR E-MAIL
              </p>
            </div>

            {/* Message */}
            <div>
              <input
                type="text"
                placeholder="e.g. Hello!"
                className="w-full bg-transparent border-0 border-b border-amber-400 pb-2 text-base sm:text-xl text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-600 pt-4 md:pt-8"
              />
              <p
                className="text-gray-400 mt-1 tracking-widest uppercase"
                style={{ fontSize: "13px" }}
              >
                YOUR MESSAGES
              </p>
            </div>

            <div className="border-b border-amber-400 w-full pt-4 md:pt-8" />

            <button className="w-full bg-slate-600 text-white rounded-full py-3 text-base sm:text-xl flex items-center justify-center gap-3 hover:bg-slate-700 transition-all mt-2">
              Send Message <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
