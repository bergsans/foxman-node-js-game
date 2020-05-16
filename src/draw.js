const {
  types,
  logo,
  win,
  gameOver,
} = require('./graphics');
require('cli-cursor').hide();

const drawWin = () => console.log(win);

const drawGameOver = () => console.log(gameOver);

const representNumberWithNDigits = (nDigitRepresentation) => (number) => number.toString().padStart(nDigitRepresentation, '0');

const drawMenu = (state) => console.log(`
┌───────────────┬──────────────┬───────────────┬───────────────┐
│  r: restart   │  q: quit     │  time: ${representNumberWithNDigits(5)(state.time)}  │  score: ${representNumberWithNDigits(3)(state.score)}   │
└───────────────┴──────────────┴───────────────┴───────────────┘
`);

const determineType = (type) => types[type];

const drawState = (state) => console.log(
  state.level
    .map(
      (row) => row
        .map(determineType)
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
