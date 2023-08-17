import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faNewspaper, faStar } from "@fortawesome/free-solid-svg-icons";

const TheroyCard = ({item}) => {
  return (
    <div className="w-72 h-full rounded-3xl relative p-2 bg-gray-200 mx-2 flex flex-col justify-between">
      <div className="absolute top-5 right-5 bg-black w-8 h-8 rounded-full overflow-hidden flex justify-center items-center">
        <FontAwesomeIcon icon={faNewspaper} className="text-gray-100 text-md" />
      </div>

      <img
        src={item.img}
        alt="sample card image"
        className="w-full h-3/5 rounded-2xl mx-auto"
      />
      <div className="absolute top-32 left-5 bg-white flex justify-start items-center rounded-full p-1 w-1/2">
        <span className="w-8 h-8 rounded-full overflow-hidden">
          <img src={item.profile} alt="profile" />
        </span>
        <p className="mx-2 text-gray-600">{item.name}</p>
      </div>

      <div className="flex flex-col justify-start text-black">
        <p className="m-2 ">{item.class}</p>
        <div className="mx-2 flex justify-between items-center">
          <span className="flex items-center text-sm">
            <FontAwesomeIcon icon={faClockFour} />
            <p className="mx-2">{item.time}</p>
          </span>
          <span className="flex items-center text-sm">
            <FontAwesomeIcon icon={faStar} />
            <p className="mx-2">{item.rating}/5</p>
          </span>
          <span className="flex justify-center items-center text-sm bg-gray-100 p-2 rounded-full w-16">
            <p>{item.price}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TheroyCard;
