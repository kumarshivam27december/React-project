import React, { useState } from "react";
import SpecialOffers from "../../components/home/SpecialOffers/SpecialOffers";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Offer = () => {
  const [prevLocation] = useState("");

  return (
    <div className="offer-container">
      <Breadcrumbs title="Offer" prevLocation={prevLocation} />
      <div className="offers-content">
        <SpecialOffers />
      </div>
      <style jsx>{`
        .offer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(135deg, #ffc3a0, #c3f5a0, #f3c0ff);
          border-radius: 8px;
          transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
        }

        .offer-container:hover {
          transform: scale(1.02);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
        }

        .offers-content {
          padding-bottom: 40px;
          transition: background 0.3s ease-in-out;
        }

        .offers-content:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Offer;
