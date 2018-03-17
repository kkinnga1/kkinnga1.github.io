var paragraf = document.getElementById('par2');

//sposob1
function obsluzZdarzenie() {
    console.log("click");
    console.log(event.type);
}

paragraf.onclick = obsluzZdarzenie;
//wywolanie funkcji w tym przypadku bez nawiasow

//sposob 2

paragraf.onclick = function(e) {
    console.log("Do obslugi zdarzenia przypisana funkcja  anonimowa");
}




var counter = 0;
paragraf.addEventListener("mouseenter", function(event){
    counter++;
    console.log(event.type);
    console.log("Zdarzenie wywołane" + counter + "raz");
})


var title = document.getElementById("main-header");
    title.addEventListener('mouseenter', function(){
        title.style.fontSize = "70px";
    });
                           
 title.addEventListener("mouseleave", function(){
        title.style.fontSize = "initial";
    });                          



/*

function bodyColor(event) {
    console.log(event);
    document.body.style.backgroundColor = "red";

}

var title = document.getElementById("main-header");

title.addEventListener("click", bodyColor);*/

//usuwanie obslugi zdarzen
//title.removeEventListener('click', bodyColor);


//blokowanie domyslnego dzialania elementow 

document.querySelector(".link1").addEventListener('click', function(event){
    event.preventDefault();
    console.log("Kliknąłem link klasy .link1")
    
})


















