import React from "react";
import deleteImg from "../../assets/delete.png";

const SelectedPlayerCard = ({ player, removePlayer }) => {
  //   const handleRemove = () => {
  //     removePlayer(player);
  //   };
  return (
    <div className="flex justify-between items-center border-2 border-gray-200 rounded-2xl p-4 my-4">
      <div className="flex items-center gap-4">
        <img src={player.image} alt={player.name} className="w-[130px] h-[100px] rounded-xl" />
        <div>
          <h2 className="text-xl font-semibold">{player.name}</h2>
          <p className="text-gray-500 text-md">{player.role}</p>
        </div>
      </div>
      <div onClick={() => removePlayer(player)} className="cursor-pointer">
        <img src={deleteImg} alt="Delete" className="w-[50px] h-[50px]" />
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
