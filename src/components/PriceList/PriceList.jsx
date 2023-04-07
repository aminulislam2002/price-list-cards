import React, { useEffect, useState } from "react";
import "./PriceList.css";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  });

  return (
    <div className="mx-10">
      <h1 className="text-7xl text-white bg-purple-500 text-center font-bold px-5 py-3">PriceList</h1>

      <div className="grid md:grid-cols-3 gap-5">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
