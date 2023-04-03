import { IGame } from "../interfaces/game.interface";
import { IPlayer } from "../interfaces/player.interface";
import { randomId, randomNumber } from "../utils/random";

export class Game implements IGame {
  public id: string;
  public players: Map<string, IPlayer>;
  public numbers: number[];
  public pastNumbers: number[];
  public turn: number;

  constructor() {
    this.id = randomId();
    this.players = new Map();
    this.numbers = [...Array(75).keys()];
    this.pastNumbers = [];
    this.turn = 0;
  }

  addPlayer(player: IPlayer) {
    this.players.set(player.id, player);
  }

  removePlayer(id: string) {
    this.players.delete(id);
  }

  selectNextNumber() {
    if (this.numbers.length === 0) {
      return null;
    }
    const index = randomNumber(0, this.numbers.length);
    const selectedNumber = this.numbers.splice(index, 1)[0];
    this.pastNumbers.push(selectedNumber);
    this.turn++;
    return selectedNumber;
  }
}
