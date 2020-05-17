const { FLOOR } = require('./constants');

// credits are at floor cells
const isCredit = (cell) => cell === FLOOR;

const findCredits = (row, y) => row.reduce(
  (credits, cell, x) => (isCredit(cell)
    ? [...credits, {
      x, y, visited: false,
    }]
    : credits),
  [],
);

const initCredits = (level) => level
  .reduce(
    (credits, row, y) => (row.some(isCredit)
      ? [...credits, ...findCredits(row, y)]
      : credits),
    [],
  );

module.exports = initCredits;
