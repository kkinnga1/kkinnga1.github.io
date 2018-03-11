//klasa to matryca która odbija obiekty, słówko kluczowe class
//parametry które przyjmuje constructor to właściwości które bęzies się przypisywac do obiektu
//klasy nazywamy z wielkiej litery to jest dobra praktyka
//żeby przypisac do klasy a potem obiektu wlasciwosci odwoluje sie .this

class Osoba {
    constructor (imię, nazwisko, wiek, waga, wzrost, kolorOczu) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.waga = waga;
        this.wzrost = wzrost;
        this.oczy = kolorOczu;
        
    }
    przedstawSie() {
        console.log("Nazywam się " + this.imie + " " + this.nazwisko);
        
    }
    
    pobierzInformacjeOsoby(){
        console.log ("Dane osoby: \n Imie:" +this.imie + "\n Nazwisko:" + this.nazwisko + "\n Wiek:"+this.wiek + "\n Wzrost w cm" + this.wzrost);
    }
}
//tworze obiekt
var osoba = new Osoba ("Michał","Szczepaniak", 31,65,172,"zielone");
osoba.przedstawSie();
osoba.pobierzInformacjeOsoby();

var osoba2 = new Osoba ("Marta", "Kapusta", 40, 70, 170,"niebieskie");
osoba2.przedstawSie();
osoba2.pobierzInformacjeOsoby();

var osoba3 = new Osoba ("Kinga", "Korycka", 24, 52, 170, "zielone");
osoba3.przedstawSie();
osoba3.pobierzInformacjeOsoby();