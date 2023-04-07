import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import PriceList from "./components/PriceList/PriceList";
import Dashboard from "./components/Dashbord/Dashboard";
import PhoneBar from "./components/PhoneBar/PhoneBar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <h1 className="text-7xl text-white bg-purple-500 my-5 font-extrabold p-5 text-center ">Hello! From Tailwind</h1>

      <PriceList></PriceList>

      <Dashboard></Dashboard>

      <PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
