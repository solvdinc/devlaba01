/* eslint-disable max-classes-per-file */
class Car {
  constructor(model, cost) {
    this.model = model;
    this.cost = cost;
  }
}

class Ford extends Car {
  constructor(model, cost) {
    super(model, cost);
    this.name = 'Ford';
  }
}

class Chevrolet extends Car {
  constructor(model, cost) {
    super(model, cost);
    this.name = 'Chevrolet';
  }
}

class Audi extends Car {
  constructor(model, cost) {
    super(model, cost);
    this.name = 'Audi';
  }
}

class CarFactory {
  static list = {
    ford: Ford,
    chevrolet: Chevrolet,
    audi: Audi,
  };

  create(brand = 'ford', model, cost) {
    const Car = CarFactory.list[brand] || CarFactory.list.ford;
    const car = new Car(model, cost);
    car.brand = brand;
    return car;
  }
}

const factory = new CarFactory();

console.log(factory.create('chevrolet', 'malibu', 20000));
console.log(factory.create('audi', 'a4', 40000));