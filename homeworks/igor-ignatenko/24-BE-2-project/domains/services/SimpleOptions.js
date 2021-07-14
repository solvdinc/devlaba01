class SimpleOptions {
  static async sum(request) {
    const queryString = request.urlInfo.searchParams;
    const num1 = queryString.get('num1');
    const num2 = queryString.get('num2');

    if (!request.urlInfo.search || num1 === '' || num2 === '') {
      return JSON.stringify({ "error": "Pls enter all numbers", "status": 404 })
    }

    const result = +num1 + +num2;
    return JSON.stringify({ result: `${result}`, "status": 200 });

  }
  static async reverse(request) {
    const stringForReverse = request.urlInfo.searchParams.get('input');

    if (!request.urlInfo.search || stringForReverse === '') {
      return JSON.stringify({ "error": "Enter yr string", "status": 404 });
    }

    if (typeof stringForReverse !== 'string') {
      return JSON.stringify({ "error": "Invalid data", "status": 400 });
    }

    const result = stringForReverse.split('').reverse().join('');
    return JSON.stringify({ result: `${result}`, "status": 200 });

  }
  static async substr(request) {
    const queryString = request.urlInfo.searchParams;
    const input = queryString.get('input');
    const start = +queryString.get('start');
    const length = +queryString.get('length');

    if (!request.urlInfo.search || input === '' || start === '' || length === '') {
      return JSON.stringify({ "error": "Enter all parameters", "status": 404 });
    }

    if (typeof input !== 'string' || typeof queryString.get('start') !== 'number' || typeof queryString.get('length') !== 'number') {
      return JSON.stringify({ "error": "Invalid data", "status": 400 });
    }

    const result = input.substr(start, length);
    return JSON.stringify({ result: `${result}`, "status": 200 });
  }
}

module.exports = SimpleOptions;