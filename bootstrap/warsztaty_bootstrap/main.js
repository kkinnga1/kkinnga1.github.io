$("button['#one']").on('click', function(e){
    e.preventDefault();
    var target 
    
    
    $('html, body').animate(
    { scrollTop:$(this.hash).offset().top},
    600
        
    );
});