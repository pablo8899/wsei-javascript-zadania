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
distFromAvarage([1,2,3,4,5,6,7]);

function fruits() {
let fruits = ['apple', 'orange', 'banana', 'strawberry'];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);
for(let count = 0; count < fruits.length; count++)
{
    console.log(fruits[count])
}
}

fruits();

function printTable(array)
{
    for(let i = 0 ; i < array.length; i++ )
    {
        console.log(array[i]);
    };
}
printTable([1,2,3,4,5,6,7,8]);

function multiply(array)
{
    var temp = 1;
    for(let i = 0; i< array.length ;i++)
    {
            temp *= array[i];
    }

    console.log(temp);
}

multiply([1,2,3,4,5,6,7]);// => 5040
multiply([1,1,1,1]);// => 1
multiply([2,8,3,7]);// => 336

function getEvenAvarage(array)
{
    var temp = 0;
    var counter = 0;
    array.forEach(element => {
        if(element % 2 == 0)
        {
            temp += element;
            counter++;
        }
    });

    if(temp == 0) 
    {
        console.log(null);
    } else {
        console.log(temp / counter);
    }
}

getEvenAvarage([1,2,3,4,5,6,7]);// => 4
getEvenAvarage([1,1,1,1]);// => null
getEvenAvarage([2,8,3,7,4]);// => 4.666


function sortArray(array)
{
    console.log(array.sort((a, b) => a - b));
}

sortArray([145,11,3,64,4,6,10])// => [3,4,6,10,11,64,145]

function addArrays(array1,array2)
{
    var tempArray = [];
    var count = array1.length >= array2.length ? array1.length : array2.length;

    for(let i = 0 ; i < count; i ++)
    {
        if(array1[i] == undefined && array2[i] == undefined)
        {
            break;
        } else {
            if(array1[i] == undefined)
            {
                array1[i] = 0;
            }

            if(array2[i] == undefined)
            {
                array2[i] = 0;
            }

            tempArray.push(array1[i]+array2[i]);
        }
    }

    console.log(tempArray);
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);// => [5,9,7,10,12,17]
addArrays([8,3,22], [1,3,2]);// => [9,6,24]
addArrays([2,3,1,5,3,5], [3,1,76,1]);// => [5,4,77,6,3,5]