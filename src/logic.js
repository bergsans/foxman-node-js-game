const {
  MOVE_DIRECTIONS,
  UPDATE_VARIANT,
  WALL,
} = require('./constants');

const { directions, isEntityAt } = require('./helpers');

const isMovePossible = (
  creature,
  level,
  x,
  y,
) => level[creature.y + y][creature.x + x] !== WALL;

const isMovingInDirection = (direction) => direction === true;

const isPlayerAttemptingToMove = (e) => Object.values(e).some(isMovingInDirection);

const attemptMove = (state, level, [x, y]) => (
  isMovePossible(state.player, level, x, y)
    ? ({
      ...state.player,
      x: state.player.x + x,
      y: state.player.y + y,
    })
    : state.player
);

const getRandomInteger = (max) => Math.floor(Math.random() * Math.floor(max));

const moveMonster = (monster, level) => {
  const direction = directions[getRandomInteger(4)];
  const [x, y] = direction;
  return isMovePossible(monster, level, x, y)
    ? ({
      ...monster,
      x: monster.x + x,
      y: monster.y + y,
    })
    : monster;
};

const isAtCellWithCredit = (
  position,
  credits,
  score,
) => (
  credits.some((c) => isEntityAt(c, position.x, position.y))
    ? ({
      score: score + 1,
      credits: credits.filter((c) => !isEntityAt(c, position.x, position.y)),
    })
    : ({ score, credits })
);

const playerNextTurn = (state, e) => (isPlayerAttemptingToMove(e.getValues())
  ? attemptMove(state, state.level, MOVE_DIRECTIONS[e.getMoveDirection()])
  : state.player);

const nextState = (state, e) => {
  const { score, credits } = isAtCellWithCredit(state.player, state.credits, state.score);
  const player = playerNextTurn(state, e);
  const monsters = state.monsters.map((m) => moveMonster(m, state.level));
  const isHit = monsters.some((m) => isEntityAt(m, player.x, player.y));
  if (isHit) {
    player.isAlive = false;
  }
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
