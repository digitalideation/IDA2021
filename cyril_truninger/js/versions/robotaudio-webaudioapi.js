console.clear();
// instigate our audio context ~~~~~~~~~~~~~~~ 1

// for cross browser way
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

// select Audio Element
const song = document.getElementById('song');
// Create Media Element
const source = audioCtx.createMediaElementSource(song);


const playButton = document.querySelector('button');

// Audio Nodes
const gainNode = audioCtx.createGain();

// Play Button
playButton.addEventListener('click', function () {

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    // play or pause track depending on state
    if (this.dataset.playing === 'false') {
        song.play();
        this.dataset.playing = 'true';
    } else if (this.dataset.playing === 'true') {
        song.pause();
        this.dataset.playing = 'false';
    }

}, false);

song.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
}, false);


// Audio Routing, Connect Audio to source
source.connect(audioCtx.destination);



