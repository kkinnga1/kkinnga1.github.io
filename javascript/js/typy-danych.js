//typy referencyjne:obiekty i tablice

var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
console.log(suma);
//console.log(typeof wyplata)-wtedy pokazuje typ danej;
//typ lancuchowy string (znak plus laczy stringi, czyli dziala nieco inaczej niz w typie liczbowym)
var strWyplata = "4500";
var strPremia = "\"850\"";

var strSuma = strWyplata + strPremia;
console.log(strSuma);

//w typie lancuchowym sa sekwencje specjalne, 
// jeśli chcce się wstawićpodwójjne ciapki robi się to tak "\"850\""

var czyJestWiosna = true;
if (czyJestWiosna) {
    console.log("Tak!jest wiosna");
} else {
    console.log("Nie, jeszcze trwa zima.");
}

//typy specjalne
var zmiennaTylkoZadeklarowana;
console.log(zmiennaTylkoZadeklarowana);

var zmiennaNull = null;
console.log (zmiennaNull);









