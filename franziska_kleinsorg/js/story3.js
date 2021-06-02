//SNAKE ANIMATION
const SVGSNAKE = document.getElementById('snakeID')

const SNAKELENGTH = SVGSNAKE.getTotalLength();

SVGSNAKE.style.strokeDasharray = SNAKELENGTH;
SVGSNAKE.style.strokeDashoffset = SNAKELENGTH;

const drawWhenScroll = () => {
    const DRAWSNAKE = SNAKELENGTH * calcScrollPercent();
    SVGSNAKE.style.strokeDashoffset = (SNAKELENGTH - 10*DRAWSNAKE);
}

const calcScrollPercent = () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return document.documentElement.scrollTop / height;
}
    
window.addEventListener('scroll', drawWhenScroll);



//AUTOMATIC SCROLLING
function pageScroll() {
    window.scrollBy(0,50); 
    scrolldelay = setTimeout('pageScroll()',200); 
}

//JUMP TO TOP 
function jumpScroll() {
    window.scroll(0,0); 
}

//STOP SCROLLING DOWN (ONLY)
function stopScroll() {
    clearTimeout(scrolldelay);
}

//AUDIO
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