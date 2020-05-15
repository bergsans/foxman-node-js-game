require('cli-cursor').hide();
const level = require('./init-level')();
const initCreatures = require('./init-creatures')(level);

const initialState = {
  level,
  score: 0,
  ...initCreatures,
};
module.exports = initialState;
