const { MOVE_DIRECTIONS } = require('./constants');

const isEntityAt = (c, x, y) => c.x === x && c.y === y;

const directions = Object.values(MOVE_DIRECTIONS);

module.exports = {
  isEntityAt,
  directions,
};
