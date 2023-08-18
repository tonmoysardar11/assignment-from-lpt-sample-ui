import React from "react";
import Navbar from "./Navbar";
import MusicTheory from "./MusicTheory";
import Category from "./Category";
import MyLearning from "./MyLearning";

const Homepage = () => {
  return (
    <div className="h-[100vh] w-[100vw] grid grid-cols-12 grid-rows-9">
      <div className="grid col-span-12 row-span-1 lg:col-span-1 lg:row-span-9">
        <Navbar />
      </div>
      <div className="grid col-span-12 row-span-3 lg:col-span-11 row-span-3"><MusicTheory/></div>
      <div className="grid col-span-12 row-span-2 lg:col-span-11 row-span-2"><Category/></div>
      <div className="grid col-span-12 row-span-2 lg:col-span-11 row-span-3"><MyLearning/></div>
      <div className="grid col-span-12 row-span-1 lg:col-span-11 row-span-1">Button</div>
    </div>
  );
};

export default Homepage;
