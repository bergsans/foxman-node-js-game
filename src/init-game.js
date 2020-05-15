require('cli-cursor').hide();
const level = require('./init-level')();
const initCreatures = require('./init-creatures')(level);
const initialState = {
  level,
  ...initCreatures
};
module.exports = initialState;
