/*rekurencja - funkcja samowywołująca się - konstrukcja rzadko wykorzystywana - zasada pareto*/

$(document).ready(function() {
    
    function silnia( n){
        if(n==0){
            return 1;
        }
        var wynik = n * silnia (n-1);
        return wynik;
    }
        
        for (var i=1; i<<n; i++){
            wynik*= i;
        }
    
    
     return wynik;
    
console.log(silnia(16));
    
});





