var parFirst = document.getElementById("parFirst");
console.log(parFirst);
//pobieram rodzica dla elementu #parFirst za pomoca wlasciwosci parentElement
console.log(parFirst.parentElement);
//jako wezel traktowany jest zarowno tekst jak i komentarze, dlatego pobiera nam wiecej niz tylyko elememty, anwet biale znaki, trzeba miec t ona uwadze,
console.log(parFirst.childNodes);
//childNodes pobiera wszystkie wezly w tym takze biale znaki miedzy elementami jako 'text' oraz komentarze
//children pobiera tylko te wezly ktore sa elementami html
console.log(parFirst.children);
//pobieram pierwsze dzieckoelementu #parFirst 
var pierwszeDzeicko = parFirst.children[0];
//pobieram nastepny wezel dla pierwszeDziecko, ktory jest elementem w relacji rodzenstwo 
console.log(pierwszeDzeicko.nextElementSibling);
//pobieram nastepny wezel dla pierwszeDziecko niezaleznie od tego czy jest elementem html, tekstem czy komentarzem
console.log(pierwszeDzeicko.nextSibling);
//lastElementChild pobiera ostatnie dziecko które jest elementem html
var ostatnieDziecko = parFirst.lastChild;
var ostatnieDziecko = parFirst.lastElementChild;
console.log(ostatnieDziecko);
console.log(ostatnieDziecko.previousElementSibling);


