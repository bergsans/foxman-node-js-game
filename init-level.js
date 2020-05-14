const THE_LEVEL = `
xxxxxxxxxxxxxxx
x             x
x             x
x             x
x m           x
x m           x
xxxxxxxxxxxxxxx
`;
const formatLevel = rawLevel => rawLevel
  .trim()
  .split('\n')
  .map(row => row.split(''));
module.exports = formatLevel(THE_LEVEL);
