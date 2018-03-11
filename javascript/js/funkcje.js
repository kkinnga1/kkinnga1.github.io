//funkcja bez parametrów

function wyswietlWkonsoli() {
    console.log( "Kinga Korycka");
}

wyswietlWkonsoli();

//funkcja  zparametrami

function wyswietlWkonsoliParami(imie, nazwisko) {
    console.log (imie + " " + nazwisko);
}

wyswietlWkonsoliParami("Kinga","Korycka");
wyswietlWkonsoliParami("Adrian","Bąk");

//zwracanie wartosci

function obliczPodatek (kwota, procentPodatek) {
    var wynik = kwota * (procentPodatek/100);
    return wynik.toFixed(2);
}

var obliczenia1 = obliczPodatek (4990, 23);
console.log ("Wysokosc obliczonego podatku wynosi:" + obliczenia1)

 //console.log(w,z,y)