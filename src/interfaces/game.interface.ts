import { IPlayer } from "./player.interface";

export interface IGame {
  id: number;
  players: IPlayer[];
  numbers: number[];
}
