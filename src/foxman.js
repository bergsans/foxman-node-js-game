const {
  drawLogo,
  drawMenu,
  drawState,
  fps,
} = require('./draw');
const nextState = require('./logic');
const events = require('./event-handlers')();
const initialState = require('./init-game');

// game loop
const gameLoop = (currentState) => {
  const { score, level } = currentState;
  const { q, r } = events.getValues();
  if (q) {
    process.exit(0);
  }
  console.clear();
  drawLogo();
  drawMenu(score);
  drawState(level);
  const state = r
    ? ({ ...initialState })
    : nextState(currentState, events);
  events.reset();
  setTimeout(() => gameLoop(state), fps);
};
gameLoop(initialState);
