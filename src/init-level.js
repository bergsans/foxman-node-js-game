const rawLevel = require('./level');

const initLevel = () => rawLevel
  .trim()
  .split('\n')
  .map((row) => row.split(''));
module.exports = initLevel;
