import { findPositionOfStartingCharacter } from "./findPositionOfStartingCharacter";

import { POSSIBLE_CHARACTERS } from "../../constants";

describe("findPositionOfStartingCharacter", () => {
  it("should find the position of the starting character in a valid map", () => {
    const map = [
      ["@", "-", "A", "-", "+"],
      [" ", " ", " ", " ", "|"],
      [" ", " ", " ", " ", "D"],
      [" ", " ", "x", "-", "+"],
    ];

    const result = findPositionOfStartingCharacter(map);

    expect(result).toEqual({
      position: { row: 0, column: 0 },
      character: POSSIBLE_CHARACTERS.START,
      direction: null,
    });
  });

  it("should throw an error if there are multiple start characters", () => {
    const map = [
      ["@", "-", "A", "-", "+"],
      ["|", " ", " ", " ", "|"],
      ["@", " ", " ", " ", "D"],
      [" ", " ", "x", "-", "+"],
    ];

    expect(() => {
      findPositionOfStartingCharacter(map);
    }).toThrow("No multiple starts!");
  });

  it("should throw an error if there is no start character", () => {
    const map = [
      ["A", "-", "+"],
      [" ", " ", "|"],
      [" ", " ", "D"],
      ["x", "-", "+"],
    ];

    expect(() => {
      findPositionOfStartingCharacter(map);
    }).toThrow("Missing start character!");
  });

  it("should throw an error if there is no end character", () => {
    const map = [
      ["A", "-", "+"],
      ["|", " ", "|"],
      ["@", " ", "D"],
      [" ", "-", "+"],
    ];

    expect(() => {
      findPositionOfStartingCharacter(map);
    }).toThrow("Missing end character!");
  });
});
