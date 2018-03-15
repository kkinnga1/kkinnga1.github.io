 var tablica = [1,2,3,4,5,6];

    function operacjeNaLiczbach(tablica) {
        
        
        var suma = 0;
        var iloczyn = 1; 
            
            
            
        tablica.forEach(function(element, index){
            iloczyn *= element;
            suma += element;
        });
        
        
        console.log("Suma liczb z tablicy wynosi" + " " + suma);
        console.log("Iloczyn liczb wynosi" + " " + iloczyn);
        
    }

    operacjeNaLiczbach(tablica);

