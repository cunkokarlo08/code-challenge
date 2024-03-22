import * as fs from "fs";
import * as path from "path";

import { Element } from "./types";
import { getCharacterPath } from "./utils/characterPath";
import { findPositionOfStartingCharacter } from "./pathExplorer/findPositionOfStartingCharacter/findPositionOfStartingCharacter";
import { pathFinder } from "./pathExplorer/pathFinder/pathFinder";
import { getMap, parseMap } from "./utils/map";
import { concatenateMapPositionValues } from "./utils/trackPositionDuplication";

const filePath = path.join("src", "data", "mapExample1.txt");

const mapVariant = fs.readFileSync(filePath, {
  encoding: "utf8",
});

const startThePath = () => {
  parseMap(mapVariant);

  const map = getMap();

  const startingElement = findPositionOfStartingCharacter(map) as Element;

  pathFinder(startingElement);

  console.log(
    "Collected letters:",
    concatenateMapPositionValues(),
    "\nPath as characters:",
    getCharacterPath()
  );
};

startThePath();
