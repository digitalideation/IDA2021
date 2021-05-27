const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// select Audio Element
const song = document.getElementById('song');

const fps = 30;


// Create Media Element
const source = audioCtx.createMediaElementSource(song);
// Target Play Button
const playButton = document.querySelector('button');
// Audio Nodes
const gainNode = audioCtx.createGain();

var dataArray;
var bufferLength;
var analyser;

// create analyser
analyser = audioCtx.createAnalyser();
analyser.fftSize = 128;
bufferLength = analyser.frequencyBinCount;
dataArray = new Uint8Array(bufferLength);

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

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

var ctxWidth = canvas.offsetWidth
var ctxHeight = canvas.offsetHeight

ctx.clearRect(0, 0, ctxWidth, ctxHeight);

function draw() {
    var drawVisual = requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(dataArray);
    ctx.fillStyle = 'rgb(200, 200, 200)';
    ctx.fillRect(0, 0, ctxWidth, ctxHeight);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(255, 0, 0)';
    ctx.beginPath();

    var sliceWidth = ctxWidth * 1.0 / bufferLength;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {

        var v = dataArray[i] / 128.0;
        var y = v * ctxHeight / 2;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();

};

draw();
