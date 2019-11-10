var city = {
    capital  : String,
    population : Number,
    president : String,
    primeMinisters : String = []
  };
  console.log(city)

  var timeMachine = {
    shape : String,
    model : String,
    run : function run(date,place) {
        console.log(date +' ' + place);
      }
  }


  console.log(timeMachine)
  timeMachine.run(new Date("2019-01-26"),"asd")

  var person = {
      name : String,
      age : Number,
      sayHello : function (){
            console.log("hello")  
      }
  }

  console.log(person)
  person.sayHello()

  var recipe = {
      title : String,
      servings : Number,
      ingredients : String = []
  }

  recipe.title = 'Mięso'
  recipe.servings = 1
  recipe.ingredients = ['Mięso','Sól','Olej']
  console.log(recipe)


var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist)