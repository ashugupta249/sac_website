/*function vertical_tabs()
  {
    $('.container').on("click", ".ux-vertical-tabs .tabs button", function()
      {
      var temp_tab = $(this).data('tab');
      var temp_tab_js = this.getAttribute('data-tab');
      var temp_content = $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab + '"]');
      var temp_content_js = document.querySelector('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + temp_tab_js + '"]');
      var temp_content_active_js = document.querySelector('.ux-vertical-tabs .maincontent .tabcontent.active');

      $('.ux-vertical-tabs .tabs button').removeClass('active');
      $('.ux-vertical-tabs .tabs button[data-tab="' + temp_tab + '"]').addClass('active');

      var animation_start = anime({ duration: 400, targets: temp_content_active_js, opacity:[1,0], translateX: [0,'100%'], easing: 'easeInOutCubic',
      complete: function()
        {
          $('.ux-vertical-tabs .maincontent .tabcontent').removeClass('active');
        temp_content.addClass('active');
        var animation_end = anime({ duration: 400, targets: temp_content_js, opacity:[0,1], translateX: ['100%','0'], easing: 'easeInOutCubic' });
          }
      });
      });
    }


$(function() 
  {
  vertical_tabs();
  });

*/




var tab_show = function(){

  var tab_col = $(".tabs")[0];
  var tabtoggle = $(".tab-toggle")[0];
  var downarrow = $(".tab-toggle i")[0];

  tabtoggle.classList.add("tab-toggle-active");
  tab_col.setAttribute("style","transform:scaleY(1)");
  tabtoggle.setAttribute("style","margin-top:"+(tab_col.clientHeight - tabtoggle.clientHeight)+"px");
  // downarrow.setAttribute("style","transform:rotateZ(180deg)")
}
var tab_hide = function(){
  var tab_col = $(".tabs")[0];
  var tabtoggle = $(".tab-toggle")[0];
  var downarrow = $(".tab-toggle i")[0];
  tabtoggle.classList.remove("tab-toggle-active");
  tab_col.setAttribute("style","@media (max-width: 50rem) {transform:scaleY(0)}");
  tabtoggle.setAttribute("style","margin-top:0");
  // downarrow.setAttribute("style","transform:rotateZ(0deg)")
}

var tab_toggle = function(){
  // alert("Clicked");
  var tabtoggle = $(".tab-toggle")[0];
  var tab_col = $(".tabs")[0];
  state = tab_col.style.transform;
  if(state == "scaleY(1)"){
    tab_hide();
  }
  else{
    tab_show();
  }
}




$('.container').on("click", ".ux-vertical-tabs .tabs button", function(){
    $('html, body').animate({
        scrollTop: $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + $(this).data('tab') + '"]').offset().top - $('header').outerHeight() + 2
    }, 500); //adjust with header
    return false;
});


$(window).scroll(function (e){
    var q = $(".ux-vertical-tabs .tabs button:not(.empty)");
    var len = q.length;

    var i = 0;

    for (i = 0; i < len; i++) {
      q.eq(i).removeClass("active");
    }

    var top = $(window).scrollTop() + $('header').outerHeight();

    for (i = 0; i < len; i++){
      if (top < $('.ux-vertical-tabs .maincontent .tabcontent[data-tab="' + q.eq(i).data('tab') + '"]').offset().top)
        break;
    }

    // Handle i = 0 case
    if (i==0)
      i=1;

    q.eq(i-1).addClass("active");

    
});

$(window).resize(function(){
    var tab_col = $(".tabs")[0];
    var tabtoggle = $(".tab-toggle")[0];
    state = tab_col.style.transform;
    console.log(state);
    if(state == "scaleY(1)"){
      tabtoggle.setAttribute("style","margin-top:"+(tab_col.clientHeight - tabtoggle.clientHeight)+"px");
    }
    console.log(tabtoggle.style.marginTop)
  })