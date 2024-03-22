import { DIRECTION } from "../../constants";
import { Element, Position } from "../../types";
import { getMap } from "../../utils/map";
import { isValidNextPosition } from "../../validations";

export const findNextPositionForDirection = (
  possibleDirection: DIRECTION,
  position: Position
): Element | null => {
  const { row, column } = position;
  const map = getMap();

  const possiblePositions = {
    right: { row, column: column + 1 },
    left: { row, column: column - 1 },
    up: {
      row: row - 1,
      column,
    },
    down: {
      row: row + 1,
      column,
    },
  };

  if (!isValidNextPosition(possiblePositions[possibleDirection])) {
    return null;
  }

  const { row: newRowPosition, column: newColumnPosition } =
    possiblePositions[possibleDirection];

  return {
    position: possiblePositions[possibleDirection],
    character: map[newRowPosition][newColumnPosition],
    previousDirection: possibleDirection,
  };
};
