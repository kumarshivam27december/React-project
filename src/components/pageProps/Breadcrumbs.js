import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 xl:py-10 flex flex-col gap-3 bg-[#121212]">
      <h1 className="text-5xl text-green-500 font-titleFont font-bold">
        {title}
      </h1>
      <p className="text-sm font-normal text-cyan-300 capitalize flex items-center">
        <span className="text-white"> 
          {prevLocation === "" ? "Home" : prevLocation}
        </span>
        <span className="px-1 text-cyan-500">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold text-green-500">
          {locationPath}
        </span>
      </p>
    </div>
  );
};

export default Breadcrumbs;
