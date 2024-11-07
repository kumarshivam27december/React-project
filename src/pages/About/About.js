import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4 bg-gradient-to-r from-gray-800 via-green-900 to-black rounded-md p-6 shadow-lg">
      <Breadcrumbs title="About" className="text-green-400" />

      <div className="content-section pb-10">
        <h1 className="text-4xl font-bold text-green-300 mb-6">
          <span className="highlight-green">Glitch</span> - Redefining Fashion for the Modern World
        </h1>

        <div className="description text-lg text-green-300">
          <p>
            <span className="highlight-green">Glitch</span> is not just an e-commerce platform; it’s a destination for style enthusiasts worldwide. With an emphasis on both heritage and contemporary aesthetics, we offer a diverse selection of apparel, accessories, and more that embodies timeless elegance and cutting-edge fashion.
          </p>
          <p className="mt-4">
            As a brand, <span className="highlight-green">Glitch</span> focuses on quality, authenticity, and a commitment to sustainability. Our products are sourced from ethical suppliers and designed with care, ensuring that each piece not only meets high standards but also contributes to a positive impact on the world.
          </p>
        </div>

        <div className="additional-info mt-8 text-lg text-green-300">
          <p>
            Whether you’re looking to elevate your everyday wardrobe or searching for exclusive, limited-edition pieces, <span className="highlight-green">Glitch</span> offers an unparalleled selection. Each item on our site is handpicked by fashion experts who understand the nuances of global style and the desires of today’s sophisticated shopper.
          </p>
          <p className="mt-4">
            Our customer experience is as important as our product range. With easy navigation, secure checkout, and worldwide shipping, <span className="highlight-green">Glitch</span> ensures a seamless shopping journey from browsing to purchase and beyond.
          </p>
        </div>

        <div className="cta-button-container mt-10">
          <Link to="/shop">
            <button className="w-44 bg-lime-600 text-gray-900 h-12 font-titleFont text-base tracking-wide font-semibold rounded-lg hover:bg-lime-500 duration-200 mt-4">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .highlight-green {
          color: #33ff33;
          text-shadow: 0 0 5px #33ff33;
        }

        .content-section {
          font-family: "Courier New", Courier, monospace;
        }

        .description p,
        .additional-info p {
          background: rgba(0, 0, 0, 0.6);
          padding: 10px;
          border-left: 4px solid #33ff33;
          margin-bottom: 16px;
        }

        .cta-button-container button {
          border: 2px solid #33ff33;
          box-shadow: 0 0 10px #33ff33;
        }
      `}</style>
    </div>
  );
};

export default About;
