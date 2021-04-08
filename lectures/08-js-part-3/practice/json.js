// JSON

// const jsonObj = {
//   test2: 123,
//   toJSON() {
//     return '321';
//   },
// };
// const obj = {
//   a: 1,
//   date: new Date(),
//   // jsonObj,
//   test: [
//     {
//       b: 1,
//     },
//     {
//       b: 2,
//     },
//     {
//       b: 3,
//     },
//   ],
// };
// const stringObj = JSON.stringify(obj);

// console.log(stringObj);
// console.log(JSON.parse(stringObj));

// JSON.stringify(value, replacer, space);

// console.log(
//   JSON.stringify(
//     obj,
//     ['a', 'b', 'test'],
//   ),
// );

// JSON.parse(obj, reviver);

// console.log(stringObj);
// console.log(JSON.parse(stringObj, (key, value) => {
//   if (key === 'date') {
//     return new Date(value);
//   }
//   return value;
// }));

// function Pen(pen) {
//   Object.assign(this, pen);
// }

// new Pen(res);
