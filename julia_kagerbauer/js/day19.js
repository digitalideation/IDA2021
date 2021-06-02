
var imgs= document.getElementsByClassName("arm--left");
var arm= document.getElementsByClassName("arm--right");
var B= document.getElementsByClassName("head");
var C= document.getElementsByClassName("leg--left");
var D= document.getElementsByClassName("leg--right");
var A= document.getElementsByClassName("body");
var E= document.getElementsByClassName("rave1");
var F= document.getElementsByClassName("rave2");
var G= document.getElementsByClassName("rave3");
var H= document.getElementsByClassName("rave4");
var I= document.getElementsByClassName("rave5");
var J= document.getElementsByClassName("rave6");
var K= document.getElementsByClassName("rave7");
var audio = document.getElementsByClassName("musicplayer")
var start = document.getElementsByClassName("startDance")
var stop = document.getElementsByClassName("stopDance")
console.log(imgs)
console.log ("audio",audio)



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

    if (K[0].style.animationPlayState === 'paused' || !K[0].style.animationPlayState) {
      K[0].style.animationPlayState = 'running';
      console.log("running")
      document.body.className = 'running';
    } else {
      K[0].style.animationPlayState = 'paused';
      document.body.className = '';

    }

    }

  console.log(imgs)

  

/*
for (var i = 0; i < imgs.length; i++) {
  /* imgs[i].onclick = toggleAnimation; 
  imgs[i].style.animationPlayState = 'running';
  console.log("Set all to running")
}

function toggleAnimation() {

    console.log("animation clicked")
  var style;
  for (var i = 0; i < imgs.length; i++) {
    style = imgs[i].style;
    if (style.animationPlayState === 'running') {
      style.animationPlayState = 'paused';
      console.log("paused")
      document.body.className = 'paused';
    } else {
      style.animationPlayState = 'running';
      document.body.className = '';
    }
  }
}
*/
