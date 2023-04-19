import { IGame } from "../interfaces/game.interface";
import { randomNumber } from "./random";

export const selectNextNumber = (game: IGame) => {
  const copy = { ...game };
  if (copy.numbers.length === 0) {
    return null;
  }
  const index = randomNumber(0, copy.numbers.length);
  const selectedNumber = copy.numbers.splice(index, 1)[0];
  copy.pastNumbers.push(selectedNumber);
  copy.currentNumber = selectedNumber;
  copy.turn++;
  return copy;
};
