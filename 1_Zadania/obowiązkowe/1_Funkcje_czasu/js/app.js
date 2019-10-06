function countHello(number)
{
    var counter = 0;
    var interval = setInterval(() => 
    { 
        counter++;
        console.log('Hello' + counter);
        if(counter == number)
        {
            clearInterval(interval);
        }
    }, 500);

}
