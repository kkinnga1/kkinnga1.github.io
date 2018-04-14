function pobierzDane(e){
    e.preventDefault();
    
//postman aplikacja w której można podejrzeć rodzaj pobieranych z serwera danych 

//okreśenie metody przesyłania danych POST, GET, HEAD itp.
//adres z ką pobieram dane 
//funkcja 
ajax("GET", 
       "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        wrzucDaneDoHTML)
}
    //tworze dokument DOM

    function wrzucDaneDoHTML(dane){
        var pUserId =document.createElement('p');
          var pUserName =document.createElement('p');
          var pUserUrl =document.createElement('p');
          var pUserIdContent =document.createTextNode("userId:" + dane.userId);
          var pUserNameContent =document.createTextNode("userName" + dane.userName);
          var pUserUrlContent =document.createTextNode("userUrl" + dane.userURL);
        
        pUserId.appendChild(pUserIdContent);
        pUserName.appendChild(pUserNameContent);
        pUserUrl.appendChild(pUserUrlContent);
        
        document.body.appendChild(pUserId);
        document.body.appendChild(pUserName);
        document.body.appendChild(pUserUrl);
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

