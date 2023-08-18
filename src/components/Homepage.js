import React from "react";
import Navbar from "./Navbar";
import MusicTheory from "./MusicTheory";
import Category from "./Category";
import MyLearning from "./MyLearning";

const Homepage = () => {
  return (
    <div className="max-h-max max-w-screen grid grid-cols-12 grid-rows-9 lg:gap-x-10 mb-16">
      <div className="grid col-span-12 row-span-1 lg:col-span-1 lg:row-span-9">
        <Navbar />
      </div>
      <div className="grid col-span-12 row-span-4 lg:col-span-10 row-span-4"><MusicTheory/></div>
      <div className="grid col-span-12 row-span-2 lg:col-span-10 row-span-2"><Category/></div>
      <div className="grid col-span-12 row-span-2 lg:col-span-10 row-span-3"><MyLearning/></div> 
    </div>
  );
};

export default Homepage;
