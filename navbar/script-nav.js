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


    var all_dropdown = document.getElementsByClassName("dropdown");
    for(i=0;i<all_dropdown.length;i++){
      e = all_dropdown[i].getElementsByClassName("dropdown-content")[0];
      e.setAttribute("style","");
    }

    e = a.getElementsByClassName("dropdown-content")[0];
    if(e.getAttribute("style") == "display:block"){
      e.setAttribute("style","");
    }
    else{
      e.setAttribute("style","display:block");
    }
  }
}