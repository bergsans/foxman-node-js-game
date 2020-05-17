const level = require('./init-level')();
const initCreatures = require('./init-creatures');
const credits = require('./init-credits')(level);

const initialState = {
  level,
  score: 0,
  ...initCreatures,
  time: 20000,
  credits,
};

module.exports = initialState;
