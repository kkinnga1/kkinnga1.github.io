var tablica = [0, 1, 2, 3, 4, 5];

function sumaKwadratow (tablica) {
    
    var suma = 0;
    
tablica.forEach(function(element, index){
    var pierwiastekKwadratowy = Math.pow( element , 2 );
    suma += pierwiastekKwadratowy;
  
});
    
      console.log("Suma kwadratow wartości zawartych w tablicy wynosi:" + " " + suma)
    
}

sumaKwadratow(tablica);