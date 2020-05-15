const { 
  drawLogo,
  drawMenu,
  drawState,
  fps
} = require('./draw');
const nextState = require('./logic');
const cliCursor = require('cli-cursor');

// Init game
const level = require('./init-level')();
const initCreatures = require('./init-creatures')(level);
const events = require('./event-handlers')();
const initialState = {
  level,
  ...initCreatures
};
cliCursor.hide();

// Game-loop
const gameLoop = (state) => {
  console.clear();
  drawLogo();
  drawMenu();
  drawState(state.level);
  state = nextState(state, events);
  events.reset();
  setTimeout(() => gameLoop(state), fps);
};
gameLoop(initialState);
