export enum DIRECTION {
  RIGHT = "right",
  LEFT = "left",
  UP = "up",
  DOWN = "down",
}

export enum POSSIBLE_CHARACTERS {
  DASH = "-",
  PIPE = "|",
  TURN = "+",
  START = "@",
  END = "x",
}

export const allDirections = [
  DIRECTION.RIGHT,
  DIRECTION.LEFT,
  DIRECTION.UP,
  DIRECTION.DOWN,
];

export const uppercaseLettersRegex = /[A-Z]/;
