import { useContext } from "react";
import { StateContext } from "../contexts/state.context";
import { Navigate } from "react-router-dom";
import GameStatus from "../components/GameStatus";
import PlayerTable from "../components/PlayerTable";
import Button from "../components/Button";

const GamePage = () => {
  const { state } = useContext(StateContext);

  if (!state.currentGame) {
    return <Navigate to="/" />;
  }

  const playersList = Array.from(state.currentGame.players.values());

  return (
    <>
      <div className="container flex justify-center">
        <GameStatus
          displayNumber={state.currentGame.currentNumber}
          turn={state.currentGame.turn}
        />
      </div>
      <div className="flex items-center justify-center gap-10 mt-8">
        {playersList.map((player) => (
          <PlayerTable
            key={player.id}
            name={player.name}
            table={player.tables[0]}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button color="primary">Next number!</Button>
      </div>
    </>
  );
};

export default GamePage;
