// Importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// Defines the Cli class
class Cli {
  // vehicles property accepts Car, Truck, and Motorbike objects. Using union operator for array types
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // Constructor accepts Car, Truck, and Motorbike objects, union operator for array types
  constructor(vehicles: (Car[] | Truck[] | Motorbike)[]) {
    this.vehicles = vehicles.flat();
  }

  // Static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // Method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // Set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // Perform actions on the selected vehicle
        this.performActions();
      });
  }

  // Method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          this.createTruck();
        } else {
          this.createMotorbike();
        }
      });
  }

   // Method to create a car
   createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        
        ...Array.from({ length: 4 }, (_, i) => [
          {
            type: 'input',
            name: `wheel${i + 1}Diameter`,
            message: `Enter diameter for Wheel ${i + 1}`,
          },
          {
            type: 'input',
            name: `wheel${i + 1}Brand`,
            message: `Enter tire brand for Wheel ${i + 1}`,
          },
        ]).flat(),
      ])
      .then((answers) => {
        const wheels = Array.from({ length: 4 }, (_, i) => 
          new Wheel(
            parseInt(answers[`wheel${i + 1}Diameter`]),
            answers[`wheel${i + 1}Brand`]
          )
        );
  
        const car = new Car(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels,
        );
  
        this.vehicles.push(car);
        this.selectedVehicleVin = car.vin;
        this.performActions();
      });
  }
  // Method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
        ...Array.from({ length: 4 }, (_, i) => [
          {
            type: 'input',
            name: `wheel${i + 1}Diameter`,
            message: `Enter diameter for Wheel ${i + 1}`,
          },
          {
            type: 'input',
            name: `wheel${i + 1}Brand`,
            message: `Enter tire brand for Wheel ${i + 1}`,
          },
        ]).flat(),
      ])
      .then((answers) => {
        const wheels = Array.from({ length: 4 }, (_, i) => 
          new Wheel(
            parseInt(answers[`wheel${i + 1}Diameter`]),
            answers[`wheel${i + 1}Brand`]
          )
        );
  
        // Answers object passes the required properties to the Truck constructor
        const truck = new Truck(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          wheels,
          parseInt(answers.towingCapacity)
        );
        
        // Push created Truck to the vehicles array
        this.vehicles.push(truck);
        this.selectedVehicleVin = truck.vin;
        this.performActions();
      });
  }


  // Method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'odometer',
          message: 'Enter Odometer Reading',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // Answers object passes the required properties to the Motorbike constructor
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          parseInt(answers.odometer),
          [
            new Wheel(
              parseInt(answers.frontWheelDiameter),
              answers.frontWheelBrand
            ),
            new Wheel(
              parseInt(answers.rearWheelDiameter),
              answers.rearWheelBrand
            ),
          ]
        );
         //  Push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
          // Set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
         // Perform actions on the motorbike
        this.performActions();
      });
  }

// Method to select a vehicle to tow
findVehicleToTow(selectedTruck: Truck): void {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'vehicleToTow',
        message: 'Select a vehicle to tow',
        choices: this.vehicles
          .filter((vehicle) => vehicle.vin !== selectedTruck.vin) // Exclude the selected truck from the list of vehicles to tow
          .map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          })),
      },
    ])
    .then((answers) => {
      const vehicleToTow = this.vehicles.find(
        (vehicle) => vehicle.vin === answers.vehicleToTow
      );

      if (!vehicleToTow) {
        console.log('Invalid selection. Try another action.');
        this.performActions(); // Return to action menu 
        return;
      }

      if (vehicleToTow instanceof Truck && vehicleToTow.vin === selectedTruck.vin) {
        console.log(`${vehicleToTow.make} ${vehicleToTow.model} cannot tow itself.`);
        this.performActions(); // Return to action menu 
        return;
      }

      if (vehicleToTow.weight <= selectedTruck.towingCapacity) {
        console.log(`${vehicleToTow.make} ${vehicleToTow.model} is being towed.`);
      } else {
        console.log(`${vehicleToTow.make} ${vehicleToTow.model} is too heavy to be towed.`);
      }

      this.performActions(); // Return to action menu after towing attempt
    });
}

// Method to perform actions on a vehicle
performActions(): void {
  if (this.exit) return; // Ensure CLI exits correctly when exit is set to true

  const selectedVehicle = this.vehicles.find(
    (vehicle) => vehicle.vin === this.selectedVehicleVin
  );

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Select an action',
        choices: [
          'Print details',
          'Start vehicle',
          'Accelerate 5 MPH',
          'Decelerate 5 MPH',
          'Stop vehicle',
          'Turn right',
          'Turn left',
          'Reverse',
          ...(selectedVehicle instanceof Truck ? ['Tow'] : []),
          ...(selectedVehicle instanceof Motorbike ? ['Wheelie'] : []),
          'Select or create another vehicle',
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      if (!selectedVehicle) {
        console.log('No vehicle selected.');
        this.startCli();
        return;
      }

      switch (answers.action) {
        case 'Tow':
          if (selectedVehicle instanceof Truck) {
            this.findVehicleToTow(selectedVehicle);
            return; 
          }
          break;
        case 'Exit':
          this.exit = true;
          console.log('You have exited CLI. Thanks for your input!');
          return; // Make sure the CLI exits.
        case 'Select or create another vehicle':
          this.startCli();
          return;
        default:
          this.performGenericAction(answers.action, selectedVehicle);
      }

      if (!this.exit) {
        this.performActions(); // Need to permit continued interaction if not exiting.
      }
    });
}

// Method to perform generic actions 
performGenericAction(action: string, vehicle: Car | Truck | Motorbike): void {
  switch (action) {
    case 'Print details':
      vehicle.printDetails();
      break;
    case 'Start vehicle':
      vehicle.start();
      break;
    case 'Accelerate 5 MPH':
      vehicle.accelerate(5);
      break;
    case 'Decelerate 5 MPH':
      vehicle.decelerate(5);
      break;
    case 'Stop vehicle':
      vehicle.stop();
      break;
    case 'Turn right':
      vehicle.turn('right');
      break;
    case 'Turn left':
      vehicle.turn('left');
      break;
    case 'Reverse':
      vehicle.reverse();
      break;
    case 'Wheelie':
      if (vehicle instanceof Motorbike) {
        console.log(`${vehicle.make} ${vehicle.model} is doing a wheelie!`);
      } else {
        console.log('This action is not avaiable for the selected vehicle.');
      }
      break;
    default:
      console.log('Error: Action not recognized. Make another choice.');
  }
}

  // Method to start CLI
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;


