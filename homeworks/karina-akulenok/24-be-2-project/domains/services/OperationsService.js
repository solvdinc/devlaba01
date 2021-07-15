class OperationsService {
  async sum({ urlInfo }) {
    const findParams = urlInfo.searchParams;
    const num1 = findParams.get('num1');
    const num2 = findParams.get('num2');

    if (!num1 || !num2) {
      return JSON.stringify({ "error": "please add at least 2 numbers", "status": 400 })
    }

    const result = +num1 + +num2;
    return JSON.stringify({ "result": result, "status": 200 })
  }

  async substr({ urlInfo }) {
    const findParams = urlInfo.searchParams;
    const string = findParams.get('string');
    const start = +findParams.get('start');
    const length = +findParams.get('length');

    if (!string || !start) {
      return JSON.stringify({ "error": "please add all need params", "status": 400 })
    }

    const result = string.substr(start, length);
    return JSON.stringify({ "result": result, "status": 200 })
  }

  async reverse({ urlInfo }) {
    const findParams = urlInfo.searchParams;
    const string = findParams.get('string');

    if ('string' !== typeof string) {
      return JSON.stringify({ "error": "Invalid string", "status": 404 })
    }

    const result = string.split('').reverse().join('');
    return JSON.stringify({ "result": result, "status": 200 })
  }
}

module.exports = new OperationsService();