import React from "react";
import "./Link.css";

const Link = ({ route }) => {
  return (
    <li className="mr-12 hover:bg-red-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
