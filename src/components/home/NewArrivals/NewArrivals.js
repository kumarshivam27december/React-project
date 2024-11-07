import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="T-shirt"
            price="44.00"
            color="Black"
            badge={true}
            des="Experience ultimate comfort with our premium t-shirt, made from soft, high-quality materials, perfect for lounging, working out, or running errands."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="250.00"
            color="Black"
            badge={true}
            des="Stay connected with this sleek smart watch. Featuring advanced health tracking, notifications, and a customizable interface, it’s perfect for the tech-savvy."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Cloth Basket"
            price="80.00"
            color="Mixed"
            badge={true}
            des="A versatile cloth basket that complements any room decor. Ideal for organizing toys, laundry, or essentials, with a soft fabric and durable build."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="Kurti dress"
            price="60.00"
            color="Mixed"
            badge={false}
            des="Colorful and entertaining clothes for ladies that is comfortable as well as stylish."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrTwo}
            productName="Funny Toys for Babies"
            price="60.00"
            color="Mixed"
            badge={false}
            des="A collection of soft and playful toys that bring endless fun to your babies, crafted with vibrant colors and child-safe materials."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
