import {Car, RaceCar} from './car.js';

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla',
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3',
});

const racecar1 = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20,
});

racecar1.displayInfo();
racecar1.openTrunk();
racecar1.go();
racecar1.displayInfo();
