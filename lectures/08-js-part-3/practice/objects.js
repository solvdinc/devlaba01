// const pen = {
//   color: 'red',
//   weight: 100,
//   sizes: {
//     width: 100,
//     height: 10,
//   },
// };

// console.log(pen);

// function Pen() {
//   // this = {};
//   this.color = 'red';
//   this.draw = () => {};

//   // return this;
// }

// console.log(new Pen());

// const pen = new Object();

// pen.color = 'red';

// const pen = Object.create(null);

// console.log(pen, {});

// const pen = {
//   color: 'red',
//   weight: 100,
//   sizes: {
//     width: 100,
//     height: 10,
//   },
//   'color-qweq': 123,
// };

// pen.color = 'green';

// console.log(pen.color, pen['color-qweq']);

// function createDynamicField(key, value) {
//   return {
//     [key]: value,
//   };
// }

// console.log(createDynamicField('car', 'bmw'));

// const pen = {
//   color: 'red',
//   weight: 100,
// };

// console.log(
//   pen,

//   pen.hasOwnProperty('color'),
//   'color' in pen,

//   pen.hasOwnProperty('toString'), // false
//   'toString' in pen, // true

//   pen.hasOwnProperty('unknown'),
//   'unknown' in pen,
// );

// const dog = {
//   sit: () => {
//     console.log(this);
//   },
//   come: function() {
//     console.log(this);
//   },
//   stay() {
//     console.log(this);
//   },

//   _name: 'Buddy',
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     this._name = value;
//   },
// };

// dog.sit();
// dog.come();
// dog.stay();

// dog.name = 'John';
// console.log(dog.name, dog);

// const pen = {
//   color: 'red',
// };

// // Object,
// // Reflect
// Reflect.defineProperty(pen, 'weight', {
//   value: 123,

//   writable: false,
//   enumerable: false,
//   configurable: true,
//   // get() {
//   //   return 123;
//   // },
//   // set(value) {
//   //   console.log(value);
//   // },
// });

// pen.weight = 321;

// console.log(pen);

// const arr = [1, 2, 3];

// console.log(arr);

// function cloneCar(car) {
//   return Object.getOwnPropertyNames(car);
// }

// const car = {
//   brand: 'bmw',
//   year: 2021,
// };

// Reflect.defineProperty(car, 'test', {
//   value: 123,
// });

// console.log(car, cloneCar(car));

// const car = {
//   brand: 'bmw',
//   year: 2021,
// };

// console.log(Object.keys(car).map((key) => car[key]));
// console.log(Object.values(car));

// console.log(Object.entries(car));

// const user = {
//   firstName: 'John',
//   lastName: 'Cena',
//   years: 18,
// };

// // const { years, ...newUser } = user;

// // console.log(user, years, newUser);

// console.log(
//   delete user.years,
//   Reflect.deleteProperty(user, 'firstName'),
// );

// console.log(user);

// const user = {
//   firstName: 'John',
//   lastName: 'Cena',
//   years: 18,
//   mam: {
//     firstName: 'test',
//   },
// };
// const newUser = { ...user };

// newUser.mam.lastName = 'test2';

// console.log(user, newUser);

// console.log(Object.assign({}, user, {qwe: 123}, {asd: 321}));
// console.log({
//   ...user,
//   asd: 123,
//   qwe: 123,
//   ...({test: 'test'}),
// });
