$(document).ready(function(){


//Global variables
var storyContent = document.getElementById("story-container");
var i=keys.length;
var a=keys.length+1;



//control button "Next" function
$("#next").click(function next(){
    if (i<keys.length){
        i=i+1;}else{i=1;}
        storyContent.innerHTML="<p>"+keys[i-1]+"</p>";
        
  // Section counter "increasing"
         if (a<keys.length){
        a=a+1;}else{a=1;}
        pn.innerHTML="<p>"+[a]+"</p>";
});


//control button "previous" function
$("#prev").click(function prev(){
   
    if (i<keys.length+1 && i>1){
        i=i-1;}else{i=keys.length;}
        storyContent.innerHTML="<p>"+keys[i-1]+"</p>";
          // Section counter "decreasing"
         if (a<keys.length+1 && a>1){
        a=a-1;}else{a=keys.length;}
        pn.innerHTML="<p>"+[a]+"</p>"
});

}); //end function document ready