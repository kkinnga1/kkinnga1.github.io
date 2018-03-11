for (var i = 10; i > 0; i--){
    console.log("Iteracja nr " + i );
}

var tablica = ["Volvo", "Mazda", "Honda", "Audi"];

for (var i = 0; i < tablica.length; i++){
    console.log (tablica[i]);
}

tablica.forEach (function (element, index) {
    console.log ("Index:" + index + "Element: " + element );
    })               

var iter = 28;
    do {
        console.log ("While iteracja nr" + iter);
        iter++;
    }   while (iter <=25)
    
        
  for (var i=1; i<15; i++) {
      if(i>6){
          break;
      } ease {
          console.log("Iteracja nr" + i);
  }      }