class ILogger {
  info(...args) {
    throw new Error('Implement it');
  }

  error(...args) {
    throw new Error('Implement it');
  }
}

module.exports = ILogger;
