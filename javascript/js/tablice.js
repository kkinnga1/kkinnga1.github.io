//dzięi tablicy w jednej zmiennej można przechowywaćiwele wartości

var imiona = ['Adam', 'Marta', 'Pawel', 'Michal', 'Kasia', 'Sandra'];
console.log(imiona[0], imiona[3]);
//jelsi chce się odniesc do konkretnej wartosci console.log(imiona[2]); czyli teraz biore trzeci element z tablicy 

imiona[6]="Mikołaj";
imiona[7]="Kinga";

imiona.push("Kamil", "Krzysztof", "Marcin");
//metody wykonujemy z apomocąkropki .push dodaje kolejny element
imiona.push("Marcin");

imiona.pop();
//metoda .pop usuwa ostatni element z tablicy
imiona.pop();
//usunięcie konkreetnej wartosci z tablicy - w domku trzeba sprawdzic  metopda splice


//dodanie elementó z początku tablicy
imiona.unshift("Sebastian");
imiona.unshift("Małgosia");

//metoda usuwająca element z początku tablicy, nie przypisujemu jej zadnej wartosci
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


//odwrócenie tablicy 
imiona.reverse();
console.log(imiona);



//sortowanie tablicy

imiona.sort();
console.log(imiona);




//sprawdzenie zawartosci w tbalicy-funkcja zwróci indeks tablicy pod którą wartosc istnieje, jak nie ma to wyświetli -1
//potem sprawdza się czy coś jest różne od -1 a nie od 0, bo zero to indeks, a -1 zznaczy żę czegos nie ma w tbalicy
console.log(imiona.indexOf("Sandra"));

