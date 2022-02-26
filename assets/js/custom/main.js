document.addEventListener("DOMContentLoaded", function(){
    var buttons = document.querySelectorAll('button.button-green')
    
    buttons.forEach(function(elem){
        elem.addEventListener("click", function(){
            document.querySelectorAll('.collapse-vertical').forEach(
                function(el){
                    el.classList.remove("show")
                }
            )
        })
    })
});