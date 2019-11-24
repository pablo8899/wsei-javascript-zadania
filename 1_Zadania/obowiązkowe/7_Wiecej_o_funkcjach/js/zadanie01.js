
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//stworzenie funkcji 'sortArray()'
function sortArray() {

    //Deklaracja tablicy z przypisanymi wartosciami
    var points = [41, 3, 6, 1, 114, 54, 64];

    //wywołanie funkcji sort
    points.sort(function (a, b) {
        //zwracamy posortowane wartosci tablicy zamieniając 
        //odpowiednio kolejnoscią by tablica 'points' była posortowana
        return a - b;
    });

    //zwracamy posortowaną tablice
    return points;
}

//Wywołanie funkcji 'sortArray()'
sortArray();
