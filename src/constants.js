const ALIVE = true;

const MOVE_DIRECTIONS = {
  up: [0, -1],
  right: [1, 0],
  down: [0, 1],
  left: [-1, 0],
};

const FOX = 'f';

const FLOOR = 'd';

const WALL = 'x';

const CREDITS = ' ';

const MONSTER = 'm';

const ONE_SECOND = 1000;

const UPDATE_VARIANT = 15;

const FPS = ONE_SECOND / UPDATE_VARIANT;

module.exports = {
  MOVE_DIRECTIONS,
  FLOOR,
  FOX,
  WALL,
  MONSTER,
  FPS,
  ALIVE,
  CREDITS,
  UPDATE_VARIANT,
};
