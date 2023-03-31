import React, { Dispatch } from "react";
import { Action, ActionTypes, IState } from "../interfaces/state.interface";
import { useReducer } from "react";
import { Reducer } from "react";

export type IStateContext = {
  state: IState;
  dispatch: Dispatch<Action>;
};

export const StateContext = React.createContext<IStateContext>(
  {} as IStateContext
);

const reducer: Reducer<IState, Action> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_GAME:
      return { ...state, currentGame: action.game };
    case ActionTypes.FINISH_CURRENT_GAME:
      return { ...state, currentGame: null };
    default:
      return state;
  }
};

const initialState: IState = {
  currentGame: null,
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
