// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095
function solution1() {
  function validateMessage(massage) {
    if (massage === null) {
      throw ReferenceError('Message is null!');
    }

    if (typeof massage !== 'string') {
      throw TypeError(
        `Message should be of type string but was of type ${typeof massage}!`,
      );
    }

    if (massage.length === 0 || massage.length > 255) {
      throw RangeError(`Message contains ${massage.length} characters!`);
    }

    if (massage.includes('<') && massage.includes('>')) {
      return false;
    }

    return true;
  }

  validateMessage('<input>');
}

solution1();
