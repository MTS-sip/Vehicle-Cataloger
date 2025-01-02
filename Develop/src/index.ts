// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles: (Truck | Car | Motorbike)[] = [];

const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000);

const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

 const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
 const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, 999, motorbike1Wheels);

// Push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create new instance of the Cli class
const cli = new Cli([vehicles]);

// Start CLI
cli.startCli();
