import React from "react";

const Assessment = () => {
  return (
    <div className="bg-white mb-10">
      <div className="max-w-7xl mx-auto overflow-auto py-12 px-8 mb-10 sm:px-10 lg:px-8 text-gray-600">
        <h1 className="text-3xl pt-12 mt-12 font-extrabold text-gray-900 sm:text-4xl py-5">
          Assessment
        </h1>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl py-5">
          Summary
        </h2>
        <p>
          British Columbia maintains an active oil and gas industry that
          includes unconventional extraction methods such as hydraulic
          fracturing. As Canada’s second-largest natural gas producer, British
          Columbia produced 5.75 billion cubic-feet of natural gas per day in
          2021, and in doing so contributed $632 million in royalties and crown
          land sales to the provincial government (1). However, this is not
          without consequence, as environmental effects from the oil and gas
          industry continue to be debated and studied, and fall into three main
          categories: groundwater contamination, greenhouse gas emissions, and
          induced seismicity. There is a need to balance the economic benefits
          that hydraulic fracturing can provide with these environmental risks
          to ensure that British Columbia is able to access and sell energy in a
          clean and responsible way.
        </p>
        <p className="mt-6">
          The recommendation presented here is to continue to allow hydraulic
          fracturing in British Columbia, with improvements being made for
          environmental monitoring around hydraulic fracturing sites for
          baseline water quality.
        </p>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl py-5">
          Background
        </h2>
        <p>
          Hydraulic fracturing (often called “fracking” for short) is the
          process of extracting hydrocarbons from deep within the earth’s
          surface using highly pressurized fluids. This occurs in multiple
          steps: drilling, surface casing, perforating the wellbore, and
          finally, fracturing (2). Drilling first occurs vertically for between
          two and three kilometres before being rotated 90 degrees and
          continuing horizontally for another kilometre. Next, casing and cement
          layers are applied around the newly created well to prevent
          contamination of nearby groundwater, and until this process is
          completed no toxic chemicals may be used in the well (water only) (3).
          Following the completion of the casing, a perforating gun is lowered
          into the well to create small divots in the horizontal section of the
          well. Finally, fracturing fluid composed of a mix of water, sand, and
          chemicals is pumped into the well at high pressure to fracture the
          earth around the divots created by the perforating gun. This allows
          natural gas to flow into the backflow and be captured at the surface.
        </p>
        <p className="mt-6">
          In British Columbia, the hydraulic fracturing process is regulated by
          the Oil and Gas Commission, and many steps listed above are closely
          regulated. Companies must apply for approval to begin the extraction
          process, and this process seeks to minimize multiple possible harms.
          In applying for water usage licenses companies must ensure that they
          will not impede on the needs of the local community or environment,
          wells must be double-lined up to the depth at which the groundwater
          supply has been passed, and fracturing fluid cannot be disposed of in
          any surface water (4).
        </p>
        <p className="mt-6">
          Environmental concerns from hydraulic fracturing are numerous,
          including water quantity, water quality, flowback storage, radioactive
          waste, noise, atmospheric emissions, and induced seismicity (5).
          Health concerns stem from the potential contamination of the water
          and/or air via the chemicals used in the fracturing fluid, and are
          less studied. For example, a recent study in Northeastern British
          Columbia examined the association between newborn head circumference
          and proximity to a hydraulic fracturing site (6). The study concluded
          that there was no association, however the fact that the question was
          studied indicates that there is ongoing concern about both the
          presence and effect of chemicals in the water supply.
        </p>
        <p className="mt-6">
          The issue of hydraulic fracturing has caught the attention of the
          public in both North America and Europe as it has been touted as a
          means to energy independence and a change from the import-centric
          status quo. A qualitative study involving participants from the United
          States and United Kingdom found that energy independence was perceived
          to be the biggest benefit, followed by the economy and jobs. Water
          quality and climate change were perceived as the two most prominent
          drawbacks (7).
        </p>
        <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl py-5">
          Analysis
        </h2>
        <p>
          There are numerous data sources available to inform policy decisions
          around hydraulic fracturing in British Columbia (8), mostly maintained
          by the Oil and Gas Commission described above. This analysis will
          focus on categorizing the components of the main risks for hydraulic
          fracturing: water contamination, air pollution, and induced
          seismicity.
        </p>
        <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl py-5">
          Water Contamination
        </h3>
        <table className="table-auto w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Component
              </th>
              <th className="px-6 py-3 bg-gray-50 border text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Risk Severity
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Severe.</b> Contamination of the water supply with chemicals
                used in the hydraulic fracturing process would lead to severe
                negative health outcomes. (9)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Likelihood
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Unlikely.</b> There has been no evidence of a major leak from
                a hydraulic fracturing site into groundwater in British Columbia
                to date.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Mitigation Methods
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Already in place.</b> There are already strict guidelines and
                regulatory practices in place that require casing and cementing
                past the depth at which groundwater is present. (3)
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 border break-words text-sm text-gray-500">
                Measurement and Uncertainty
              </td>
              <td class="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Not routinely measured, well understood.</b> There is a lack
                of baseline water quality data in British Columbia to establish
                if small levels of contamination were to be caused by a
                hydraulic fracturing site. If chemicals were to be found within
                the water, the human health effects are well understood. (9,10)
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl py-5">
          Surface Methane Emissions (Greenhouse Gases)
        </h3>
        <table className="table-auto w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 border break-words text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Component
              </th>
              <th className="px-6 py-3 bg-gray-50  border break-words text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Risk Severity
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Low.</b> Only 3% of upstream methane escapes through surface
                casing vent flow, and this is not believed to have significant
                negative impacts for human health. There have been concerns
                raised about nearby wildlife, and continued emission after site
                decommission. (10)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Likelihood
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Unlikely.</b> 9.4% of all wells drilled between 2000 and 2014
                were found to have SCVF related incidents. This number has
                dropped to 7.3% for wells drilled after 2015. (10)
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Mitigation Methods
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Already in place.</b> Regulations introduced in 2021 cap
                emissions at 100 cubic metres per day. A simple “bubble test” is
                recommended to test for SCVF problems, and can easily be
                implemented by industry. (10)
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 border break-words text-sm text-gray-500">
                Measurement and Uncertainty
              </td>
              <td class="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Routinely measured, well understood.</b> There is low
                uncertainty around how many wells have had incidents over the
                past two decades, but it is believed that this is more a symptom
                of measurement rather than actual deviations in real failures.
                There is limited evidence that shale gas development produces
                more methane than conventional gas, however these have been
                dismissed due to lack of applicability in the BC context. (10)
              </td>
            </tr>
          </tbody>
        </table>
        <h3 className="text-xl font-extrabold text-gray-900 sm:text-2xl py-5">
          Induced Seismicity
        </h3>
        <table className="table-auto w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 border break-words text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Component
              </th>
              <th className="px-6 py-3 bg-gray-50  border break-words text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Risk Severity
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Low, but increasing.</b> The maximum magnitude of induced
                seismic events in British Columbia grew from M 2.9 in 2006/7 to
                M 3.6 in 2011 (11). It is probable that M 5.0 earthquakes will
                occur in the future (12).
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Likelihood
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Likely.</b> Some levels of seismic activity result from any
                injection of pressured fluid into the earth, and it is not
                something that can be avoided as it is inherent to the process.
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                Mitigation Methods
              </td>
              <td className="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Already in place, flawed.</b> The industry uses a “traffic
                light protocol” in which there are pre-planned operational
                changes in response to seismic events that transpire following
                pressurized injection. This is viewed as flawed due to its
                reactive nature, and instead a preemptive approach is favoured.
                Injection must cease if seismic activity exceeds a threshold
                that varies by geographic region. (10)
              </td>
            </tr>
            <tr>
              <td class="px-6 py-4 border break-words text-sm text-gray-500">
                Measurement and Uncertainty
              </td>
              <td class="px-6 py-4 border break-words text-sm text-gray-500">
                <b>Routinely measured, not well understood.</b> There is a high
                degree of uncertainty around both the frequency of induced
                seismicity due to a lack of monitoring equipment and how the
                magnitude of earthquakes will increase in the future as the
                industry continues to operate in Northeastern British Columbia.
                (10)
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl py-5">
          Options
        </h2>
        <ol className="list-decimal list-inside bg-white p-6 rounded-lg shadow-md">
          <li>
            Allow hydraulic fracturing to continue with regulations as they
            currently are.
          </li>
          <li>
            Allow hydraulic fracturing to continue with a change in monitoring
            and/or regulations.
          </li>
          <li>Discontinue hydraulic fracturing.</li>
        </ol>
        <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl py-5">
          Recommendations
        </h2>
        <p className="mb-5">
          This body recommends that hydraulic fracturing be allowed to continue
          in British Columbia with current regulations, with the following
          changes.
        </p>
        <ol className="list-decimal list-inside bg-violet-100 p-6 rounded-lg shadow-lg">
          <li>
            Water quality measurement samples to be taken at the commencement of
            any hydraulic fracturing operation, paid for by the company that is
            drilling at the site. This is to be conducted by a representative of
            the BC Oil and Gas Commission during the initial safety inspection,
            and the company should be blind to the results of the test. At the
            conclusion of fracturing, a second water quality measurement test
            must be conducted to determine if there is any difference between
            the start and end measurements. Fines shall be levied should there
            be sufficient contamination, and the company audited prior to being
            approved for any further operations. Residents of any surrounding
            community may use the results of the tests in any suits for damages.
          </li>
        </ol>
        <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl py-5">
          References
        </h2>
        <ol className="list-decimal space-y-2">
          <li>
            Canada Oil Production | The Industry Across Canada [Internet]. CAPP
            | A Unified Voice for Canada’s Upstream Oil and Gas Industry. [cited
            2023 Feb 12]. Available from:
            https://www.capp.ca/economy/canadas-oil-and-natural-gas-production/
          </li>
          <li>
            Fracking in Canada | What is Hydraulic Fracturing & Is Fracking Bad?
            [Internet]. CAPP | A Unified Voice for Canada’s Upstream Oil and Gas
            Industry. [cited 2023 Feb 12]. Available from:
            https://www.capp.ca/explore/hydraulic-fracturing/
          </li>
          <li>
            Well Construction & Groundwater Protection | FracFocus Chemical
            Disclosure Registry [Internet]. [cited 2023 Feb 12]. Available from:
            http://fracfocus.ca/en/groundwater-protection/well-construction-groundwater-protection
          </li>
          <li>
            Water Use, Recycling and Injection | FracFocus Chemical Disclosure
            Registry [Internet]. [cited 2023 Feb 12]. Available from:
            http://fracfocus.ca/en/groundwater-protection/water-use-recycling-and-injection
          </li>
          <li>
            Rivard C, Lavoie D, Lefebvre R, Séjourné S, Lamontagne C, Duchesne
            M. An overview of Canadian shale gas production and environmental
            concerns. Int J Coal Geol. 2014 Jun 1;126:64–76.
          </li>
          <li>
            Caron-Beaudoin É, Whitworth KW, Bosson-Rieutort D, Wendling G, Liu
            S, Verner MA. Density and proximity to hydraulic fracturing wells
            and birth outcomes in Northeastern British Columbia, Canada. J Expo
            Sci Environ Epidemiol. 2021 Jan;31(1):53–61.
          </li>
          <li>
            Thomas M, Partridge T, Harthorn BH, Pidgeon N. Deliberating the
            perceived risks, benefits, and societal implications of shale gas
            and oil extraction by hydraulic fracturing in the US and UK. Nat
            Energy. 2017 Apr 10;2(5):1–7.
          </li>
          <li>
            Wisen J, Chesnaux R, Wendling G, Werring J, Barbecot F, Baudron P.
            Assessing the potential of cross-contamination from oil and gas
            hydraulic fracturing: A case study in northeastern British Columbia,
            Canada. J Environ Manage. 2019 Sep 15;246:275–82.
          </li>
          <li>
            Colborn T, Kwiatkowski C, Schultz K, Bachran M. Natural Gas
            Operations from a Public Health Perspective. Hum Ecol Risk Assess
            Int J. 2011 Sep 1;17(5):1039–56.
          </li>
          <li>
            Scientific Hydraulic Fracturing Review Panel. Scientific Review of
            Hydraulic Fracturing in British Columbia. 2019 Feb.
          </li>
          <li>
            Farahbod AM, Kao H, Walker DM, Cassidy JF. Investigation of regional
            seismicity before and after hydraulic fracturing in the Horn River
            Basin, northeast British Columbia. Can J Earth Sci. 2015
            Feb;52(2):112–22.
          </li>
          <li>
            Chapman AR. Hydraulic Fracturing, Cumulative Development and
            Earthquakes in the Peace River Region of British Columbia, Canada. J
            Geosci Environ Prot. 2021 May 20;9(5):55–82.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Assessment;
