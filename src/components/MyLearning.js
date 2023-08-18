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
    }
  ];

  return (
    <div className="max-h-full text-center md:text-left lg:mr-36">
      <h1 className="text-3xl text-black mb-6 mx-6">My Learnings</h1>
      <div className="flex flex-wrap justify-start items-center px-4">
        {data.map((element, index) => {
          return (
            <div key={index} className="p-2 md:w-1/2 w-full">
              <div className="relative flex border-2 rounded-3xl border-gray-200 border-opacity-90 p-2 w-full">
                <img
                  src={element.img}
                  alt="sample card"
                  className="h-full w-36 rounded-2xl"
                />
                <div className="absolute top-3 right-3 bg-white w-6 h-6 rounded-full overflow-hidden flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-black text-sm"
                  />
                </div>
                <div className="relative flex flex-col justify-between items-start ml-4 w-full">
                  <div
                  style={{width:`${100 - element.completed}%` }}
                    className={`absolute top-12 right-3 h-1 bg-gray-500`}
                  ></div>
                  <span>
                    <h2 className="text-gray-900 text-lg title-font font-semibold">
                      {element.name}
                    </h2>
                    <p className="text-sm">{element.author}</p>
                  </span>
                  <p className="text-sm">{element.completed}% Completed</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyLearning;
