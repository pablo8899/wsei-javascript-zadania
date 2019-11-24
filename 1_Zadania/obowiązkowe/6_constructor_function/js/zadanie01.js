var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

var r1 = new Robot("Andy");
r1.changeName("Tom");
r1.isFunctional = false;
console.log(r1.sayHi("Mark"));
r1.fixIt();
console.log(r1.sayHi("Mark"));

var r2 = new Robot("Robert");
r2.changeName("Mark");
r2.isFunctional = false;
console.log(r2.sayHi("Tom"));