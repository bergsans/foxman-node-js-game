const { types } = require('./graphics');

const {
  ogre, octupus, ghost, alien,
} = types;

const initCreatures = {
  player: {
    x: 1,
    y: 1,
    isAlive: true,
  },
  monsters: [
    {
      x: 31,
      y: 1,
      isChasing: true,
      type: ogre,
    },
    {
      x: 8,
      y: 9,
      isChasing: true,
      type: ghost,
    },
    {
      x: 31,
      y: 18,
      isChasing: true,
      type: octupus,
    },
    {
      x: 1,
      y: 18,
      isChasing: true,
      type: alien,
    },
  ],
};

module.exports = initCreatures;
