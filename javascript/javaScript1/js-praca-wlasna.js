//cwiczenia z tablicy, tworze zbior wartosci dotyczacy moich zwierzat i cwicze metody dotyczace usuwania wartosci, dodawania, sprawdzani który element zostal usuniety, poczadkowania zbiorow, sprawdzaniu ile elementow jestw tablicy itp.

var zwierzetaKingi =["Roy", "Rufus", "Bernard"];
console.log(zwierzetaKingi[1], zwierzetaKingi[2]);


zwierzetaKingi[3]="Pimpek";
zwierzetaKingi[4]="Bobik";


zwierzetaKingi.push("Fifi", "Bonifacy");

console.log(zwierzetaKingi);

zwierzetaKingi.pop();
console.log(zwierzetaKingi);

zwierzetaKingi.shift();
console.log(zwierzetaKingi);

zwierzetaKingi.unshift("Roy");
console.log(zwierzetaKingi);

zwierzetaKingi.reverse();
console.log(zwierzetaKingi);

var iloscElementowTablicy = zwierzetaKingi.length;
console.log(iloscElementowTablicy);

var usunietyElement = zwierzetaKingi.shift();
console.log(usunietyElement);

var elementyZTablicy = zwierzetaKingi.join(" ");
console.log(elementyZTablicy);










function trzyParametry (parametr1, parametr2, parametr3){
  var wynik = parametr1*parametr2*parametr3;
  return wynik;
}

var obliczenia = trzyParametry(2,9,4);
console.log ("Wartość otrzymana z pomnożenia trzech liczb wynosi" + " " + obliczenia);

























