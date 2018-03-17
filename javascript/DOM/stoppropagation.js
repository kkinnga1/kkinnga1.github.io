var div = document.getElementById ("parFirst");
var par = document.getElementById("part2");

div.addEventListener("click", function (event){
    console.log("Kliknięto w diva");
});

par.addEventListener("click", function (event){
    event.stopPropagation();
    console.log("Kliknięto w paragraf");
});

