import Button from "../components/Button";
import { useToggle } from "../hooks/toggle.hook";
import PlayersForm from "../components/PlayersForm";
import { useCallback, useContext } from "react";
import { IPlayer } from "../interfaces/player.interface";
import { StateContext } from "../contexts/state.context";
import Table from "../services/table.service";
import { useNavigate } from "react-router-dom";

const NewGamePage = () => {
  const [showNewGameBtn, toggleShowNewGameBtn] = useToggle(true);
  const { state } = useContext(StateContext);
  const navigate = useNavigate();

  const handleSubmitPlayers = useCallback(
    (players: IPlayer[]) => {
      players.forEach((player) => {
        player.tables = [new Table()];
        state.players.set(player.id, player);
      });
      navigate("/game");
    },
    [navigate, state]
  );

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
