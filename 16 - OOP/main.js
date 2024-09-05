import {Car} from './car.js';

const car1 = new Car({
    brand: 'Toyota',
    model: 'Corolla'
});

const car2 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
});
car1.go();
car1.go();
car1.go();
car1.go();
car2.go();
car2.go();
car2.go();
car2.go();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car1.brake();
car2.go();
car1.go();
car1.displayInfo();
car2.displayInfo();
