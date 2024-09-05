export function log() {
    console.log('this works');
}

export class Car {
    brand;
    model;
    speed = 0;
    isTrunkOpen = false;
    minSpeed = 0;
    maxSpeed = 5;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }

    displayInfo() {
        console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h\n`);
        console.log(`is trunk open: ${this.isTrunkOpen}`);
    }

    go() {
        if (this.isTrunkOpen === true) {
            return;
        }

        this.speed += 5;

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }

    brake() {
        if (this.isTrunkOpen === true) {
            return;
        }

        this.speed -= 5;

        if (this.speed < this.minSpeed) {
            this.speed = this.minSpeed;
        }
    }

    openTrunk() {
        if (this.speed === 0) {
            this.isTrunkOpen = true;
        }

        return;
    }

    closeTrunk() {
        this.isTrunkOpen = false;
    }
}

export class RaceCar extends Car {
    acceleration;
    maxSpeed = 300;

    constructor(carDetails) {
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go() {
        if (this.isTrunkOpen === true) {
            return;
        }

        this.speed += this.acceleration;

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }

    openTrunk() {
        console.log('This car has no trunk.');
    }

    closeTrunk() {
        console.log('This car has no trunk.');
    }
}
