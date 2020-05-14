const rawLevel = require('./level');
const level = require('./init-level')(rawLevel);
const readline = require('readline');
const printState = require('./print-state');
const initCreatures = require('./init-creatures');
const { defaultEventState } = require('./event-helpers');
require('cli-cursor').hide();

// side-effects (keyboard navigation and quit)
let events = { ...defaultEventState() };
const setEvent = (key) => {
  if(key === 'q') { process.exit(0); }
  events = { ...defaultEventState() };
  events[key] = true;
};
const commands = ['q', 'up', 'right', 'down', 'left'];
const handleKeyEvent = (_, key) => commands.includes(key.name) && setEvent(key.name); 
process.stdin.setRawMode(true);
readline.emitKeypressEvents(process.stdin);
process.stdin.on('keypress', handleKeyEvent);
const creatures = initCreatures(level);
const monsters = creatures.filter(c => c.type === 'm');
const [plr] = creatures.filter(c => c.type === 'f');

// main logic
const initialState = {
  level,
  monsters: monsters.reduce((ms, m, i) => ({ ...ms, [i]: m }), {}),
  plr
};
const nextState = (state, e) => state;
const gameLoop = (state) => {
  console.clear();
  console.log(events);
  console.log(state.plr, state.monsters)
  state = nextState(state, events);
  events = { ...defaultEventState() };
  setTimeout(
    () => gameLoop(state), 
    1000 / 30
  );
};
gameLoop(initialState);
