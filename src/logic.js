const { possibleMoveDirections } = require('./constants');
const { f, floor } = require('./graphics').types;

const isMovePossible = (level, plr, moveX, moveY) => level[plr.y + moveY][plr.x + moveX].type !== 'x';
const isPlayerAttemptingToMove = (e) => Object.values(e).some(dir => dir === true);
const copyLevel = (level) => level.map(row => [...row]);
const nextState = (state, e) => {
  let { player, monsters } = state;
  const level = copyLevel(state.level);
  if(isPlayerAttemptingToMove(e.getValues())) {
  const [ moveX, moveY ] = possibleMoveDirections[e.getMoveDirection()];
    if(isMovePossible(level, player, moveX, moveY)) {
      level[player.y][player.x] = floor;
      player = {
        x: player.x + moveX,
        y: player.y + moveY
      };
      level[player.y][player.x] = f;
    }
  }
  return {
    level,
    monsters,
    player
  };
};



module.exports = nextState;
