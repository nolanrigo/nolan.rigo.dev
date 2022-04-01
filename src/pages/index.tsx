import React, { MouseEvent as ReactMouseEvent } from "react";
import Helmet from "react-helmet";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";
import { openCrisp } from "../utils/open-crisp";

function onChatClick(e: ReactMouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  openCrisp();
}

export default function Index() {
  return (
    <>
      <Helmet bodyAttributes={{ class: "antialiased" }}>
        <title>Noolan Rigo - Web developer</title>
        <a rel="me" href="https://mamot.fr/@nolan">
          Mastodon
        </a>
        <link
          rel="preload"
          href="https://rsms.me/inter/inter.css"
          as="font"
          crossOrigin="anonymous"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center w-screen h-screen text-center bg-white">
        <div className="px-4 max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl xl:text-6xl">
            Hello, I'm Nolan
          </h1>
          <p className="my-4 text-lg font-thin text-gray-800 md:text-xl xl:text-2xl ">
            Full Stack | Javascript | React.js | Node.js
          </p>
          <div className="w-full my-4 mt-12 grid grid-cols-2 sm:grid-cols-4">
            <a
              href="https://github.com/nolanrigo"
              className="flex flex-col items-center p-4 text-gray-800 hover:text-gray-900"
            >
              <FaGithub className="w-12 h-12 mb-2" />
              <p className="font-thin">Github</p>
            </a>
            <a
              href="https://mamot.fr/@nolan"
              className="flex flex-col items-center p-4 text-gray-800 hover:text-gray-900"
            >
              <FaMastodon className="w-12 h-12 mb-2" />
              <p className="font-thin">Mastodon</p>
            </a>
            <a
              href="https://linkedin.com/in/nolanrigo"
              className="flex flex-col items-center p-4 text-gray-800 hover:text-gray-900"
            >
              <FaLinkedin className="w-12 h-12 mb-2" />
              <p className="font-thin">Linkedin</p>
            </a>
            <a
              href="#"
              onClick={onChatClick}
              className="flex flex-col items-center p-4 text-gray-800 hover:text-gray-900"
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
