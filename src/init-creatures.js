const {types} = require('./graphics');
const {ogre,octupus,ghost,alien} = types;

const initCreatures = {
  player: {
    x: 1,
    y: 1,
  },
  monsters: [
    {
      x: 10,
      y: 1,
      isChasing: true,
      type: ogre
    },
    {
      x: 8,
      y: 1,
      isChasing: true,
      type: ghost
    },
    {
      x: 8,
      y: 1,
      isChasing: true,
      type: octupus 
    },
    {
      x: 8,
      y: 1,
      isChasing: true,
      type: alien
    },
  ],
};

module.exports = initCreatures;
