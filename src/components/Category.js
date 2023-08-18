import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faPeopleGroup,
  faMusic,
  faThLarge,
  faLightbulb,
  faWandSparkles,
  faGuitar,
} from "@fortawesome/free-solid-svg-icons";

const Category = () => {
  const categoryList = [
    {
      icon: faChartLine,
      name: "News",
    },
    {
      icon: faPeopleGroup,
      name: "Practise",
    },
    {
      icon: faMusic,
      name: "Music Notes",
    },
    {
      icon: faThLarge,
      name: "Latest Releases",
    },
    {
      icon: faGuitar,
      name: "Instruments",
    },
    {
      icon: faLightbulb,
      name: "Musicians",
    },
    {
      icon: faWandSparkles,
      name: "User journeys",
    },
  ];
  return (
    <div className='max-h-full max-w-full text-center md:text-left'>
      <h1 className="text-2xl text-black m-6">Categories</h1>
      <div className="flex flex-wrap justify-center lg:justify-between items-center px-5">
        {categoryList.map((element, index) => {
          return (
            <div key={index} className="w-36 p-3 rounded-xl bg-transparent hover:bg-gray-300 text-center cursor-pointer m-2 border-gray-300 border-2">
              <FontAwesomeIcon
                icon={element.icon}
              />
              <p>{element.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
