// TASK 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) {
    throw ReferenceError('Message is null!');
  }

  if (typeof msg !== 'string') {
    throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }

  if (msg.length > 255 || msg.length === 0) {
    throw RangeError(`Message contains ${msg.length} characters!`);
  }

  /*
    сработала только проверка на всё кроме цифр,
    не знаю почему, но проверки типа:
    msg.match(/<\w+>/),
    msg.match(/<\w+>/) || msg.match(/<\s0*>/) -
    не срабатывают
  */
  if (msg.match(/<\D+>/)) {
    return false;
  }

  return true;
}
console.log(validateMessage('How are ya doing? < > Good!'));