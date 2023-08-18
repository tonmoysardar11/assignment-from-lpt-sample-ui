import React from "react";
import card from "../media/card.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const MyLearning = () => {
  return (
    <div className="max-h-full text-center md:text-left lg:mr-36">
      <h1 className="text-3xl text-black mb-6 mx-6">My Learnings</h1>
      <div className="flex flex-wrap justify-start items-center px-4">
        <div class="p-4 md:w-1/2 w-full">
          <div class="relative flex border-2 rounded-3xl border-gray-200 border-opacity-90 p-2 w-full">
            <img
              src={card}
              alt="sample card"
              className="h-full w-36 rounded-2xl"
            />
            <div className="absolute top-3 right-3 bg-white w-6 h-6 rounded-full overflow-hidden flex justify-center items-center">
              <FontAwesomeIcon
                icon={faBookmark}
                className="text-black text-sm"
              />
            </div>
            <div class="flex flex-col justify-start items-start ml-4 w-full">
              <h2 class="text-gray-900 text-lg title-font font-semibold mb-3">
                Learn Guitar
              </h2>
              <p class="leading-relaxed text-base">John Smith</p>
              <div className="h-5 w-1/3 mr-0 bg-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
