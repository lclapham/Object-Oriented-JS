// Object Literal Sytnax

var Car =  {
    "use strict"
    make: "Chevy",
    model: "Camaro",
    year: "2015"
};

// Object Constructor

function Car () {
    this.make = "Chevy";
    this.model = "Camaro";
    this.year = 2015;
}

var myCar = new Car();