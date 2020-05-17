const chalk = require('chalk');

const gameOver = chalk.red(
  `

      ▄████  ▄▄▄       ███▄ ▄███▓▓█████     ▒█████   ██▒   █▓▓█████  ██▀███  
     ██▒ ▀█▒▒████▄    ▓██▒▀█▀ ██▒▓█   ▀    ▒██▒  ██▒▓██░   █▒▓█   ▀ ▓██ ▒ ██▒
    ▒██░▄▄▄░▒██  ▀█▄  ▓██    ▓██░▒███      ▒██░  ██▒ ▓██  █▒░▒███   ▓██ ░▄█ ▒
    ░▓█  ██▓░██▄▄▄▄██ ▒██    ▒██ ▒▓█  ▄    ▒██   ██░  ▒██ █░░▒▓█  ▄ ▒██▀▀█▄  
    ░▒▓███▀▒ ▓█   ▓██▒▒██▒   ░██▒░▒████▒   ░ ████▓▒░   ▒▀█░  ░▒████▒░██▓ ▒██▒
     ░▒   ▒  ▒▒   ▓▒█░░ ▒░   ░  ░░░ ▒░ ░   ░ ▒░▒░▒░    ░ ▐░  ░░ ▒░ ░░ ▒▓ ░▒▓░
      ░   ░   ▒   ▒▒ ░░  ░      ░ ░ ░  ░     ░ ▒ ▒░    ░ ░░   ░ ░  ░  ░▒ ░ ▒░
    ░ ░   ░   ░   ▒   ░      ░      ░      ░ ░ ░ ▒       ░░     ░     ░░   ░ 
          ░       ░  ░       ░      ░  ░       ░ ░        ░     ░  ░   ░     
`,
);

const win = chalk.blue(
  `
                █   █ ███ █   █ 
                █   █  █  ██  █ 
                █ █ █  █  █ █ █ 
                ██ ██  █  █  ██ 
                █   █ ███ █   █ 
`,
);

const logo = chalk.red(`
  
       ████                                                
      ░██░                                                 
     ██████  ██████  ██   ██ ██████████   ██████   ███████ 
    ░░░██░  ██░░░░██░░██ ██ ░░██░░██░░██ ░░░░░░██ ░░██░░░██
      ░██  ░██   ░██ ░░███   ░██ ░██ ░██  ███████  ░██  ░██
      ░██  ░██   ░██  ██░██  ░██ ░██ ░██ ██░░░░██  ░██  ░██
      ░██  ░░██████  ██ ░░██ ███ ░██ ░██░░████████ ███  ░██
      ░░    ░░░░░░  ░░   ░░ ░░░  ░░  ░░  ░░░░░░░░ ░░░   ░░ `);
// x: chalk.blue('🧱'),
const types = {
  wall: '🌳',
  ogre: '👹',
  ghost: '👻',
  octupus: '🐙',
  alien: '👾',
  fox: '🦊',
  credit: chalk.yellow('..'),
  floor: '  ',
};

module.exports = {
  types,
  logo,
  win,
  gameOver,
};
