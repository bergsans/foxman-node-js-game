const readline = require('readline');
const rawLevel = require('./level');
const level = require('./init-level')(rawLevel);
const printState = require('./print-state');
const initCreatures = require('./init-creatures');
require('cli-cursor').hide();

const initialState = {
  level,
  creatures: initCreatures(level)
};

