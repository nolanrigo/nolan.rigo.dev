import React, { MouseEvent as ReactMouseEvent } from "react";
import Helmet from "react-helmet";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { openCrisp } from "../utils/open-crisp";

function onChatClick(e: ReactMouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  openCrisp();
}

export default function Index() {
  return (
    <>
      <Helmet bodyAttributes={{ class: "antialiased" }}>
        <title>Nolan Rigo - Javascript developer</title>
        <link
          rel="preload"
          href="https://rsms.me/inter/inter.css"
          as="font"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-blue-600">
        <div className="px-4 max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Hello, I'm Nolan
          </h1>
          <p className="my-4 text-lg font-thin text-gray-100 md:text-xl xl:text-2xl ">
            Full Stack | Javascript | React.js | Node.js
          </p>
          <div className="w-full my-4 mt-12 grid grid-cols-2 sm:grid-cols-4">
            <a
              href="https://github.com/nolanrigo"
              className="flex flex-col items-center p-4 text-gray-100 hover:text-white"
            >
              <FaGithub className="w-12 h-12 mb-2" />
              <p className="font-thin">My projects</p>
            </a>
            <a
              href="https://linkedin.com/in/nolanrigo"
              className="flex flex-col items-center p-4 text-gray-100 hover:text-white"
            >
              <FaLinkedin className="w-12 h-12 mb-2" />
              <p className="font-thin">My resume</p>
            </a>
            <a
              href="https://twitter.com/nolanrigo"
              className="flex flex-col items-center p-4 text-gray-100 hover:text-white"
            >
              <FaTwitterSquare className="w-12 h-12 mb-2" />
              <p className="font-thin">My life</p>
            </a>
            <a
              href="#"
              onClick={onChatClick}
              className="flex flex-col items-center p-4 text-gray-100 hover:text-white"
            >
              <BsChatSquareQuoteFill className="w-12 h-12 mb-2" />
              <p className="font-thin">Let's talk !</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
