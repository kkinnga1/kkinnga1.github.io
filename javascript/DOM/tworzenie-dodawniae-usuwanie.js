//pobieram istniejacy wezel o od output
var istniejacyWezel = document.getElementById("output");
//sprawdzam czy udalo się go pobrac
console.log(istniejacyWezel);

//tworzę nowy element html
var newElement = document.createElement("p");
//tworze tresc do paragrafu
var newElementContent = document.createTextNode("Tutaj tworzę treść paragrafu, o!");
//wstawiam nowy tekst do nowego paragrafu
newElement.appendChild(newElementContent);

//dodaje do paragrafu atrybutu class='textpar'
newElement.setAttribute ('class', 'textpar');

console.log( newElement );
 
//wstawiam nasz przygoeowany paragraf do div#output 
istniejacyWezel.appendChild (newElement);

/*
//USUWANIE ELEMENTOW-usuwamy diva output 

istniejacyWezel.parentElement.removeChild( istniejacyWezel);

document.getElementById("parFirst").removeChild(istniejacyWezel);
*/


//insertBefore sluzy do tego żeby wstawiać przed czyms 
var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore(newElement, link);


//usuwanie atrybutow
link.removeAttribute('class');























