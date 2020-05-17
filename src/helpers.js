const { MOVE_DIRECTIONS, FLOOR } = require('./constants');

const isEntityAt = (c, x, y) => c.x === x && c.y === y;

const directions = Object.values(MOVE_DIRECTIONS);

function findPath(
  level,
  startCoordinates,
  endCoordinates,
) {
  const grid = level.map((el) => [...el]);
  const queue = [
    {
      y: startCoordinates.y,
      x: startCoordinates.x,
      path: [],
      status: 'Known',
    },
  ];
  grid[endCoordinates.y][endCoordinates.x] = 'G';
  while (queue.length > 0) {
    const currentLocation = queue.shift();
    if (currentLocation === undefined) {
      continue;
    }
    for (const [direction, diffs] of Object.entries(MOVE_DIRECTIONS)) {
      const newPath = currentLocation.path.slice();
      newPath.push(direction);
      let { x, y } = currentLocation;
      const [horisontal, vertical] = diffs;
      x += horisontal;
      y += vertical;
      const newLocation = {
        y,
        x,
        path: newPath,
        status: 'Unknown',
      };
      if (
        newLocation.x < 0
                || newLocation.x >= grid[0].length
                || newLocation.y < 0
                || newLocation.y >= grid.length
      ) {
        newLocation.status = 'Invalid';
      } else if (grid[y][x] === 'G') {
        newLocation.status = 'Goal';
        return newLocation.path;
      } else if (grid[y][x] !== FLOOR) {
        newLocation.status = 'Blocked';
      } else {
        newLocation.status = 'Valid';
        grid[newLocation.y][newLocation.x] = 'Visited';
        queue.push(newLocation);
      }
    }
  }
  return false;
}

module.exports = {
  isEntityAt,
  directions,
  findPath,
};
