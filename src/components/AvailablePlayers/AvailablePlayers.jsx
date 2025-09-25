import React, { use } from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  return (
    <div className="mx-auto max-w-11/12 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player) => (
        <Player key={player.id} player={player}></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
