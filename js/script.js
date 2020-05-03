/*eslint-env browser*/

var Car = function (make, model) {
    this.make = make;
    this.model = model;
    "use strict"
    window.console.log("The " + this.make + " " + this.model + " " + "car has rolled off of the assembly line")

}

var camaro = new Car("Chevy", "Camaro");
var corvette = new Car("Chevy", "Covertte");
var dodge = new Car("Dodge", "Ram");
var jeep = new Car("Jeep", "CJ");

//This shows the constructor, which is actually the function Car
window.console.log(camaro.constructor);

// Defining Public Memebers

var Plane = function (type) {
    "use strict"
    this.type = type;
    
}
// Create the method
Plane.prototype.displayMake = function () {
    "use strict"
    window.console.log("You own a " + this.type + " plane");
}
var cub = new Plane("Carbon Cub");
// Calling the method
cub.displayMake();