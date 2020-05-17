const {
  MOVE_DIRECTIONS,
  UPDATE_VARIANT,
  WALL,
  CHASE_MAX,
} = require('./constants');

const { findPath, directions, isEntityAt } = require('./helpers');

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

const moveMonster = (monster, state) => {
  const isChasing = state.chaseCounter === CHASE_MAX
    ? !monster.isChasing
    : monster.isChasing;
  if (isChasing) {
    const direction = findPath(state.level, monster, state.player)[0];
    const [x, y] = MOVE_DIRECTIONS[direction];
    return {
      ...monster,
      isChasing,
      x: monster.x + x,
      y: monster.y + y,
    };
  }
  // side-effect (ranomized direction)
  const direction = directions[getRandomInteger(4)];
  const [x, y] = direction;
  return isMovePossible(monster, state.level, x, y)
    ? ({
      ...monster,
      isChasing,
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
  const monsters = state.counter === 3
    ? state.monsters.map((m) => moveMonster(m, state))
    : state.monsters;
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
    counter: state.counter > 3 ? 0 : state.counter + 1,
    chaseCounter: state.chaseCounter > CHASE_MAX ? 0 : state.chaseCounter + 1,
  };
};

module.exports = nextState;
