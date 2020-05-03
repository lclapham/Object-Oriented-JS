/*eslint-env browser*/

// var Car = function (make, model) {
//     this.make = make;
//     this.model = model;
//     "use strict"
//     window.console.log("The " + this.make + " " + this.model + " " + "car has rolled off of the assembly line")

// }

// var camaro = new Car("Chevy", "Camaro");
// var corvette = new Car("Chevy", "Covertte");
// var dodge = new Car("Dodge", "Ram");
// var jeep = new Car("Jeep", "CJ");

// //This shows the constructor, which is actually the function Car
// window.console.log(camaro.constructor);

// // Defining Public Memebers

// var Plane = function (type) {
//     "use strict"
//     this.type = type;
    
// }
// // Create the method
// Plane.prototype.displayMake = function () {
//     "use strict"
//     window.console.log("You own a " + this.type + " plane");
// }
// var cub = new Plane("Carbon Cub");
// // Calling the method
// cub.displayMake();

// OOP demonstration of Inheritance
var Vehicle = function  (make, model) {
    "use strict";
    this.make = make;
    this.model = model;
    this.miles = 0;
}
// Creating the Vehicle Object
Vehicle.prototype.drive = function (miles) {
    "use strict";
    this.miles += miles;
    window.console.log("Your " +this.doors + " door " + this.make +"" +this.model + " has driven " +this.miles + " miles")
}

// Creating the Car object
var Car = function (make, model, doors) {
    this.make = make;
    this.model = model;
    this.doors = doors;
}

// Attaching an instance of vehicle to the Cars protoype
Car.prototype = new Vehicle();

// Create and instance
var camaro = new Car("Chevy", "Camaro", 4);
camaro.drive(2000);