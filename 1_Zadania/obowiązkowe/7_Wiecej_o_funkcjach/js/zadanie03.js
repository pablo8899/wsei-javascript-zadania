//Funkcja wywołuje sie dwa razy przed i po definicji funkcji
SayCzesc()
function SayCzesc()
{
    console.log("Cześć");
}
SayCzesc()

//Wywołanie funkcji przed jej definicją skutkuje błędem
//f();
var f = function()
{
    console.log("Witaj");
}
f();
