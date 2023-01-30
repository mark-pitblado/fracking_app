import React from "react";
import { GiEdgeCrack } from "react-icons/gi";
import { GiUndergroundCave } from "react-icons/gi";
import { GiNuclearWaste } from "react-icons/gi";
// import DrillingOverview from "public/assets/bc_map_of_fracking.png";

const steps = [
  {
    name: "Drilling Stage",
    description:
      "A welbore is used to drill vertically into the earth for a depth of approximately 3000 metres. After it has reached this depth, the drill bit is rotated and a hole is drilled horizontally for approximately 1.5 kilometres within the shale layer. Once the well is drilled, a perforation gun is lowered into the well and fired to create a series of holes in the shale layer.",
    icon: GiUndergroundCave,
  },
  {
    name: "Hydraulic Fracturing Stage",
    description:
      "A mix of water, propellants and chemical additives is pumped at high pressure into the well created during the Drilling stage. The intense pressure causes the liquid to cause tiny cracks in the shale layer to from from the divots left by the perforation gun. These cracks allow natural gas to flow into the well and the gas rises to the surface as bubbles through the liquid. The gas is then collected and transported to a processing facility.",
    icon: GiEdgeCrack,
  },
  {
    name: "Processing and Waste Disposal Stage",
    description:
      "Flowback from the well contains both the gas and the liquid used to fracture the shale layer. While the flowback contains less than 1% chemical additives according to fracfocus.ca, the flowback can also contain small amounts of radioactive material. This water can either be sent to water treatment plants, or in can be injected into deep underground wells. While the water that is used in the process is dwarfed by industries such as agriculture, the amount of water used in the entire process can be significant for a town's local water supply.",
    icon: GiNuclearWaste,
  },
];

export const Extraction = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Overview
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Basics of Fracking
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Hydraulic fracturing (or fracking for short) is the process of
                digging deep into the earth to extract hydrocarbons created from
                the remains of ancient plants and animals.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {steps.map((steps) => (
                  <div key={steps.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <steps.icon
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {steps.name}
                    </dt>{" "}
                    <dd className="inline">{steps.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div class="relative">
            <img
              src="drilling_overview.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
            <div class="bottom-0 left-0 p-4 text-left text-black">
              <p class="text-xs font-medium">
                Image credit:{" "}
                <a href="https://www.capp.ca/natural-gas/drilling-and-fracturing/">
                  The Canadian Association of Petroleum Producers
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extraction;
