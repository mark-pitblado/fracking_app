import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-gray-600">
        <h1 className="text-3xl mt-12 font-extrabold text-gray-900 sm:text-4xl py-5">
          About
        </h1>
        <p className="mt-3">
          This website was created as part of a university assignment and to
          learn react and tailwindcss. I make no warranty as to the accuracy of
          the information provided on this website, and I am not responsible for
          any errors or omissions. The information provided on this website is
          for informational purposes only. I have made efforts to correctly
          attribute all information sourced and to provide links to the original
          source. If you believe that I have not correctly attributed any
          information, please contact me and I will correct the issue.
        </p>
        <p className="mt-3">
          All components used in this website are open source. If you would like
          to see the source code, please visit my{" "}
          <a
            href="https://github.com/articFox-git"
            className="text-violet-300 underline"
          >
            github
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
