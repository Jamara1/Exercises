class Car {

    constructor(brand, type, doors) {
        this.brand = brand;
        this.type = type;
        this.doors = doors;
        this.createdAt = new Date();
        this.ignition = false;
        this.gasoline = 100;
    }

    igniteCar() {
        if (this.ignition) {
            console.error('The car was on... damaged motor!');
        } else {
            this.ignition = true;
            console.log('The car is on');
        }


        return this;
    }

    makeTravel(usage) {

        if (!this.ignition) return console.log('Car is off');

        if (this.gasoline < usage) return console.error('Usage should not exceed gasoline ' + this.gasoline);

        this.gasoline = this.gasoline - usage;
        return 'The remaining gasoline is ' + this.gasoline;
    }
}

let car = new Car('Mazda', 'Sedan', 2);

console.log(car);