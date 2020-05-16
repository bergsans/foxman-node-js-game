const readline = require('readline');

const defaultEventState = () => ({
  down: false,
  up: false,
  right: false,
  left: false,
  r: false,
  q: false,
});

const commands = ['q', 'r', 'up', 'right', 'down', 'left'];

const eventHandler = () => {
  const events = { ...defaultEventState() };
  const handleKeyEvent = (_, key) => commands.includes(key.name) && Object.assign(
    events,
    { ...defaultEventState() },
    { [key.name]: true },
  );
  process.stdin.setRawMode(true);
  readline.emitKeypressEvents(process.stdin);
  process.stdin.on('keypress', handleKeyEvent);
  return {
    getValues: () => ({ ...events }),
    reset: () => Object.assign(events, defaultEventState()),
    getMoveDirection: () => Object.entries(events).reduce(
      (moveDirection, [direction, isMovingTo]) => (
        isMovingTo
          ? direction
          : moveDirection
      ),
      false,
    ),
  };
};

module.exports = eventHandler;
