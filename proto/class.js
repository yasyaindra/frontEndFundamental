// // function Car(manufacture, color) {
// //     this.manufacture = manufacture;
// //     this.color = color;
// //     this.engineActive = false;
// // }

// // Car.prototype.startEngines = () => {
// //     console.log('mobil dinyalakan');
// //     this.engineActive = true;
// // }

// // Car.prototype.info = function () {
// //     console.log(`Manufacture : ${this.manufacture}`)
// //     console.log(`Color : ${this.color}`)

// //     if(indraCar.startEngines()==true) {
// //         console.log(`Mobil dinyalakan`)
// //     }
// // }

// // var indraCar = new Car("Tesla","Blue")
// // indraCar.startEngines()
// // indraCar.info()

// // class Car {
// //     constructor(manufacture = '', color='') {
// //         this.manufacture = manufacture;
// //         this._color = color;
// //         this.engineActive = false;
// //     }
    
// //     startEngine() {
// //         console.log("Mesin dinyalakan")
// //         this.engineActive = true;
// //     }

// //     runningFast(fuel) {
// //         let speed = 0;
// //         if(this.engineActive == true) {
// //             speed += 2 * fuel
// //             console.log(`kecepatan anda ${speed} km/jam`)
// //         } else {
// //             console.log('mesin belum dinyalakan')
// //         }
// //     }
// // }

// // const indraCar = new Car()

// // indraCar.runningFast(3)

// class Kendaraan {
//     constructor(nomorPlat, manufaktur) {
//         this.nomorPlat = nomorPlat;
//         this.manufaktur = manufaktur
//         this.engineActive = false;
//     }
    
//     startEngines() {
//         console.log(`Mesin kendaraan ${this.nomorPlat} dinyalakan!`);
//     }
    
//     info() {
//         console.log(`Nomor Kendaraan: ${this.nomorPlat}`);
//         console.log(`Manufacture: ${this.manufaktur}`);
//         console.log(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
//     }
    
//     parking() {
//         console.log(`Kendaraan ${this.nomorPlat} parkir!`);
//     }
// }

// class Motor extends Kendaraan {
//     constructor(nomorPlat,manufaktur,jumlahRoda) {
//         super(nomorPlat, manufaktur)
//         this.jumlahRoda = jumlahRoda;
//     }

//     masuk() {
//         console.log(`Motor roda ${this.jumlahRoda}, masuk`)
//     }

//     bukaPintu() {
//         console.log(`Motor ${this.manufaktur} membuka pintu`)
//     }
// }

// const indraMotor = new Motor("354BHJ","Honda",2)
// indraMotor.masuk()

class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
}

class Car extends Vehicle {
    construct(licensePlate, manufacture, jmlRoda) {
        super(licensePlate, manufacture)
        this.jmlRoda = jmlRoda
    }
}

class Motor extends Vehicle {
    construct(licensePlate, manufacture, jmlRoda) {
        super(licensePlate, manufacture)
        this.jmlRoda = jmlRoda
    }
}

class VehicleFactory {
    static repair(vehicles) {
       vehicles.forEach(vehicle => {
         console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
       })
     }
   }

const johnCar = new Car("H121S", "Honda", 4);
const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
const dimasCar = new Car("TA1408K", "Tesla", 4);
    
   /* Pemanggilan method repair langsung dari class-nya */
   VehicleFactory.repair([johnCar, tomMotor, dimasCar]);