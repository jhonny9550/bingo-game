export interface ITable {
  id: number; // Number of the table. ex: #1
  values: number[][]; // Table rows and columns
  wins: number; // Times this table has won a game
}
