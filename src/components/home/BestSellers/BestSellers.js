import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Watch"
          price="35.00"
          color="Silver"
          badge={true}
          des="Experience timeless elegance with this minimalist watch, featuring a sleek design and a refined aesthetic that complements any outfit."
          />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="New Sneaker"
          price="180.00"
          color="Gray"
          badge={false}
          des="Step into style and comfort with these new sneakers. Perfect for everyday wear or your next workout."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="Ladies coat"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Stay warm and stylish with this versatile ladies' coat. Perfect for the fall and winter seasons."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Shirt and jeans"
          price="220.00"
          color="Black"
          badge={false}
          des="A classic combination of a stylish shirt and comfortable jeans. Perfect for any occasion."
        />
      </div>
    </div>
  );
};

export default BestSellers;
