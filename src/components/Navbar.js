import React from "react";
import profile from "../media/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faCertificate,
  faPeopleGroup,
  faClipboard,
  faGear,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="bg-black w-screen md:w-full h-full p-2 flex flex-row lg:flex-col justify-center md:justify-between items-center">
      <div className="flex flex-row lg:flex-col justify-center items-center">
        <div className="rounded-full w-8 h-8 md:w-10 md:h-10 lg:w-20 lg:h-20 overflow-hidden mx-4 lg:my-8 lg:mx-0">
          <img
            alt="profile"
            className="object-cover object-center h-full w-full"
            src={profile}
          />
        </div>
        <FontAwesomeIcon
          icon={faThLarge}
          className="text-gray-100 text-lg mr-10 lg:mb-10 mx-3 lg:mr-3"
        />
        <div className="flex flex-row lg:flex-col justify-center items-center">
          <FontAwesomeIcon
            icon={faCertificate}
            className="text-gray-100 text-lg m-4"
          />
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="text-gray-100 text-lg m-4"
          />
          <FontAwesomeIcon
            icon={faClipboard}
            className="text-gray-100 text-lg m-4"
          />
        </div>
      </div>
      <div className="flex flex-row lg:flex-col justify-center items-center border-white lg:border-t-2 border-r-0 border-l-2 lg:border-l-0 border-b-0">
        <FontAwesomeIcon 
        icon={faGear} 
        className="text-gray-100 text-lg m-4" 
        />
        <FontAwesomeIcon 
        icon={faDoorOpen} 
        className="text-gray-100 text-lg m-4" 
        />
      </div>
    </div>
  );
};

export default Navbar;
