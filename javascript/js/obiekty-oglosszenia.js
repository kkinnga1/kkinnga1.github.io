//nazwy klas tworyzmy jak nazwy funkcji i zmiennych

class Ogloszenia {
    constructor (tytul, tresc, cena, kategoria){
        this.tytul = tytul;
        this.tresc = tresc;
        this.cena = cena;
        this.kategoria = kategoria;
        
    }


wyswietl() {
    var ogloszenie = "Tytuł ogłoszenia: " + this.tytul + " treść: " + this.tresc + " cena: " + this.cena + " kategoria: " + this.kategoria;
     return ogloszenie;

}
}

var ogloszenie1 = new Ogloszenia (" Sprzedam opla", "Niemiec płakał jak sprzedawał i tylko do kościoła śmigał w niedziele", 500 , " motoryzacja");
//console.log(ogloszenie1);

var ogloszenieDoWyswietlenia = ogloszenie1.wyswietl();
console.log (ogloszenieDoWyswietlenia);