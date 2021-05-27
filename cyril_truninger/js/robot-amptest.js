
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

// P5 Functions

let box = window.document.getElementById('cvs-container');
let boxwidth = box.offsetWidth;
let boxheight = box.offsetHeight;


var mic, soundFile;
var amplitude;

var prevLevels = new Array(60);


function preload(){
}

function setup() {
    let cvs = createCanvas(boxwidth, boxheight);
    cvs.parent("cvs-container");
    window.document.getElementById('cvs-container').firstChild.classList.add("canvas");
   
    console.log("set up");

    noStroke();

    rectMode(CENTER);
    colorMode(HSB);

    mic = new p5.AudioIn();
    mic.start();

    // load the sound, but don't play it yet
    soundFile = loadSound('sound/Feel-Good-Inc.mp3')

    amplitude = new p5.Amplitude();
    amplitude.setInput(mic);
    amplitude.smooth(0.6);
    

}

window.addEventListener("resize", windowResized);
function windowResized() {
    box = window.document.getElementById('cvs-container');
    boxwidth = box.offsetWidth;
    boxheight = box.offsetHeight;
    resizeCanvas(boxwidth, boxheight);
    console.log('I was resized:' + boxwidth + 'px ' + boxheight +'px')
}

function loaded() {
    console.log("loaded");
}

function draw() {
    background(20, 20);
    fill(255, 10)
    text('press t to toggle source', 20, 20);

    var level = amplitude.getLevel();

    // rectangle variables
    var spacing = 10;
    var w = width / (prevLevels.length * spacing);

    var minHeight = 2;
    var roundness = 20;

    // add new level to end of array
    prevLevels.push(level);

    // remove first item in array
    prevLevels.splice(0, 1);

    // loop through all the previous levels
    for (var i = 0; i < prevLevels.length; i++) {

        var x = map(i, prevLevels.length, 0, width / 2, width);
        var h = map(prevLevels[i], 0, 0.5, minHeight, height);

        var alphaValue = logMap(i, 0, prevLevels.length, 1, 250);

        var hueValue = map(h, minHeight, height, 200, 255);

        fill(hueValue, 255, 255, alphaValue);

        rect(x, height / 2, w, h);
        rect(width - x, height / 2, w, h);
    }

}

