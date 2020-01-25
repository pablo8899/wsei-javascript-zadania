
var car = {
  brand : 'Mercedes',
  color : 'Czarny',
  numberOfKilometers : 0,
  printCarinfo : function ()
  {
    console.log(this.color + ' ' + this.brand + ', ' + this.numberOfKilometers + 'km')
  },
  drive : function(km)
  {
    this.numberOfKilometers += km
  }
}

car.printCarinfo();
car.drive(20);
car.printCarinfo();

var stairs = {
    stair : 0,
    up : function() {
        this.stair++;
    },

    down : function() {
        this.stair--;
      },

    printStep : function() {
        console.log(this.stair);
      }
  };

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();

//Zadanie 1

car.technicalReview = ['07.08.2012','07.08.2013','07.08.2014','07.08.2015']
car.AddTechnicalReview = (review) => {
    car.technicalReview.push(review)
}

car.ReturnAllTechnicalReview = () => {
  return car.technicalReview;
}

car.ReturnAllTechnicalReview();
car.AddTechnicalReview('07.08.2016')
console.log(car.ReturnAllTechnicalReview());