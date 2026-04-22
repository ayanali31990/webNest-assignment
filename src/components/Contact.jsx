import logo from "../assets/logo.png";

export default function Contact() {
  return (
    <div className="bg-gray-100 font-sans relative overflow-hidden">
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

      <div className="relative z-10 grid grid-cols-12 min-h-96 py-12">
        {/* Left Column — contact info */}
        <div className="col-span-3 px-8 flex flex-col">
          <p className="text-xs font-semibold text-gray-700 mb-5">
            Also get in touch
          </p>

          <div className="flex flex-col gap-1 text-xs text-gray-600 mb-6">
            <p>e: info@novo.sa</p>
            <p>t: +966 11 2111 090</p>
            <p>m: +966 575 77 8888</p>
          </div>

          <p className="text-xs text-gray-600 mb-1">novo-sa.com</p>

          <p className="text-xs text-gray-600 leading-relaxed mb-8">
            4858 King Abdulaziz Road, Al Rabeeh, 7542, Riyadh 13315
            <br />
            Saudi Arabia
          </p>

          {/* Novo logo box */}
          <div className=" w-14 h-14 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="flex items-center justify-center">
                {/* <span className="text-xs font-bold text-gray-700 leading-none">
                  n
                </span>
                <span className="text-xs font-bold text-gray-700 leading-none">
                  o
                </span>
              </div>
              <div className="w-0" />
              <div className="flex items-center justify-center">
                <span className="text-xs font-bold text-gray-700 leading-none">
                  v
                </span>
                <span className="text-xs font-bold text-gray-700 leading-none">
                  o
                </span> */}
                <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
              </div>
              <div className="w-0" />
            </div>
          </div>
        </div>

        {/* Vertical amber divider line */}
        <div className="col-span-1 flex justify-center">
          <div className="w-px bg-amber-500 h-full" />
        </div>

        {/* Right Column — form */}
        <div className="col-span-8 px-10">
          <h2 className="text-3xl font-semibold text-slate-700 mb-2">
            Register your inteest
          </h2>
          <p className="text-xs text-gray-500 mb-10">
            Construction commencing during 2023 earthworks. season.
          </p>

          {/* Form Fields */}
          <div className="flex flex-col gap-6 max-w-lg">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="e.g. Mohammed"
                className="w-full bg-transparent border-0 border-b border-amber-400 pb-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-600"
              />
              <p
                className="text-xs text-gray-400 mt-1 tracking-widest uppercase text-xs"
                style={{ fontSize: "9px" }}
              >
                YOUR NAME
              </p>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="e.g. mohammed@gmail.com"
                className="w-full bg-transparent border-0 border-b border-amber-400 pb-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-600"
              />
              <p
                className="text-xs text-gray-400 mt-1 tracking-widest uppercase"
                style={{ fontSize: "9px" }}
              >
                YOUR E-MAIL
              </p>
            </div>

            {/* Message */}
            <div>
              <input
                type="text"
                placeholder="e.g. Hello!"
                className="w-full bg-transparent border-0 border-b border-amber-400 pb-2 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-amber-600"
              />
              <p
                className="text-xs text-gray-400 mt-1 tracking-widest uppercase"
                style={{ fontSize: "9px" }}
              >
                YOUR MESSAGES
              </p>
            </div>

            {/* Extra bottom line */}
            <div className="border-b border-amber-400 w-full" />

            {/* Send Button */}
            <button className="w-full bg-slate-600 text-white rounded-full py-3 text-sm flex items-center justify-center gap-3 hover:bg-slate-700 transition-all mt-2">
              Send Message <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
