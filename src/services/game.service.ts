import { IGame } from "../interfaces/game.interface";
import { IPlayer } from "../interfaces/player.interface";
import { randomId, randomNumber } from "../utils/random";

export default class Game implements IGame {
  public id: string;
  public players: Map<string, IPlayer>;
  public numbers: number[];
  public pastNumbers: number[];
  public turn: number;
  public currentNumber?: number | undefined;

  constructor() {
    this.id = randomId();
    this.players = new Map();
    this.numbers = Array.from({ length: 75 }, (_, i) => i + 1);
    this.pastNumbers = [];
    this.turn = 1;
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
