
import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from "react-redux";

const SpecialCase = () => {
  const products = useSelector((state) => state.orebiReducer.products);

  return (
    <div className="fixed top-52 right-2 z-20 hidden md:flex flex-col gap-3">
      <Link to="/signin">
        <div className="bg-gradient-to-r from-green-200 to-blue-200 w-16 h-[70px] rounded-md flex flex-col gap-1 text-blue-800 justify-center items-center shadow-lg overflow-x-hidden group cursor-pointer transition-all duration-300 hover:scale-105">
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-300" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Profile</p>
        </div>
      </Link>
      <Link to="/cart">
        <div className="bg-gradient-to-r from-pink-200 to-yellow-200 w-16 h-[70px] rounded-md flex flex-col gap-1 text-blue-800 justify-center items-center shadow-lg overflow-x-hidden group cursor-pointer relative transition-all duration-300 hover:scale-105">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-300" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-300" />
          </div>
          <p className="text-xs font-semibold font-titleFont">Buy Now</p>
          {products.length > 0 && (
            <p className="absolute top-1 right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
              {products.length}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
