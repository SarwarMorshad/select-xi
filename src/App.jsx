import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(10000000);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  // console.log(selectedPlayers);
  const removePlayer = (p) => {
    const updatedPlayers = selectedPlayers.filter((player) => player.id !== p.id);
    setSelectedPlayers(updatedPlayers);
    setAvailableBalance(availableBalance + p.price);
  };

  return (
    <>
      <div className="bg-[#f3f4f6da] sticky top-0 z-10">
        <Navbar availableBalance={availableBalance}></Navbar>
      </div>
      <div className="max-w-11/12 mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle === true ? "Available Players" : `Selected Players (${selectedPlayers.length})`}
        </h1>

        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 cursor-pointer border-1  border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 cursor-pointer border-1 border-gray-400 rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            selected <span>({selectedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-dots loading-xl fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          }
        >
          <AvailablePlayers
            playersPromise={playersPromise}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
