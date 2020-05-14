const initLevel = (rawLevel) => rawLevel
  .trim()
  .split('\n')
  .map(row => row.split(''));
module.exports = initLevel;
