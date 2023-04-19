import { useCallback, useContext } from "react";
import { StateContext } from "../contexts/state.context";
import { Navigate } from "react-router-dom";
import GameStatus from "../components/GameStatus";
import PlayerTable from "../components/PlayerTable";
import Button from "../components/Button";
import { ActionTypes } from "../interfaces/state.interface";
import { randomNumber } from "../utils/random";

const GamePage = () => {
  const { state, dispatch } = useContext(StateContext);

  const handleNextTurn = useCallback(() => {
    const availableNumbers = [...state.numbers];
    const index = randomNumber(0, availableNumbers.length);
    const selectedNumber = availableNumbers.splice(index, 1)[0];
    dispatch({ type: ActionTypes.START_NEXT_TURN, selectedNumber });
  }, [state]);

  if (state.players.size === 0) {
    return <Navigate to="/" />;
  }

  const playersList = Array.from(state.players.values());

  return (
    <>
      <div className="container flex justify-center">
        <GameStatus displayNumber={state.currentNumber} turn={state.turn} />
      </div>
      <div
        className="
        flex flex-col items-center justify-center gap-10 mt-8
        sm:flex-row sm:flex-wrap
      "
      >
        {playersList.map((player) => (
          <PlayerTable
            key={player.id}
            name={player.name}
            table={player.tables[0]}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button color="primary" onClick={handleNextTurn}>
          Next number!
        </Button>
      </div>
    </>
  );
};

export default GamePage;
