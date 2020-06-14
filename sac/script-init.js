$(".init-item").click(function(){

	var data = $(this).data("init-index");
	var book_item = $(this);
	var book_container = book_item.parent();
	
	

	if ($(this).hasClass('init-item-active')){
		$('.init-index-container[data-init-index="'+data+'"]').slideUp(function(){
			book_item.removeClass('init-item-active');
			book_container.css("white-space", "normal");	
		});
		
	}
	else{
		$(this).siblings().removeClass("init-item-active");
		$(this).parent().parent().find('.init-index-container:not([data-init-index="'+data+'"])').css("display","none");			
		
		book_container.css("white-space", "nowrap");
		book_item.addClass('init-item-active');

		$('.init-index-container[data-init-index="'+data+'"]').slideDown(function(){
			book_container.animate({
			      scrollLeft: book_item.offset().left - 50
			  }, 500);
		});
	}	



	
	
})

$(".init-index-container-close").click(function(){
	$(this).parent().slideUp(function(){
		$(this).parent().parent().find(".init-container").css("white-space", "normal");
		$(this).parent().parent().find(".init-item").removeClass("init-item-active");
	});	

})

$(".init-item-read").click(function(e){
	e.preventDefault();
})