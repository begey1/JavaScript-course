var car1 = new Object();

car1.color = "blue";
car1.maxSpeed = 200;

car1.driver = {
  name: "Behey Oleh",
  category: "C",
  personalLimitations: "No driving at night"
};

car1.tuning = true;

car1["number of accidents"] = 0;

car1.drive = function() {
  console.log("I am not driving at night");
};

car1.drive();

var car2 = {

  color: "red",

  maxSpeed: 180,

  driver: {
    name: "Behey Oleh",
    category: "B",
    personalLimitations: null
  },

  tuning: false,

  "number of accidents": 2
};

car2.drive = function() {

  console.log("I can drive anytime");
};

car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {

this.color = color;
this.weight = weight;
this.avgSpeed = avgSpeed;
this.brand = brand;
this.model = model;


    this.trip = function () {

        if (!this.driver) {

            console.log("No driver assigned");

        } else {

            var message = "Driver " + this.driver.name + " ";

            if (this.driver.nightDriving) {
                message += "drives at night ";
            } else {
                message += "does not drive at night ";
            }

            message += "and has " + this.driver.experience + " years of experience";

            console.log(message);
        }
    };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {

    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };

};

var truck1 = new Truck("white", 5000, 90, "Volvo", "FH");
var truck2 = new Truck("black", 4800, 85, "MAN", "TGX");

truck1.AssignDriver("Behey Oleh", true, 5);
truck2.AssignDriver("Behey Oleh", false, 10);

truck1.trip();
truck2.trip();

class Square {

    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square is a quadrilateral with four equal sides and four right angles.");
    }

    length() {
        console.log("Perimeter:", 4 * this.a);
    }

    square() {
        console.log("Area:", this.a * this.a);
    }

    info() {

        console.log("Square:");

        console.log("Sides:", this.a, this.a, this.a, this.a);
        console.log("Angles: 90 90 90 90");

        this.length();
        this.square();
    }

}

class Rectangle extends Square {

    constructor(a, b) {

        super(a);

        this.b = b;

    }

    static help() {

        console.log("Rectangle is a quadrilateral with opposite sides equal.");

    }

    length() {

        console.log("Perimeter:", 2 * (this.a + this.b));

    }

    square() {

        console.log("Area:", this.a * this.b);

    }

    info() {

        console.log("Rectangle:");

        console.log("Sides:", this.a, this.b, this.a, this.b);

        console.log("Angles: 90 90 90 90");

        this.length();
        this.square();
    }

}

class Rhombus extends Square {

    constructor(a, alpha, beta) {

        super(a);

        this.alpha = alpha;
        this.beta = beta;

    }

    static help() {

        console.log("Rhombus is a quadrilateral with all sides equal.");

    }

    length() {

        console.log("Perimeter:", 4 * this.a);

    }

    square() {

        console.log("Area:", this.a * this.a * Math.sin(this.alpha * Math.PI / 180));

    }

    info() {

        console.log("Rhombus:");

        console.log("Sides:", this.a, this.a, this.a, this.a);

        console.log("Angles:", this.alpha, this.beta, this.alpha, this.beta);

        this.length();
        this.square();
    }

}

class Parallelogram extends Rectangle {

    constructor(a, b, alpha, beta) {

        super(a, b);

        this.alpha = alpha;
        this.beta = beta;

    }

    static help() {

        console.log("Parallelogram is a quadrilateral with opposite sides parallel.");

    }

    length() {

        console.log("Perimeter:", 2 * (this.a + this.b));

    }

    square() {

        console.log("Area:", this.a * this.b * Math.sin(this.alpha * Math.PI / 180));

    }

    info() {

        console.log("Parallelogram:");

        console.log("Sides:", this.a, this.b, this.a, this.b);

        console.log("Angles:", this.alpha, this.beta, this.alpha, this.beta);

        this.length();
        this.square();
    }

}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();


var square = new Square(5);
var rectangle = new Rectangle(6, 4);
var rhombus = new Rhombus(5, 120, 60);
var parallelogram = new Parallelogram(7, 3, 120, 60);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();


function Triangular(a = 3, b = 4, c = 5) {

    return { a, b, c };

}

var t1 = Triangular();
var t2 = Triangular(5, 6, 7);
var t3 = Triangular(10, 8, 6);

console.log(t1);
console.log(t2);
console.log(t3);

function PiMultiplier(num) {

    return function () {

        return Math.PI * num;

    }

}

var mul2 = PiMultiplier(2);
var mul32 = PiMultiplier(3 / 2);
var div2 = PiMultiplier(1 / 2);

console.log(mul2());
console.log(mul32());
console.log(div2());

function Painter(color) {

    return function (obj) {

        if (obj.type) {

            console.log(color + " " + obj.type);

        } else {

            console.log("No 'type' property occurred!");

        }

    }

}

var PaintBlue = Painter("Blue");
var PaintRed = Painter("Red");
var PaintYellow = Painter("Yellow");

var obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta"
};

var obj2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400
};

var obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true
};

PaintBlue(obj1);
PaintBlue(obj2);
PaintBlue(obj3);

PaintRed(obj1);
PaintRed(obj2);
PaintRed(obj3);

PaintYellow(obj1);
PaintYellow(obj2);
PaintYellow(obj3);
