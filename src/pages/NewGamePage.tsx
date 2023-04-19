import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useToggle } from "../hooks/toggle.hook";
import PlayersForm from "../components/PlayersForm";
import { IPlayer } from "../interfaces/player.interface";
import { StateContext } from "../contexts/state.context";
import { ActionTypes } from "../interfaces/state.interface";
import Table from "../services/table.service";

const NewGamePage = () => {
  const [showNewGameBtn, toggleShowNewGameBtn] = useToggle(true);
  const { state, dispatch } = useContext(StateContext);
  const navigate = useNavigate();

  const handleSubmitPlayers = useCallback(
    (players: IPlayer[]) => {
      dispatch({
        type: ActionTypes.SET_PLAYERS,
        players: players.map((p) => {
          p.tables = [new Table()];
          return p;
        }),
      });
      navigate("/game");
    },
    [navigate, state]
  );

  return (
    <div className="container py-8 flex items-center justify-center h-full">
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
