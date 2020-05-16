const level = require('./init-level')();
const initCreatures = require('./init-creatures')(level);

const initialState = {
  level,
  score: 0,
  ...initCreatures,
  time: 20000,
};

module.exports = initialState;
