import { isValidNextPosition } from "./";
import { POSSIBLE_CHARACTERS, uppercaseLettersRegex } from "../constants";
import * as mapModule from "../utils/map";

describe("isValidNextPosition", () => {
  const spyGetMap = jest.spyOn(mapModule, "getMap");
  spyGetMap.mockReturnValue([
    [" ", " ", " ", " ", " ", " ", " ", " ", "x", "-", "B", "\r"],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\r"],
    [" ", " ", " ", "@", "-", "-", "A", "-", "-", "-", "+", "\r"],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|", "\r"],
    [" ", " ", " ", " ", " ", "x", "+", " ", " ", " ", "C", "\r"],
    [" ", " ", " ", " ", " ", " ", "|", " ", " ", " ", "|", "\r"],
    [" ", " ", " ", " ", " ", " ", "+", "-", "-", "-", "+", "\r"],
  ]);

  it("should return true for a valid path character", () => {
    const position = { row: 2, column: 3 }; // Provide a valid position
    expect(isValidNextPosition(position)).toBe(true);
  });

  it("should return false for an invalid path character", () => {
    const position = { row: 0, column: 0 }; // Provide an invalid position
    expect(isValidNextPosition(position)).toBe(false);
  });

  it("should return true for uppercase latter", () => {
    const position = { row: 3, column: 6 }; // Provide an invalid position
    expect(isValidNextPosition(position)).toBe(false);
  });
});
