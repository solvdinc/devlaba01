class Engine {}
class Transmission {}
class Chassis {}

class Car {
  constructor(engine: Engine, transmission: Transmission, chassis: Chassis) {}
}

const car = new Car();

car.engine instanceof Engine; //*true*
