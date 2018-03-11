//obiekty można traktowac jako miejsce do przechowywania danych 
//tworzymy je troche inaczej, za pomocą wąsów a nie nawiasów kwadratowych, nie jesteśm ograniczeni do indeksów numerycznych 
// każda wartość w obiekcie ma swój indeks 
//zmienna która przzechowuje obiekt to instancja obiektu
//klucz i wartość oddzielamy dwukropkiem
//programista sam decyduje jak nazwac klucze
//obiekt może posiadać metody - dizałania wykonywan ena obiektach 
//this.name 
//klucze nie musząmieć ciapków, ale string tak

var obiekt = {
    name: "Pierwszy mój obiekt",
    height: 180,
    print: function(){
    console.log(this.name);
    }
}

obiekt.print();

//this.name odnosi się do metody zawartej w obiekcie, a nie do globalnej



obiekt.age = 32;
obiekt.showAge = function(){
    console.log(this.age);
}
obiekt.showAge();