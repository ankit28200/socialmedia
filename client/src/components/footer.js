import React from "react";
import "../index.css";
const Footer = () => {
  return (
    <div>
      <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer mt-32">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
          <div className="flex flex-[0.5] justify-center items-center">
            <h3 className="text-white font-bold text-xl ">Frenzone</h3>
          </div>
          <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
            <a
              href="https://twitter.com/0xMishra"
              target="_blank"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Twitter
            </a>
            <a
              href="http://discordapp.com/users/769610841912770560"
              target="_blank"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Discord
            </a>
            <a
              href="https://github.com/mishra811/frenzone"
              target="_blank"
              className="text-white text-base text-center mx-2 cursor-pointer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
          <p className="text-white text-sm text-center">
            Built and shipped by{" "}
            <a href="https://twitter.com/0xMishra" target="_blank">
              Kundan Mishra
            </a>
          </p>
          <p className="text-white text-sm text-center font-medium mt-2">
            <a href="mailto:mishrakundan073@gmail.com">info@frenzone.com</a>
          </p>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
          <p className="text-white text-left text-xs">@frenzone2022</p>
          <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
