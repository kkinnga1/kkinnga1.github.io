function trzyParametry (parametr1, parametr2, parametr3){
  var wynik = parametr1*parametr2*parametr3;
  return wynik.toFixed(2);
}

var obliczenia = trzyParametry(2,8,4);
console.log ("Wartość otrzymana z pomnożenia trzech liczb wynosi" + " " + obliczenia)

