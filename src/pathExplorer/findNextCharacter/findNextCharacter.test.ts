import { findNextCharacter } from "./findNextCharacter";

import { DIRECTION, POSSIBLE_CHARACTERS } from "../../constants";
import * as mapModule from "../../utils/map";

jest.mock("../../utils/trackPositionDuplication", () => ({
  getPosition: jest.fn(),
  setPosition: jest.fn(),
}));

jest.mock("../../utils/characterPath", () => ({
  setCharacterPath: jest.fn(),
}));

setCharacterPath: jest.fn(),
  describe("findNextCharacter", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("should find next position for given element", () => {
      const spyGetMap = jest.spyOn(mapModule, "getMap");
      spyGetMap.mockReturnValue([
        ["@", "-", "A", "-", "+"],
        [" ", " ", " ", " ", "|"],
        [" ", " ", " ", " ", "D"],
        [" ", " ", "x", "-", "+"],
      ]);

      const element = {
        previousDirection: DIRECTION.RIGHT,
        character: "A",
        position: { row: 0, column: 2 },
      };

      const result = findNextCharacter(element);

      expect(result).toEqual({
        position: { row: 0, column: 3 },
        character: POSSIBLE_CHARACTERS.DASH,
        previousDirection: element.previousDirection,
      });
    });

    it("should return null if there is no directions", () => {
      const spyGetMap = jest.spyOn(mapModule, "getMap");
      spyGetMap.mockReturnValue([
        ["@", "-", "A", "-", "+"],
        [" ", " ", " ", " ", "|"],
        [" ", " ", " ", " ", "D"],
        [" ", " ", "x", "-", "+"],
      ]);

      const element = {
        previousDirection: DIRECTION.RIGHT,
        character: "A",
        position: { row: 0, column: 2 },
      };

      const result = findNextCharacter(element);

      expect(result).toEqual({
        position: { row: 0, column: 3 },
        character: POSSIBLE_CHARACTERS.DASH,
        previousDirection: element.previousDirection,
      });
    });

    it("should throw an error for 'TURN' character for fake turn", () => {
      const spyGetMap = jest.spyOn(mapModule, "getMap");
      spyGetMap.mockReturnValue([
        [" ", " ", "@", "-", "A", "-", "+", "-", "B", "-", "x", "\r"],
      ]);

      const element = {
        previousDirection: DIRECTION.RIGHT,
        character: POSSIBLE_CHARACTERS.TURN,
        position: { row: 0, column: 2 },
      };

      expect(() => {
        findNextCharacter(element);
      }).toThrow("Fake turn!");
    });

    it("should throw an error for no multiple start paths", () => {
      const spyGetMap = jest.spyOn(mapModule, "getMap");
      spyGetMap.mockReturnValue([
        [" ", " ", "x", "-", "B", "-", "@", "-", "A", "-", "x", "\r"],
      ]);

      const element = {
        previousDirection: DIRECTION.RIGHT,
        character: POSSIBLE_CHARACTERS.START,
        position: { row: 0, column: 6 },
      };

      expect(() => {
        findNextCharacter(element);
      }).toThrow("No multiple starting paths!");
    });

    it("should throw an error for broken path", () => {
      const spyGetMap = jest.spyOn(mapModule, "getMap");
      spyGetMap.mockReturnValue([
        [" ", " ", " ", "@", "-", "-", "A", "-", "+", "\r"],
        [" ", " ", " ", " ", " ", " ", " ", " ", "|", "\r"],
        ["\r"],
        [" ", " ", " ", " ", " ", " ", " ", " ", "B", "-", "x", "\r"],
      ]);

      const element = {
        previousDirection: DIRECTION.DOWN,
        character: "|",
        position: { row: 1, column: 8 },
      };

      expect(() => {
        findNextCharacter(element);
      }).toThrow("Broken path!");
    });

    it("should throw an error for no fork in the path", () => {
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

      const element = {
        previousDirection: DIRECTION.RIGHT,
        character: POSSIBLE_CHARACTERS.TURN,
        position: { row: 2, column: 10 },
      };

      expect(() => {
        findNextCharacter(element);
      }).toThrow("No fork in the path!");
    });
  });
