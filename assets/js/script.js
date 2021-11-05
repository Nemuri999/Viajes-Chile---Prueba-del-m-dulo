$(function (){
    $(window).scroll(function(){
       if ($(this).scrollTop() > 500) {
        $('nav').addClass("fondonegrot");
       } else {
        $("nav").removeClass("fondonegrot");
       }
    });
});


$("#abrir-formulario-1").click(function() {
    $("#formulariocontacto").show();
  });

  $("#cerrarpopup").click(function() {
    $("#formulariocontacto").hide();
  });