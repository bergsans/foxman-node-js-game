const ALIVE = true;
const isCreature = (cell) => ['m', 'f'].includes(cell);
const getCreatures = (row, i) => row.reduce(
  (creatures, cell, x) => isCreature(cell) 
    ? [...creatures, { x, y: i, type: cell, status: ALIVE }]
    : creatures,
  []);
const initCreatures = (l) => 
  l
    .reduce(
      (creatures, creaturesOnRow, i) => creaturesOnRow.some(isCreature) 
        ? [...creatures, ...getCreatures(creaturesOnRow, i)]
        : creatures
      ,
      []
    );
module.exports = initCreatures;
