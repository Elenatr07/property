const width = window.innerWidth;
const height = window.innerHeight
//alert("Ширина экрана: " + width + "px,  Высота экрана" + height);

$(document).ready(function(){
        $('#side-menu').on('click', function(){
        if( $('#nav_shadow').hasClass('shadow')) {
            $('#nav_shadow').removeClass("shadow")
        } else {
           $('#nav_shadow').addClass("shadow")  
        }
        
       
    });

    $('.menu li').on('click', function(){
        if((width <1026)) {
         $('body').removeClass('scroll_body');
         $('#nav_shadow').removeClass("shadow");
         $('#side-menu').prop('checked', false)
    } 
    })
    
})