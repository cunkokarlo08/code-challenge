import { findNextPositionForDirection } from "./findNextPositionForDirection";

import { DIRECTION, POSSIBLE_CHARACTERS } from "../../constants";

jest.mock("../../utils/map", () => ({
  getMap: jest.fn(() => [
    ["@", "-", "A", "-", "+"],
    [" ", " ", " ", " ", "|"],
    [" ", " ", " ", " ", "D"],
    [" ", " ", "x", "-", "+"],
  ]),
}));

describe("findNextPositionByDirection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return the next position for direction right", () => {
    const element = {
      position: { row: 0, column: 2 },
      previousDirection: DIRECTION.RIGHT,
    };

    const result = findNextPositionForDirection(
      element.previousDirection,
      element.position
    );

    expect(result).toEqual({
      position: { row: 0, column: 3 },
      character: POSSIBLE_CHARACTERS.DASH, // Replace with expected character
      previousDirection: element.previousDirection,
    });
  });

  it("should return the next position for direction down", () => {
    const element = {
      position: { row: 1, column: 4 },
      previousDirection: DIRECTION.DOWN,
    };

    const result = findNextPositionForDirection(
      element.previousDirection,
      element.position
    );

    expect(result).toEqual({
      position: { row: 2, column: 4 },
      character: "D", // Replace with expected character
      previousDirection: element.previousDirection,
    });
  });

  it("should return null for invalid next position", () => {
    const possibleDirection = DIRECTION.RIGHT;

    const result = findNextPositionForDirection(possibleDirection, {
      row: 0,
      column: 100,
    });

    expect(result).toBeNull();
  });
});
