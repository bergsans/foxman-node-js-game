const types = require('./graphics');
const determineType = (type) => types[type];
const printState = (array) => console.log(
    array
        .map(
            (row) => row
                .map(determineType) 
                .join('')
            )
        .join('\n')
);
module.exports = printState;
