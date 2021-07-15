class BasicOperators {
  static async reverse(str) {
    if (typeof str !== 'string' || !str || str === '') {
      return JSON.stringify({ error: 'Invalid data... Enter string', status: 400 });
    }
    const result = str.split('').reverse().join('');
    return JSON.stringify({ result: `${result}`, status: 200 });
  }

  static async sum(num1, num2) {
    if (num1 === '' || num2 === '') {
      return JSON.stringify({ error: 'Invalid data... Enter numbers', status: 400 });
    }
    const result = +num1 + +num2;
    return JSON.stringify({ result: `${result}`, status: 200 });
  }

  static async subStr(str, start, length) {
    if (str === '' || start === '' || length === '' || typeof start !== 'number' || typeof length !== 'number') {
      return JSON.stringify({ error: 'Invalid data... Enter parameters', status: 400 });
    }
    const result = str.substr(start, length);
    return JSON.stringify({ result: `${result}`, status: 200 });
  }
}

module.exports = BasicOperators;
