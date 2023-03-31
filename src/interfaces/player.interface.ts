import { ITable } from "./table.interface";

export interface IPlayer {
  id: string;
  name: string;
  tables: ITable[];
}
