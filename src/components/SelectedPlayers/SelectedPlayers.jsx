import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ selectedPlayers, removePlayer }) => {
  //   console.log(selectedPlayers[0]);
  return (
    <div className="max-w-11/12 mx-auto">
      {selectedPlayers.map((player) => (
        <SelectedPlayerCard key={player.id} player={player} removePlayer={removePlayer}></SelectedPlayerCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
