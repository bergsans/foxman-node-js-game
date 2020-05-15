const { types, logo } = require('./graphics');

const makeScoreString = (scoreNumber) => {
  let newScoreString;
  if (scoreNumber < 10) {
    newScoreString = `00${scoreNumber}`;
  } else if (scoreNumber < 100) {
    newScoreString = `0${scoreNumber}`;
  } else {
    newScoreString = scoreNumber.toString();
  }
  return newScoreString;
};
const drawMenu = (score) => console.log(`
┌─────────────────────────────────────────────────────┐
│  q: quit  ◈  r: restart  ◈              score: ${makeScoreString(score)}  │
└─────────────────────────────────────────────────────┘
`);
const ONE_SECOND = 1000;
const updateSpeed = 10;
const fps = ONE_SECOND / updateSpeed;
const determineType = (type) => types[type];
const drawState = (level) => console.log(
  level
    .map(
      (row) => row
        .map(determineType)
        .join(''),
    )
    .join('\n'),
);
const drawLogo = () => console.log(logo);
module.exports = {
  drawState,
  drawLogo,
  drawMenu,
  fps,
};
