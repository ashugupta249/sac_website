/****************************************************************
	Contents:
	  * Navbar
	  * Scroll Top (Footer)
****************************************************************/

/////////////// Navbar ///////////////////////////
function myFunction() {
    var x = document.getElementById("myTopnav");
    // var a = x.getElementsByClassName("nav-links")[0];
    if (x.className === "topnav") {
      x.className += " responsive";
      // var h = a.clientHeight;
      // a.setAttribute("style","hieght:0px");
      // console.log(a.clientHeight);
    } else {
      x.className = "topnav";
    }
}
function closeNav(){
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
}
function dropdown(a){
  // console.log(a);
  if(window.innerWidth<600){
    x = a.getElementsByClassName("dropdown-content")[0];
    var all_dropdown = document.getElementsByClassName("dropdown");
    for(i=0;i<all_dropdown.length;i++){
      e = all_dropdown[i].getElementsByClassName("dropdown-content")[0];
      if(x!=e){
      e.setAttribute("style","");}
    }
    if(x.getAttribute("style") == "display:block"){
      x.setAttribute("style","");
    }
    else{
      x.setAttribute("style","display:block");
    }
  }
}

/////////////// scroll top ///////////////////////////
var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;
var scrollAnimationStep = function (initPos, stepAmount) {
    var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
    docBody.scrollTop = focElem.scrollTop = newPos;
    newPos && setTimeout(function () {
        scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
}
var scrollTopAnimated = function (speed) {
    var topOffset = docBody.scrollTop || focElem.scrollTop;
    var stepAmount = topOffset;
    speed && (stepAmount = (topOffset * stepTime)/speed);
    scrollAnimationStep(topOffset, stepAmount);
};