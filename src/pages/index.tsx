import c from "classnames";
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

  const ssr = !ref.current;

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
        className="flex flex-col items-center justify-center w-screen h-screen text-center bg-gray-100 transition-colors duration-100"
        style={{ backgroundColor: ssr ? undefined : color }}
      >
        <div className="px-4 max-w-7xl sm:px-6 lg:px-8">
          <h1
            className={c(
              "text-4xl font-bold tracking-tight  md:text-5xl xl:text-6xl transition-colors duration-100",
              ssr ? "text-gray-700" : "text-white",
            )}
          >
            Hello, I'm Nolan
          </h1>
          <p
            className={c(
              "my-4 text-lg font-thin text-gray-100 md:text-xl xl:text-2xl transition-opacity duration-100",
              ssr ? "opacity-0" : "opacity-100",
            )}
          >
            Full Stack | Javascript | React.js | Node.js
          </p>
          <div
            className={c(
              "flex items-center justify-center w-full my-4 mt-12 transition-opacity duration-100",
              ssr ? "opacity-0" : "opacity-100",
            )}
          >
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
