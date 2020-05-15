const { 
  drawLogo,
  drawMenu,
  drawState,
  fps
} = require('./draw');
const nextState = require('./logic');
const events = require('./event-handlers')();
const initialState = require('./init-game');

// Game-loop
const gameLoop = (state) => {
  const { q, r } = events.getValues();
  if(q || r) {
    q && process.exit();
    state = { ...initialState };
    events.reset();
  }
  console.clear();
  drawLogo();
  drawMenu();
  drawState(state.level);
  state = nextState(state, events);
  events.reset();
  setTimeout(() => gameLoop(state), fps);
};
gameLoop(initialState);
