import React, { useState } from "react";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import Pagination from "../../components/pageProps/shopPage/Pagination";
import ProductBanner from "../../components/pageProps/shopPage/ProductBanner";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4 bg-gradient-to-r from-gray-900 via-green-800 to-black">
      {/* Breadcrumbs with curved corners */}
      <Breadcrumbs 
        title="Products" 
        className="text-green-400"
        containerClassName="bg-black p-4 rounded-lg" // Add rounded-lg to give it curved corners
      />
      
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex justify-center pb-20">
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10 bg-gray-900 shadow-lg rounded-lg p-4 border border-green-600">
          <ProductBanner 
            itemsPerPageFromBanner={itemsPerPageFromBanner} 
            className="bg-gradient-to-b from-green-800 to-black p-2 rounded-md text-green-300"
          />
          <Pagination 
            itemsPerPage={itemsPerPage} 
            className="bg-gray-800 p-2 rounded-md border border-green-600 text-green-300"
          />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
