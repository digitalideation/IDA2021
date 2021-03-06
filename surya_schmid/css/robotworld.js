// ----------------------------MOVE ON MUSIC ----------------------------

// let images = new Array();
// /* Pfade sind vom HTML File her gesehen! */
// images[0] = "../process/img/1_Random.svg";
// images[1] = "../process/img/2_Random.svg";



// function getRandImg() {
//     //get random number within 0 and amount of entries in array
//     let wuerfel = Math.floor(Math.random() * images.length);
//     let img = document.createElement('img');
//     img.src = images[wuerfel];

//     // remove old image
//     let oldimages = document.getElementById("head").getElementsByTagName('img');
//     if (oldimages.length > 0) {
//         document.getElementById("head").removeChild(oldimages[0]);
//     }
//     // END remove old images

//     //append new image to element with id platzhalter
//     document.getElementById("head").appendChild(img);
// }


const audioEle = document.querySelector('audio');

var dataArray;
var bufferLength;
var analyser;

const fps = 30;


var isPlaying = false;


audioEle.addEventListener('play', () => {
    startPlay();
});

function startPlay() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const audioSourceNode = audioCtx.createMediaElementSource(audioEle);

    let gainNode = audioCtx.createGain();
    audioSourceNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    analyser = audioCtx.createAnalyser();
    audioSourceNode.connect(analyser);

    analyser.fftSize = 128;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);


    draw();
}

function togglePlay() {
    isPlaying ? audioEle.pause() : audioEle.play();
};

audioEle.onplaying = function () {
    isPlaying = true;
    document.body.classList.remove('paused');
    document.body.classList.add('playing');
};

audioEle.onpause = function () {
    isPlaying = false;
    document.body.classList.remove('playing');
    document.body.classList.add('paused');

};

function draw() {

    setTimeout(function () {
        requestAnimationFrame(draw);

        analyser.getByteFrequencyData(dataArray); //werte von 0-255

        let sum = 0;

        //mittelwert rechnen
        for (let i = 0; i < bufferLength; i++) {
            sum += map(dataArray[i], 0, 255, minscale, maxscale);

        }

        document.documentElement.style.setProperty('--scalesize', sum / bufferLength);


    }, 1000 / fps);



}


function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// ---------------------------- MOVE ON MUSIC ----------------------------
// ---------------------------- BUTTON ON OFF----------------------------
    var myAudio = document.getElementById("myAudio");
    var isPlaying = false;

    function togglePlay() {
        isPlaying ? myAudio.pause() : myAudio.play();
    };

    myAudio.onplaying = function () {
        isPlaying = true;
        document.body.classList.remove('paused')
        document.body.classList.add('playing')
    };

    myAudio.onpause = function () {
        isPlaying = false;
        document.body.classList.remove('playing')
        document.body.classList.add('paused')
    };
// ---------------------------- BUTTON ON OFF ----------------------------

//---------------------- MOVE ON MUSIC SCRIPT----------------------->

  const minscale = 0.3; //dies ist das Minimum der Skalierung - diesen Wert kannst du ??ndern
  const maxscale = 4; //dies ist das Maximum der Skalierung - diesen Wert kannst du ??ndern

//----------------------- MOVE ON MUSIC SCRIPT----------------------->





// ------------------------ THE OVERLAY ------------------------------->
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "40%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// ------------------------ THE OVERLAY ------------------------------->


// ------------------------ CURSOR ------------------------------->
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

var outerCursor = document.getElementById('outerCursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    outerCursor.style.left = x + "px";
    outerCursor.style.top = y + "px";
});
      // ------------------------ CURSOR ------------------------------->

// <--------------------- SCROLL TO ---------------------  
// function scrollMe() {
//     document.querySelector('.robot').scrollIntoView({
//         behavior: 'smooth'
//     });
// }

// document.getElementsByTagName('section')[0].addEventListener('click', scrollMe)

  // <--------------------- SCROLL TO ---------------------

