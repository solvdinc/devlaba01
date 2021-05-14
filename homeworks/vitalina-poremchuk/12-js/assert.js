function assert(func, data) {
    if (!func) {
      console.error(`${func} failed`);
      return;
    }
    console.info(`${func} ok`);
  }
  
  module.exports = assert;