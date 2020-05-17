const {
  types,
  logo,
  win,
  gameOver,
} = require('./graphics');
const { isEntityAt } = require('./helpers');
const { FLOOR } = require('./constants');

require('cli-cursor').hide();

const drawWin = () => console.log(win);

const drawGameOver = () => console.log(gameOver);

const representNumberWithNDigits = (nDigitRepresentation) => (number) => number.toString().padStart(nDigitRepresentation, '0');

const drawMenu = (state) => console.log(`
        ┌───────────────┬──────────────┬───────────────┬───────────────┐
        │  r: restart   │  q: quit     │  time: ${representNumberWithNDigits(5)(state.time)}  │  score: ${representNumberWithNDigits(3)(state.score)}   │
        └───────────────┴──────────────┴───────────────┴───────────────┘
`);


const determineType = (state, x, y) => {
  if (isEntityAt(state.player, x, y)) {
    return types.fox;
  } if (state.monsters.some((monster) => isEntityAt(monster, x, y))) {
    return state.monsters.find((m) => isEntityAt(m, x, y)).type;
  } if (state.credits.some((credit) => isEntityAt(credit, x, y))) {
    return types.credit;
  } if (state.level[y][x] === FLOOR) {
    return types.floor;
  }
  return types.wall;
};

const drawState = (state) => console.log(
  state.level
    .map(
      (row, y) => row
        .map((_, x) => determineType(state, x, y))
        .join(''),
    )
    .map((ln) => `     ${ln}`)
    .join('\n'),
);

const drawLogo = () => console.log(logo);

module.exports = {
  drawState,
  drawLogo,
  drawMenu,
  drawGameOver,
  drawWin,
};
