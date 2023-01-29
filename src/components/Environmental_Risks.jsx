import React from "react";
import { MegaphoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import DangersOfFracking from "../assets/dangers_of_fracking.jpg";

const Environmental_Factors = () => {
  function toggle(elementId) {
    const element = document.getElementById(elementId);
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  return (
    <div className="bg-white">
      <section>
        <div id="target" className="bg-violet-700">
          <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex w-0 flex-1 items-center">
                <span className="flex rounded-lg bg-violet-900 p-2">
                  <MegaphoneIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
                <p className="ml-3 truncate font-medium text-white">
                  <span className="hidden md:inline">
                    The government of British Columbia recently completed a full
                    scientific review of the safety of the fracking process
                  </span>
                </p>
              </div>
              <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="http://www2.gov.bc.ca/assets/gov/farming-natural-resources-and-industry/natural-gas-oil/responsible-oil-gas-development/scientific_hydraulic_fracturing_review_panel_final_report.pdf"
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm hover:bg-indigo-50"
                >
                  Read the report
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button
                  id="toggler"
                  type="button"
                  className="-mr-1 flex rounded-md p-2 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  onClick={() => toggle("target")}
                >
                  <span className="sr-only">Dismiss</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 items-top gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mt-0 text-gray-900 sm:text-4xl">
              Environmental Risks
            </h2>
            <h3 className="text-xl font-bold leading-8 tracking-tight mt-5 text-gray-900 underline underline-offset-8 decoration-violet-500">
              Water Contamination
            </h3>
            <p className="mt-4 text-gray-500">
              There are two principle ways that fracking can contaminate water.
              The first is via leakage within the well into the water table,
              which communities may then draw upon for drinking or bathing. The
              second is via disposal of the wastewater which is produced during
              the fracking process. In British Columbia, disposing of wastewater
              is prohibited on the surface, so it is instead injected into deep
              wells. While chemicals are required to be disclosed publicly,
              there are exemptions made for proprietary information and
              trade-secrets. This means that the communities which have
              hydraulic fracturing sites near them may not have full and
              complete knowledge of the risks that they are facing, a serious
              concern given the potentially harmful effects of the chemicals
              used. An analysis of harmful effects that can result from the
              chemicals used in the fracking process can be found{" "}
              <a
                href="https://doi.org/10.1080/10807039.2011.605662"
                className="text-violet-400 underline"
              >
                here
              </a>
            </p>
            <div className="bg-yellow-100 rounded-md p-4 mt-4">
              <h4 className="text-lg font-bold leading-8 tracking-tight mt-1 text-gray-900">
                Mitigation Measures
              </h4>
              <p className=" mt-4 text-gray-500">
                The 2019 report by the Ministry of Energy, Mines and Low Carbon
                Innovation found that the level of baseline monitoring on ground
                and surface water to be insufficient for the size of the
                industry, and recommended that the government increase
                collection of this data to better determine the extent of water
                contamination if it occurs.
              </p>
            </div>
            <h3 className="text-xl font-bold leading-8 tracking-tight mt-5 text-gray-900 underline underline-offset-8 decoration-violet-500">
              Methane Emissions
            </h3>
            <p className="mt-4 text-gray-500">
              Methane is a potent greenhouse gas, and is released into the
              atmosphere during the fracking process. From a green-house gas
              perspective, methane warms the earth 25 times as much as carbon
              dioxide, according to the{" "}
              <a
                href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases"
                className="text-violet-400 underline"
              >
                Environmental Protection Agency
              </a>
              . As global temperatures rise, ecological systems are disrupted
              and on a global level communities that already live in hot
              climates face unbearable temperatures. This results in higher
              mortality, as studied by Calleja-Aguis et al. {""}
              <a
                href="https://doi.org/10.1016%2Fj.earlhumdev.2020.105222"
                className="text-violet-400 underline"
              >
                here
              </a>
              .
            </p>
            <div className="bg-yellow-100 rounded-md p-4 mt-4">
              <h4 className="text-lg font-bold leading-8 tracking-tight mt-1 text-gray-900">
                Mitigation Measures
              </h4>
              <p className=" mt-4 text-gray-500">
                Methane emissions from fracking were found to not be a major
                contributor to methane emissions relative to other sources (3%
                of total). New regulations will limit the amount of methane that
                can be released from a single well, and this is expected to
                reduce the total amount of methane released by half.
              </p>
            </div>
            <h3 className="text-xl font-bold leading-8 tracking-tight mt-5 text-gray-900 underline underline-offset-8 decoration-violet-500">
              Increase in Earthquakes
            </h3>
            <p className="mt-4 text-gray-500">
              <a
                href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2021JB022750"
                className="text-violet-400 underline"
              >
                A study{" "}
              </a>
              published last year concluded that the rate of earthquakes in
              North Eastern British Columbia has risen substantially over the
              last decade. Work done by Samuel Makinde, a masters student in the
              Faculty of Land and Food Systems at UBC also{" "}
              <a
                href="https://lfs-mlws-2020.sites.olt.ubc.ca/files/2019/09/Makinde-2019-Environmental-Impact-Assessment-of-Hydraulic-Fracturing-in-Northeastern-BC.pdf"
                className="text-violet-400 underline"
              >
                indicates
              </a>{" "}
              that if fracking continues that the rate and magnitude of
              earthquakes will continue to increase.
            </p>
            <div className="bg-yellow-100 rounded-md p-4 mt-4">
              <h4 className="text-lg font-bold leading-8 tracking-tight mt-1 text-gray-900">
                Mitigation Measures
              </h4>
              <p className=" mt-4 text-gray-500">
                There are no plausible mitigation methods for increased seismic
                activity. Rather, this outcome has a great deal of uncertainty
                around it due to the lack of data on the subject, and the
                experts expressed a great deal of uncertainty. It is important
                to note that small earthquakes are not likely to cause immediate
                harm, and many small earthquakes occur every day worldwide.
              </p>
            </div>
          </div>
          <div className="grid grid-flow-col gap-8">
            <div class="relative">
              <img
                src={DangersOfFracking}
                alt="Dangers of Fracking"
                className="rounded-lg bg-gray-100"
              />
              <div class="bottom-0 left-0 p-4 text-left text-black">
                <p class="text-xs font-medium">
                  Image credit:{" "}
                  <a href="https://bcmj.org/cohp/fracking-bc-public-health-concern#a1">
                    BCMJ - Fracking in BC: A Public Health Concern
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Environmental_Factors;
