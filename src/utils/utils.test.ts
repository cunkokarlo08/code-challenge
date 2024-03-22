import { getMap, parseMap } from "./map";
import {
  concatenateMapPositionValues,
  getPosition,
  positionMap,
  setPosition,
} from "./trackPositionDuplication";

describe("parseMap", () => {
  it("should parse the map file correctly", () => {
    const mockFileContents = `
 @--A---+
        |
  x-B-+ C
    |   |
    +---+`;
    parseMap(mockFileContents);

    const map = getMap();

    expect(map).toEqual([
      [],
      [" ", "@", "-", "-", "A", "-", "-", "-", "+"],
      [" ", " ", " ", " ", " ", " ", " ", " ", "|"],
      [" ", " ", "x", "-", "B", "-", "+", " ", "C"],
      [" ", " ", " ", " ", "|", " ", " ", " ", "|"],
      [" ", " ", " ", " ", "+", "-", "-", "-", "+"],
    ]);
  });
});

describe("setPosition", () => {
  beforeEach(() => {
    positionMap.clear();
  });

  it("should set the position correctly", () => {
    setPosition(0, 0, "A");

    expect(getPosition(0, 0)).toEqual("A");
  });
});

describe("getPosition", () => {
  beforeEach(() => {
    positionMap.clear();
  });

  it("should return the value of the position", () => {
    setPosition(1, 1, "B");

    expect(getPosition(1, 1)).toEqual("B");
  });

  it("should return undefined if position is not set", () => {
    expect(getPosition(2, 2)).toBeUndefined();
  });
});

describe("concatenateMapPositionValues", () => {
  it("should concatenate map position values correctly", () => {
    setPosition(0, 0, "A");
    setPosition(0, 1, "B");
    setPosition(1, 0, "C");

    expect(concatenateMapPositionValues()).toEqual("ABC");
  });
});
