import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/home/BestSellers/BestSellers";
import NewArrivals from "../../components/home/NewArrivals/NewArrivals";
import Sale from "../../components/home/Sale/Sale";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import YearProduct from "../../components/home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-b from-black via-gray-900 to-black p-6">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4 bg-gray-900 shadow-xl rounded-md p-6 border border-green-700">
        {/* Section Headers */}
        <h2 className="text-2xl font-bold text-center text-green-400 mb-4">
          Exclusive Sales
        </h2>
        <Sale />

        <h2 className="text-2xl font-bold text-center text-green-400 mt-12 mb-4">
          New Arrivals
        </h2>
        <NewArrivals />

        <h2 className="text-2xl font-bold text-center text-green-400 mt-12 mb-4">
          Best Sellers
        </h2>
        <BestSellers />

        <h2 className="text-2xl font-bold text-center text-green-400 mt-12 mb-4">
          Product of the Year
        </h2>
        <YearProduct />

        <h2 className="text-2xl font-bold text-center text-green-400 mt-12 mb-4">
          Special Offers
        </h2>
        <SpecialOffers />
      </div>

      <style jsx>{`
        .max-w-container {
          font-family: "Courier New", Courier, monospace;
        }

        h2 {
          text-shadow: 0 0 10px #33ff33, 0 0 20px #1aff1a;
        }

        .bg-gray-900 {
          background: linear-gradient(to right, #0d0d0d, #1a1a1a);
        }

        .border {
          box-shadow: 0 0 15px #33ff33;
        }
      `}</style>
    </div>
  );
};

export default Home;
