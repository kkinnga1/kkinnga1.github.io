function pobierzDane(e){
    e.preventDefault();
    
$.getJSON(
"http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
wrzucDaneDoHTML)
}
    
    function wrzucDaneDoHTML(dane) {
        
        
        $( 'body' ).append( "<p>userId: " + dane.userId + "<p>" );
        $( 'body' ).append( "<p>userName: " + dane.userName + "<p>" );
        $( 'body' ).append( "<p>userURL: " + dane.userURL + "<p>" );
        $( 'body' ).append( "<p>---------------<p>" );
    }