import houseImg from "../assets/house2.jpg";
import buildingImg from "../assets/building.jpg";
import dinningImg from "../assets/dinning.jpg";
import sketchImg from "../assets/sketch.jpg";

export default function Services() {
  const stages = [
    {
      number: "01",
      title: "Design",
      image: sketchImg,
      description: [
        "The design stage begins by developing an understanding of our clients' needs and predispositions in an initial consultation with one of our designers. After this dialogue, we present the first draft of the design with a full explanation of our suggestions and their rationale.",
        "After client feedback, we rework our design to include any required modifications.",
        "After their approval we finalize the design and take full measurements.",
      ],
    },
    {
      number: "02",
      title: "Pricing and\nMaterials Approval",
      image: dinningImg,
      description: [
        "Once full measurements have been calculated and quantities estimated,",
        "We present a comprehensive cost analysis, giving clients a range of material options commensurate with their project and budget.",
      ],
    },
    {
      number: "03",
      title: "Implementation",
      image: buildingImg,
      description: [
        "After approving the plans and with the clients approval of carefully chosen materials,",
        "We carry out the finishing and decoration work, monitoring the fit-out throughout its progress.",
        "After this, we provide our clients with peace of mind thanks to our aftersales service.",
      ],
    },
  ];

  return (
    <div id="service" className="bg-slate-600 text-white font-sans">
      {/* Hero Section */}
      <div className="px-4 sm:px-10 pt-10 pb-6 text-center">
        <p className="text-sm text-gray-300 tracking-widest mb-4">
          Innovative architectural designs
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug max-w-2xl mx-auto">
          The place where you spend your <br /> time is a direct reflection of
          your <br /> culture
        </h2>
      </div>

      {/* Full Width Image */}
      <div className="mb-10 flex justify-center px-4 sm:px-0">
        <div className="relative w-full sm:w-4/5 md:w-2/3">
          <div className="absolute -top-2 -left-2 w-24 h-4 border-t-2 border-l-2 border-amber-500 z-10" />
          <div className="absolute -bottom-2 -right-2 w-24 h-4 border-b-2 border-r-2 border-amber-500 z-10" />
          <div className="absolute bottom-0 left-0 w-2 h-8 bg-amber-500 z-10" />
          <div className="absolute top-0 right-0 w-2 h-8 bg-amber-500 z-10" />
          <img
            src={houseImg}
            alt="Architectural Project"
            className="w-full object-cover"
            style={{ height: "200px" }}
          />
        </div>
      </div>

      {/* Stages Label */}
      <div className="px-4 sm:px-10 mb-6 sm:mb-16 sm:ml-10 md:ml-40">
        <p className="text-base sm:text-2xl text-gray-300">
          Our works goes through three stages
        </p>
      </div>

      {/* Divider */}
      <div className="px-4 sm:px-10 sm:ml-10">
        <hr className="border-gray-500" />
      </div>

      {/* Stages */}
      {stages.map((stage, idx) => (
        <div key={idx}>
          {/* Mobile layout: stacked. Desktop: grid */}
          <div className="px-4 sm:px-10 py-8 flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 items-start md:ml-10 lg:ml-40">
            {/* Number + Title + Button */}
            <div className="md:col-span-3 flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg sm:text-2xl font-semibold text-gray-300">
                  {stage.number}
                </span>
                <div className="w-6 h-px bg-amber-500" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold leading-tight mt-2 whitespace-pre-line">
                {stage.title}
              </h3>
              <button className="mt-4 md:mt-32 self-start border border-amber-500 text-white rounded-full px-4 py-1.5 text-sm flex items-center gap-2 hover:bg-amber-500 transition-all">
                View Project <span>→</span>
              </button>
            </div>

            {/* Image */}
            <div className="md:col-span-5 w-full">
              <div className="relative">
                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-amber-500 z-10" />
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full object-cover"
                  style={{ height: "180px" }}
                />
              </div>
            </div>

            {/* Description */}
            <div className="md:col-span-4 flex flex-col gap-3 pt-1">
              {stage.description.map((para, i) => (
                <p key={i} className="text-sm text-gray-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="px-4 sm:px-10">
            <hr className="border-gray-500" />
          </div>
        </div>
      ))}
    </div>
  );
}
