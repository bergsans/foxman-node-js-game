const {
  MOVE_DIRECTIONS,
  MONSTER,
  UPDATE_VARIANT,
  FOX,
  WALL,
  FLOOR,
  CREDITS,
} = require('./constants');

const isMovePossible = (state, moveX, moveY) => state.level[state.player.y + moveY][state.player.x + moveX] !== WALL;

const isMovingInDirection = (direction) => direction === true;

const isPlayerAttemptingToMove = (e) => Object.values(e).some(isMovingInDirection);

const copyLevel = (level) => level.map((row) => [...row]);

const attemptMove = (state, level, [moveX, moveY]) => {
  if (isMovePossible(state, moveX, moveY)) {
    const x = state.player.x + moveX;
    const y = state.player.y + moveY;
    const score = level[y][x] === CREDITS
      ? state.score + 1
      : state.score;
    level[state.player.y][state.player.x] = FLOOR;
    level[y][x] = FOX;
    const newState = {
      ...state,
      player: {
        x,
        y,
      },
      score,
      level,
    };
    return newState;
  }
  return { ...state };
};

const nextState = (state, e) => {
  const newLevel = copyLevel(state.level);
  const playerTurn = isPlayerAttemptingToMove(e.getValues())
    ? attemptMove(state, newLevel, MOVE_DIRECTIONS[e.getMoveDirection()])
    : state;
  return {
    ...playerTurn,
    time: state.time - UPDATE_VARIANT,
  };
};


module.exports = nextState;
