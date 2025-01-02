// Import the Vehicle, Motorbike, Car, Wheel classes, and AbleToTow interface
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Truck class should extend the Vehicle class and implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{ 
  // Declares properties of the Truck class with types
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {

    // Calls the constructor of the parent class, Vehicle
    super();

    // Constructor initializes properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = 
    wheels.length === 4 
    ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }


tow(vehicle: Truck | Motorbike | Car): void {
  const { make, model, weight } = vehicle;

  if (this.vin === vehicle.vin) {
    console.log(`${make} ${model} cannot tow itself.`);
    return;
  }

  if (weight <= this.towingCapacity) {
    console.log(`${make} ${model} is being towed.`);
  } else {
    console.log(`${make} ${model} is too heavy to tow.`);
  }
}

// To Console log Truck information for new Trucks created/added to the array
override printDetails(): void {
  console.log(`
    VIN: ${this.vin}
    Model: ${this.model}
    Year: ${this.year}
    Weight: ${this.weight} lbs
    Top Speed: ${this.topSpeed} mph
    Color: ${this.color}
    Towing Capacity: ${this.towingCapacity} lbs
    Wheels: ${this.wheels
      .map(
        (wheel, index) =>`Wheel ${index + 1}: Diameter - ${wheel.getDiameter}, Brand - ${wheel.getTireBrand}`
      ) .join('\n')}
  `);
}

}
// Export the Truck class to be used in other files
export default Truck;