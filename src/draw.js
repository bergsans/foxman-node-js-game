const { types, logo, menu } = require('./graphics');
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
  drawMenu
};
