const { 
  drawLogo,
  drawMenu,
  drawState
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



const gameLoop = (state) => {
  console.clear();
  console.log(events.getValue());
  console.log(state.plr, state.monsters)
  state = nextState(state, events);
  events.reset();
  setTimeout(
    () => gameLoop(state), 
    1000 / 30
  );
};
gameLoop(initialState);
