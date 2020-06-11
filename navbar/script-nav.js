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

function dropdown(a){
  // console.log(a);
  if(window.innerWidth<600){
    var e = a.getElementsByClassName("dropdown-content")[0];
    if(e.getAttribute("style") == "display:block"){
      e.setAttribute("style","");
    }
    else{
      e.setAttribute("style","display:block");
    }
  }
}