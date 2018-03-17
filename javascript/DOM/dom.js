/*wszsytkie właściwości z css można usuwać za pomocą modelu dom
dom jest modelme hierarchicznym
stnadardowy interfejs pozwlający manipulowac obiektami
cor dom - 
xml dom
html dom
każdy element ma mase roznych wlasciwosci, a z zwiazku z tym ze jest to obiekt to definiuje rozne metody
a zdarzenia to na przyklad klikniecei mszka, ale sa zdarzenia wywolywane niezaleznie od uzytkownika tj. samo wczytanie dokumentu
dokonuje sie niezalenie
dom umozliwia dodawanie usuwanie elementow html
gd strona jest ladowana pzegldarka tworzy model dom
glowny element modelu dom to dokument
dokument to slowko kluczowe
zawsze odwolujemy sie do niego 
takie drzewo genealogiczne - struktura drzewiasta 
document reprezentuje caly dokument  - zawiera wlaciwosci i metody do ktorych mozna sie odwolac 
document.getElementById
document.body
document.head
window.document - document jest czescia window tez mozna sie dostac z apomoca wlasciwosci ale po prostu pisze sie document kropka wlasciwosc, bez window.

*/

console.log ( document);
console.dir (document);
console.dir (document.baseURI);
//zwroci body jako obiekt
console.dir(document.body);

//zwroci element html jako obiekt
console.dir(document.documentElement);
//obiekt iwndow
console.log(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.document);
//obiektu document zazwyczaj uzywa się do odniesienia sie do elementu html a window do rozpoznania szerookosci ekranu, rozpoznania jak daleko jest sie od gorys trony 
//
