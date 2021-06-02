
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

let box = window.document.getElementById('cvs-container');
let boxwidth = box.offsetWidth;
let boxheight = box.offsetHeight;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function drawWave() {
    // soundwave function
    var drawVisual = requestAnimationFrame(drawWave);
    analyser.getByteTimeDomainData(dataArray);
    
    // console.log(analyser.fftSize); // 2048 by default
    // console.log(analyser.frequencyBinCount); // will give us 1024 data points

    analyser.fftSize = 64;
    
    ctx.fillStyle = "rgb(200, 200, 200, 0.1)";
    ctx.clearRect(0, 0, canvas.width, canvas.height, 0.5);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(255, 0, 0)';

    ctx.beginPath();

    var sliceWidth = canvas.width * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * canvas.height / 2;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        x += sliceWidth;
    }
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

    // setTimeout(function () {
    //     requestAnimationFrame(draw);

    //     analyser.getByteFrequencyData(dataArray); //werte von 0-255

    //     let sum = 0;


    //     const minscale = 1; //dies ist das Minimum der Skalierung - diesen Wert kannst du ändern
    //     const maxscale = 3; //dies ist das Maximum der Skalierung - diesen Wert kannst du ändern

    //     //mittelwert rechnen
    //     for (let i = 0; i < bufferLength; i++) {
    //         sum += map(dataArray[i], 0, 255, minscale, maxscale);
    //     }

    //     document.documentElement.style.setProperty('--scalesize', sum / bufferLength);

    // }, 1000 / fps);

}

drawWave();

function setScaleSize() {

    var drawVisual = requestAnimationFrame(setScaleSize);
    analyser.getByteFrequencyData(dataArray);
    var freqIndex = 40;

    const minscale = 1;
    const maxscale = 3;

    var scaleSize = map(dataArray[freqIndex], 0, 255, minscale, maxscale);

    document.documentElement.style.setProperty('--scalesize', scaleSize);
    console.log('frequency data index: ' + dataArray[freqIndex]);
    console.log('scale size: ' + scaleSize);
    
}   
setScaleSize();

function setBassSize() {

    var drawVisual = requestAnimationFrame(setBassSize);
    analyser.getByteFrequencyData(dataArray);
    var freqIndex = 60;

    const minscale = 1;
    const maxscale = 10;

    var scaleSize = map(dataArray[freqIndex], 0, 255, minscale, maxscale);

    document.documentElement.style.setProperty('--basssize', scaleSize);
    console.log('frequency data index: ' + dataArray[freqIndex]);
    console.log('bass size: ' + scaleSize);

}
setBassSize();



function scaleFreq (freqIn) {
    return(1 / 255 * freqIn);
}

function map(val, in_min, in_max, out_min, out_max) {
    return (val - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// Play Button
playButton.addEventListener('click', function () {

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        song.play();
        goLive();
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

window.addEventListener("resize", windowResized);
function windowResized() {
    box = window.document.getElementById('cvs-container');
    cvsBox = window.document.getElementById('cvs');
    boxwidth = box.offsetWidth;
    boxheight = box.offsetHeight;

    cvsBox.style.height = boxheight;
    cvsBox.style.width = boxwidth;

    // cvs.resizeCanvas(boxwidth, boxheight);
    console.log('I was resized:' + boxwidth + 'px ' + boxheight + 'px')
}

function goLive() {
    let liveTag = document.getElementById('live');
    liveTag.classList.add('live-fx');
}


// function preload(){
// }

// function setup() {
//     let cvs = createCanvas(boxwidth, boxheight);
//     cvs.parent("cvs-container");
//     window.document.getElementById('cvs-container').firstChild.classList.add("canvas");

//     console.log("set up");

//     // mic = new p5.AudioIn();
//     // mic.start();

//     // amplitude = new p5.Amplitude;
//     // amplitude.setInput(mic);
//     // amplitude.smooth(0.6);
// }


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


