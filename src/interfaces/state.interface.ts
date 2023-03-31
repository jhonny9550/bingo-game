import { IGame } from "./game.interface";

export interface IState {
  currentGame: IGame | null;
}

export enum ActionTypes {
  SET_CURRENT_GAME = "set current game [Game]",
  FINISH_CURRENT_GAME = "finish current game [Game]",
}

export type Action =
  | { type: ActionTypes.SET_CURRENT_GAME; game: IGame }
  | { type: ActionTypes.FINISH_CURRENT_GAME };
