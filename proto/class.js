// function Car(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.engineActive = false;
// }

// Car.prototype.startEngines = () => {
//     console.log('mobil dinyalakan');
//     this.engineActive = true;
// }

// Car.prototype.info = function () {
//     console.log(`Manufacture : ${this.manufacture}`)
//     console.log(`Color : ${this.color}`)

//     if(indraCar.startEngines()==true) {
//         console.log(`Mobil dinyalakan`)
//     }
// }

// var indraCar = new Car("Tesla","Blue")
// indraCar.startEngines()
// indraCar.info()

class Car {
    constructor(manufacture = '', color='') {
        this.manufacture = manufacture;
        this._color = color;
        this.engineActive = false;
    }
    
    startEngine() {
        console.log("Mesin dinyalakan")
        this.engineActive = true;
    }

    runningFast(fuel) {
        let speed = 0;
        if(this.engineActive == true) {
            speed += 2 * fuel
            console.log(`kecepatan anda ${speed} km/jam`)
        } else {
            console.log('mesin belum dinyalakan')
        }
    }
}

const indraCar = new Car()

indraCar.runningFast(3)
