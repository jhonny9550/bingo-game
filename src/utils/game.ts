import { IGame } from "../interfaces/game.interface";
import { randomNumber } from "./random";

export const selectNextNumber = (game: IGame) => {
  if (game.numbers.length === 0) {
    return null;
  }
  const index = randomNumber(0, game.numbers.length);
  game.currentNumber = game.numbers.splice(index, 1)[0];
  game.pastNumbers.push(game.currentNumber);
  game.turn++;
  return game.currentNumber;
};
