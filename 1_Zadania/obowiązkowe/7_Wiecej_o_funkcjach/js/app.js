/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Tworzenie funkcji 'jeden'
function jeden() {

    //stworzenie zmiennej 'zmienna1' oraz przypisanie jej wartości 1
    var zmienna1 = 1;

    //stworzenie funkcji zagnieżdżonej o nazwie 'dwa'
    function dwa() {

        //Wypisanie wartości zmiennej 'zmienna1' w konsoli
        console.log(zmienna1);

        //stworzenie zmiennej 'zmienna2' oraz przypisanie jej wartości 2
        var zmienna2 = 3;
    }

    //wywolanie funkcji 'dwa'
    dwa();

    //wypisanie wartości zmiennej 'zmienna2' w konsoli
    //błąd zmienna2 is not defined - występuje ponieważ zmienna 2 została zadeklarowana 
    //w ciele funkcji 'dwa' nie jest ona wiec widoczna dla funkcji 'jeden'
    //funkcja 'jeden' probując wypisać wartość niewidocznej dla niej zmiennej zwraca błąd
    console.log(zmienna2)
}

//wywołanie funkcji 'jeden'
jeden()