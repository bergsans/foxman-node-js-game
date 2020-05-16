const { ALIVE, FOX, MONSTER } = require('./constants');

const isCreature = (cell) => ['m', 'f'].includes(cell);

const findCreatures = (row, i) => row.reduce(
  (creatures, cell, x) => (isCreature(cell)
    ? [...creatures, {
      x, y: i, type: cell, status: ALIVE,
    }]
    : creatures),
  [],
);

const getCreatures = (level) => level
  .reduce(
    (creatures, creaturesOnRow, i) => (creaturesOnRow.some(isCreature)
      ? [...creatures, ...findCreatures(creaturesOnRow, i)]
      : creatures),
    [],
  );

const initCreatures = (level) => ({
  player: getCreatures(level).filter((c) => c.type === FOX)[0],
  monsters: getCreatures(level).filter((c) => c.type === MONSTER),
});

module.exports = initCreatures;
