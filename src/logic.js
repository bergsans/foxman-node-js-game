const {
  MOVE_DIRECTIONS,
  MONSTER,
  UPDATE_VARIANT,
  FOX,
  WALL,
  FLOOR,
} = require('./constants');

const isMovePossible = (level, plr, moveX, moveY) => level[plr.y + moveY][plr.x + moveX] !== WALL;

const isMovingInDirection = (direction) => direction === true;

const isPlayerAttemptingToMove = (e) => Object.values(e).some(isMovingInDirection);

const copyLevel = (level) => level.map((row) => [...row]);

const nextState = (state, e) => {
  let { player, score, monsters } = state;
  const level = copyLevel(state.level);
  if (isPlayerAttemptingToMove(e.getValues())) {
    const [moveX, moveY] = MOVE_DIRECTIONS[e.getMoveDirection()];
    if (isMovePossible(level, player, moveX, moveY)) {
      level[player.y][player.x] = FLOOR;
      player = {
        x: player.x + moveX,
        y: player.y + moveY,
      };
      level[player.y][player.x] = FOX;
      score += 1;
    }
  }
  return {
    level,
    monsters,
    player,
    score,
    time: state.time - UPDATE_VARIANT,
  };
};


module.exports = nextState;
