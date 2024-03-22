import { DIRECTION } from "../constants";

export type Position = {
  row: number;
  column: number;
};

export type Element = {
  character: string;
  position: Position;
  previousDirection: DIRECTION;
};
