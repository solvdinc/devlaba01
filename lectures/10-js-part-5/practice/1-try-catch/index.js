// const json = '{ "name": "Tolik" }';

// try {
//   try {
//     const user = JSON.parse(json);

//     if (!user.age) {
//       throw new SyntaxError('User does not have age property');
//     }

//     console.log(user.age);
//   } catch (error) {
//     console.log('Error: ', error);
//     console.log('Error name: ', error.name);
//     console.log('Error message: ', error.message);
//     throw error;
//   }
// } catch (error) {
//   console.log('Parent catcth error: ', error);
// }

// try {
//   console.log('try');
//   if (confirm('Generate error?')) {
//     badFunction();
//   }
// } catch (error) {
//   console.log('catch');
// } finally {
//   console.log('finally');
// }

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

const json = '{fdfdfd "name": "Tolik" }';

try {
  const user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('User does not have age property');
  }

  console.log(user);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation error');
  } else if (error instanceof SyntaxError) {
    console.log('Syntax error');
  } else {
    throw error;
  }
}
