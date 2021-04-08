// const array = [1, 1, 2, 3, 2, 4];
// const set = new Set(array);

// console.log(set);

// const subObj = { subObj: true };
// const obj = { a: 1, subObj };

// set.add(1);
// set.add(5);
// set.add(6);
// set.add(obj);
// set.add(subObj);
// set.add({ a: 2 });
// set.add({ a: 3 });

// console.log(set, set.has(obj), set.has(1), set.has(123));

// const array = [5, {}, 6, 1, 1, 2, 3, 2, 4];
// const set = new Set(array);

// for (let value of set.entries()) {
//   console.log(value);
// }

// set.delete(1);
// console.log(set);

// set.clear();
// console.log(set);

// WeakSet, WeakMap
// function foo() {
//   const a = {}; // memory allocation

//   // ...

//   return;
// }

// foo();

// let a = {};
// const map = new WeakMap([
//   [a, 123],
// ]);
// console.log(map);
// setTimeout(() => console.log(map), 10000);
// setTimeout(() => {
//   a = null;
// }, 1000);
