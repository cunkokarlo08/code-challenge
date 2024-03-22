import { findDirectionsForCharacter } from "./findDirectionsForCharacters";

import { allDirections, DIRECTION, POSSIBLE_CHARACTERS } from "../../constants";

describe("findDirectionsForCharacter", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return allDirections when character is POSSIBLE_CHARACTERS.START", () => {
    const result = findDirectionsForCharacter({
      character: POSSIBLE_CHARACTERS.START,
    });

    expect(result).toEqual({
      directions: allDirections,
      character: POSSIBLE_CHARACTERS.START,
    });
  });

  it("should return previousDirection when character is POSSIBLE_CHARACTERS.DASH", () => {
    const result = findDirectionsForCharacter({
      character: POSSIBLE_CHARACTERS.DASH,
      direction: DIRECTION.RIGHT,
    });

    expect(result).toEqual({
      directions: [DIRECTION.RIGHT],
      character: POSSIBLE_CHARACTERS.DASH,
    });
  });

  it("should return previousDirection when character is POSSIBLE_CHARACTERS.PIPE", () => {
    const result = findDirectionsForCharacter({
      character: POSSIBLE_CHARACTERS.DASH,
      direction: DIRECTION.DOWN,
    });

    expect(result).toEqual({
      directions: [DIRECTION.DOWN],
      character: POSSIBLE_CHARACTERS.DASH,
    });
  });

  it("should return directions from changeDirections when character is POSSIBLE_CHARACTERS.TURN", () => {
    const result = findDirectionsForCharacter({
      character: POSSIBLE_CHARACTERS.TURN,
      direction: DIRECTION.LEFT,
    });

    expect(result).toEqual({
      directions: [DIRECTION.UP, DIRECTION.DOWN],
      character: POSSIBLE_CHARACTERS.TURN,
    });
  });

  it("should return an empty array when character is POSSIBLE_CHARACTERS.END", () => {
    const element = { character: POSSIBLE_CHARACTERS.END };
    const result = findDirectionsForCharacter(element);

    expect(result).toEqual({
      directions: [],
      character: POSSIBLE_CHARACTERS.END,
    });
  });

  it("should return all directions except the previous", () => {
    const result = findDirectionsForCharacter({
      direction: DIRECTION.RIGHT,
      character: "A",
    });

    expect(result).toEqual({
      directions: [DIRECTION.RIGHT, DIRECTION.UP, DIRECTION.DOWN],
      character: "A",
    });
  });
});
