'use strict'

const repl = require('repl');
const EventEmitter = require('events');
const initPostAppShell = require('./postAppShell')

class PostAppEmitter extends EventEmitter {}

const emitter = new PostAppEmitter();
initPostAppShell(emitter);

let replServer = repl.start({prompt: '> ', eval: myEval});

function myEval(cmd, context, filename, callback) {
  function outputFunc(output) {
    callback(output);
  }
  emitter.emit('userInput', cmd, outputFunc);
}
