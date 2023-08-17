import React from "react";
import Navbar from "./Navbar";
import MusicTheory from "./MusicTheory";

const Homepage = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-12 grid-rows-8 gap-4 lg:gap-6">
      <div className="grid col-span-12 row-span-1 lg:col-span-1 lg:row-span-8">
        <Navbar />
      </div>
      <div className="grid col-span-12 row-span-3 lg:col-span-11 row-span-4"><MusicTheory/></div>
      <div className="grid col-span-12 row-span-1 lg:col-span-11 row-span-1">Categories</div>
      <div className="grid col-span-12 row-span-2 lg:col-span-11 row-span-2">My Learning</div>
      <div className="grid col-span-12 row-span-1 lg:col-span-11 row-span-1">Button</div>
    </div>
  );
};

export default Homepage;
