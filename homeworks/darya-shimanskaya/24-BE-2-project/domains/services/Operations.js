class Operations {
  static async sum(req) {
    const searchParams = req.urlInfo.searchParams
    const a = searchParams.get('a')
    const b = searchParams.get('b')

    if (!searchParams) {
      return JSON.stringify({ 'result': Number(a) + Number(b), 'status': 200 });
    }
    return JSON.stringify({ 'error': 'Invalid data. Please enter 2 numbers', 'status': 400 })
  }

  static async substr(req) {
    const searchParams = req.urlInfo.searchParams
    const string = searchParams.get('string');
    const from = +searchParams.get('from');
    const length = +searchParams.get('length');

    if (!string || !from) {
      return JSON.stringify({ 'error': 'Invalid data. Not enough params', 'status': 400 })
    }
    return JSON.stringify({ 'result': string.substr(from - 1, length), 'status': 200 })
  }

  static async reverse(req) {
    const string = req.urlInfo.searchParams.get('string')

    if (!string) {
      return JSON.stringify({ 'error': 'No data entered', 'status': 404 })
    }

    if (typeof string !== 'string') {
      return JSON.stringify({ 'error': 'Invalid data', 'status': 400 })
    }
    const result = string.split('').reverse().join('')
    return JSON.stringify({ 'result': result, 'status': 200 })
  }
}

module.exports = Operations;