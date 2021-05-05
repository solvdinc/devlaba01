class Engine{
    constructor(candles, pistons, oil) {….}
 };
 
 class Chassis{
     constructor(doors, hood, trunk) {….}
 };
 
 const petrolCar = new Car(
     new Engine(new Candles(), new Pistons(), new Oil() ), 
     new Transmission(…..), 
     new Chassis(new Doors, new Hood(), new Trunk())
 );