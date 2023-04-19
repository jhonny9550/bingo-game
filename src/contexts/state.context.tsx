import React, { Dispatch } from "react";
import { Action, ActionTypes } from "../interfaces/state.interface";
import { useReducer } from "react";
import { Reducer } from "react";
import { IGame } from "../interfaces/game.interface";

export type IStateContext = {
  state: IGame;
  dispatch: Dispatch<Action>;
};

export const StateContext = React.createContext<IStateContext>(
  {} as IStateContext
);

const initialState: IGame = {
  players: new Map(),
  numbers: Array.from({ length: 75 }, (_, i) => i + 1),
  pastNumbers: [],
  turn: 1,
};

const reducer: Reducer<IGame, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.FINISH_CURRENT_GAME:
      return initialState;
    case ActionTypes.START_NEXT_TURN:
      return {
        ...state,
        turn: state.turn + 1,
        currentNumber: action.selectedNumber,
        pastNumbers: [...state.pastNumbers, action.selectedNumber],
        numbers: state.numbers.filter((n) => n !== action.selectedNumber),
      };
    case ActionTypes.SET_PLAYERS:
      return {
        ...state,
        players: new Map(action.players.map((p) => [p.id, p])),
      };
    default:
      return state;
  }
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
