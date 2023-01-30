import React from "react";
import Regulation1 from "../assets/regulation_1.jpg";
import Regulation2 from "../assets/regulation_2.jpg";
import Regulation3 from "../assets/regulation_3.jpg";
import Regulation4 from "../assets/regulation_4.jpg";

const features = [
  {
    name: "Casing and Cementing",
    description:
      "Wells go through a process of alternating cement and casing at different layers. Until this process is successfully completed, only water (non-toxic) can be pumped into the well.",
  },
  {
    name: "Water Usage",
    description:
      "Licenses for water usage must be reviewed prior to commencement of operations. There must be enough water available to meet the surrounding community and environment.",
  },
  {
    name: "Waste Management",
    description:
      "Waste water from the fracturing process is prohibited from being disposed of at the surface in British Columbia, and is therefore either buried deep underground or recycled for future hydraulic fracturing activities. ",
  },
  {
    name: "Safety Data Sheets",
    description:
      "All chemicals used in the process of hydraulic fracturing must have an up to date safety data sheet. Chemicals used in British Columbia are listed on the fracfocus.ca website",
  },
];

const Oversight = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-8 gap-x-8 py-2 px-4 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Government Oversight
          </h2>
          <p className="mt-4 text-gray-500">
            Hydraulic fracturing in British Columbia is regulated by the{" "}
            <a
              href="https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/08036_01"
              className="text-violet-400 underline"
            >
              {" "}
              Oil and Gas Activities Act
            </a>
            . This is enforced through the BC Oil and Gas Commission, an entity
            funded through industry fees and accountable to the BC Ministry of
            Energy, Mines and Low Carbon Innovation. The commission is governed
            by a board of directors that oversees the commission's activities
            and is responsible for ensuring that the commission is fulfilling
            its mandate. The members of the board are paid, and the most recent
            payment information can be found{" "}
            <a
              href="https://www.bcogc.ca/files/publications/Board-Documents/Consultant-Fees-Fiscal-Year-End-March-31-2021.pdf"
              className="text-violet-400 underline"
            >
              here
            </a>
            .
          </p>

          <dl className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-8">
          <img
            src={Regulation1}
            alt="A brown bear"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={Regulation2}
            alt="A road in the forest"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={Regulation3}
            alt="Water flowing in a stream"
            className="rounded-lg bg-gray-100"
          />
          <img
            src={Regulation4}
            alt="Power lines"
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Oversight;
