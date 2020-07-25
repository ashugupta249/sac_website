function myFunction() {
    //var x = $("#myTopnav");
    // var a = x.getElementsByClassName("nav-links")[0];
    if (!$("#myTopnav").hasClass("responsive")) {
      $(".nav-links").children().slideDown(function(){
        $(this).css("display", "block");
      });
      $("#myTopnav").addClass("responsive");
      //y.className += "hidden";
    } else {
      $(".nav-links").children().slideUp();
      $(".dropdown-content").children().slideUp();
      $("#myTopnav").removeClass("responsive");
    }
}
function dropdown(a){
  x = $(a).find(".dropdown-content");
  $(a).find(".dropdown-content").width($(a).width());
  $(".dropdown-content").toArray().forEach((value) => {
    if(value!=x.toArray()[0]){
      $(value).children().slideUp();
    }
  }); 
  $(a).find(".dropdown-content").children().slideToggle(function(){
    if ($(this).is(":visible"))
      $(this).css("display", "block");
  });
}

var curr= $('#toggle-nav').css('display');
$(window).resize(function(){
  var x = document.getElementById("myTopnav");
   /// alert($('#toggle-nav').css('display'));
  if ($('#toggle-nav').css('display')!=curr){
    curr = $('#toggle-nav').css('display');
    if ($('#toggle-nav').css('display')==='none'){
      $(".nav-links").children().slideDown(function(){
        if ($(this).is(":visible"))
          $(this).css("display", "block");
      });
      $(".dropdown-content").children().slideUp();
      //$(".dropdown-content").children().slideDown();
      x.className = "topnav";
    }
    else{
      $(".nav-links").children().slideUp();
      $(".dropdown-content").children().slideUp();
    }
  }
  logo_visibility_toggler();
});

$(document).scroll(function() {
 logo_visibility_toggler();
})

function logo_visibility_toggler(){
  if (($(document).scrollTop() + 49 > $('#lead-content img').offset().top ) )
    $('.topnav').addClass('show-logo');
  else
    $('.topnav').removeClass('show-logo');
}