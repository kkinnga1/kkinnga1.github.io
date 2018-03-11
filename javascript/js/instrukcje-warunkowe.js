// instrukcja if
var zmienna1 = "Kot";
var zmienna2 = "Pies";

if(zmienna1 != zmienna2) {
    console.log("spełnia warunek");
}

//instrukcja if else

if(zmienna1 == zmienna2) {
    console.log("Spełniam warunek");
    } else {
        console.log ("Nie spełniam warunku");
    }

//instrukcja else if 

var mojaLiczba = 111;


if(mojaLiczba == 5) {
    console.log("Moja liczba jest rowna 5");
    } else if(mojaLiczba == 12) {
        console.log ("Moja liczba to 12");
    } else if(mojaLiczba == 65) {
        console.log ("Moja liczba to 65");
    } else {
        console.log("Moja liczba ma inna wartosc");
    }



//instrukcja switch

var kolor = "zielony";
switch(kolor) {
    case "czerwony":
        console.log("kolor czerwony");
        break;
    case "zielony":
        console.log("Kolor zielony");
        break;
    default:
        consol.log("Nie znalazłem dopasowania koloru");
}









