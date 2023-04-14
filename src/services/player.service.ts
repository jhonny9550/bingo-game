import { IPlayer } from "../interfaces/player.interface";
import { ITable } from "../interfaces/table.interface";
import { randomId } from "../utils/random";

export default class Player implements IPlayer {
  public id: string;
  public name: string;
  public tables: ITable[];
  constructor(name: string) {
    this.id = randomId();
    this.name = name;
    this.tables = [];
  }

  public addTable(table: ITable) {
    this.tables.push(table);
  }
}
