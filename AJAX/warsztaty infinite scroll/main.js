function pobierzDane(e){
    e.preventDefault();
    
ajax("GET", 
       "https://jsonplaceholder.typicode.com/users",
        wrzucDaneDoHTML)
}

//funkcja która 

window.onscroll = function() {myFunction()};


//te dane sa tablica  anie obiektem dlatego for
    function wrzucDaneDoHTML(dane){
     
    }





function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("paragraf").createElement('<p></p>');
    } else {
        document.getElementById("myP").className = "";
    }
}

function ajax (method, url, callback){
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open (method, url);
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                //określam jaki typ danych zwraca mi serwer -response.Text - ciąg tekstowy (obiekt)
                //responseXML zwroci mi XMLdocument w którym porusza się jak w DOM JSa 
                var returnData = httpRequest.responseText;
                
                //przekształcenie tekstu o obiekt JSONa
                var jsonObj = JSON.parse(returnData);
                
                //
                callback(jsonObj);
                
                httpRequest = null;
                
            }
        
        }
        
    }
    
    httpRequest.send();
    
};
