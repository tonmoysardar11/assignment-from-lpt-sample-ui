import React from "react";
import play from "../media/playing.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGuitar } from "@fortawesome/free-solid-svg-icons";

const Page2 = () => {
  return (
    <div className="w-screen h-max md:h-screen p-4 md:p-8 lg:p-10">
      <div className="w-full h-full rounded-3xl bg-gray-200 border-gray-200 border-2 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="flex flex-col justify-center items-start w-2/3 lg:w-1/2 m-5">
            <div className="flex items-center mb-5">
              <div className="px-3 py-1 rounded-full bg-white">
                <FontAwesomeIcon icon={faGuitar} />
              </div>
              <p className="mx-4 text-sm">MusicMentor</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-4xl">Discover the world</p>
              <p className="my-8">
                Explore music theories, practise important techniques, and
                discover tips to help you master your instrument. Stay updated
                with the latest news.
              </p>
              <button className="px-3 py-2 rounded-full bg-white w-1/2 text-sm">
                Start Learning
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-3xl md:h-full w-full flex items-start justify-center md:items-center">
            <img
              src={play}
              alt="playing"
              className="w-[70%] h-[90%] md:h-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
