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

// // OOP demonstration of Inheritance
// var Vehicle = function  (make, model) {
//     "use strict";
//     this.make = make;
//     this.model = model;
//     this.miles = 0;
// }
// // Creating the Vehicle Object
// Vehicle.prototype.drive = function (miles) {
//     "use strict";
//     this.miles += miles;
//     window.console.log("Your " +this.doors + " door " + this.make +"" +this.model + " has driven " +this.miles + " miles")
// }

// // Creating the Car object
// var Car = function (make, model, doors) {
//     this.make = make;
//     this.model = model;
//     this.doors = doors;
// }

// // Attaching an instance of vehicle to the Cars protoype
// Car.prototype = new Vehicle();

// // Create and instance
// var camaro = new Car("Chevy", "Camaro", 4);
// // Calling it
// camaro.drive(2000);
/////// Part 4
// Cascading Methods
var Vehicle = function  (make, model) {
    "use strict";
    this.make = make;
    this.model = model;
    this.miles = 0;
}
// Creating new method and attaching to Vehicle Object
Vehicle.prototype.drive = function (miles) {
    "use strict";
    this.miles += miles;
    return this;
}
// Creating new method and attaching to Vehicle Object
Vehicle.prototype.checkOil =  function () {
    "use strict";
    if(this.miles >= 15000){
        return "You Need an oil change.";
    } else {
        return "You don't need and oil change.";
    }
}

// Creating the Car object
var Car = function (doors) {
    this.doors = doors;
}

// Attaching an instance of vehicle to the Cars protoype
Car.prototype = new Vehicle();

// Create and instance
var camaro = new Car("Chevy", "Camaro", 4);
// Calling it
window.console.log(camaro.drive(15000).checkOil());


// Reverse a string

String.prototype.reverse = function () {
    "use strict";
    var reverse = "", i;
    for (i = this.length -1; i >= 0; i -= 1) {
        reverse += this.charAt(i);
    }
    return reverse;
}

var message = "JavaScript";
window.console.log(message.reverse());


// Iterating though an objects properties
var Beer = function(brand, type, alcohol) {
    this.brand = brand;
    this.type = type;
    this.alcohol = alcohol;
    this.writeMessage = function() {
        window.alert("The Beer is GONE!")
    }

}
var myDrinks = new Beer();

for (var property in myDrinks) {
    window.console.log(property);
}