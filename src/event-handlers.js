const readline = require('readline');

const commands = ['q', 'r', 'up', 'right', 'down', 'left'];
const defaultEventState = () => ({
  down: false,
  up: false,
  right: false,
  left: false,
  r: false,
  q: false
});
const eventHandler = () => {
  let events = { ...defaultEventState() };
  const setEvent = (key) => {
    events = { ...defaultEventState() };
    events[key] = true;
  };
  const handleKeyEvent = (_, key) => commands.includes(key.name) && setEvent(key.name); 
  process.stdin.setRawMode(true);
  readline.emitKeypressEvents(process.stdin);
  process.stdin.on('keypress', handleKeyEvent);
  return {
    getValues: () => ({ ...events }),
    reset: () => events = defaultEventState(),
    getMoveDirection: () => Object.entries(events).reduce(
      (moveDirection, [ direction, status ]) => moveDirection = status ? direction : moveDirection
      ,false
    )
  };
}
module.exports = eventHandler;
