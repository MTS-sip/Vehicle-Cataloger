// Defines the Driveable interface
interface Driveable {
  // declares the properties
  started: boolean;
  currentSpeed: number;
  // declares methods
  start(): void;
  accelerate(changes: number): void;
  decelerate(change: number): void;
  stop(): void;
  turn(direction: string): void;
  reverse(): void;
}

// exports the Driveable interface
export default Driveable;
