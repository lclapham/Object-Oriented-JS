// Object Literal Sytnax

// var Car =  {
//     "use strict"
//     make: "Chevy",
//     model: "Camaro",
//     year: "2015"
// };

// // Object Constructor

// function Car () {
//     this.make = "Chevy";
//     this.model = "Camaro";
//     this.year = 2015;
// }

// var myCar = new Car();

// Part 136

var Car = {
    make: "Chevy",
    displayVehicleInfo: function(model, year) {
        "use strict";
        return (year + " " + this.make + " " + model);

    }
    };

    window.console.log(Car.displayVehicleInfo("Camaro", "2015"));
    window.console.log(Car.make);

    // This course is horrible.  The instructor goes way to fast and there is no direction.  Everything is too complex and never explained.