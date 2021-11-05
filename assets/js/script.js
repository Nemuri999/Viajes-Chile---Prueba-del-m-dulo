$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 500) {
        $('nav').addClass("fondonegrot");
       } else {
        $("nav").removeClass("fondonegrot");
       }
    });
});