import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Blazer"
          price="35.00"
          color="Black and White"
          badge={true}
          des="Elevate your wardrobe with this stylish black-and-white blazer. Perfect for work, formal events, or a night out."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Fashion shirt"
          price="180.00"
          color="Gray"
          badge={true}
          des="Stay ahead of the fashion curve with this trendy gray shirt. Its sleek design and premium fabric make it a versatile choice for any occasion."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Formal shirt"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Make a statement with this eye-catching formal shirt. Its mixed color palette adds a touch of sophistication to any outfit."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sunglasses"
          price="220.00"
          color="Black"
          badge={true}
          des="These stylish black sunglasses offer both UV protection and a bold fashion statement, perfect for sunny days or outdoor adventures."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
