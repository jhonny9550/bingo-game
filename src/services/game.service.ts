import { IGame } from "../interfaces/game.interface";
import { IPlayer } from "../interfaces/player.interface";

export class Game implements IGame {
  public id: number;
  public players: IPlayer[];
  public numbers: number[];

  constructor() {
    this.id = 0;
    this.players = [];
    this.numbers = [];
  }
}
