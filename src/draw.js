const { types, logo, menu } = require('./graphics');
const ONE_SECOND = 1000;
const updateSpeed = 30;
const fps = ONE_SECOND / updateSpeed;
const determineType = (type) => types[type];
const drawState = (level) => console.log(
    level
        .map(
            (row) => row
                .map(determineType) 
                .join('')
            )
        .join('\n')
);
const drawMenu = () => console.log(menu);
const drawLogo = () => console.log(logo);
module.exports = {
  drawState,
  drawLogo,
  drawMenu,
  fps
};
