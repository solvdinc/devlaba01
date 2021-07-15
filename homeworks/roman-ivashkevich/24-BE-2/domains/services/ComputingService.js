const ApiError = require('../../exceptions/ApiError');

class ComputingService {
  async sum({ urlInfo }) {
    const params = urlInfo.searchParams;
    const num1 = params.get('num1') || null;
    const num2 = params.get('num2') || null;

    if (!num1 || !num2) {
      throw ApiError.NotFound('Not enough numbers for operation');
    }

    if (isNaN(+num1) || isNaN(+num2)) {
      throw ApiError.BadRequest('Not a number');
    }

    return Number(num1) + Number(num2);
  }

  async substr({ urlInfo }) {
    const params = urlInfo.searchParams;
    const string = params.get('str');
    const startIndex = params.get('start');
    const length = params.get('length');

    if (!string || !startIndex) {
      throw ApiError.BadRequest('Not enough params');
    }

    return length
      ? string.slice(+startIndex, +length + 1)
      : string.slice(+startIndex);
  }

  async reverse({ urlInfo }) {
    const params = urlInfo.searchParams;
    const string = params.get('string');

    if ('string' !== typeof string) {
      throw ApiError.BadRequest('Invalid string');
    }

    return string.split('').reverse().join('');
  }
}
module.exports = new ComputingService();
