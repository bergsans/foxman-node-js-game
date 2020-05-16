const {
  drawWin,
  drawGameOver,
} = require('./draw');

const quit = (withMessage) => {
  withMessage && withMessage();
  process.exit(0);
};

const externalToLogic = [
  (s) => s.score > 150 && quit(drawWin),
  (_, e) => e.q && quit(),
  (s) => s.time <= 0 && quit(drawGameOver),
];

module.exports = externalToLogic;
