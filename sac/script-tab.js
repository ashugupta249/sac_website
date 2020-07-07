var tab_col = $(".tabs")[0];
var tab_toggle = $(".tab-toggle")[0];

var tab_show = function(){
	tab_col.setAttribute("style","transform:scaleY(1)");
}
var tab_hide = function(){
	tab_col.setAttribute("style","@media (max-width: 50rem) {transform:scaleY(0)}");
}

var tab_toggle = function(){
	state = tab_col.style.transform;
	if(state == "scaleY(1)"){
		tab_hide();
	}
	else{
		tab_show();
	}
}