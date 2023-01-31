import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="relative z-0 bg-gradient-to-r from-violet-200 to-fuchsia-100 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              This site is for educational purposes only{" "}
              <Link to="/disclaimer" className="font-semibold text-violet-700">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hydraulic Fracturing in British Columbia
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I made this site because fracfocus.ca hasn't updated their ssl,
              and that bothered me.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://canvas.ubc.ca"
                className="rounded-md bg-violet-700 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-violet-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-700"
              >
                Discuss
              </a>
              <Link
                to="/extraction"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
