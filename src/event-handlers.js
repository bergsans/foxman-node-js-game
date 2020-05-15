const readline = require('readline');

const commands = ['q', 'up', 'right', 'down', 'left'];
const defaultEventState = () => ({
  down: false,
  up: false,
  right: false,
  left: false
});
const eventHandler = () => {
  let events = { ...defaultEventState() };
  const setEvent = (key) => {
    if(key === 'q') { process.exit(0); }
    events = { ...defaultEventState() };
    events[key] = true;
    console.log(events)
  };
  const handleKeyEvent = (_, key) => commands.includes(key.name) && setEvent(key.name); 
  process.stdin.setRawMode(true);
  readline.emitKeypressEvents(process.stdin);
  process.stdin.on('keypress', handleKeyEvent);
  return {
    getValue: () => ({ ...events }),
    reset: () => events = defaultEventState()
  };
}
module.exports = eventHandler;
