import { IGame } from "./game.interface";
import { IPlayer } from "./player.interface";

export enum ActionTypes {
  SET_CURRENT_GAME = "[Game] set current game",
  FINISH_CURRENT_GAME = "[Game] finish current game",
  START_NEXT_TURN = "[Game] start next turn",
  SET_PLAYERS = "[Game] set players",
}

export type Action =
  | { type: ActionTypes.SET_CURRENT_GAME; game: IGame }
  | { type: ActionTypes.FINISH_CURRENT_GAME }
  | { type: ActionTypes.START_NEXT_TURN }
  | { type: ActionTypes.SET_PLAYERS; players: IPlayer[] };
