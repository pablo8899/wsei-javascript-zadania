var Calculator = function () {
    this.Operations = [];
}

Calculator.prototype.add = function (num1,num2) 
{
    this.Operations.push("Added " + num1 + " to " + num2 + " got " + (num1+num2));
    return num1+num2;
};

Calculator.prototype.multiply = function (num1,num2) 
{
    this.Operations.push("Multipled " + num1 + " with " + num2 + " got " + (num1*num2));
    return num1*num2;
};

Calculator.prototype.subtract = function (num1,num2) 
{
    this.Operations.push("Subtracted " + num1 + "  from " + num2 + " got " + (num1-num2));
    return num1-num2;
};

Calculator.prototype.divide = function (num1,num2) 
{
    this.Operations.push("Divided " + num1 + " by " + num2 + " got " + (num1/num2));
    return num1/num2;
};

Calculator.prototype.printOperations = function () 
{
    this.Operations.forEach(element => {
        console.log(element);
    });
};

Calculator.prototype.clearoperations = function () 
{
    this.Operations = [];
};

var c1 = new Calculator();
c1.add(1,2);
c1.multiply(2,2);
c1.subtract(4,2);
c1.divide(16,4);
c1.printOperations();
c1.clearoperations();
c1.printOperations();