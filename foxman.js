const readline = require('readline');
const level = require('./init-level');
const printState = require('./print-state');
require('cli-cursor').hide();

printState(level);
