import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-900 to-black border-b-[1px] py-4 border-b-gray-600 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Two Years Warranty */}
        <div className="flex items-center gap-3 w-72 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 bg-[#1a1a1a] rounded-md p-3 border border-cyan-500">
          <span className="font-bold font-titleFont w-6 text-center text-green-500 text-lg">2</span>
          <p className="text-gray-300 text-base">Two years warranty</p>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center gap-3 w-72 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 bg-[#1a1a1a] rounded-md p-3 border border-cyan-500">
          <span className="text-2xl text-green-500 text-center w-6 ml-1">
            <MdLocalShipping />
          </span>
          <p className="text-gray-300 text-base">Free shipping</p>
        </div>

        {/* Return Policy */}
        <div className="flex items-center gap-3 w-72 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 bg-[#1a1a1a] rounded-md p-3 border border-cyan-500">
          <span className="text-2xl text-green-500 text-center w-6">
            <CgRedo />
          </span>
          <p className="text-gray-300 text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
