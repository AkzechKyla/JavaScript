export function log() {
    console.log('this works');
}

export class Car {
    brand;
    model;

    constructor(carDetails) {
        this.brand = carDetails.brand;
        this.model = carDetails.model;
    }
}
