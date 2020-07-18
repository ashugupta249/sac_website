
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});


$.toggler = function(val){ 
  $('.container').fadeOut(function(){
    $(".container").html("");
    $(".container").load("./partials/"+val.toLowerCase()+".html .ux-vertical-tabs"); 
    $("title").html("Boards - "+val);
    $('.container').fadeIn();
    history.replaceState(undefined, undefined, "#"+val.toLowerCase());
 }) 
}

$.hashChanger = function(){
  var val = window.location.hash.substring(1).toLowerCase();
  var univ_set = ['bsw','bsp','brca','bsa','bhm'];
  val = (univ_set.indexOf(val) > -1) ? val : 'bsw';
  val = val.toUpperCase();
  $('#drop .select-styled').html(val);
 
  $.toggler(val);
}

$.hashChanger(); 


$('#drop .select-styled').on('DOMSubtreeModified',function(){
    if ($('#drop .select-styled').html()){
        if($('#drop .select-styled').html() != window.location.hash.substring(1).toUpperCase()){
            $.toggler($('#drop .select-styled').html());
        }
    }
});
