const ALIVE = true;
const isCreature = (cell) => ['m', 'f'].includes(cell);
const findCreatures = (row, i) => row.reduce(
  (creatures, cell, x) => isCreature(cell) 
    ? [...creatures, { x, y: i, type: cell, status: ALIVE }]
    : creatures,
  []);
const getCreatures = (level) => 
  level
    .reduce(
      (creatures, creaturesOnRow, i) => creaturesOnRow.some(isCreature) 
        ? [...creatures, ...findCreatures(creaturesOnRow, i)]
        : creatures
      ,
      []
    );
const initCreatures = (level) => {
  const creatures = getCreatures(level);
  const monsters = creatures
      .filter(c => c.type === 'm')
      .reduce((ms, m, i) => ({ ...ms, [i]: m }), {});
  const [ player ] = creatures.filter(c => c.type === 'f');
  return {
    player,
    monsters
  };
};
module.exports = initCreatures;
