import React from "react";
import "./PriceCard.css";
import Feature from "../Feature/Feature";

const PriceCard = ({ price }) => {
  return (
    <div className="mt-5 bg-indigo-300 p-5 rounded-md flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold text-purple-700">{price.price}</span>
        <span className="text-2xl">/month</span>
      </h2>

      <h5 className="text-2xl font-bold text-center my-5">{price.name}</h5>

      <p className="underline font-bold ">Features:</p>

      {price.features.map((feature, idx) => (
        <Feature key={idx} feature={feature}></Feature>
      ))}

      <button className=" w-full bg-green-500 hover:bg-green-700 py-3 rounded-md font-semibold text-2xl  text-white mt-3 mt-auto">Buy Now</button>
    </div>
  );
};

export default PriceCard;
