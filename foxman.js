const rawLevel = require('./level');
const level = require('./init-level')(rawLevel);
const readline = require('readline');
const printState = require('./print-state');
const initCreatures = require('./init-creatures');
require('cli-cursor').hide();

const initialState = {
  level,
  creatures: initCreatures(level)
};

const defaultEventState = () => ({
  down: false,
  up: false,
  right: false,
  left: false
});
let events = { ...defaultEventState() };
const commands = {
  q: () => process.exit(0),
  up: () => events.down = true,
  right: () => events.right = true,
  down: () => events.down = true,
  left: () => events.left = true
};
const handleKeyEvent = (_, key) => key.name in commands && commands[key.name](); 
process.stdin.setRawMode(true);
readline.emitKeypressEvents(process.stdin);
process.stdin.on('keypress', handleKeyEvent);

setInterval(() => {
  console.log(events)
  events = { ...defaultEventState() };
}    
, 1000 / 30)

