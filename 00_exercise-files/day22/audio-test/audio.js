let audioContext, masterGain;

// function createSawOscillator() {
//     const now = audioContext.currentTime
//     const oscillator = audioContext.createOscillator()
//     oscillator.type = 'sawtooth'
//     oscillator.start(now)

//     const gain = audioContext.createGain()
//     gain.connect(masterGain)
//     oscillator.connect(gain)

//     // Sweep from A3 to A6.
//     oscillator.frequency.setValueAtTime(220, now)
//     oscillator.frequency.linearRampToValueAtTime(1760, now + 4)

//     // Play for 4 seconds, then fade out.
//     gain.gain.setValueAtTime(0.1, now)
//     gain.gain.setValueAtTime(0.1, now + 4)
//     gain.gain.linearRampToValueAtTime(0.0, now + 5)

//     return { gain, oscillator }
// }



$(function main() {

    audioContext = new(window.AudioContext || window.webkitAudioContext)()
    masterGain = audioContext.createGain()
    masterGain.connect(audioContext.destination)
    const song = new Audio('joulu.mp3')
    song.crossOrigin = 'anonymous'
    const songSource = audioContext.createMediaElementSource(song)
    let songPlaying = false
    songSource.connect(masterGain)

    // $('.play-btn').click(createSawOscillator)
    $('.song-btn').click(function() {
        if (songPlaying) {
            $('.song-btn').text('Play Song')
            song.pause()
        } else {
            $('.song-btn').text('Pause')
            song.play()
        }
        songPlaying = !songPlaying
    })

    const analyser = audioContext.createAnalyser()
    console.log('analyser', analyser)
        // analyser.fftSize = 32;
    masterGain.connect(analyser)

    const waveform = new Float32Array(analyser.frequencyBinCount)
    analyser.getFloatTimeDomainData(waveform)

    ;
    (function updateWaveform() {
        requestAnimationFrame(updateWaveform)
        analyser.getFloatTimeDomainData(waveform)
    })()

    const scopeCanvas = document.getElementById('oscilloscope')
    scopeCanvas.width = waveform.length
    scopeCanvas.height = 400
    const scopeContext = scopeCanvas.getContext('2d')

    ;
    (function drawOscilloscope() {
        requestAnimationFrame(drawOscilloscope)
        scopeContext.clearRect(0, 0, scopeCanvas.width, scopeCanvas.height)
        scopeContext.beginPath()
        for (let i = 0; i < waveform.length; i++) {
            const x = i
            const y = (0.5 + waveform[i] / 2) * scopeCanvas.height;
            if (i == 0) {
                scopeContext.moveTo(x, y)
            } else {
                scopeContext.lineTo(x, y)
            }
        }
        scopeContext.strokeStyle = 'blue';
        scopeContext.lineWidth = 2;
        scopeContext.stroke()
    })()
})