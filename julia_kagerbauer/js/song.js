
var imgs= document.getElementsByClassName("ingwer1");
var arm= document.getElementsByClassName("ingwer2");
var B= document.getElementsByClassName("ingwer3");
var C= document.getElementsByClassName("ingwer4");
var D= document.getElementsByClassName("h1");
var A= document.getElementsByClassName("container1");
var E= document.getElementsByClassName("container2");
var F= document.getElementsByClassName("container3");
var G= document.getElementsByClassName("h3");
var H= document.getElementsByClassName("h4");
var I= document.getElementsByClassName("ingwer5");
var J= document.getElementsByClassName("ingwer6");
var audio = document.getElementsByClassName("musicplayer")
var start = document.getElementsByClassName("startDance")
var stop = document.getElementsByClassName("stopDance")
var startRave = document.getElementsByClassName("button1")
var stopRave = document.getElementsByClassName("button2")
console.log(imgs)
console.log ("audio",audio)


var nightModeOn= false

function toggleAnimation(){
    console.log();
    console.log("play pressed")

    console.log("animation clicked")
    
    if (imgs[0].style.animationPlayState === 'paused' || !imgs[0].style.animationPlayState) {
      imgs[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
      audio[0].play();
      stop[0].style.display= "flex"
      start[0].style.display= "none"
    } else {
      imgs[0].style.animationPlayState = 'paused';
      document.body.className = '';
      audio[0].pause();
      stop[0].style.display= "none"
      start[0].style.display= "flex"
    }

    if (B[0].style.animationPlayState === 'paused' || !B[0].style.animationPlayState) {
      B[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      B[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (C[0].style.animationPlayState === 'paused' || !C[0].style.animationPlayState) {
      C[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      C[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (arm[0].style.animationPlayState === 'paused' || !arm[0].style.animationPlayState) {
      arm[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      arm[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }


    if (D[0].style.animationPlayState === 'paused' || !D[0].style.animationPlayState) {
      D[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      D[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (A[0].style.animationPlayState === 'paused' || !A[0].style.animationPlayState) {
      A[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      A[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (E[0].style.animationPlayState === 'paused' || !E[0].style.animationPlayState) {
      E[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      E[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (F[0].style.animationPlayState === 'paused' || !F[0].style.animationPlayState) {
      F[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      F[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (G[0].style.animationPlayState === 'paused' || !G[0].style.animationPlayState) {
      G[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      G[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (H[0].style.animationPlayState === 'paused' || !H[0].style.animationPlayState) {
      H[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      H[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (I[0].style.animationPlayState === 'paused' || !I[0].style.animationPlayState) {
      I[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      I[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    if (J[0].style.animationPlayState === 'paused' || !J[0].style.animationPlayState) {
      J[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      J[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }
    
    if(nightModeOn){
        document.body.classList.toggle("night")
    }
    

    }

    function toggleNightMode(){
        document.body.classList.toggle("night")
        nightModeOn = !nightModeOn
        if(nightModeOn) {
            stopRave[0].style.display= "flex"
            startRave[0].style.display= "none"
        }
        else{
            stopRave[0].style.display= "none"
            startRave[0].style.display= "flex"
        }

    }

    /*
    var nightButton = document.querySelector("#night");
console.log(nightButton)
nightButton.addEventListener("click", function(){
    nightModeOn = !nightModeOn
   console.log("just toggling")
   document.body.classList.toggle("night")
   
}); */


  

