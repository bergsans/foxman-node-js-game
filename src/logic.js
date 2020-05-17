const {
  MOVE_DIRECTIONS,
  UPDATE_VARIANT,
  WALL,
} = require('./constants');

const { isEntityAt } = require('./helpers');

const isMovePossible = (creature, level, x, y) => level[creature.y + y][creature.x + x] !== WALL;

const isMovingInDirection = (direction) => direction === true;

const isPlayerAttemptingToMove = (e) => Object.values(e).some(isMovingInDirection);

const attemptMove = (state, level, [x, y]) => (isMovePossible(state.player, level, x, y)
  ? ({
    x: state.player.x + x,
    y: state.player.y + y,
  })
  : state.player);

const getRandomInteger = (max) => Math.floor(Math.random() * Math.floor(max));

const dirs = Object.values(MOVE_DIRECTIONS);
const moveMonster = (monster, level) => {
  const dir = dirs[getRandomInteger(4)];
  const [mX, mY] = dir;
  return isMovePossible(monster, level, mX, mY)
    ? ({
      ...monster,
      x: monster.x + mX,
      y: monster.y + mY,
    })
    : monster;
};

const isAtCredit = (position, credits, score) => {
  if (credits.some((c) => isEntityAt(c, position.x, position.y))) {
    return {
      score: score + 1,
      credits: credits.filter((c) => !isEntityAt(c, position.x, position.y)),
    };
  }
  return { score, credits };
};

const nextState = (state, e) => {
  const { score, credits } = isAtCredit(state.player, state.credits, state.score);
  const player = isPlayerAttemptingToMove(e.getValues())
    ? attemptMove(state, state.level, MOVE_DIRECTIONS[e.getMoveDirection()])
    : state.player;
  const monsters = state.monsters.map((m) => moveMonster(m, state.level));
  return {
    ...state,
    player,
    monsters,
    score,
    credits,
    time: state.time - UPDATE_VARIANT,
  };
};

module.exports = nextState;
