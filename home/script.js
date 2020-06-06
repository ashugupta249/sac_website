// $("#line1").setAttribute("style","height:"+$(".boardbox").clientHeight*5+"px");
// $("#line3").setAttribute("style","margin-top:"+$(".boardbox").clientHeight+"px");
// $("#line4").setAttribute("style","margin-top:"+$(".boardbox").clientHeight+"px");
// $("#line5").setAttribute("style","margin-top:"+$(".boardbox").clientHeight+"px");
// $("#line6").setAttribute("style","margin-top:"+$(".boardbox").clientHeight+"px");
// Console.log($(".boardbox").clientHeight);

var line1 = $("#line1")[0];
var line3 = $("#line3")[0];
var line4 = $("#line4")[0];
var line5 = $("#line5")[0];
var line6 = $("#line6")[0];

var size = $(".boardbox")[0].clientHeight*5;

line1.setAttribute("style","height:"+size+"px");
line3.setAttribute("style","margin-top:"+$(".boardbox")[0].clientHeight+"px");
line4.setAttribute("style","margin-top:"+$(".boardbox")[0].clientHeight+"px");
line5.setAttribute("style","margin-top:"+$(".boardbox")[0].clientHeight+"px");
line6.setAttribute("style","margin-top:"+$(".boardbox")[0].clientHeight+"px");