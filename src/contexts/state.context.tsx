import React, { Dispatch } from "react";
import { Action, ActionTypes } from "../interfaces/state.interface";
import { useReducer } from "react";
import { Reducer } from "react";
import { IGame } from "../interfaces/game.interface";
import { randomId } from "../utils/random";
import { selectNextNumber } from "../utils/game";

export type IStateContext = {
  state: IGame;
  dispatch: Dispatch<Action>;
};

export const StateContext = React.createContext<IStateContext>(
  {} as IStateContext
);

const reducer: Reducer<IGame, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_GAME:
      return { ...state, game: action.game };
    case ActionTypes.FINISH_CURRENT_GAME:
      return initialState;
    case ActionTypes.START_NEXT_TURN:
      const gameCopy = { ...state };
      selectNextNumber(gameCopy);
      return { ...state, ...gameCopy };
    case ActionTypes.SET_PLAYERS:
      return {
        ...state,
        players: new Map(action.players.map((p) => [p.id, p])),
      };
    default:
      return state;
  }
};

const initialState: IGame = {
  id: randomId(),
  players: new Map(),
  numbers: Array.from({ length: 75 }, (_, i) => i + 1),
  pastNumbers: [],
  turn: 1,
};

const StateProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
