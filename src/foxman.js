const {
  drawLogo,
  drawMenu,
  drawState,
} = require('./draw');
const { FPS } = require('./constants');
const nextState = require('./logic');
const eventHandler = require('./event-handlers')();
const initialState = require('./init-game');
const externalToLogic = require('./external-logic');

// game loop
const gameLoop = (currentState) => {
  // side-effects
  console.clear();
  const events = eventHandler.getValues();
  externalToLogic.forEach((fn) => fn(currentState, events));
  [drawLogo, drawMenu, drawState].forEach((fn) => fn(currentState));

  // pure
  const state = events.r
    ? ({ ...initialState })
    : nextState(currentState, eventHandler);

  // side-effects
  eventHandler.reset();
  setTimeout(() => gameLoop(state), FPS);
};
gameLoop(initialState);
