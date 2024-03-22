import { Element } from "../types";

export let characterPath = "";

export const setCharacterPath = (element: Element) => {
  characterPath = characterPath + element.character;
};

export const getCharacterPath = () => {
  return characterPath;
};
