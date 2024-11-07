import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-green-900 to-black">
      <div className="max-w-container mx-auto px-4 p-6 bg-gray-800 rounded-md shadow-lg">
        <Breadcrumbs title="Journals" prevLocation={prevLocation} className="text-green-400" />
        <div className="text-center py-10">
          <h1 className="max-w-[600px] mx-auto text-lg text-green-300 mb-6 font-medium p-4 rounded-md shadow-md border-l-4 border-green-500">
            <span className="text-green-400 font-bold text-xl">Glitch</span> — Welcome to the Glitch Journal—where the boundaries of fashion, tech, and art collide in vibrant, unexpected ways. Here, every article is crafted to pull you into a world of digital distortion, glitch-inspired designs, and curated trends that challenge the ordinary. Dive into our stories to explore fashion’s latest frontiers, discover tech that disrupts, and find style inspiration that redefines the present. Embrace the glitch and transform your look with every page.
          </h1>
          <Link to="/shop">
            <button className="w-52 h-12 bg-green-600 text-gray-100 text-lg font-semibold hover:bg-green-700 duration-300 rounded-md shadow-lg mt-4">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
