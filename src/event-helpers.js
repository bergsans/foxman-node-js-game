const defaultEventState = () => ({
  down: false,
  up: false,
  right: false,
  left: false
});
const handleKeyEvent = (_, key) => {
  switch(key) {
    case 'q': 
      process.exit(0);
    case 'up': case 'right': case 'down': case 'left': 
      setDirection(key);
  }
}
module.exports = {
  handleKeyEvent,
  defaultEventState
};
