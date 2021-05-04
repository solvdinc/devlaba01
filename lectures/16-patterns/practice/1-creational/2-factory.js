class Car {
  constructor(model, cost) {
    this.cost = cost;
    this.model = model;
  }
}

class Ford extends Car {
  constructor(model, cost) {
    super(model, cost);
    this.name = "Ford";
  }
}

class Chevrolet extends Car {
  constructor(model, cost) {
    super(model, cost);
    this.name = "Chevrolet";
  }
}

class Audi extends Car {
  constructor(model, cost) {
    super(model, cost);
    this.name = "Audi";
  }
}

class CarFactory {
  static list = {
    ford: Ford,
    chevrolet: Chevrolet,
    audi: Audi,
  };

  create(brand = "ford", model, cost) {
    const Car = CarFactory.list[brand] || CarFactory.list.ford;
    const car = new Car(model, cost);
    car.brand = brand;
    car.define = function () {
      console.log(`${this.name} ${this.model}: $${this.cost}`);
      console.log(this);
    };
    return car;
  }
}

const factory = new CarFactory();

const cars = [
  factory.create("ford", "Fusion", 150),
  factory.create("ford", "Escape", 200),
  factory.create("chevrolet", "Malibu", 179),
  factory.create("audi", "A6", 400),
];

cars.forEach((car) => {
  car.define();
});
