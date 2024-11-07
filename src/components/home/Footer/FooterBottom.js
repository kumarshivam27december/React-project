import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#0A0A0A] group">
      <div className="max-w-container mx-auto border-t-[1px] border-gray-600 pt-10 pb-20">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-gray-400 duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2022 | Glitch shopping | All Rights Reserved |
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-green-500">
              Powered by React
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
