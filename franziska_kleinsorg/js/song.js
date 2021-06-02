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



//LYRICS 
function toggleParagraph(nbrShow, nbrHide) {
    document.getElementById("text" + nbrHide).style.display = "none";
    document.getElementById("text" + nbrShow).style.display = "block";
}