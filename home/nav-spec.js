function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("lead-content");
    // var a = x.getElementsByClassName("nav-links")[0];
    if (x.className === "topnav") {
      x.className += " responsive";
      y.className += "hidden";
      // var h = a.clientHeight;
      // a.setAttribute("style","hieght:0px");
      // console.log(a.clientHeight);
    } else {
      x.className = "topnav";
      y.className = "";
    }
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