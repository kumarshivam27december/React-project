import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { bannerImgOne, bannerImgTwo, bannerImgThree } from "../../assets/images";
import Image from "../designLayouts/Image";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px", color: "#00FF00" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#00FF00",
                borderRight: "3px solid #00FF00",
                padding: "8px 0",
                cursor: "pointer",
                backgroundColor: "#222222",
                borderRadius: "5px",
                transition: "all 0.3s ease",
                textShadow: "0 0 5px #00FF00, 0 0 10px #00FF00",
                fontSize: "14px",
              }
            : {
                width: "30px",
                color: "#333",
                borderRight: "3px solid #333",
                padding: "8px 0",
                cursor: "pointer",
                backgroundColor: "#333333",
                borderRadius: "5px",
                transition: "all 0.3s ease",
                textShadow: "0 0 5px #333, 0 0 10px #333",
                fontSize: "14px",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px", color: "#00FF00" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#00FF00",
                      borderRight: "3px solid #00FF00",
                      cursor: "pointer",
                      fontSize: "12px",
                      backgroundColor: "#222222",
                      borderRadius: "5px",
                      transition: "all 0.3s ease",
                      textShadow: "0 0 5px #00FF00, 0 0 10px #00FF00",
                    }
                  : {
                      width: "25px",
                      color: "#333",
                      borderRight: "3px solid #333",
                      cursor: "pointer",
                      fontSize: "12px",
                      backgroundColor: "#333333",
                      borderRadius: "5px",
                      transition: "all 0.3s ease",
                      textShadow: "0 0 5px #333, 0 0 10px #333",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full bg-[#121212] py-4 relative"> {/* Reduced padding */}
      <Slider {...settings}>
        <Link to="/offer">
          <div>
            <Image
              imgSrc={bannerImgOne}
              className="h-64 md:h-80 lg:h-96 w-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300 ease-in-out" // Set max height
            />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image
              imgSrc={bannerImgTwo}
              className="h-64 md:h-80 lg:h-96 w-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300 ease-in-out" // Set max height
            />
          </div>
        </Link>
        <Link to="/offer">
          <div>
            <Image
              imgSrc={bannerImgThree}
              className="h-64 md:h-80 lg:h-96 w-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300 ease-in-out" // Set max height
            />
          </div>
        </Link>
      </Slider>
    </div>
  );
};

export default Banner;
