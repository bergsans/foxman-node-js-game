const ALIVE = true;
const isMonster = (cell) => cell === 'm';
const getMonsters = (row, i) => row.reduce(
  (monsters, cell, x) => isMonster(cell) 
    ? [...monsters, { x, y: i, status: ALIVE }]
    : monsters,
  []);
const initMonsters = (l) => l.reduce(
  (monsters, monstersOnRow, i) => monstersOnRow.some(isMonster) 
    ? [...monsters, ...getMonsters(monstersOnRow, i)]
    : monsters
  ,
  []
);
module.exports = initMonsters;
