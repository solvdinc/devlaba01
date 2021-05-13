// class Car {
//   constructor(model, year, miles) {
//     this.model = model;
//     this.year = year;
//     this.miles = miles;

//     this.toString = function () {
//       return `${this.model} has done ${this.miles} miles`;
//     };
//   }
// }

// // Usage:
// const civic = new Car('Honda Civic', 2008, 21000);
// const mondeo = new Car('Ford Mondeo', 2010, 5000);

// console.log(civic.toString());
// console.log(mondeo.toString());

function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
}

const civic = new Car('Honda Civic', 2008, 21000);
