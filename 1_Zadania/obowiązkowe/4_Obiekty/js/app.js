var city = {
    capital  : "Kraków",
    population : 770500,
    president : "Anna Nowak",
    primeMinisters : ["Jan Kowalski","Adam Dąbrowski"]
  };
  console.log(city)

  var timeMachine = {
    shape : "brak",
    model : "v10.2",
    run : function run(date,place) {
        console.log(date +' ' + place);
      }
  }
  console.log(timeMachine)
  timeMachine.run(new Date("2019-01-26"),"asd")

  var person = {
      name : "Paweł",
      age : 20,
      sayHello : function (){
            console.log("hello")  
      }
  }

  console.log(person)
  person.sayHello()

  var recipe = {
      title : "Mięso",
      servings : 1,
      ingredients : ['Mięso','Sól','Olej']
  }

  console.log(recipe)


var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist)