
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

var dataArray;
var bufferLength;
var analyser;

const fps = 30;


// create analyser
analyser = audioCtx.createAnalyser();
analyser.fftSize = 128;
bufferLength = analyser.frequencyBinCount;
dataArray = new Uint8Array(bufferLength);

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


// // List In/Outputs

// if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
//     console.log("enumerateDevices() not supported.");
// }

// // List cameras and microphones.

// navigator.mediaDevices.enumerateDevices()
//     .then(function (devices) {
//         devices.forEach(function (device) {
//             console.log(device.kind + ": " + device.label +
//                 " id = " + device.deviceId);
//         });
//     })
//     .catch(function (err) {
//         console.log(err.name + ": " + err.message);
//     });


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
        console.log('Scale Size: ', sum / bufferLength);

    }, 1000 / fps);



}

draw();


function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}



window.addEventListener("resize", windowResized);
function windowResized() {
    box = window.document.getElementById('cvs-container');
    boxwidth = box.offsetWidth;
    boxheight = box.offsetHeight;
    // cvs.resizeCanvas(boxwidth, boxheight);
    console.log('I was resized:' + boxwidth + 'px ' + boxheight + 'px')
}


