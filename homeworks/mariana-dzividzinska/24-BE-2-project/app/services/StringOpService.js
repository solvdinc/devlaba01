class StringOpService {
  static indexOf(string, substring) {
    return string.indexOf(substring);
  }

  static reverse(string) {
    return string.split('').reverse().join('');
  }
}

module.exports = StringOpService;