

function fibonacci(n) {
    
    
 for (var i = 0; i<1000; i++) {
      
     if (i === 0) {console.log(0)};
    else if (i === 1) {console.log(1)};
     else if (i > 1) {console.log( fibonacci(i - 1) + fibonacci(i - 2));}
    return (i);       
}
    
    


}