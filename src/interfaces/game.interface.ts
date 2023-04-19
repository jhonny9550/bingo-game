import { IPlayer } from "./player.interface";

export interface IGame {
  players: Map<string, IPlayer>;
  numbers: number[];
  pastNumbers: number[];
  turn: number;
  currentNumber?: number;
}
