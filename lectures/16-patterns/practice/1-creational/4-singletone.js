class Logger {
  constructor() {
    if (Logger.exists) {
      return Logger.instance;
    }

    Logger.exists = true;
    Logger.instance = this;

    this.logCount = 0;
    this.logMessages = [];
  }

  log(message) {
    this.logMessages.push({ id: this.logCount, message });
    this.logCount++;
  }

  getLogCount() {
    return this.logCount;
  }

  getLogMessages() {
    return this.logMessages;
  }

  showLoggerData() {
    console.log('Count: ', this.logCount);
    console.log('Messages: ', this.logMessages);
  }
}

const loggerOne = new Logger();
loggerOne.log('First log');
loggerOne.showLoggerData();

const loggerTwo = new Logger();
loggerTwo.log('Second log');
loggerTwo.showLoggerData();
