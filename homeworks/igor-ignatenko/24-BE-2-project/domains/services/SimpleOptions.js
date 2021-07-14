class SimpleOptions {
  static async sum(num1, num2) {
    const result = +num1 + +num2;
    return JSON.stringify({ result: `${result}` });

  }
  static async reverse(stringForReverse) {
    const result = stringForReverse.split('').reverse().join('');
    return JSON.stringify({ result: `${result}` });

  }
  static async substr(input, start, length) {
    const result = input.substr(start, length);
    return JSON.stringify({ result: `${result}` });

  }
}

module.exports = SimpleOptions;