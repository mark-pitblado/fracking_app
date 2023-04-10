import React from "react";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPlotly } from "react-icons/si";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="md:fixed bottom-0 left-0 z-20 w-full p-8 flex-col md:flex-row bg-white border-t border-gray-200 shadow flex items-center justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        Created with <FaHeart className="inline" /> by{" "}
        <a href="https://www.markpitblado.me" class="hover:underline">
          Mark Pitblado
        </a>
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link to="/about" class="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/licensing" class="mr-4 hover:underline md:mr-6">
            Licensing
          </Link>
        </li>
        <li>
          <a href="https://www.markpitblado.me/contact" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
      <span class="flex items-center mt-3 text-sm text-gray-500 sm:mt-0">
        <span className="mr-3">Made with:</span>
        <FaPython className="fill-violet-400 mr-3 w-5 h-5" />
        <SiTailwindcss className="fill-violet-400 mr-3  w-5 h-5" />
        <SiReact className="fill-violet-400 mr-3 w-5 h-5" />
        <SiPlotly className="fill-violet-400 mr-3 w-5 h-5"></SiPlotly>{" "}
      </span>
    </footer>
  );
};

export default Footer;
