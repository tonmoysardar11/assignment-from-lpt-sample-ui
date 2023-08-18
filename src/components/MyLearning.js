import React from "react";
import card from "../media/card.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const MyLearning = () => {
  const data = [
    {
      img: card,
      name: "Learn Guitar",
      author: "John Smith",
      completed: 69,
    },
    {
      img: card,
      name: "Music Theory 2.0",
      author: "Emily Johnson",
      completed: 27,
    },
  ];

  return (
    <div className="max-h-full text-center">
      <h1 className="text-2xl md:text-left text-black m-6">My Learnings</h1>
      <div className="flex flex-wrap justify-start items-center px-4">
        {data.map((element, index) => {
          return (
            <div key={index} className="p-2 md:w-1/2 w-full">
              <div className="relative border-2 rounded-2xl bg-gray-200 border-opacity-90 p-1 w-full">
                <div className="flex">
                  <img
                    src={element.img}
                    alt="sample card"
                    className="h-full w-[30vw] md:w-1/3 rounded-xl"
                  />
                  <div className="relative flex flex-col justify-between items-start ml-4 w-2/3 md:w-full">
                    <div
                      style={{ width: `${100 - element.completed}%` }}
                      className="absolute top-12 right-3 h-1 bg-gray-300 hidden md:block"
                    ></div>
                    <div className="absolute top-3 right-3 bg-white w-6 h-6 rounded-full overflow-hidden flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faBookmark}
                        className="text-black text-sm"
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start">
                      <h2 className="text-gray-900 text-lg title-font font-semibold">
                        {element.name}
                      </h2>
                      <p className="text-sm mb-2">{element.author}</p>
                      <p className="text-sm">{element.completed}% Completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="bg-black text-white font-semibold px-10 py-1 my-4 rounded-full hover:bg-white hover:text-black border-2 border-black hover:border-gary-500">
        View All
      </button>
    </div>
  );
};

export default MyLearning;
