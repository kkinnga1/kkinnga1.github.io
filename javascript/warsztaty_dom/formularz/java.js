function pobierzImie (event){
event.preventDefault();
    
var polaFormularza = document.getElementsByTagName("input");
    var imie = polaFormularza[0].value;
    var nazwisko = polaFormularza[1].value;
    console.log ("Imie: " + imie + ", " + "Nazwisko: " + nazwisko);
    

    
};




