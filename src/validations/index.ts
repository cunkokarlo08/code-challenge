import { POSSIBLE_CHARACTERS, uppercaseLettersRegex } from "../constants";
import { Element, Position } from "../types";
import { getMap } from "../utils/map";
import { getPosition, setPosition } from "../utils/trackPositionDuplication";

export const isValidNextPosition = (position: Position) => {
  const map = getMap();

  const doesRowExits = Boolean(map[position.row]);

  if (!doesRowExits) {
    return false;
  }

  const doesRowAndColumnExists = Boolean(map[position.row][position.column]);

  const isUpperCaseCharacter =
    doesRowAndColumnExists &&
    uppercaseLettersRegex.test(map[position.row][position.column]);

  if (isUpperCaseCharacter) {
    if (!getPosition(position.row, position.column)) {
      setPosition(
        position.row,
        position.column,
        map[position.row][position.column]
      );
    }
  }

  const isPathCharacter =
    Object.values(POSSIBLE_CHARACTERS).includes(
      map[position.row][position.column] as POSSIBLE_CHARACTERS
    ) || isUpperCaseCharacter;

  return doesRowAndColumnExists && isPathCharacter;
};

export const validateSpecialCasesForCharacter = (
  character: string,
  nextPossibleElement: Element[]
) => {
  if (character === POSSIBLE_CHARACTERS.TURN) {
    if (nextPossibleElement.length === 0) {
      throw new Error("Fake turn!");
    }

    if (nextPossibleElement.length > 1) {
      throw new Error("No fork in the path!");
    }
  }

  if (
    character === POSSIBLE_CHARACTERS.START &&
    nextPossibleElement.length > 1
  ) {
    throw new Error("No multiple starting paths!");
  }

  if (character !== POSSIBLE_CHARACTERS.END && !nextPossibleElement.length) {
    throw new Error("Broken path!");
  }
};
