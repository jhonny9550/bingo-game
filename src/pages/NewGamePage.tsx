import Button from "../components/Button";
import { useToggle } from "../hooks/toggle.hook";
import PlayersForm from "../components/PlayersForm";
import { useCallback, useContext } from "react";
import { IPlayer } from "../interfaces/player.interface";
import { StateContext } from "../contexts/state.context";
import Game from "../services/game.service";
import { ActionTypes } from "../interfaces/state.interface";
import Table from "../services/table.service";

const NewGamePage = () => {
  const [showNewGameBtn, toggleShowNewGameBtn] = useToggle(true);
  const { state, dispatch } = useContext(StateContext);

  const handleSubmitPlayers = useCallback((players: IPlayer[]) => {
    const game = new Game();
    const playerMap = new Map<string, IPlayer>();
    players.forEach((player) => {
      player.tables = [new Table()];
      playerMap.set(player.id, player);
    });
    game.players = playerMap;
    dispatch({ type: ActionTypes.SET_CURRENT_GAME, game });
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      {showNewGameBtn ? (
        <Button color="primary" onClick={toggleShowNewGameBtn}>
          Start a New Game!
        </Button>
      ) : (
        <PlayersForm handleSubmit={handleSubmitPlayers} />
      )}
    </div>
  );
};

export default NewGamePage;
