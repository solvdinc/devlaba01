const ILogger = require('./interfaces/ILogger');

class ConsoleLogger extends ILogger {
  info(...args) {
    console.log(...args);
  }

  error(...args) {
    console.log(...args);
  }
}

module.exports = ConsoleLogger;
