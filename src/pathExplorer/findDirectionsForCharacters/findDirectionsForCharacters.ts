import { allDirections, DIRECTION, POSSIBLE_CHARACTERS } from "../../constants";
import { Element } from "../../types";
import { changeDirections } from "../changeDirection/changeDirection";

export const findDirectionsForCharacter = ({
  direction,
  character,
}: Pick<Element, "character"> & {
  direction?: DIRECTION;
}): Pick<Element, "character"> & { directions: DIRECTION[] } => {
  switch (character) {
    case POSSIBLE_CHARACTERS.START:
      return {
        directions: allDirections,
        character,
      };

    case POSSIBLE_CHARACTERS.DASH:
      return {
        directions: [direction as DIRECTION],
        character,
      };

    case POSSIBLE_CHARACTERS.PIPE:
      return {
        directions: [direction as DIRECTION],
        character,
      };

    case POSSIBLE_CHARACTERS.TURN:
      return {
        directions: changeDirections({
          previousDirection: direction as DIRECTION,
        }),
        character,
      };

    case POSSIBLE_CHARACTERS.END:
      return { directions: [], character };

    default:
      const upperCaseLetterPossibleDirections = changeDirections({
        previousDirection: direction as DIRECTION,
      });

      return {
        directions: [
          direction as DIRECTION,
          ...upperCaseLetterPossibleDirections,
        ],
        character,
      };
  }
};
