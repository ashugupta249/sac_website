function myFunction() {
    var x = $("#myTopnav");
    // var a = x.getElementsByClassName("nav-links")[0];
    if (!$("#myTopnav").hasClass("responsive")) {
      $(".nav-links").children().slideDown();
      $("#myTopnav").addClass("responsive");
      //y.className += "hidden";
      
      // var h = a.clientHeight;
      // a.setAttribute("style","hieght:0px");
      // console.log(a.clientHeight);
    } else {
      $(".nav-links").children().slideUp();
      $(".dropdown-content").children().slideUp();
      $("#myTopnav").removeClass("responsive");
    }
}

function dropdown(a){
  // console.log(a);
  // if(window.innerWidth<600){

  //   x = a.getElementsByClassName("dropdown-content")[0];
  //   var all_dropdown = document.getElementsByClassName("dropdown");
  //   for(i=0;i<all_dropdown.length;i++){
  //     e = all_dropdown[i].getElementsByClassName("dropdown-content")[0];
      
  //     if(x!=e){
  //     e.setAttribute("style","");}
  //   }

    
  //   if(x.getAttribute("style") == "display:block"){
  //     x.setAttribute("style","");
  //   }
  //   else{
  //     x.setAttribute("style","display:block");
  //   }
  // }
  x = $(a).find(".dropdown-content");
  
  $(a).find(".dropdown-content").width($(a).width());
  $(".dropdown-content").toArray().forEach((value) => {
    if(value!=x.toArray()[0]){
      $(value).children().slideUp();
    }
  }); 
  $(a).find(".dropdown-content").children().slideToggle();
  //alert($(a).width());
}

var curr= $('#toggle-nav').css('display');

$(window).resize(function(){
  var x = document.getElementById("myTopnav");
  
   /// alert($('#toggle-nav').css('display'));
  if ($('#toggle-nav').css('display')!=curr){
    curr = $('#toggle-nav').css('display');
    if ($('#toggle-nav').css('display')==='none'){
      $(".nav-links").children().slideDown();
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
    // alert();
 logo_visibility_toggler();
})

function logo_visibility_toggler(){
  if (($(document).scrollTop() > $('#lead-content img').offset().top + ($('#lead-content img').height()/4) - 7) )
    $('.topnav').addClass('show-logo');
  else
    $('.topnav').removeClass('show-logo');
}