
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function checkArray(array)
{
    var retArray = [];

    array.forEach(element => {
        if(element[0] % 2 == 0 && element[1] % 2 == 0)
        {
            retArray.push(true);
        } else {
            retArray.push(false);
        }
    });

    console.log(retArray);

}

checkArray([[11, 12],[42, 2],[-4, -120],[0, 0],[1, 34],]);
//var arrayCheck = [
//false, // bo 11
//true,
//true,
//true,
//false, // bo 1
//];

var task1Array = [
        [2, 3],
        ["Ala", "Ola"],
        [true, false],
        [5, 6, 7, 8],
        [12, 15, 67]
    ];

console.log(task1Array[3,2]);
console.log(task1Array[1].length);
console.log(task1Array[4,2]);


function print2DArray(array)
{
    console.log(array);
}

print2DArray(task1Array);

var arr = [
    ["Ala", "Ola","Aga"],
    [true, false,false],
    [5, 6, 7, 8,6,8,6],
    ["Jan", "Jakub","Arkadiusz"],
];

print2DArray(arr);


function create2DArray(rows,columns)
{
    let array2D = [];
    
    var c = 0;

    for(let i = 0; i < rows ;i++)
    {
        let array = [];
        for(let j = 0; j < columns ;j++)
        {
            c++;
            array.push(c);
        }
        array2D.push(array);
    }

    console.log(array2D);
}

create2DArray(4,4);