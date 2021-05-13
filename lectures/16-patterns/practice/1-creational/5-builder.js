/* eslint-disable max-classes-per-file */
class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronik = false;
    this.signaling = false;
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronik(parktronik) {
    this.car.parktronik = parktronik;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParktronik(true)
  .updateEngine('V8')
  .build();

console.log(myCar);
