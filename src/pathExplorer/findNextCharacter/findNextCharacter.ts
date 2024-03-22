import { findDirectionsForCharacter } from "../findDirectionsForCharacters/findDirectionsForCharacters";
import { findNextPositionForDirection } from "../findNextPositionForDirection/findNextPositionForDirection";
import { Element } from "../../types";
import { setCharacterPath } from "../../utils/characterPath";
import { validateSpecialCasesForCharacter } from "../../validations";

export const findNextCharacter = (element: Element) => {
  const { previousDirection, character } = element;

  const { directions } = findDirectionsForCharacter({
    direction: previousDirection,
    character,
  });

  setCharacterPath(element);

  let nextPossibleElement: Element[] = [];

  directions.forEach((possibleNextPosition) => {
    const nextPosition = findNextPositionForDirection(
      possibleNextPosition,
      element.position
    );

    if (nextPosition) {
      nextPossibleElement = [...nextPossibleElement, nextPosition];
    }
  });

  validateSpecialCasesForCharacter(character, nextPossibleElement);

  return nextPossibleElement[0];
};
