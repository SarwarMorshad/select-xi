import React, { use } from "react";

const AvailablePlayers = ({ playersPromise }) => {
  const players = use(playersPromise);
  return (
    <div className="navbar max-w-11/12 mx-auto">
      <h2>Available Players</h2>
    </div>
  );
};

export default AvailablePlayers;
