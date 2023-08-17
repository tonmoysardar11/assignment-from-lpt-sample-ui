import React from "react";
import card from "../media/card.webp";
import profile from "../media/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockFour, faNewspaper, faStar } from "@fortawesome/free-solid-svg-icons";

const TheroyCard = ({item}) => {
  return (
    <div className="w-72 h-full rounded-3xl relative p-2 bg-gray-200 mx-2 flex flex-col justify-between">
      <div className="absolute top-5 right-5 bg-black w-8 h-8 rounded-full overflow-hidden flex justify-center items-center">
        <FontAwesomeIcon icon={faNewspaper} className="text-gray-100 text-md" />
      </div>

      <img
        src={card}
        alt="sample card image"
        className="w-full h-3/5 rounded-2xl mx-auto"
      />
      <div className="absolute top-32 left-5 bg-white flex justify-start items-center rounded-full p-1 w-1/2">
        <span className="w-8 h-8 rounded-full overflow-hidden">
          <img src={profile} alt="profile" />
        </span>
        <p className="mx-2 text-gray-600">Emily Lee</p>
      </div>

      <div className="flex flex-col justify-start text-black">
        <p className="m-2 ">Music 101</p>
        <div className="mx-2 flex justify-between items-center">
          <span className="flex items-center text-sm">
            <FontAwesomeIcon icon={faClockFour} />
            <p className="mx-2">2h 30m</p>
          </span>
          <span className="flex items-center text-sm">
            <FontAwesomeIcon icon={faStar} />
            <p className="mx-2">4.8/5</p>
          </span>
          <span className="flex justify-center items-center text-sm bg-gray-100 p-2 rounded-full w-16">
            <p>$29</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TheroyCard;
