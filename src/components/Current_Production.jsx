import React from "react";
import { FaGithub } from "react-icons/fa";
import Map from "../assets/map.png";

const Current_Production = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-600">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl py-5">
          Current Production
        </h1>
        <p>
          I am in the process of integrating a separate server that will allow
          this plot to be interactive within this website.
          <p className="mt-3">
            Source:{" "}
            <a
              href="https://data-bcogc.opendata.arcgis.com/datasets/5ace26f614b9435492d679d766430143_0"
              className="text-violet-400 underline"
            >
              BC Open Data
            </a>
          </p>
          <p className="mt-3">
            Created using python and plotly, code can be found on my github.
          </p>
        </p>
        <div>
          <a href="https://github.com/arcticFox-git">
            <FaGithub className="fill-violet-400 mt-5 w-5 h-5" />
          </a>
        </div>
        <img
          src={Map}
          alt="Map of Oil and Gas Producers in BC"
          className="max-w-7xl py-12 px-4 sm:px-6 lg:px-8 mt-15 mb-5"
        />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-600"></div>
      </div>
    </div>
  );
};

export default Current_Production;
