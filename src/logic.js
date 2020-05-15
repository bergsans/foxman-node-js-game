const { possibleMoveDirections } = require('./constants');
const { fox, wall, floor } = require('./constants');

const isMovePossible = (level, plr, moveX, moveY) => level[plr.y + moveY][plr.x + moveX] !== wall;
const isPlayerAttemptingToMove = (e) => Object.values(e).some((dir) => dir === true);
const copyLevel = (level) => level.map((row) => [...row]);
const nextState = (state, e) => {
  let { player, score, monsters } = state;
  const level = copyLevel(state.level);
  if (isPlayerAttemptingToMove(e.getValues())) {
    const [moveX, moveY] = possibleMoveDirections[e.getMoveDirection()];
    if (isMovePossible(level, player, moveX, moveY)) {
      level[player.y][player.x] = floor;
      player = {
        x: player.x + moveX,
        y: player.y + moveY,
      };
      level[player.y][player.x] = fox;
      score += 1;
    }
  }
  return {
    level,
    monsters,
    player,
    score,
  };
};


module.exports = nextState;
