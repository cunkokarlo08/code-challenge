import { Element } from "../../types";
import { findNextCharacter } from "../findNextCharacter/findNextCharacter";

export const pathFinder = (element: Element) => {
  const nextElement = findNextCharacter(element);

  if (nextElement) {
    pathFinder(nextElement);
  }
};
