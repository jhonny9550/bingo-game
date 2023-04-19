import { IPlayer } from "./player.interface";

export enum ActionTypes {
  FINISH_CURRENT_GAME = "[Game] finish current game",
  START_NEXT_TURN = "[Game] start next turn",
  SET_PLAYERS = "[Game] set players",
}

export type Action =
  | { type: ActionTypes.FINISH_CURRENT_GAME }
  | { type: ActionTypes.START_NEXT_TURN; selectedNumber: number }
  | { type: ActionTypes.SET_PLAYERS; players: IPlayer[] };
