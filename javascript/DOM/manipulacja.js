//innerHTML pobieranie 
var parFirst = document.getElementById("parFirst");
console.log(parFirst.innerHTML);
console.log(parFirst.outerHTML);

//innerHTML przypisanie wawrtosci
var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartosc h1 wstawiona w span</span>";

//zmiana styli
mainHeader.style.color = "red";
mainHeader.style.backgroundColor = "red";

//przypisanie klasy
mainHeader.className = "headingtext";

//pobranie klas elementu 
console.log(mainHeader.className);

//classList dodawanie klasy
mainHeader.classList.add ("nowa-klasa");

//classList usuwanie klasy
mainHeader.classList.remove("headingtext");
