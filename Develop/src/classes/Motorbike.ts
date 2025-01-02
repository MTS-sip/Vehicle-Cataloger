// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Motorbike class extends the Vehicle class
class Motorbike extends Vehicle {
  // Declare properties of Motorbike class with types
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    odometer: number;
    wheels: Wheel[];

  // Constructor accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    odometer: number,
    wheels: Wheel[]
  ) {
    // Constructor calls the constructor of the parent class, Vehicle
    super();

  // Constructor initializes properties of the Motorbike class
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  this.odometer = odometer;

  // Check if the wheels array has 2 elements
  // If not, create 2 new Wheel objects
  // Otherwise, use the provided wheels array
  if (wheels.length !== 2) {
    this.wheels = [new Wheel(), new Wheel()];
  } else {
    this.wheels = wheels;
  }
}

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Motorbike class
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Odometer: ${this.odometer} miles`);
    console.log(`Color: ${this.color}`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as default 
export default Motorbike;
