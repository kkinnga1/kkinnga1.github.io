$(function(){

    //pobieranie tekstu
    var tekstParagrafuId = $("#paragraf").text();
    console.log(tekstParagrafuId);
      
    //ustawienie tekstu
    $("#paragraf").text("Nowy tekst ustawiony metodą text()");
    
    //dodawanie html 
    $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>");
    
    //dodawanie tresci na koncu selektora 
    $(".paragrafnext").append("<br>Nowa tresc na koncu selektora");
    
    //dodawanie treści za selektorem 
    $(".paragrafnext").after("<h6>Nowy element za selektorem</h6>");
    
    //usuwanie elementu wraz z zawrtoscią
    $(".paragrafnext").remove();
    
    //usuwanie tylko zawartosci elementu
    $("div").empty();
    
    //dodawanie pojedynczego stylu css
    //$("div").css("background-color", "red");
    
    //dodawnie wielu styli css
    $("div").css ({
        width:"600px",
        height:"120px",
        backgroundColor: "lime"});
    
        
        //dodawanie klasy
        $("h1").addClass("nowa_klasa");
        
        //dodawanie atrybutów do elementu
        $("h1").attr("title", "Główny tytuł ustawiony za pomoca iquery");
    
    
});

