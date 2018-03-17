//pobranie elementu po id  - tylko jeden element 
//parametr w getEelmentById bez #
var parFirst = document.getElementById("parFirst");
console.log(parFirst); 

//pobranie elementów po klasie - kolekcja elementow 
//parametr w getEelmentsByClassName bez .

var elementLInk = document.getElementsByClassName("link");
console.log (elementLInk);
console.log (elementLInk.length);

//pobranie wlwmentów po tagu 
var elementTag = document.getElementsByTagName("p");
console.log(elementTag);

//pobranie 
//query selectior uzywa sie do id bo zwraca tylko jeden element po selektorze, a query selectopr all do klas na przyklad, zwraca wszystkie elementy po selektprze
//pobranie wszystkich elementow po selektorze .superlink
//KROPKA!!!#!!!TRZEBA DODAC 
var elementSuperlink = document.querySelectorAll(".superlink");
console.log (elementSuperlink);

//ponranie elementu pokjedynczego po selektorze id 
var parSecond = document.querySelector("#parSecond");
console.log (parSecond);

var mojelinki = document.getElementsByClassName("link");
console.log(mojelinki);

var mojelinki = document.querySelectorAll(".link");
console.log(mojelinki[1]);


//czasem trzeba przejsc po linkach uzywa się do tego petli for

for (var i = 0; i< mojelinki.length; i++) {
    console.log("To mój link nr:" + (i+1));
    console.log (mojelinki[i]);
    console.log("----------------");
}


mojelinki.forEach(function(element, index){
    console.log(element);
});




























