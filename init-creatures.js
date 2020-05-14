const ALIVE = true;
const isCreature = (cell) => ['m', 'f'].includes(cell);
const getCreatures = (row, i) => row.reduce(
  (creatures, cell, x) => isCreature(cell) 
    ? [...creatures, { x, y: i, status: ALIVE }]
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
    )
    .reduce(
      (foundCreatures, creature, i) => (
        { 
          ...foundCreatures, 
          [i]: creature 
        }
      ),
      {}
    );
module.exports = initCreatures;
