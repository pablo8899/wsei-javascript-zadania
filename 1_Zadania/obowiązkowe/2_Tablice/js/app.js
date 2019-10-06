function distFromAvarage(numberArray) {
    var avarage = 0;
    numberArray.forEach(element => {
        avarage += element;
        
    });
    avarage = avarage / numberArray.length;
    
    console.log(avarage);
    var returnArray = [];
    numberArray.forEach(element => {
        returnArray.push(avarage - element);
    });

    return returnArray;
}
distFromAvarage([1,2,3,4,5,6,7])