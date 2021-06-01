var tooinsistent = document.getElementById("tooinsistent")
var buttonplay = document.getElementById("buttonplay")
var buttonpause = document.getElementById("buttonpause")
var buttonplay2 = document.getElementById("buttonplay2")
var buttonpause2 = document.getElementById("buttonpause2")
var buttonplay3 = document.getElementById("buttonplay3")
var buttonoplayall1 = document.getElementById("buttonplayall1")
var buttonoplayall2 = document.getElementById("buttonplayall2")
var bbuttonoplayall3 = document.getElementById("buttonplayall3")
var buttonoplayall4 = document.getElementById("buttonplayall4")

buttonplay.onclick = function(){
tooinsistent.play();
buttonpause.style.display="inline";
buttonplay.style.display="none";
}

buttonpause.onclick = function(){
    tooinsistent.pause();
    buttonpause.style.display="none";
    buttonplay2.style.display="inline";
    
}

buttonplay2.onclick = function(){
    tooinsistent.play();
    buttonplay2.style.display = "none";
    buttonpause2.style.display = "inline"
}

buttonpause2.onclick = function(){
    tooinsistent.pause();
    buttonpause2.style.display = "none";
    buttonplay3.style.display = "inline";
}

buttonplay3.onclick = function (){
    tooinsistent.play();
    buttonplay3.style.display = "none";
    buttonpause3.style.display = "inline";
}

buttonpause3.onclick = function (){
    tooinsistent.pause();
    buttonpause3.style.display = "none";
    buttonplay.style.display = "inline";
}

buttonplayall1.onclick = function (){
    tooinsistent.play()
}
buttonplayall2.onclick = function (){
    tooinsistent1.play()
}
buttonplayall3.onclick = function (){
    tooinsistent2.play()
}
buttonplayall4.onclick = function (){
    tooinsistent3.play()
}