
// webcam routing
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
}

console.clear();
// instigate our audio context ~~~~~~~~~~~~~~~ 1

// for cross browser way
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();


// create analyser
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 2048;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Float32Array(bufferLength);


// select Audio Element
const song = document.getElementById('song');
// Create Media Element
const source = audioCtx.createMediaElementSource(song);
// Target Play Button
const playButton = document.querySelector('button');

// Audio Nodes
const gainNode = audioCtx.createGain();

// Audio Routing, Connect Audio to source
source.connect(gainNode);
gainNode.connect(analyser);
analyser.connect(audioCtx.destination);

// Play Button
playButton.addEventListener('click', function () {

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        song.play();
        playButton.innerHTML = "Pause";
        this.dataset.playing = 'true';
        console.log('Play');
    } else if (this.dataset.playing === 'true') {
        song.pause();
        playButton.innerHTML = "Play";
        this.dataset.playing = 'false';
        console.log('Pause');
    }

}, false);

song.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);




// List In/Outputs

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
}

// List cameras and microphones.

navigator.mediaDevices.enumerateDevices()
    .then(function (devices) {
        devices.forEach(function (device) {
            console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
        });
    })
    .catch(function (err) {
        console.log(err.name + ": " + err.message);
    });


// P5 Functions

let box = window.document.getElementById('cvs-container');
let boxwidth = box.offsetWidth;
let boxheight = box.offsetHeight;

var speakers;
var mic;
var amplitude;


function preload(){
}

function setup() {
    let cvs = createCanvas(boxwidth, boxheight);
    cvs.parent("cvs-container");
    window.document.getElementById('cvs-container').firstChild.classList.add("canvas");
    
    console.log("set up");

    // mic = new p5.AudioIn();
    // mic.start();

    // amplitude = new p5.Amplitude;
    // amplitude.setInput(mic);
    // amplitude.smooth(0.6);
}




function loaded() {
    console.log("loaded");
}


// function draw() {
//     var cvs = window.document.getElementById('defaultCanvas0');
//     var cvsCtx = cvs.getContext('2d');
    
//     drawVisual = requestAnimationFrame(draw);

//     analyser.getFloatTimeDomainData(dataArray);
    
//     cvsCtx.fillStyle = 'rgb(200, 200, 200)';
//     cvsCtx.fillRect(0, 0, boxheight, boxwidth);

//     cvsCtx.lineWidth = 2;
//     cvsCtx.strokeStyle = 'rgb(0, 0, 0)';

//     cvsCtx.beginPath();

//     var sliceWidth = boxwidth * 1.0 / bufferLength;
//     var x = 0;

//     for (var i = 0; i < bufferLength; i++) {

//         var v = dataArray[i] * 200.0;
//         var y = boxheight / 2 + v;

//         if (i === 0) {
//             cvs.moveTo(x, y);
//         } else {
//             cvs.lineTo(x, y);
//         }

//         x += sliceWidth;
//     }

//     cvs.lineTo(boxwidth, boxheight / 2);
//     cvs.stroke();

//     line(boxwidth / 2, boxheight / 2, 100, y2);


// };

// draw();


    // let level = amplitude.getLevel();
    // let size = 80 - level * 200
    // if (mouseIsPressed) {
    //     fill(0);
    // } else {
    //     fill(255);
    // }
    // ellipse(mouseX, mouseY, size, size);



window.addEventListener("resize", windowResized);
function windowResized() {
    box = window.document.getElementById('cvs-container');
    boxwidth = box.offsetWidth;
    boxheight = box.offsetHeight;
    resizeCanvas(boxwidth, boxheight);
    console.log('I was resized:' + boxwidth + 'px ' + boxheight + 'px')
}


