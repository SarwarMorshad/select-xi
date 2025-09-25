import React from "react";
import iconImg from "../../assets/icon.png";
import flagImg from "../../assets/flag.png";

const Player = ({ player }) => {
  return (
    <div>
      <div className="card  shadow-xl rounded-2xl border-2 border-gray-200">
        <figure className="pt-5">
          <img
            src={player.image}
            alt={player.name}
            className=" w-[400px] h-[300px] object-cover rounded-2xl "
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-3 mb-2">
            <img src={iconImg} alt={player.name} className="w-8 h-8" />
            <h1 className="text-lg font-semibold">{player.name}</h1>
          </div>
          <div className="flex justify-between items-center mb-4 border-b-1 pb-2">
            <div className="flex items-center">
              <img src={flagImg} alt={player.country} className="w-6 h-6" />
              <span className="ml-2 text-md font-semibold">{player.country}</span>
            </div>
            <span className="text-md font-semibold rounded-md bg-gray-100  p-2">{player.role}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-md font-semibold">Rating</span>
            <span className="ml-2 font-semibold">{player.rating}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-md font-semibold">{player.batting_style}</span>
            <span className="ml-2 font-semibold">{player.bowling_style}</span>
          </div>

          <div className="flex justify-between items-center text-md font-semibold">
            <span>
              Price: $ <span>{player.price}</span>
            </span>
            <button className="btn  btn-outline">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
