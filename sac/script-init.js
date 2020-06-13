$(".init-item-read").click(function(e){
	e.preventDefault();

	var data = $(this).parent().data("init-index");

	//alert(data);
	$(this).parent().parent().parent().find('.init-index-container:not([data-init-index="'+data+'"])').css("display","none");

	//for (var i=0; i < items.length; i++){
	//	items.eq(i).css("display", "none");
	//}

	var book_item = $(this).parent();
	var book_container = book_item.parent();
	
	//container.css("overflow-x","scroll");
	book_container.css("white-space", "nowrap");



	$('[data-init-index="'+data+'"]').slideDown(function(){

		book_container.animate({
		      scrollLeft: book_item.offset().left + 12
		  }, 500);
	});


	//book_container.scrollLeft(book_item.offset().left - 12);


	
})

$(".init-index-container-close").click(function(){
	$(this).parent().slideUp(function(){
		$(this).parent().parent().find(".init-container").css("white-space", "normal");
	});	

})