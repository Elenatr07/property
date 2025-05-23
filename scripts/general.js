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
         $('#side-menu').prop('checked', false);
        
    } 
    })
    if(width <600){
        $('.main_text_b h1').text('Building Dreams, Brick By Brick')
        $('.block3_header p').text('Booking for our newest Project “THE SERENITY RESIDENCE“ have now begun')
    }
    if(width <400){
        $('.block3_header p').html('Booking for our newest Project <br> “THE SERENITY RESIDENCE“ <br> have now begun')
    }
    if(width <1026){
         $('.social_links').append(`    <div>
          <a class="location" href="mailto:sehgalhomesproject@gmail.com">
            <img src="img/mail1.svg" alt="" />
          </a>
        </div>
        <div>
          <a class="location" href="tel:+918800110831">
            <img src="img/phone1.svg" alt="" />
          </a>
        </div>`)
    }

})  
$(window).resize(function() {  
    var widthWind = $(this).width();  
   
}); 


  