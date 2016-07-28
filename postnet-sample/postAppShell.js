const postAppCore = require('./postAppCore')

module.exports = function (emitter) {
  emitter.on('userInput', handleUserInput);
};

function handleUserInput(cmd, output) {
  output("Your input is :" + cmd);
  
}
