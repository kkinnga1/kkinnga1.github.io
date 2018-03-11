//dzięi tablicy w jednej zmiennej można przechowywaćiwele wartości

var imiona = ['Adam', 'Marta', 'Pawel', 'Michal', 'Kasia', 'Sandra'];
console.log(imiona[0], imiona[3]);

imiona[6]="Mikołaj";
imiona[7]="Kinga";

imiona.push("Kamil", "Krzysztof", "Marcin");
//metody wykonujemy z apomocąkropki
imiona.push("Marcin");

imiona.pop();
//metoda .pop usuwa ostatni element z tablicy
imiona.pop();


//dodanie elementó z początku tablicy
imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

//metoda usuwająca element z początku tablicy
imiona.shift();
//usuneliśmy małgosie

//jeszcze jest metoda która zwraca element usunięty
var usunietyElement = imiona.shift();
console.log(usunietyElement);

console.log(imiona);


//sprawdzenie "dlugosci"tablicy
var iloscElementowTablicy = imiona.length;
console.log (iloscElementowTablicy);

//w tablicach można indeksować tyhlko liczbowo, nie jest możliwe stworzenie indeksu stringiem


//metoda join służy do łączenia kolejnych elementó tablicy w jeden tekst, ta poniższa jest czasochłonna, dlatego korzysta się z join

var textZTablicy = imiona[0] + " " + imiona[1] + "," + imiona [2];
console.log(textZTablicy)

var elementyTablicyString = imiona.join(", ");
console.log(elementyTablicyString);


