export function log() {
    console.log('this works');
}

export class Car {
    brand;
    model;
    speed = 0;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }

    displayInfo() {
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
    }

    go() {
        if (this.speed === 200) {
            return;
        } else {
            this.speed += 5;
        }
    }

    brake() {
        if (this.speed === 0) {
            return;
        } else {
            this.speed -= 5;
        }
    }
}
