/*

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 function text() {
    var element = document.getElementsByTagName("h1")[0];
    element.classList.toggle("h1-night");
 }
/*
 function myFunction1() {
    var element = document.getElementsByClassName("waves").src = "";;
    element.classList.toggle("night");
 } 

 function before(){
    document.getElementsByClassName('waves')
    .src="img/photo1.jpg";
    document.getElementById('message')
    .innerHTML="Hii! GeeksforGeeks people";
}
  
function after(){
    document.getElementById('myImage')
    .src="img/photo2.jpg";
    document.getElementById('message')
    .innerHTML="Bye! GeeksforGeeks people";
}

*/

var nightButton = document.querySelector("#night");
console.log(nightButton)
nightButton.addEventListener("click", function(){
   console.log("just toggling")
   document.body.classList.toggle("night")
});

    
