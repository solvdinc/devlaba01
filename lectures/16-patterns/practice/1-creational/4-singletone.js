class Logger {
  constructor() {
    if (Logger.exists) {
      return Logger.instance;
    }
    Logger.instance = this;
    Logger.exists = true;

    this.logCount = 0;
    this.logMessages = [];
  }

  log(message) {
    // here can be some hard logic (for example, log to Database, log to File)
    this.logMessages.push({ id: this.logCount + 1, message: message });
    this.logCount++;
  }

  getLogCount() {
    return this.logCount;
  }

  getLogMessages() {
    return this.logMessages;
  }

  showLoggerDataInConsole() {
    console.log("Count of logged messages:", this.logCount);
    console.table(this.logMessages);
  }
}

// 1
const loggerOne = new Logger();
loggerOne.log("First log");
loggerOne.showLoggerDataInConsole();

// 2
const loggerTwo = new Logger();
loggerTwo.log("Second log");
loggerTwo.showLoggerDataInConsole();
