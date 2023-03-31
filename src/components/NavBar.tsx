import React, { useCallback, useContext } from "react";
import { StateContext } from "../contexts/state.context";
import { Game } from "../services/game.service";
import { ActionTypes } from "../interfaces/state.interface";

const NavButton: React.FC<{
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = (props) => {
  return (
    <button className="navbar__button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

const NavBar = () => {
  const { state, dispatch } = useContext(StateContext);

  const handleCreateNewGame = useCallback(() => {
    const game = new Game();
    dispatch({ type: ActionTypes.SET_CURRENT_GAME, game });
  }, [dispatch]);

  const handleFinishCurrentGame = useCallback(() => {
    dispatch({ type: ActionTypes.FINISH_CURRENT_GAME });
  }, [dispatch]);

  return (
    <nav className="navbar">
      {state.currentGame ? (
        <NavButton onClick={handleFinishCurrentGame}>Finish game</NavButton>
      ) : (
        <NavButton onClick={handleCreateNewGame}>+ Create new game</NavButton>
      )}
    </nav>
  );
};

export default NavBar;
