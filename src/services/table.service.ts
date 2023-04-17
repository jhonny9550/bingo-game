import { ITable } from "../interfaces/table.interface";
import { randomId, randomNumber } from "../utils/random";

const BINGO_FACTOR_NUMBER = 15;

export default class Table implements ITable {
  public id: string;
  public values: number[][];
  public wins: number;

  constructor() {
    this.id = randomId();
    this.wins = 0;
    this.values = this._createTable();
  }

  private _createTable(): number[][] {
    const numbers: number[][] = [[], [], [], [], []];
    for (let i = 0; i < numbers.length; i++) {
      const selectableNumbers = Array.from(
        { length: 15 },
        (_, k) => BINGO_FACTOR_NUMBER * i + k + 1
      );
      for (let j = 0; j < 5; j++) {
        const pickIndex = randomNumber(0, selectableNumbers.length - 1);
        const selectedNumber = selectableNumbers.splice(pickIndex, 1)[0];
        numbers[i].push(selectedNumber);
      }
      numbers[i] = numbers[i].sort((a, b) => a - b);
      if (i === 2) {
        numbers[i][2] = 0;
      }
    }
    return numbers;
  }
}
