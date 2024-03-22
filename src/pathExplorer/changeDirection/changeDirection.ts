import { DIRECTION } from "../../constants";
import { Element } from "../../types";

export const changeDirections = ({
  previousDirection,
}: Pick<Element, "previousDirection">) => {
  const possibleDirections = {
    [DIRECTION.RIGHT]: [DIRECTION.UP, DIRECTION.DOWN],
    [DIRECTION.LEFT]: [DIRECTION.UP, DIRECTION.DOWN],
    [DIRECTION.UP]: [DIRECTION.LEFT, DIRECTION.RIGHT],
    [DIRECTION.DOWN]: [DIRECTION.LEFT, DIRECTION.RIGHT],
  };

  return possibleDirections[previousDirection];
};
