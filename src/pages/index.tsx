import React, { MouseEvent as ReactMouseEvent, useRef } from "react";
import Helmet from "react-helmet";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useColorByDayProgress } from "../hooks/use-color-by-day-progress";
import { openCrisp } from "../utils/open-crisp";

function onChatClick(e: ReactMouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  openCrisp();
}

export default function Index() {
  const ref = useRef(null);
  const color = useColorByDayProgress();

  // INFO: Do not generate time based color on the build generation
  const backgroundColor = ref.current ? color : undefined;

  return (
    <>
      <Helmet bodyAttributes={{ class: "antialiased" }}>
        <link
          rel="preload"
          href="https://rsms.me/inter/inter.css"
          as="font"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div
        ref={ref}
        className="flex flex-col items-center justify-center w-screen h-screen text-center bg-gray-400 "
        style={{ backgroundColor }}
      >
        <div className="px-4 max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Hello, I'm Nolan
          </h1>
          <p className="my-4 text-lg font-thin text-gray-100 md:text-xl xl:text-2xl ">
            Full Stack | Javascript | React.js | Node.js
          </p>
          <div className="flex items-center justify-center w-full my-4 mt-12">
            <a href="https://github.com/nolanrigo" className="mx-2">
              <FaGithub className="w-12 h-12 text-gray-100 hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/nolanrigo" className="mx-2">
              <FaLinkedin className="w-12 h-12 text-gray-100 hover:text-white" />
            </a>
            <a href="https://twitter.com/nolanrigo" className="mx-2">
              <FaTwitterSquare className="w-12 h-12 text-gray-100 hover:text-white transition-colors duration-100" />
            </a>
            <a href="#" onClick={onChatClick} className="mx-2">
              <BsChatSquareQuoteFill className="w-12 h-12 text-gray-100 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
