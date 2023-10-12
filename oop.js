// CAR OO CHALLENGE

// Part one: Create a class for vehicle.

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return 'Beep';
  }
  toString() {
    return `The Vehicle is ${this.make} ${this.model} from ${this.year}`;
  }
}

//Part two: Create a class for a car.
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numOfWheels = 4;
  }
}
//Part three: Create a class for a motorcycle

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numOfWheels = 2;
  }
  revEngine() {
    return 'Vroom';
  }
}

//Part four: Create a class for a Garage.

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  addVehicle(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return `Only vehicles are allowed here!`;
    }
    if (this.vehicles.length >= this.capacity) {
      return `Sorry, we are full.`;
    }
    this.vehicles.push(newVehicle);
    return 'Vehicle added.';
  }
}
